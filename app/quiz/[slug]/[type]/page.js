import { getQuizBySlugAndType, getAllQuizzes, getQuizMeta } from '@/lib/parseQuiz';
import { TYPE_LABELS, TYPE_ICONS } from '@/lib/quizTypes';
import QuizRunner from '@/components/QuizRunner';
import Link from 'next/link';

export async function generateStaticParams() {
  const quizzes = getAllQuizzes();
  const params = [];
  for (const quiz of quizzes) {
    const meta = getQuizMeta(quiz.slug);
    for (const type of meta.types) {
      params.push({ slug: quiz.slug, type });
    }
  }
  return params;
}

export default async function QuizTypePage({ params }) {
  const { slug, type } = await params;
  const quiz = getQuizBySlugAndType(slug, type);

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href={`/quiz/${slug}`} className="text-sm text-gray-500 hover:text-gray-300 transition-colors mb-6 inline-block">
          ← {quiz.title}
        </Link>
        <p className="text-sm text-gray-400 mb-4">
          {TYPE_ICONS[type]} {TYPE_LABELS[type] ?? type}
        </p>
        <QuizRunner quiz={quiz} backHref={`/quiz/${slug}`} />
      </div>
    </main>
  );
}
