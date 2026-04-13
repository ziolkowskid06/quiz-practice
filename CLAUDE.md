# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run start     # Start production server
vercel            # Preview deploy
vercel --prod     # Production deploy
```

## Architecture

**Stack:** Next.js 16 (App Router) · JavaScript · Tailwind CSS v4 · gray-matter

---

## Diagrams

### 1. User navigation flow

```mermaid
flowchart TD
    A["🏠 Home /\nAll quizzes + topic filter chips"] -->|Click quiz card| B["📋 /quiz/[slug]\nQuiz type selection"]
    B -->|Click type tile| C["🎯 /quiz/[slug]/[type]\nQuiz runner"]
    C -->|Answer all questions| D["🏁 Score Summary\n(same page, done state)"]
    D -->|Retake| C
    D -->|Back| B
    B -->|Back| A
```

### 2. Data flow — from .md files to UI

```mermaid
flowchart LR
    subgraph files["/quizzes/*.md"]
        MD1["geography.md"]
        MD2["history.md"]
        MD3["..."]
    end

    subgraph lib["lib/"]
        PQ["parseQuiz.js\ngray-matter parser"]
        QT["quizTypes.js\nlabels · icons · colors"]
        SH["shuffle.js\nFisher-Yates"]
    end

    subgraph pages["app/ (server components)"]
        P1["page.js\nHome"]
        P2["quiz/[slug]/page.js\nTopic"]
        P3["quiz/[slug]/[type]/page.js\nRunner"]
    end

    subgraph components["components/ (client)"]
        TL["TopicList"]
        TyL["TypeList"]
        QR["QuizRunner"]
    end

    files --> PQ
    PQ -->|getAllQuizzes| P1
    PQ -->|getQuizMeta| P2
    PQ -->|getQuizBySlugAndType| P3
    QT --> TyL
    QT --> P3
    SH --> QR
    P1 --> TL
    P2 --> TyL
    P3 --> QR
```

### 3. Component tree

```mermaid
flowchart TD
    P1["app/page.js\n(server)"] --> TL["TopicList\n(client)"]
    TL --> CHIPS["Filter chips\nAll · Topic A · Topic B …"]
    TL --> CARDS["Quiz cards grid"]

    P2["app/quiz/[slug]/page.js\n(server)"] --> TyL["TypeList\n(client)"]
    TyL --> TILES["Type tiles\n⚡ True/False · 🎯 Multiple Choice …"]

    P3["app/quiz/[slug]/[type]/page.js\n(server)"] --> QR["QuizRunner\n(client)"]
    QR --> QT["Question type component\n(one of 5)"]
    QT --> TF["TrueFalse"]
    QT --> MC["MultipleChoice"]
    QT --> SA["SelectAll"]
    QT --> FB["FillBlank"]
    QT --> MA["Matching"]
    QR --> FBanner["FeedbackBanner\n✅ / ❌ + explanation"]
    QR --> SS["ScoreSummary\nscore + review + retake"]
```

### 4. Quiz state machine (QuizRunner)

```mermaid
stateDiagram-v2
    [*] --> Answering: quiz loaded\nquestions shuffled
    Answering --> Feedback: answer submitted\ncheckAnswer()
    Feedback --> Answering: Next Question →
    Feedback --> Done: last question answered
    Done --> Answering: Retake\nre-shuffle
    Done --> [*]: navigate away
```

### 5. Quiz `.md` file schema

```mermaid
erDiagram
    QUIZ_FILE {
        string title
        string topic
        string description
        string emoji
    }
    QUIZ_FILE ||--o{ QUESTION : questions

    QUESTION {
        int    id
        string type
        string question
    }

    TRUE_FALSE {
        boolean answer
        string  explanation "optional"
    }
    MULTIPLE_CHOICE {
        array  options
        string answer
    }
    SELECT_ALL {
        array options
        array answers
    }
    FILL_BLANK {
        string answer
        array  accept "optional variants"
    }
    MATCHING {
        array pairs "left+right objects"
    }

    QUESTION ||--o| TRUE_FALSE      : "type: true-false"
    QUESTION ||--o| MULTIPLE_CHOICE : "type: multiple-choice"
    QUESTION ||--o| SELECT_ALL      : "type: select-all"
    QUESTION ||--o| FILL_BLANK      : "type: fill-blank"
    QUESTION ||--o| MATCHING        : "type: matching"
```

---

## Quiz `.md` file format

All content is in YAML frontmatter. The markdown body is unused.

```yaml
---
title: "..."
topic: "..."          # used for filter chips on home page
description: "..."
emoji: "🧪"           # displayed on home page tile (default: 📚)
questions:
  - id: 1
    type: true-false
    question: "..."
    answer: true
    explanation: "..."   # optional — shown after answer is submitted

  - id: 2
    type: multiple-choice
    question: "..."
    options: ["A", "B", "C", "D"]
    answer: "B"

  - id: 3
    type: select-all
    question: "..."
    options: ["A", "B", "C", "D"]
    answers: ["A", "C"]

  - id: 4
    type: fill-blank
    question: "The answer is ___."
    answer: "foo"
    accept: ["foo", "Foo"]   # all accepted variants (case-insensitive match also applied)

  - id: 5
    type: matching
    question: "..."
    pairs:
      - left: "A"
        right: "1"
      - left: "B"
        right: "2"
---
```

**Adding a new quiz:** drop a new `.md` file in `/quizzes/`. It appears on the home page automatically. If its `topic` value is new, a new filter chip is added automatically.
