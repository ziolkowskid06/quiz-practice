'use client';

import { useState, useMemo } from 'react';
import { shuffle } from '@/lib/shuffle';

export default function Matching({ question, onSubmit, submitted }) {
  const leftItems = useMemo(() => question.pairs.map((p) => p.left), [question]);
  const rightItems = useMemo(() => shuffle(question.pairs.map((p) => p.right)), [question]);

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({});

  function handleLeft(item) {
    if (submitted) return;
    setSelectedLeft(item === selectedLeft ? null : item);
  }

  function handleRight(item) {
    if (submitted || !selectedLeft) return;
    setMatches((prev) => ({ ...prev, [selectedLeft]: item }));
    setSelectedLeft(null);
  }

  function clearMatch(left) {
    if (submitted) return;
    setMatches((prev) => { const next = { ...prev }; delete next[left]; return next; });
  }

  const usedRight = Object.values(matches);
  const allMatched = Object.keys(matches).length === leftItems.length;

  return (
    <div className="mt-2">
      <p className="text-xs text-gray-600 mb-3">Click a left item, then its match on the right.</p>
      <div className="flex gap-3">
        {/* Left */}
        <div className="flex-1 space-y-2">
          {leftItems.map((item) => (
            <button
              key={item}
              disabled={submitted}
              onClick={() => matches[item] ? clearMatch(item) : handleLeft(item)}
              className={`w-full text-left px-3 py-2 rounded-xl border text-sm transition-all disabled:cursor-not-allowed ${
                selectedLeft === item
                  ? 'border-amber-400/80 bg-amber-950/40 text-amber-200'
                  : matches[item]
                  ? 'border-emerald-700/50 bg-emerald-950/30 text-emerald-300'
                  : 'border-gray-700 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50'
              }`}
            >
              {item}
              {matches[item] && <span className="ml-1 text-emerald-500">→ {matches[item]}</span>}
            </button>
          ))}
        </div>

        {/* Right */}
        <div className="flex-1 space-y-2">
          {rightItems.map((item) => (
            <button
              key={item}
              disabled={submitted || usedRight.includes(item)}
              onClick={() => handleRight(item)}
              className={`w-full text-left px-3 py-2 rounded-xl border text-sm transition-all ${
                usedRight.includes(item)
                  ? 'border-gray-800 text-gray-700 cursor-not-allowed'
                  : selectedLeft
                  ? 'border-amber-500/50 text-gray-300 hover:border-amber-400/70 hover:bg-amber-950/30 cursor-pointer'
                  : 'border-gray-700 text-gray-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {!submitted && (
        <button
          onClick={() => allMatched && onSubmit(matches)}
          disabled={!allMatched}
          className="mt-4 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Submit
        </button>
      )}
    </div>
  );
}
