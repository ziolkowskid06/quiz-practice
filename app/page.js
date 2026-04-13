import { getAllQuizzes } from '@/lib/parseQuiz';
import TopicList from '@/components/TopicList';

export default function Home() {
  const allQuizzes = getAllQuizzes();
  const quizzes = [...allQuizzes].sort((a, b) => a.title.localeCompare(b.title));
  const topics = [...new Set(allQuizzes.map((q) => q.topic))].sort();

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-100 mb-1">🧠 Quiz Practice</h1>
        <p className="text-gray-500 mb-8">Pick a topic to get started.</p>
        <TopicList quizzes={quizzes} topics={topics} />
      </div>
    </main>
  );
}
