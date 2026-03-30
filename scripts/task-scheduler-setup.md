# Windows Task Scheduler Setup

Use the repository root as the working directory:

C:\Users\Judy\Desktop\IELTS-Speaking

## Morning task

- Name: IELTS Morning Update
- Trigger: Daily at 9:00 AM
- Program/script:
  C:\Program Files\PowerShell\7\pwsh.exe
- Add arguments:
  -NoProfile -ExecutionPolicy Bypass -File "C:\Users\Judy\Desktop\IELTS-Speaking\scripts\morning-update.ps1"
- Start in:
  C:\Users\Judy\Desktop\IELTS-Speaking

## Evening task

- Name: IELTS Evening Publish
- Trigger: Daily at 11:40 PM
- Program/script:
  C:\Program Files\PowerShell\7\pwsh.exe
- Add arguments:
  -NoProfile -ExecutionPolicy Bypass -File "C:\Users\Judy\Desktop\IELTS-Speaking\scripts\evening-publish.ps1"
- Start in:
  C:\Users\Judy\Desktop\IELTS-Speaking

## Notes

- Each run writes a timestamped log file into logs\.
- These scripts rely on the Codex CLI being installed and authenticated.
- If Codex CLI loses auth, rerun `codex login` in PowerShell.
- If Windows Task Scheduler runs under a different account, make sure that account also has access to Codex CLI auth and the required MCP/tooling configuration.
