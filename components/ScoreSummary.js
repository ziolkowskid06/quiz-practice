'use client';

import Link from 'next/link';

function scoreEmoji(correct, total) {
  const pct = correct / total;
  if (pct === 1) return '🎉';
  if (pct >= 0.7) return '🌟';
  return '📚';
}

function scoreMessage(correct, total) {
  const pct = correct / total;
  if (pct === 1) return 'Perfect score!';
  if (pct >= 0.7) return 'Great job!';
  if (pct >= 0.4) return 'Keep going!';
  return 'Keep practicing!';
}

export default function ScoreSummary({ results, total, onRetake, backHref = '/' }) {
  const correct = results.filter((r) => r.correct).length;

  return (
    <div className="rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-6">
      {/* Score */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-2">{scoreEmoji(correct, total)}</div>
        <div className="text-5xl font-bold text-gray-100">{correct}/{total}</div>
        <p className="text-gray-400 mt-1">{scoreMessage(correct, total)}</p>
        <p className="text-xs text-gray-600 mt-1">{Math.round((correct / total) * 100)}% correct</p>
      </div>

      {/* Review */}
      <div className="space-y-2 mb-8">
        {results.map((r, i) => (
          <div
            key={i}
            className={`rounded-xl border p-3 ${
              r.correct
                ? 'border-emerald-800/50 bg-emerald-950/30'
                : 'border-rose-800/50 bg-rose-950/30'
            }`}
          >
            <div className="flex items-start gap-2">
              <span className="mt-0.5">{r.correct ? '✅' : '❌'}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-200">{r.question}</p>
                {!r.correct && (
                  <p className="text-xs text-rose-400 mt-0.5">
                    Answer: {formatAnswer(r.correctAnswer)}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onRetake}
          className="flex-1 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
        >
          🔄 Retake
        </button>
        <Link
          href={backHref}
          className="flex-1 py-3 rounded-xl border border-gray-700 hover:border-gray-500 text-center font-medium text-gray-300 hover:bg-gray-800/50 transition-colors"
        >
          ← Quiz Types
        </Link>
      </div>
    </div>
  );
}

function formatAnswer(answer) {
  if (Array.isArray(answer)) return answer.join(', ');
  if (typeof answer === 'object' && answer !== null) {
    return Object.entries(answer).map(([k, v]) => `${k} → ${v}`).join(', ');
  }
  return String(answer);
}
