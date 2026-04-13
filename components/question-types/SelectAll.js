'use client';

import { useState } from 'react';

export default function SelectAll({ question, onSubmit, submitted }) {
  const [selected, setSelected] = useState([]);

  function toggle(opt) {
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  }

  return (
    <div className="mt-2 space-y-2">
      <p className="text-xs text-gray-600 mb-1">Select all that apply</p>
      {question.options.map((opt) => (
        <button
          key={opt}
          disabled={submitted}
          onClick={() => toggle(opt)}
          className={`w-full text-left px-4 py-3 rounded-xl border transition-all disabled:cursor-not-allowed ${
            selected.includes(opt)
              ? 'border-sky-400/80 bg-sky-950/40 text-sky-200'
              : 'border-gray-700 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50'
          }`}
        >
          <span className="mr-2">{selected.includes(opt) ? '☑' : '☐'}</span>
          {opt}
        </button>
      ))}
      {!submitted && (
        <button
          onClick={() => selected.length > 0 && onSubmit(selected)}
          disabled={selected.length === 0}
          className="mt-2 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Submit
        </button>
      )}
    </div>
  );
}
