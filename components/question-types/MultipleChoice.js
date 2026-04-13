'use client';

import { useState } from 'react';

export default function MultipleChoice({ question, onSubmit, submitted }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mt-2 space-y-2">
      {question.options.map((opt) => (
        <button
          key={opt}
          disabled={submitted}
          onClick={() => setSelected(opt)}
          className={`w-full text-left px-4 py-3 rounded-xl border transition-all disabled:cursor-not-allowed ${
            selected === opt
              ? 'border-violet-400/80 bg-violet-950/40 text-violet-200'
              : 'border-gray-700 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50'
          }`}
        >
          {opt}
        </button>
      ))}
      {!submitted && (
        <button
          onClick={() => selected !== null && onSubmit(selected)}
          disabled={selected === null}
          className="mt-2 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Submit
        </button>
      )}
    </div>
  );
}
