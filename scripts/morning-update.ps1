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

Follow AGENTS.md and read docs/answer-generation-rules.md before generating any answers.
Treat Notion as the source-of-truth workspace and do not publish to Tencent Docs in this run.

Workflow guardrails:
- Stay inside this repo plus the required Notion tools and live IELTS BRO sources.
- Do not inspect C:\Users\Judy\.codex\config.toml, C:\Users\Judy\.codex\.codex-global-state.json, or unrelated files outside the repo.
- Do not use rg. If search is needed, use PowerShell-native search or other built-in tools that are already available.
- Keep the run focused and concise. Avoid unnecessary exploratory output.
- If no new topics are found, stop after reporting that cleanly.

Tasks:
1. Determine the previous successful morning-import point from the Notion workspace and tracker state, not from guesses.
2. Check IELTS BRO for newly updated speaking topics since that point.
3. Fetch full question text plus oralTopicCode and oralQuestionId wherever IELTS BRO publicly exposes them.
4. Generate answers using docs/answer-generation-rules.md only for genuinely new or changed topics.
5. Update the IELTS Notion workspace in latest-first order.
6. Update mapping and tracking fields needed for later Tencent publishing, including oralTopicCode, oralQuestionId when available, and sync metadata.
7. Do not publish to Tencent Docs in this run.

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