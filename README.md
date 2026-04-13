# Quiz Practice App

A personal quiz practice web app built with Next.js and deployed on Vercel. Quizzes are plain Markdown files — no database, no login required.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How it works

- **Home page** — shows all available quizzes as cards. Filter by topic using the chips at the top.
- **Topic page** — after selecting a quiz, choose a question type (True/False, Multiple Choice, etc.)
- **Quiz runner** — questions are shuffled on every run. You get immediate feedback after each answer.
- **Score summary** — see your total score and review every question at the end.

## Creating a new quiz

1. Create a new file in `/quizzes/` named `<your-topic>.md`
2. Fill in the frontmatter following the format below
3. Save — the quiz appears on the home page instantly (no code changes needed)

### Quiz file format

```yaml
---
title: "My Quiz Title"
topic: "Category Name"    # groups quizzes under the same filter chip
description: "Short description shown on the card."
emoji: "🎯"               # emoji shown on the home page tile
questions:
  # ... (see question types below)
---
```

### Question types

#### True or False
```yaml
- id: 1
  type: true-false
  question: "The Earth orbits the Sun."
  answer: true
  explanation: "Optional — explain why the answer is true or false. Shown after submission."
```

#### Multiple Choice
```yaml
- id: 2
  type: multiple-choice
  question: "What is the capital of Japan?"
  options: ["Beijing", "Seoul", "Tokyo", "Bangkok"]
  answer: "Tokyo"
```

#### Select All That Apply
```yaml
- id: 3
  type: select-all
  question: "Which of these are planets?"
  options: ["Mars", "Pluto", "Venus", "Andromeda"]
  answers: ["Mars", "Venus"]
```

#### Fill in the Blank
```yaml
- id: 4
  type: fill-blank
  question: "The capital of Australia is ___."
  answer: "Canberra"
  accept: ["canberra", "Canberra"]   # list every spelling/casing you want to accept
```

#### Matching
```yaml
- id: 5
  type: matching
  question: "Match each country to its capital."
  pairs:
    - left: "Germany"
      right: "Berlin"
    - left: "Italy"
      right: "Rome"
    - left: "Spain"
      right: "Madrid"
```

### Tips

- You can mix all question types in one file — the quiz runner groups them by type on the type-selection screen.
- Questions and answer options are shuffled automatically on every run.
- The `explanation` field only applies to `true-false` questions. Leave it out for other types.
- If multiple quizzes share the same `topic` value they all appear under the same filter chip on the home page. This is useful for series (e.g. multiple books under `topic: "Books"`).

## Deployment

```bash
vercel --prod
```
