'use client';

import { useState } from 'react';
import { shuffle } from '@/lib/shuffle';
import FeedbackBanner from './FeedbackBanner';
import ScoreSummary from './ScoreSummary';
import TrueFalse from './question-types/TrueFalse';
import MultipleChoice from './question-types/MultipleChoice';
import SelectAll from './question-types/SelectAll';
import FillBlank from './question-types/FillBlank';
import Matching from './question-types/Matching';

function prepareQuestions(rawQuestions) {
  return shuffle(rawQuestions).map((q) => {
    if (q.type === 'multiple-choice' || q.type === 'select-all') {
      return { ...q, options: shuffle(q.options) };
    }
    return q;
  });
}

function checkAnswer(question, userAnswer) {
  switch (question.type) {
    case 'true-false':
      return userAnswer === question.answer;
    case 'multiple-choice':
      return userAnswer === question.answer;
    case 'select-all': {
      const correct = [...question.answers].sort();
      const given = [...userAnswer].sort();
      return correct.length === given.length && correct.every((v, i) => v === given[i]);
    }
    case 'fill-blank': {
      const accepted = question.accept ?? [question.answer];
      return accepted.some((a) => a.toLowerCase() === userAnswer.toLowerCase());
    }
    case 'matching':
      return question.pairs.every((pair) => userAnswer[pair.left] === pair.right);
    default:
      return false;
  }
}

function getCorrectAnswer(question) {
  switch (question.type) {
    case 'true-false': return question.answer ? 'True' : 'False';
    case 'multiple-choice': return question.answer;
    case 'select-all': return question.answers;
    case 'fill-blank': return question.answer;
    case 'matching': return Object.fromEntries(question.pairs.map((p) => [p.left, p.right]));
    default: return '';
  }
}

function formatAnswer(type, answer) {
  if (answer === null || answer === undefined) return '—';
  if (type === 'true-false') return answer ? 'True' : 'False';
  if (type === 'select-all') return Array.isArray(answer) ? answer.join(', ') : String(answer);
  if (type === 'matching') {
    return typeof answer === 'object' && !Array.isArray(answer)
      ? Object.entries(answer).map(([l, r]) => `${l} → ${r}`).join(' · ')
      : String(answer);
  }
  return String(answer);
}

export default function QuizRunner({ quiz, backHref }) {
  const [questions, setQuestions] = useState(() => prepareQuestions(quiz.questions));
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [results, setResults] = useState([]);
  const [done, setDone] = useState(false);
  const [browseIndex, setBrowseIndex] = useState(null);

  const current = questions[index];

  function handleAnswer(userAnswer) {
    const correct = checkAnswer(current, userAnswer);
    const correctAnswer = getCorrectAnswer(current);
    const explanation = current.explanation ?? null;
    setFeedback({ correct, correctAnswer, explanation });
    setResults((prev) => [...prev, {
      question: current.question,
      type: current.type,
      userAnswer,
      correct,
      correctAnswer,
      explanation,
    }]);
  }

  function handleNext() {
    if (index + 1 >= questions.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setFeedback(null);
    }
  }

  function handleRetake() {
    setQuestions(prepareQuestions(quiz.questions));
    setIndex(0);
    setFeedback(null);
    setResults([]);
    setDone(false);
    setBrowseIndex(null);
  }

  if (done) {
    return <ScoreSummary results={results} total={questions.length} onRetake={handleRetake} backHref={backHref} />;
  }

  // Review mode
  if (browseIndex !== null) {
    const r = results[browseIndex];
    const q = questions[browseIndex];
    return (
      <div className="rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-500">
            Reviewing {browseIndex + 1} of {results.length}
          </span>
          <button
            onClick={() => setBrowseIndex(null)}
            className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
          >
            Back to current →
          </button>
        </div>

        <p className="text-lg font-medium text-gray-100 mb-4">{q.question}</p>

        <div className={`rounded-xl p-4 mb-3 ${r.correct ? 'bg-green-900/30 border border-green-700/50' : 'bg-red-900/30 border border-red-700/50'}`}>
          <p className="text-xs text-gray-400 mb-1">Your answer</p>
          <p className={`font-medium ${r.correct ? 'text-green-300' : 'text-red-300'}`}>
            {formatAnswer(q.type, r.userAnswer)}
          </p>
          <p className={`text-xs mt-1 ${r.correct ? 'text-green-500' : 'text-red-500'}`}>
            {r.correct ? '✓ Correct' : '✗ Incorrect'}
          </p>
        </div>

        {!r.correct && (
          <div className="rounded-xl p-4 mb-3 bg-[#1e1e2e] border border-[#2a2a3a]">
            <p className="text-xs text-gray-400 mb-1">Correct answer</p>
            <p className="text-green-300 font-medium">{formatAnswer(q.type, r.correctAnswer)}</p>
          </div>
        )}

        {r.explanation && (
          <div className="rounded-xl p-4 mb-4 bg-blue-900/20 border border-blue-800/30">
            <p className="text-xs text-gray-400 mb-1">Explanation</p>
            <p className="text-gray-300 text-sm">{r.explanation}</p>
          </div>
        )}

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => setBrowseIndex(browseIndex - 1)}
            disabled={browseIndex === 0}
            className="flex-1 py-3 rounded-xl border border-[#2a2a3a] text-gray-400 hover:text-gray-200 hover:border-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={() => browseIndex < results.length - 1 ? setBrowseIndex(browseIndex + 1) : setBrowseIndex(null)}
            className="flex-1 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
          >
            {browseIndex < results.length - 1 ? 'Next →' : 'Back to Quiz →'}
          </button>
        </div>
      </div>
    );
  }

  // Normal quiz mode
  const progress = ((index + 1) / questions.length) * 100;

  return (
    <div className="rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs text-gray-600">Question {index + 1} of {questions.length}</span>
        <span className="text-xs text-gray-600">{Math.round(progress)}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full mb-6">
        <div
          className="h-full bg-violet-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-lg font-medium text-gray-100 mb-4">{current.question}</p>

      {current.type === 'true-false' && (
        <TrueFalse question={current} onSubmit={handleAnswer} submitted={!!feedback} />
      )}
      {current.type === 'multiple-choice' && (
        <MultipleChoice question={current} onSubmit={handleAnswer} submitted={!!feedback} />
      )}
      {current.type === 'select-all' && (
        <SelectAll question={current} onSubmit={handleAnswer} submitted={!!feedback} />
      )}
      {current.type === 'fill-blank' && (
        <FillBlank question={current} onSubmit={handleAnswer} submitted={!!feedback} />
      )}
      {current.type === 'matching' && (
        <Matching question={current} onSubmit={handleAnswer} submitted={!!feedback} />
      )}

      {feedback && (
        <FeedbackBanner
          correct={feedback.correct}
          correctAnswer={feedback.correctAnswer}
          explanation={feedback.explanation}
        />
      )}

      {feedback && (
        <button
          onClick={handleNext}
          className="mt-4 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
        >
          {index + 1 >= questions.length ? '🏁 See Results' : 'Next Question →'}
        </button>
      )}

      {results.length > 0 && (
        <button
          onClick={() => setBrowseIndex(results.length - 1)}
          className="mt-2 w-full py-3 rounded-xl border border-[#2a2a3a] text-gray-400 hover:text-gray-200 hover:border-gray-600 transition-colors text-sm"
        >
          ← Review Answers ({results.length})
        </button>
      )}
    </div>
  );
}
