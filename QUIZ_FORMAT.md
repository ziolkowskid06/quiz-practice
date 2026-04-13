# Quiz File Format Specification

This document defines the exact format for quiz files used in the Quiz Practice App. Any AI model or tool generating quiz content must follow this specification precisely for the file to be compatible.

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
| `explanation` | No | Shown to the user after they submit their answer, for any question type. Explain why the answer is correct. Highly recommended for learning purposes. |

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
| `answer` | Yes | The canonical correct answer |
| `accept` | No | Array of all accepted spelling/casing variants. The app also applies case-insensitive matching automatically, so `["canberra", "Canberra"]` is sufficient for most cases. |

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
| `pairs` | Yes | Array of objects each with a `left` and `right` string. Minimum 3 pairs, maximum 6. |

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

- Use all 5 question types in each file where possible — the app shows a separate tile for each type
- `id` values must be unique integers within the file
- `answer` (multiple-choice) must exactly match one of the `options` strings
- `answers` (select-all) must all exactly match items in `options`
- `type` must be one of: `true-false`, `multiple-choice`, `select-all`, `fill-blank`, `matching`
- Do not put any content below the closing `---`
- Always include `explanation` on every question — it helps the user understand why the answer is correct
