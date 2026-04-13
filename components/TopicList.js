'use client';

import { useState } from 'react';
import Link from 'next/link';

const CARD_ACCENTS = [
  'border-violet-500/40 hover:border-violet-400/70',
  'border-sky-500/40 hover:border-sky-400/70',
  'border-rose-500/40 hover:border-rose-400/70',
  'border-emerald-500/40 hover:border-emerald-400/70',
  'border-amber-500/40 hover:border-amber-400/70',
];

export default function TopicList({ quizzes, topics = [] }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? quizzes : quizzes.filter((q) => q.topic === active);

  return (
    <div>
      {/* Filter chips */}
      <div className="flex gap-2 flex-wrap mb-6">
        {['All', ...topics].map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === t
                ? 'bg-violet-600 text-white'
                : 'border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Quiz grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-500">No quizzes found for this topic.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((quiz, i) => (
            <Link
              key={quiz.slug}
              href={`/quiz/${quiz.slug}`}
              className={`block rounded-2xl border bg-[#1a1a24] p-6 transition-all hover:bg-[#1f1f2e] ${CARD_ACCENTS[i % CARD_ACCENTS.length]}`}
            >
              <span className="text-3xl mb-3 block">{quiz.emoji}</span>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                {quiz.topic}
              </span>
              <h2 className="mt-1 text-lg font-semibold text-gray-100">{quiz.title}</h2>
              {quiz.description && (
                <p className="mt-1 text-sm text-gray-400">{quiz.description}</p>
              )}
              <p className="mt-3 text-xs text-gray-600">{quiz.questionCount} questions</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
