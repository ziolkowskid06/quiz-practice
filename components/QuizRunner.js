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

export default function QuizRunner({ quiz, backHref }) {
  const [questions, setQuestions] = useState(() => prepareQuestions(quiz.questions));
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [results, setResults] = useState([]);
  const [done, setDone] = useState(false);

  const current = questions[index];

  function handleAnswer(userAnswer) {
    const correct = checkAnswer(current, userAnswer);
    const correctAnswer = getCorrectAnswer(current);
    const explanation = current.explanation ?? null;
    setFeedback({ correct, correctAnswer, explanation });
    setResults((prev) => [...prev, { question: current.question, correct, correctAnswer }]);
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
  }

  if (done) {
    return <ScoreSummary results={results} total={questions.length} onRetake={handleRetake} backHref={backHref} />;
  }

  const progress = ((index + 1) / questions.length) * 100;

  return (
    <div className="rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-6">
      {/* Progress */}
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

      {/* Question */}
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

      {feedback && <FeedbackBanner correct={feedback.correct} correctAnswer={feedback.correctAnswer} explanation={feedback.explanation} />}

      {feedback && (
        <button
          onClick={handleNext}
          className="mt-4 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
        >
          {index + 1 >= questions.length ? '🏁 See Results' : 'Next Question →'}
        </button>
      )}
    </div>
  );
}
