# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run start     # Start production server
git push          # Auto-deploys via Vercel (connected to GitHub)
```

## Project links

- **Live app:** https://quiz-practice.vercel.app
- **GitHub:** https://github.com/ziolkowskid06/quiz-practice
- **Vercel dashboard:** https://vercel.com/dashboard

---

## Architecture

**Stack:** Next.js 16 (App Router) · JavaScript · Tailwind CSS v4 · gray-matter

### Routing (3 levels)

```
/                          → Home: all quizzes, filter chips by topic
/quiz/[slug]               → Topic page: quiz type selection tiles
/quiz/[slug]/[type]        → Quiz runner for a specific type within a quiz
```

### Data flow

- `/lib/parseQuiz.js` — all file I/O. Key exports:
  - `getAllQuizzes()` — metadata for all `.md` files (home page)
  - `getQuizMeta(slug)` — metadata + `types[]` + `typeCounts{}` (topic page)
  - `getQuizBySlugAndType(slug, type)` — questions filtered to one type (quiz runner)
- `/lib/quizTypes.js` — client-safe constants: `TYPE_LABELS`, `TYPE_ICONS`, `TYPE_COLORS`. Kept separate from `parseQuiz.js` so client components can import them without pulling in `fs`/`path`.
- `/lib/shuffle.js` — single Fisher-Yates `shuffle(array)` utility.

### Component tree

```
app/page.js (server)
  └── TopicList (client) — filter chips + quiz card grid

app/quiz/[slug]/page.js (server)
  └── TypeList (client) — one tile per question type present in the quiz

app/quiz/[slug]/[type]/page.js (server)
  └── QuizRunner (client) — owns all quiz state
        ├── TrueFalse / MultipleChoice / SelectAll / FillBlank / Matching
        ├── FeedbackBanner — shown after each answer; renders explanation for true-false
        ├── ScoreSummary — end screen with score + per-question review
        └── Review mode (inline) — browse previously answered questions mid-quiz
```

### QuizRunner state

| State | Type | Description |
|---|---|---|
| `questions` | array | Shuffled question list for this session |
| `index` | number | Current active question (0-based) |
| `feedback` | object\|null | Set after submitting; holds `correct`, `correctAnswer`, `explanation` |
| `results` | array | Answered questions: `question`, `type`, `userAnswer`, `correct`, `correctAnswer`, `explanation` |
| `done` | boolean | True when all questions answered → renders ScoreSummary |
| `browseIndex` | number\|null | `null` = active quiz; number = review mode showing that past answer |

### Quiz content

22 quiz files in `/quizzes/` covering: Geography, Science, History, JavaScript, Movies, Animals, Space, Food, Sports, Music, Math, and 10 PMP Acronyms sets (EVM, Scheduling, Risk, Quality, Financial, Agile, Procurement, Scope & Org, Gen Mgmt, Standards & Certifications).

Quiz filenames must be lowercase and hyphenated (e.g. `pmp-evm.md`) — the filename becomes the URL slug. Avoid spaces and special characters.

Full quiz file format specification: **[QUIZ_FORMAT.md](./QUIZ_FORMAT.md)**

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
        MD3["... (12 total)"]
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
    QR --> RM["Review mode\nbrowse past answers mid-quiz"]
```

### 4. Quiz state machine (QuizRunner)

```mermaid
stateDiagram-v2
    [*] --> Answering: quiz loaded\nquestions shuffled
    Answering --> Feedback: answer submitted\ncheckAnswer()
    Feedback --> Answering: Next Question →
    Feedback --> Review: ← Review Answers
    Feedback --> Done: last question answered
    Review --> Review: ← Previous / Next →
    Review --> Feedback: Back to Quiz →
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
