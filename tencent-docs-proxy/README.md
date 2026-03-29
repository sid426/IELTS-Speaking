# Tencent Docs Proxy

Minimal local MCP proxy for Tencent Docs.

It lets Codex speak `stdio` locally while the proxy forwards MCP JSON-RPC requests to the Tencent Docs HTTP MCP endpoint.

## Environment variables

- `TENCENT_DOCS_TOKEN`
- `TENCENT_DOCS_MCP_URL` (optional, defaults to `https://docs.qq.com/openapi/mcp`)
- `TENCENT_DOCS_PROXY_DEBUG=1` (optional)

## Local run

```powershell
$env:TENCENT_DOCS_TOKEN="YOUR_TOKEN"
node C:\Users\Judy\Desktop\codex\tencent-docs-proxy\proxy.js
```

## Codex config shape

```toml
[mcp_servers.tencent_docs_local]
command = "C:\\Program Files\\nodejs\\node.exe"
args = ["C:\\Users\\Judy\\Desktop\\codex\\tencent-docs-proxy\\proxy.js"]
enabled = true

[mcp_servers.tencent_docs_local.env]
TENCENT_DOCS_TOKEN = "YOUR_TOKEN"
TENCENT_DOCS_MCP_URL = "https://docs.qq.com/openapi/mcp"
```
