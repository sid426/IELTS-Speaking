# Codex Debug State

This note exists because some app file links outside the workspace may not open reliably from chat.

## External Files We Referenced

- Codex user config: `C:\Users\Judy\.codex\config.toml`
- Codex global state: `C:\Users\Judy\.codex\.codex-global-state.json`
- Evening automation TOML: `C:\Users\Judy\.codex\automations\ielts-evening-publish\automation.toml`
- Morning automation TOML: `C:\Users\Judy\.codex\automations\ielts-morning-update-2\automation.toml`

## Last Confirmed Important State

- `codexCloudAccess = "enabled"`
- GitHub plugin enabled in Codex config
- Notion MCP enabled
- Tencent Docs local proxy MCPs enabled
- Native Codex automations still failing to create `Previous runs` threads even for a no-tool smoke test

## Interpretation

- Account onboarding now looks complete.
- The remaining automation failure looks like an app/runtime issue rather than a Notion/Tencent workflow issue.
- If native automations stay broken, prefer a Windows Task Scheduler fallback for the IELTS workflow.
