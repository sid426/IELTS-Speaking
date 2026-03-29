# IELTS Repo Migration Plan

## Goal

Move the IELTS workflow into its own dedicated workspace / repo so it no longer shares a folder with unrelated experiments and older task artifacts.

## Recommended new repo

Suggested local folder:

`C:\Users\Judy\Desktop\IELTS-Speaking`

Suggested GitHub repo name:

`IELTS-Speaking`

## What should move

### Keep in the new IELTS repo

- `AGENTS.md`
- `codex-debug-state.md`
- `tencent-docs-proxy/`
- `oral-part23.json`
- `oral-season.json`
- `question-bank.html`
- `questionbank-chunk.js`
- `chunks/`
- `qb_chunks/`
- `ieltsbro-images/`
- `views-topic.jpg`
- any future IELTS-specific scripts, prompts, logs, or docs

### Do not move unless still needed for IELTS

- `build_bilibili_teacher_material_v2.ps1`
- `build_bilibili_p17_p18_teacher_material.ps1`
- `buildManifest.js`
- `docx_build/`
- `docx_build_v2/`

These belong to a different task family and should stay behind or move into a separate repo for teaching-material generation.

## Best migration path

### Option A: clean new repo

1. Create a new local folder:
   - `C:\Users\Judy\Desktop\IELTS-Speaking`
2. Copy only IELTS-specific files into it.
3. Initialize a fresh Git repo there.
4. Create a new GitHub repo.
5. Push the clean history from the new folder.

Why this is best:

- no mixed task history
- clean workspace rules
- easier scheduling and maintenance

### Option B: split from current repo history

Use Git history-rewrite tools to split IELTS-related files into a new repository.

This preserves history more precisely, but it is more work and not necessary unless history matters.

## Recommended folder structure in the new repo

```text
IELTS-Speaking/
  AGENTS.md
  README.md
  codex-debug-state.md
  data/
    oral-part23.json
    oral-season.json
    question-bank.html
    questionbank-chunk.js
    chunks/
    qb_chunks/
    ieltsbro-images/
    views-topic.jpg
  proxy/
    tencent-docs-proxy/
  docs/
    ielts-workflow-task-scheduler-plan.md
    ielts-repo-migration-plan.md
  scheduler/
    prompts/
    logs/
    scripts/
```

## After migration

Update these references:

- Codex workspace root
- Task Scheduler working directory
- any hard-coded file paths in docs or scripts
- `config.toml` proxy paths if the proxy folder moves

## Practical next move

The easiest safe path is:

1. create the new folder
2. copy IELTS-only files
3. update `AGENTS.md`
4. test the Tencent proxy from the new location
5. then connect the new folder to GitHub

## Important note about the current repo

The current workspace already has a connected GitHub environment in Codex web. That does not force you to keep using this mixed folder forever. It only means the current Codex web environment is attached to the existing repo for now.
