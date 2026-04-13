export default function FeedbackBanner({ correct, correctAnswer, explanation }) {
  if (correct === null) return null;

  return (
    <div className={`mt-4 rounded-xl px-4 py-3 text-sm border ${
      correct
        ? 'bg-emerald-950/50 border-emerald-700/50 text-emerald-300'
        : 'bg-rose-950/50 border-rose-700/50 text-rose-300'
    }`}>
      <p className="font-medium">
        {correct
          ? '✅ Correct!'
          : `❌ Incorrect — the answer is: ${formatAnswer(correctAnswer)}`}
      </p>
      {explanation && (
        <p className="mt-2 text-xs opacity-80 leading-relaxed">{explanation}</p>
      )}
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
