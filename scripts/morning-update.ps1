Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
[Console]::InputEncoding  = [System.Text.UTF8Encoding]::new($false)
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$env:PYTHONUTF8 = '1'
$env:DOTNET_SYSTEM_GLOBALIZATION_INVARIANT = '0'
$RepoRoot = Split-Path -Parent $PSScriptRoot
$LogDir = Join-Path $RepoRoot 'logs'
New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
$Timestamp = Get-Date -Format 'yyyy-MM-dd_HH-mm-ss'
$LogFile = Join-Path $LogDir ("morning-update_$Timestamp.log")

$Prompt = @"
You are running the IELTS morning update workflow for the repository at $RepoRoot.

Follow AGENTS.md.
Read these files first, in this order:
1. `docs/notion-workspace-map.md`
2. `docs/answer-generation-rules.md`
3. `C:\Users\Judy\.codex\automations\ielts-morning-update-2\memory.md` if it exists

Treat Notion as the source-of-truth workspace and do not publish to Tencent Docs in this run.

Workflow guardrails:
- Stay inside this repo plus the required Notion tools and live IELTS BRO sources.
- Use the pinned roots and checkpoints in `docs/notion-workspace-map.md` unless they are clearly stale or invalid.
- Do not inspect C:\Users\Judy\.codex\config.toml, C:\Users\Judy\.codex\.codex-global-state.json, or unrelated files outside the repo.
- Do not use rg. If search is needed, use PowerShell-native search or other built-in tools that are already available.
- Use Node HTTPS for live IELTS BRO API calls. Do not spend time retrying malformed PowerShell network payloads.
- Keep the run focused and concise. Avoid unnecessary exploratory output.
- If no new topics are found, stop after reporting that cleanly.

Required sequence:
1. Read the pinned workspace map and prior memory.
2. Verify the mapped Part 1 / Part 2 / Part 3 Notion roots and current source checkpoints from live Notion state.
3. Fetch the live IELTS BRO season feed and live `oralTopic/listV3` data using Node HTTPS only.
4. Compare live source cutoffs and topic IDs against the verified Notion checkpoint.
5. Only if there is a genuine delta, fetch the full question text plus oralTopicCode and oralQuestionId wherever publicly exposed, generate answers using `docs/answer-generation-rules.md`, and update Notion in latest-first order.
6. Update mapping and tracking fields needed for later Tencent publishing, including oralTopicCode, oralQuestionId when available, and sync metadata.
7. Write a concise verification summary back to `C:\Users\Judy\.codex\automations\ielts-morning-update-2\memory.md`.

Output requirements:
- Write a concise run summary.
- Clearly state whether any new topics were found.
- If new topics were found, list them briefly.
- If nothing new was found, exit cleanly after reporting that.
"@

Push-Location $RepoRoot
try {
  codex exec --cd "$RepoRoot" --sandbox workspace-write "$Prompt" 2>&1 | Tee-Object -FilePath $LogFile
}
finally {
  Pop-Location
}