'use strict';

const fs = require('node:fs');
const path = require('node:path');

const ENDPOINT = process.env.TENCENT_DOCS_MCP_URL || 'https://docs.qq.com/openapi/mcp';
const AUTH_TOKEN = process.env.TENCENT_DOCS_TOKEN || '';
const LOG_ENABLED = process.env.TENCENT_DOCS_PROXY_DEBUG === '1';
const LOG_FILE = process.env.TENCENT_DOCS_PROXY_LOG_FILE || path.join(__dirname, 'proxy.log');

let inputBuffer = Buffer.alloc(0);
let wireMode = 'unknown';

function log(...args) {
  const line = `[${new Date().toISOString()}] ${args.join(' ')}\n`;
  try {
    fs.appendFileSync(LOG_FILE, line, 'utf8');
  } catch (_) {
    // Ignore file logging failures so the proxy can still serve requests.
  }

  if (!LOG_ENABLED) return;
  process.stderr.write(`[tencent-docs-proxy] ${args.join(' ')}\n`);
}

function writeMessage(message) {
  const payloadText = JSON.stringify(message);

  if (wireMode === 'jsonl') {
    process.stdout.write(`${payloadText}\n`);
    return;
  }

  const payload = Buffer.from(payloadText, 'utf8');
  const header = Buffer.from(`Content-Length: ${payload.length}\r\n\r\n`, 'utf8');
  process.stdout.write(Buffer.concat([header, payload]));
}

function makeJsonRpcError(id, code, message) {
  return {
    jsonrpc: '2.0',
    id: id ?? null,
    error: { code, message }
  };
}

function parseNextMessage() {
  if (wireMode !== 'content-length') {
    const newlineIndex = inputBuffer.indexOf('\n');
    if (newlineIndex !== -1) {
      const line = inputBuffer.slice(0, newlineIndex).toString('utf8').trim();
      if (line.startsWith('{')) {
        wireMode = 'jsonl';
        log('wire_mode', wireMode);
        inputBuffer = inputBuffer.slice(newlineIndex + 1);
        log('parsed_body', line.slice(0, 200));
        return JSON.parse(line);
      }
    }
  }

  let delimiter = inputBuffer.indexOf('\r\n\r\n');
  let delimiterSize = 4;

  if (delimiter === -1) {
    delimiter = inputBuffer.indexOf('\n\n');
    delimiterSize = 2;
  }

  if (delimiter === -1) {
    return null;
  }

  const headerText = inputBuffer.slice(0, delimiter).toString('utf8');
  wireMode = 'content-length';
  log('wire_mode', wireMode);
  log('header_block', JSON.stringify(headerText));
  const headers = new Map();

  for (const line of headerText.split(/\r?\n/)) {
    const index = line.indexOf(':');
    if (index === -1) continue;
    const name = line.slice(0, index).trim().toLowerCase();
    const value = line.slice(index + 1).trim();
    headers.set(name, value);
  }

  const contentLength = Number(headers.get('content-length'));
  if (!Number.isFinite(contentLength) || contentLength < 0) {
    throw new Error('Invalid Content-Length header');
  }

  const bodyStart = delimiter + delimiterSize;
  const bodyEnd = bodyStart + contentLength;
  if (inputBuffer.length < bodyEnd) {
    log('waiting_for_body', `have=${inputBuffer.length - bodyStart}`, `need=${contentLength}`);
    return null;
  }

  const body = inputBuffer.slice(bodyStart, bodyEnd).toString('utf8');
  log('parsed_body', body.slice(0, 200));
  inputBuffer = inputBuffer.slice(bodyEnd);
  return JSON.parse(body);
}

async function forwardToTencent(message) {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/event-stream'
  };

  if (AUTH_TOKEN) {
    headers.Authorization = AUTH_TOKEN;
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify(message)
  });

  const text = await response.text();
  log('upstream_status', String(response.status));

  if (!response.ok) {
    throw new Error(`Tencent Docs MCP returned ${response.status}: ${text.slice(0, 300)}`);
  }

  if (!text.trim()) {
    return null;
  }

  return JSON.parse(text);
}

async function handleMessage(message) {
  log('incoming_method', message.method || 'response');

  if (!message || typeof message !== 'object') {
    return;
  }

  if (typeof message.method === 'string' && message.method.startsWith('notifications/')) {
    if (message.method === 'notifications/initialized') {
      log('ignoring_notification', message.method);
      return;
    }

    try {
      await forwardToTencent(message);
    } catch (error) {
      log('notification_forward_error', error.message);
    }
    return;
  }

  if (!('id' in message) || typeof message.method !== 'string') {
    return;
  }

  try {
    const upstream = await forwardToTencent(message);
    if (upstream) {
      writeMessage(upstream);
    } else {
      writeMessage({
        jsonrpc: '2.0',
        id: message.id,
        result: {}
      });
    }
  } catch (error) {
    writeMessage(makeJsonRpcError(message.id, -32000, error.message));
  }
}

process.stdin.on('data', async (chunk) => {
  log('stdin_chunk', String(chunk.length));
  log('stdin_chunk_preview', JSON.stringify(chunk.toString('utf8')));
  log('stdin_chunk_hex', chunk.subarray(0, Math.min(chunk.length, 80)).toString('hex'));
  inputBuffer = Buffer.concat([inputBuffer, chunk]);

  while (true) {
    let message;
    try {
      message = parseNextMessage();
    } catch (error) {
      writeMessage(makeJsonRpcError(null, -32700, error.message));
      inputBuffer = Buffer.alloc(0);
      return;
    }

    if (!message) {
      break;
    }

    await handleMessage(message);
  }
});

process.stdin.on('end', () => process.exit(0));
process.stdin.resume();
log('proxy_ready', ENDPOINT, `token=${AUTH_TOKEN ? 'present' : 'missing'}`);
