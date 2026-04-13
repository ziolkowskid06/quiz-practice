'use client';

import { useState } from 'react';

export default function FillBlank({ question, onSubmit, submitted }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim()) onSubmit(value.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={submitted}
        placeholder="Type your answer..."
        className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-gray-100 placeholder-gray-600 focus:border-emerald-500/60 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      />
      {!submitted && (
        <button
          type="submit"
          disabled={!value.trim()}
          className="mt-3 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Submit
        </button>
      )}
    </form>
  );
}
