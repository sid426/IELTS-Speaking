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
$LogFile = Join-Path $LogDir ("evening-publish_$Timestamp.log")

$Prompt = @"
You are running the IELTS evening publish workflow for the repository at $RepoRoot.

Follow AGENTS.md. Notion is the source of truth and Tencent Docs is the published copy.

Workflow guardrails:
- Stay inside this repo plus the required Notion and Tencent Docs tools.
- Do not inspect C:\Users\Judy\.codex\config.toml, C:\Users\Judy\.codex\.codex-global-state.json, or unrelated files outside the repo.
- Do not use rg. If search is needed, use PowerShell-native search or other built-in tools that are already available.
- Keep the run focused and concise. Avoid unnecessary exploratory output.
- If no source pages changed, stop after reporting that cleanly.

Tasks:
1. Read the IELTS Notion workspace and use oralTopicCode as the stable sync key.
2. Detect which mapped Notion pages changed since the last successful publish.
3. Publish changed content to the mapped Tencent Docs pages.
4. If a Notion source page has IDs but no Tencent mapping yet, create the Tencent page and update the tracker.
5. Sync title, sections, bullets, and wording only. Do not try to mirror styling exactly.
6. Apply the Tencent publishing house style from AGENTS.md.
7. Update tracker fields including 最近同步, Notion最后修改, and 上次发布时间.

Output requirements:
- Write a concise run summary.
- Clearly list which pages were updated, created, or skipped.
- If no source pages changed, report that cleanly and exit.
"@

Push-Location $RepoRoot
try {
  codex exec --cd "$RepoRoot" --sandbox workspace-write "$Prompt" 2>&1 | Tee-Object -FilePath $LogFile
}
finally {
  Pop-Location
}