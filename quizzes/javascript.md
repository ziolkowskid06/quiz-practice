---
title: "JavaScript Basics"
topic: "Programming"
description: "Core JavaScript concepts and syntax."
emoji: "💻"
questions:
  - id: 1
    type: true-false
    question: "In JavaScript, 'null' and 'undefined' are exactly equal (===)."
    answer: false
    explanation: "null == undefined is true (loose equality), but null === undefined is false (strict equality). They are different types: typeof null is 'object' and typeof undefined is 'undefined'. Strict equality (===) checks both value and type."

  - id: 2
    type: true-false
    question: "Arrow functions have their own 'this' binding."
    answer: false
    explanation: "Arrow functions do NOT have their own 'this'. They inherit 'this' from the surrounding lexical scope at the time they are defined. This makes them especially useful in callbacks and event handlers where you want to preserve the outer 'this'."

  - id: 3
    type: multiple-choice
    question: "What does 'typeof null' return in JavaScript?"
    options: ["'null'", "'undefined'", "'object'", "'boolean'"]
    answer: "'object'"
    explanation: "typeof null returning 'object' is a well-known bug in JavaScript that dates back to its original implementation in 1995. It was never fixed to preserve backwards compatibility with existing code. To check for null specifically, use strict equality: value === null."

  - id: 4
    type: multiple-choice
    question: "Which method removes the last element from an array?"
    options: ["shift()", "pop()", "splice()", "slice()"]
    answer: "pop()"
    explanation: "pop() removes and returns the last element of an array (mutates the original). shift() removes the first element. splice() removes elements at any position. slice() returns a shallow copy of a portion without modifying the original."

  - id: 5
    type: select-all
    question: "Which of these are falsy values in JavaScript?"
    options: ["0", "''", "null", "[]", "undefined", "false"]
    answers: ["0", "''", "null", "undefined", "false"]
    explanation: "The 6 falsy values in JavaScript are: false, 0, '' (empty string), null, undefined, and NaN. Note that [] (empty array) and {} (empty object) are TRUTHY — even though they are 'empty', they are objects and objects are always truthy."

  - id: 6
    type: fill-blank
    question: "The ___ operator is used to spread elements of an array."
    answer: "spread"
    accept: ["spread", "...", "spread operator"]
    explanation: "The spread operator (...) expands an iterable (like an array) into individual elements. For example: Math.max(...[1, 2, 3]) is equivalent to Math.max(1, 2, 3). It also works for object spreading and function arguments."

  - id: 7
    type: matching
    question: "Match each method to what it returns."
    pairs:
      - left: "map()"
        right: "New array"
      - left: "filter()"
        right: "Filtered array"
      - left: "reduce()"
        right: "Single value"
      - left: "forEach()"
        right: "undefined"
    explanation: "map() transforms each element and returns a new array of the same length. filter() returns a new array with only elements that pass a test. reduce() accumulates all elements into a single value. forEach() is purely for side effects and always returns undefined."
---
