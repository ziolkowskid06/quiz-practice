import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const quizzesDir = path.join(process.cwd(), 'quizzes');

export function getAllQuizzes() {
  const files = fs.readdirSync(quizzesDir).filter((f) => f.endsWith('.md'));
  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(quizzesDir, filename), 'utf8');
    const { data } = matter(raw);
    return {
      slug,
      title: data.title,
      topic: data.topic,
      description: data.description,
      emoji: data.emoji ?? '📚',
      questionCount: data.questions?.length ?? 0,
    };
  });
}

export function getQuizMeta(slug) {
  const filepath = path.join(quizzesDir, `${slug}.md`);
  const raw = fs.readFileSync(filepath, 'utf8');
  const { data } = matter(raw);
  const questions = data.questions ?? [];
  const typeCounts = questions.reduce((acc, q) => {
    acc[q.type] = (acc[q.type] ?? 0) + 1;
    return acc;
  }, {});
  return {
    slug,
    title: data.title,
    topic: data.topic,
    description: data.description,
    types: Object.keys(typeCounts),
    typeCounts,
  };
}

export function getQuizBySlugAndType(slug, type) {
  const filepath = path.join(quizzesDir, `${slug}.md`);
  const raw = fs.readFileSync(filepath, 'utf8');
  const { data } = matter(raw);
  const questions = (data.questions ?? []).filter((q) => q.type === type);
  return {
    slug,
    title: data.title,
    topic: data.topic,
    description: data.description,
    type,
    questions,
  };
}
