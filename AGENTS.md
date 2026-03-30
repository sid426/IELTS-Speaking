# AGENTS.md

## Workspace Scope

This workspace is for one main project:

1. IELTS speaking workflow
   Fetch IELTS BRO topics, generate Part 1 / Part 2 / Part 3 answers, keep Notion as the editable source of truth, and publish formatted copies to Tencent Docs.

Supporting runtime:

2. `tencent-docs-proxy/`
   A minimal Node.js stdio-to-HTTP MCP proxy used to talk to Tencent Docs tools from Codex.

Treat the IELTS workflow as the primary purpose of this workspace. Avoid unrelated teaching-material or media-generation tasks here unless the user explicitly asks.

## Important Files

- `AGENTS.md`: short operational rules for this repo.
- `docs/answer-generation-rules.md`: detailed Part 1 / Part 2 / Part 3 answer rules.
- `docs/notion-workspace-map.md`: pinned Notion roots, checkpoints, and known master pages for the automation flows.
- `codex-debug-state.md`: historical debug notes for Codex app/runtime state. Do not use this file in normal workflow runs unless the task is specifically about automation debugging.
- `oral-part23.json`: IELTS BRO Part 2 / Part 3 source snapshot.
- `oral-season.json`: IELTS BRO season/topic-change snapshot.
- `question-bank.html`: IELTS BRO question-bank HTML snapshot.
- `questionbank-chunk.js`, `qb_chunks/`, `chunks/`: extracted site bundle/code fragments used for source inspection.
- `scripts/morning-update.ps1`: morning import runner.
- `scripts/evening-publish.ps1`: evening publish runner.
- `scripts/publish-topic-test.ps1`: focused publish smoke test.

## Source Of Truth And Mapping

- Notion is the editing master.
- Tencent Docs is the published copy.
- Sync direction is one-way: Notion -> Tencent Docs.
- The stable sync key is `oralTopicCode`.
- Keep `oralQuestionId` whenever IELTS BRO publicly exposes it.
- Tracker fields should stay aligned with:
  - `oralTopicCode`
  - `oralQuestionId`
  - `Notion页面URL`
  - `腾讯页面URL`
  - `最近同步`
  - `Notion最后修改`
  - `上次发布时间`

## IELTS Content Structure

### Notion

- `Part 1 新题`: one page per Part 1 topic, grouping all questions under that topic on one page.
- `Part 2 新题`: one page per Part 2 topic.
- `Part 3 新题`: one page per Part 3 topic, with all question stems listed first and answers below.

### Tencent Docs

- `IELTS 口语新题（腾讯版）`: root published folder.
- `Part 1 新题`, `Part 2 新题`, `Part 3 新题`: published subfolders.
- `IELTS 更新追踪表`: tracker sheet.
- `IELTS 发布规则与同步说明`: human-readable workflow documentation.

## IELTS Data-Sourcing Rules

### Part 1

- Prefer IELTS BRO `listV3` with `part=0` as the primary structured source.
- Keep both `oralTopicCode` and `oralQuestionId` when that API exposes them.
- Use the new-topic card layer and official image only as supporting confirmation for update time or topic-card wording when needed.

### Part 2 / Part 3

- Use the validated IELTS BRO topic-change and oral-topic source family already established in this workspace.
- Preserve topic IDs, update times, and question wording exactly from source whenever available.

## Answer Generation Rules

- The detailed generation spec lives in `docs/answer-generation-rules.md`.
- When generating answers, read that file before drafting content.
- Preserve the required section headings and section order exactly.
- Never invent vocabulary items that do not actually appear in the answer body.
- Keep the audience fit: natural spoken English for Chinese 18-35-year-old learners.

## Tencent Publishing Rules

- Sync title, sections, bullets, and wording only.
- Do not try to mirror Notion styling exactly.
- Actual question headings stay plain.
- Purple highlight is used only on:
  - `题目`
  - `高分回答范例（Band 8）`
  - `英文答案`
  - `中文翻译`
  - `答题逻辑框架`
  - `高分语料`
  - `Idiomatic Expressions`
  - `Topic-Related Vocabulary`
- Do not display `oralTopicCode` or `oralQuestionId` on Tencent publish pages.
- If a mapped Tencent page already exists, overwrite that page instead of leaving duplicate pages behind.

## Workflow Guardrails

- For routine IELTS runs, stay inside this repo plus the required Notion and Tencent tools.
- Read `docs/notion-workspace-map.md` before searching Notion broadly. Use the pinned roots there unless the map is clearly stale or invalid.
- Use the fixed automation memory file under `C:\Users\Judy\.codex\automations\...\memory.md` instead of depending on `$env:CODEX_HOME`.
- Use Node HTTPS for live IELTS BRO API calls in automation runs. Do not spend time retrying malformed PowerShell network payloads.
- Do not inspect `C:\Users\Judy\.codex\config.toml`, `C:\Users\Judy\.codex\.codex-global-state.json`, or other secret-bearing config/state files unless the task is explicitly about Codex configuration debugging.
- Do not read unrelated files outside this repo just to explore.
- If `rg` is unavailable, use PowerShell-native search instead of retrying `rg`.
- Keep run output concise and task-focused.
- If there is no real delta, stop after the verification summary.

## Automation Status

- Intended schedule:
  - morning: IELTS BRO -> Notion
  - evening: Notion -> Tencent Docs
- Native Codex app automations have been unreliable in this workspace:
  - `Last ran` can update
  - but `Previous runs` may still show `No threads`
  - and no real side effects may occur
- If native automations continue to fail, prefer a Windows Task Scheduler fallback.

## Commands

### Tencent Docs proxy

Run from `C:\Users\Judy\Desktop\codex\tencent-docs-proxy`:

```powershell
npm run check
npm start
```

Equivalent direct commands:

```powershell
node --check proxy.js
node proxy.js
```

Proxy environment variables:

```powershell
$env:TENCENT_DOCS_TOKEN="YOUR_TOKEN"
$env:TENCENT_DOCS_MCP_URL="https://docs.qq.com/openapi/mcp"
$env:TENCENT_DOCS_PROXY_DEBUG="1"
$env:TENCENT_DOCS_PROXY_LOG_FILE="C:\Users\Judy\Desktop\codex\tencent-docs-proxy\proxy.log"
```

## Validation Expectations

- Proxy change: `npm run check` at minimum.
- Publishing or sync change: verify against Notion master, Tencent published page, and tracker row together.
- Source-data logic change: verify IDs and wording against IELTS BRO source artifacts.
- If a task depends on native Codex automations, explicitly note that automations are currently unreliable and may require fallback scheduling.