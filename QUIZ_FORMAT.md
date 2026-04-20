# Quiz File Format Specification

This document defines the exact format for quiz `.md` files. Any AI model or tool generating quiz content must follow this specification precisely for the file to be compatible.

---

## Output

A single Markdown file (`.md`) with a YAML frontmatter block. The file must be saved as:
```
quizzes/<slug>.md
```
Where `<slug>` is a lowercase, hyphen-separated filename (e.g. `world-war-2.md`, `python-basics.md`).

---

## File structure

```yaml
---
title: "..."
topic: "..."
description: "..."
emoji: "..."
questions:
  - id: 1
    type: ...
    # (question fields depending on type)
---
```

**Important:** All content goes inside the frontmatter between the two `---` lines. Everything below the closing `---` is ignored by the app.

---

## YAML string rules

All string values must be wrapped in double quotes (`"`). Inside a double-quoted YAML string:

- **Do not use backslash escapes** — `\'`, `\%`, `\$` are invalid and will crash the build. Write the character as-is instead.
- **Apostrophes are fine unescaped** — write `"don't"`, not `"don\'t"`
- **Double quotes inside a string must be escaped** — write `\"` or reword to avoid them
- **Math-style notation** (`$EV / AC$`, `$-25%$`) renders as plain text — the app does not render LaTeX

---

## Metadata fields

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Full display name of the quiz shown on the card |
| `topic` | Yes | Category name. Quizzes sharing the same topic are grouped under one filter on the home page (e.g. `"Books"`, `"History"`, `"Python"`) |
| `description` | Yes | One sentence shown on the quiz card |
| `emoji` | Yes | A single emoji representing the topic, shown on the home page tile |

---

## Question fields (all types)

Every question regardless of type must have:

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Unique integer. Must be sequential starting from 1 |
| `type` | Yes | One of the 5 type values listed below |
| `question` | Yes | The question text shown to the user |
| `explanation` | Yes | Shown to the user after they submit their answer, for any question type. Explain why the answer is correct. Required on every question. |

---

## Question types

### 1. `true-false`

The user picks True or False.

```yaml
- id: 1
  type: true-false
  question: "The Earth orbits the Sun."
  answer: true
  explanation: "Earth is the third planet from the Sun and completes one full orbit every 365.25 days."
```

| Field | Required | Value |
|---|---|---|
| `answer` | Yes | `true` or `false` (boolean, no quotes) |

---

### 2. `multiple-choice`

The user picks exactly one answer from a list.

```yaml
- id: 2
  type: multiple-choice
  question: "What is the capital of Japan?"
  options: ["Beijing", "Seoul", "Tokyo", "Bangkok"]
  answer: "Tokyo"
```

| Field | Required | Value |
|---|---|---|
| `options` | Yes | Array of 2–4 strings |
| `answer` | Yes | Must be an **exact string match** to one item in `options` |

---

### 3. `select-all`

The user selects all correct answers from a list (can be more than one).

```yaml
- id: 3
  type: select-all
  question: "Which of these are planets in our solar system?"
  options: ["Mars", "Pluto", "Venus", "Andromeda", "Saturn"]
  answers: ["Mars", "Venus", "Saturn"]
```

| Field | Required | Value |
|---|---|---|
| `options` | Yes | Array of 3–6 strings. Include at least one wrong option. |
| `answers` | Yes | Array of strings. Every item must be an **exact match** to an item in `options`. Must contain at least 2 correct answers. |

---

### 4. `fill-blank`

The user types a free-text answer into an input field.

```yaml
- id: 4
  type: fill-blank
  question: "The capital of Australia is ___."
  answer: "Canberra"
  accept: ["canberra", "Canberra", "CANBERRA"]
```

| Field | Required | Value |
|---|---|---|
| `answer` | Yes | The canonical correct answer (shown to the user if they answer incorrectly) |
| `accept` | No | Array of alternate accepted answers (different phrasings or abbreviations). Case is ignored automatically — no need to list both `"Canberra"` and `"canberra"`. |

**Tip:** Use `___` in the question text to visually mark where the blank is.

---

### 5. `matching`

The user matches items from the left column to items in the right column.

```yaml
- id: 5
  type: matching
  question: "Match each country to its capital city."
  pairs:
    - left: "Germany"
      right: "Berlin"
    - left: "Italy"
      right: "Rome"
    - left: "Spain"
      right: "Madrid"
    - left: "Portugal"
      right: "Lisbon"
```

| Field | Required | Value |
|---|---|---|
| `pairs` | Yes | Array of exactly 4 objects each with a `left` and `right` string. Always use exactly 4 pairs. If a topic requires more than 4 matches, split into multiple matching questions (definitions may repeat across questions if needed). |

---

## Complete example

```yaml
---
title: "World War II"
topic: "History"
description: "Key events, dates, and figures of the Second World War."
emoji: "🏛️"
questions:
  - id: 1
    type: true-false
    question: "World War II ended in 1945."
    answer: true
    explanation: "WWII ended in two stages: Germany surrendered on 8 May 1945 (V-E Day), and Japan surrendered on 2 September 1945 (V-J Day)."

  - id: 2
    type: multiple-choice
    question: "Who was the Prime Minister of the United Kingdom during most of World War II?"
    options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"]
    answer: "Winston Churchill"

  - id: 3
    type: select-all
    question: "Which of these countries were part of the Allied powers?"
    options: ["USA", "Germany", "United Kingdom", "Japan", "Soviet Union"]
    answers: ["USA", "United Kingdom", "Soviet Union"]

  - id: 4
    type: fill-blank
    question: "The Allied invasion of Normandy on 6 June 1944 is known as ___ Day."
    answer: "D"
    accept: ["d", "D", "d-day", "D-Day"]

  - id: 5
    type: matching
    question: "Match each leader to their country during World War II."
    pairs:
      - left: "Winston Churchill"
        right: "United Kingdom"
      - left: "Franklin D. Roosevelt"
        right: "USA"
      - left: "Adolf Hitler"
        right: "Germany"
      - left: "Joseph Stalin"
        right: "Soviet Union"
---
```

---

## Rules summary

- A quiz file can use any subset of the 5 types — the app shows one tile per type present, so a file with only `fill-blank` questions will show a single tile
- Use all 5 types where it makes sense — more variety is better for learning
- `id` values must be unique integers within the file
- `answer` (multiple-choice) must exactly match one of the `options` strings
- `answers` (select-all) must all exactly match items in `options`
- `type` must be one of: `true-false`, `multiple-choice`, `select-all`, `fill-blank`, `matching`
- Do not put any content below the closing `---`
- Always include `explanation` on every question — it is required for all question types
- `matching` questions must always have exactly 4 pairs; split into multiple questions if more are needed (pairs may repeat)
