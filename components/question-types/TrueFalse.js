'use client';

export default function TrueFalse({ question, onSubmit, submitted }) {
  return (
    <div className="flex gap-3 mt-2">
      {[true, false].map((val) => (
        <button
          key={String(val)}
          disabled={submitted}
          onClick={() => onSubmit(val)}
          className="flex-1 py-3 rounded-xl border border-gray-700 text-gray-300 font-medium hover:border-violet-400/60 hover:bg-violet-950/30 hover:text-violet-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          {val ? '✅ True' : '❌ False'}
        </button>
      ))}
    </div>
  );
}
