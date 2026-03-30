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
$LogFile = Join-Path $LogDir ("publish-topic-test_$Timestamp.log")

$Prompt = @"
You are running a focused IELTS publish test for the repository at $RepoRoot.

Follow AGENTS.md. Notion is the source of truth and Tencent Docs is the published copy.

Workflow guardrails:
- Stay inside this repo plus the required Notion and Tencent Docs tools.
- Do not inspect C:\Users\Judy\.codex\config.toml, C:\Users\Judy\.codex\.codex-global-state.json, or unrelated files outside the repo.
- Do not use rg. If search is needed, use PowerShell-native search or other built-in tools that are already available.
- Keep the run focused and concise. Avoid unnecessary exploratory output.

Test target:
- Topic title: 去过且喜欢的城市
- oralTopicCode: 320260324101253
- Scope: publish only the mapped Part 3 topic page for this topic from Notion to Tencent Docs.

Tasks:
1. Locate the Notion source page for oralTopicCode 320260324101253.
2. Locate the mapped Tencent Docs page for the same oralTopicCode.
3. Overwrite the Tencent page content from the current Notion master copy.
4. Keep Tencent styling rules from AGENTS.md.
5. Update tracker fields for this topic only, including 最近同步, Notion最后修改, and 上次发布时间.

Output requirements:
- State whether the source page was found.
- State whether the Tencent mapped page was found.
- State whether the publish succeeded.
- Return the Tencent page URL that was updated.
"@

Push-Location $RepoRoot
try {
  codex exec --cd "$RepoRoot" --sandbox workspace-write "$Prompt" 2>&1 | Tee-Object -FilePath $LogFile
}
finally {
  Pop-Location
}