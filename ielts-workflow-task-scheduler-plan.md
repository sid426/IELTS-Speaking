# IELTS Workflow Task Scheduler Plan

## Goal

Replace unreliable native Codex app automations with a local Windows Task Scheduler workflow.

Intended schedule:

- Morning task: `IELTS BRO -> Notion`
- Evening task: `Notion -> Tencent Docs`

## Why this fallback exists

Native Codex app automations in this workspace can update `Last ran` without creating `Previous runs` threads or executing the real workflow. The fallback should avoid that app-thread dependency.

## Recommended architecture

### Task 1: Morning Update

Purpose:

- fetch latest IELTS BRO updates
- generate Part 1 / Part 2 / Part 3 answers
- update Notion pages
- update tracker metadata
- do **not** publish to Tencent Docs yet

Suggested trigger:

- daily at `9:00 AM` Asia/Taipei

### Task 2: Evening Publish

Purpose:

- read latest Notion master content
- compare against tracker and source mappings
- republish changed pages to Tencent Docs using `oralTopicCode`
- update tracker fields:
  - `最近同步`
  - `Notion最后修改`
  - `上次发布时间`

Suggested trigger:

- daily at `11:40 PM` Asia/Taipei

## Preferred execution model

### First choice

Use Codex CLI from Task Scheduler, if manual terminal verification proves the installed `codex` command works from a normal Windows user shell.

Why:

- keeps the same reasoning model and workflow logic
- can reuse the existing workspace, tracker, and publishing conventions

### Fallback if Codex CLI cannot be launched cleanly

Use Task Scheduler only as an orchestrator and keep a semi-manual publish pipeline:

- Task Scheduler opens a prepared local runbook or command window
- user confirms and executes the prepared task in Codex app or terminal

This is weaker than a fully unattended flow, but still removes the broken in-app automation scheduler from the loop.

## Task Scheduler setup concept

Create two scheduled tasks:

1. `IELTS Morning Update`
2. `IELTS Evening Publish`

For each task:

- Run whether user is logged in or not: optional, depending on whether Codex/CLI auth requires user session
- Use the same Windows account that owns the Notion / Tencent auth state
- Start in:
  - `C:\Users\Judy\Desktop\codex`

## Task command design

### Option A: Codex CLI works

Use a PowerShell wrapper such as:

```powershell
Set-Location 'C:\Users\Judy\Desktop\codex'
codex exec --cwd 'C:\Users\Judy\Desktop\codex' --prompt-file '.\scheduler\prompts\morning-update.txt'
```

and

```powershell
Set-Location 'C:\Users\Judy\Desktop\codex'
codex exec --cwd 'C:\Users\Judy\Desktop\codex' --prompt-file '.\scheduler\prompts\evening-publish.txt'
```

Exact CLI flags should be validated in a normal terminal first, because this session could discover the binary path but could not directly execute the WindowsApps-packaged binary from the current shell.

### Option B: Codex CLI does not work reliably

Use PowerShell wrappers that:

- create a dated log file
- surface a reminder or launch context
- open the workspace and runbook for a human-in-the-loop publish

This is still useful as a scheduled operational reminder, but not the final desired state.

## Inputs and outputs

### Inputs

- IELTS BRO source pages and APIs
- current Notion master pages
- tracker sheet mappings
- Tencent Docs publish targets

### Outputs

- updated Notion topic pages
- updated Tencent Docs topic pages
- updated tracker sheet rows
- local log files under a dedicated scheduler folder

## Log folder recommendation

Create:

`C:\Users\Judy\Desktop\codex\scheduler\logs\`

Keep separate logs for:

- morning update runs
- evening publish runs

## Validation checklist

Before trusting the scheduler:

1. verify the same command works manually in a normal terminal
2. verify one morning run can update Notion
3. verify one evening run can update Tencent Docs
4. verify tracker fields are updated
5. only then register the tasks as unattended daily jobs

## Important caution

Do not delete or rewrite existing Tencent publish pages blindly. The publish step should overwrite the mapped page for a known `oralTopicCode`, and only create a new page when no mapping exists yet.
