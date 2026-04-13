# Quiz Practice App

A personal quiz practice web app built with Next.js and deployed on Vercel. Quizzes are plain Markdown files — no database, no login required.

- **Live app:** https://quiz-practice.vercel.app
- **GitHub:** https://github.com/ziolkowskid06/quiz-practice

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## How it works

- **Home page** — all quizzes as cards, filterable by topic using the chips at the top
- **Topic page** — after selecting a quiz, choose a question type (True/False, Multiple Choice, etc.)
- **Quiz runner** — questions and answer options are shuffled on every run; immediate feedback after each answer
- **Score summary** — total score and per-question review at the end; retake with a new shuffle

---

## Managing quizzes

**Add a quiz** — create a new `.md` file in `/quizzes/` and push. It appears on the home page automatically.

**Remove a quiz** — delete its `.md` file from `/quizzes/` and push.

For the full file format and all question type specifications see **[QUIZ_FORMAT.md](./QUIZ_FORMAT.md)**.

### Tips

- You don't need all 5 question types in every file — include only the ones relevant to your content
- Quizzes sharing the same `topic` value group under one filter chip (useful for series, e.g. multiple books under `topic: "Books"`)
- Always add an `explanation` to `true-false` questions — it helps understand why the answer is correct
- Questions and answer options are shuffled automatically on every run — no need to randomise them manually

---

## Current quizzes

| File | Topic |
|---|---|
| `animals.md` | Nature |
| `food.md` | Food |
| `geography.md` | Geography |
| `history.md` | History |
| `javascript.md` | Programming |
| `math.md` | Math |
| `movies.md` | Entertainment |
| `music.md` | Music |
| `science.md` | Science |
| `space.md` | Space |
| `sports.md` | Sports |
| `test-quiz.md` | General |

---

## Deployment

Connected to Vercel via GitHub — every push to `master` redeploys automatically.

```bash
git add .
git commit -m "your message"
git push
```
