import { getQuizMeta, getAllQuizzes } from '@/lib/parseQuiz';
import TypeList from '@/components/TypeList';
import Link from 'next/link';

export async function generateStaticParams() {
  const quizzes = getAllQuizzes();
  return quizzes.map((q) => ({ slug: q.slug }));
}

export default async function TopicPage({ params }) {
  const { slug } = await params;
  const quiz = getQuizMeta(slug);

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors mb-6 inline-block">
          ← All Topics
        </Link>
        <span className="block text-xs font-medium text-gray-500 uppercase tracking-widest mt-2">
          {quiz.topic}
        </span>
        <h1 className="text-3xl font-bold text-gray-100 mb-2">{quiz.title}</h1>
        {quiz.description && (
          <p className="text-gray-400 mb-8">{quiz.description}</p>
        )}
        <p className="text-sm text-gray-600 mb-4">Choose a quiz type:</p>
        <TypeList slug={slug} types={quiz.types} typeCounts={quiz.typeCounts} />
      </div>
    </main>
  );
}
