'use client';

import Link from 'next/link';
import { TYPE_LABELS, TYPE_ICONS, TYPE_COLORS } from '@/lib/quizTypes';

export default function TypeList({ slug, types, typeCounts = {} }) {
  if (types.length === 0) {
    return <p className="text-gray-500">No questions found in this quiz.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {types.map((type) => {
        const colors = TYPE_COLORS[type] ?? { border: 'border-gray-700', bg: 'bg-gray-800/30', text: 'text-gray-300', hover: 'hover:border-gray-500' };
        return (
          <Link
            key={type}
            href={`/quiz/${slug}/${type}`}
            className={`block rounded-2xl border bg-[#1a1a24] p-6 transition-all hover:bg-[#1f1f2e] ${colors.border} ${colors.hover}`}
          >
            <span className="text-3xl mb-3 block">{TYPE_ICONS[type] ?? '❓'}</span>
            <h2 className={`text-lg font-semibold ${colors.text}`}>
              {TYPE_LABELS[type] ?? type}
            </h2>
            <p className="mt-1 text-xs text-gray-600">
              {typeCounts[type] ?? 0} questions
            </p>
          </Link>
        );
      })}
    </div>
  );
}
