# AGENTS.md

## Workspace Scope

This workspace is currently used for one main project:

1. IELTS speaking workflow
   Fetch IELTS BRO topics, generate Part 1 / Part 2 / Part 3 answers, keep Notion as the editable source of truth, and publish formatted copies to Tencent Docs.

There is also a small supporting runtime:

2. `tencent-docs-proxy/`
   A minimal Node.js stdio-to-HTTP MCP proxy used to talk to Tencent Docs tools from Codex.

Treat the IELTS workflow as the primary purpose of this workspace. Avoid mixing in unrelated teaching-material or media-generation tasks here unless the user explicitly asks.

## Important Files

- `AGENTS.md`: workspace rules and IELTS workflow reference.
- `codex-debug-state.md`: local debug notes for Codex app/runtime state.
- `tencent-docs-proxy/proxy.js`: Tencent Docs local proxy implementation.
- `tencent-docs-proxy/package.json`: proxy scripts.
- `tencent-docs-proxy/README.md`: proxy runtime and config notes.
- `oral-part23.json`: IELTS BRO Part 2 / Part 3 source snapshot.
- `oral-season.json`: IELTS BRO season/topic-change snapshot.
- `question-bank.html`: IELTS BRO question-bank HTML snapshot.
- `questionbank-chunk.js`, `qb_chunks/`, `chunks/`: extracted site bundle/code fragments used for source inspection.
- `views-topic.jpg`: local image capture used during Part 1 workflow validation.

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

### Part 1

- Tone: natural, conversational, light-hearted, and slightly playful; this is the warm-up session, so it should feel more personal and relaxed than Part 3.
- Audience fit: answers should sound like a Chinese 18–35-year-old speaker in everyday life.
- English answer:
  - 3 to 4 sentences
  - spoken style, not stiff written prose
  - include at least 2 useful topic expressions across verbs / nouns / adjectives
  - include at least 2 idiomatic or semi-fixed expressions
- Chinese translation:
  - faithful, natural, and local
  - corresponding highlighted expressions should also be highlighted in Chinese
- High-score material:
  - include `Idiomatic Expressions`
  - include `Topic-Related Vocabulary`
  - vocabulary must come from expressions that actually appear in the answer
  - if `Verbs`, `Nouns`, or `Adjectives` has no valid item, leave that category visually blank
- Highlighting rule:
  - any score-raising expression must be bold in the English answer and appear in the material list
  - qualifying items include idioms, phrasal verbs, multi-word topic nouns, advanced verbs, advanced adjectives/adverbs, and evaluative/emotional expressions
- Output sections must remain:
  - `高分回答范例（Band 8）`
  - `英文答案`
  - `中文翻译`
  - `高分语料`
  - `Idiomatic Expressions`
  - `Topic-related Vocabulary`

### Part 2

- Goal: Band 8 answer for Chinese 18–35-year-old speakers, grounded in daily life, light-hearted, and allowed to include mild self-deprecating humor.
- English answer:
  - exactly 4 paragraphs
  - each paragraph 3 to 5 sentences
  - around 200 to 230 words
  - first person by default unless the card clearly requires another perspective
  - conversational spoken English with strong phrasing and accurate grammar
- Style:
  - opening should naturally cover who / when / where or the card basics
  - details should feel visual and specific
  - can include everyday China-friendly details like delivery apps, metro, cafe queues, short trips, etc.
  - humor should stay gentle and safe
- Suggested paragraph logic:
  - paragraph 1: who / when / where with a light hook
  - paragraph 2: concrete actions and scenes
  - paragraph 3: feelings, reactions, and a light self-deprecating moment
  - paragraph 4: meaning, takeaway, or reflection
- High-score material selection:
  - bold all qualifying score-raising expressions in the English body first
  - then build the lists from those bold items only
  - categories include idioms, phrasal verbs, topic noun phrases, advanced verbs, advanced adjectives/adverbs, and evaluative/emotional phrases
- Material minimums:
  - `Idiomatic Expressions`: at least 13 items
  - `Topic-related Vocabulary`: at least 4 `Verbs`, 4 `Nouns`, and 4 `Adjectives`
  - no duplication between idioms and topic vocabulary
- Output sections must remain:
  - `高分回答范例（Band 8）`
  - `英文答案`
  - `中文翻译`
  - `答题逻辑框架`
  - `高分语料`
  - `Idiomatic Expressions`
  - `Topic-related Vocabulary`

### Part 3

- English answer:
  - one paragraph
  - no more than 90 words
  - natural and spoken, but still logically tight and idea-driven
- Style:
  - slightly deeper and more analytical than Part 1
  - examples should still feel close to Chinese 18–35-year-old life
  - first 1 to 2 sentences should ideally contain 1 to 2 simple hook-style idiomatic expressions
- Material targets:
  - 3 to 5 idiomatic expressions
  - 4 to 6 topic-related vocabulary items total
  - vocabulary grouped into `Verbs`, `Nouns`, `Adjectives`
  - if one category has no valid item from the answer itself, leave it visually blank
  - never invent vocabulary entries that do not actually appear in the answer
- Logic framework should match the question type:
  - opinion
  - cause & effect
  - compare & contrast
  - hypothetical / future
  - advantages & disadvantages
  - problem-solution
- High-score material rule:
  - all score-raising expressions must be bolded in the English answer and included in the list
  - qualifying items include idioms, phrasal verbs, multi-word topic nouns, advanced verbs, advanced adjectives/adverbs, evaluative/emotional expressions, and useful discourse markers such as `For example` when they genuinely function as reusable answer language
- Output sections must remain:
  - `高分回答范例（Band 8）`
  - `英文答案`
  - `中文翻译`
  - `答题逻辑框架`
  - `高分语料`
  - `Idiomatic Expressions`
  - `Topic-related Vocabulary`

## Tencent Publishing Rules

- Sync title, sections, bullets, and wording only.
- Do not try to mirror Notion styling exactly.
- Actual question headings stay plain.
- Purple highlight is used only on:
  - `高分回答范例（Band 8）`
  - `英文答案`
  - `中文翻译`
  - `答题逻辑框架`
  - `高分语料`
  - `Idiomatic Expressions`
  - `Topic-Related Vocabulary`
- Do not display `oralTopicCode` or `oralQuestionId` on Tencent publish pages.
- If a mapped Tencent page already exists, overwrite that page instead of leaving duplicate pages behind.

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
