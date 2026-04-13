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

  - id: 4
    type: multiple-choice
    question: "Which method removes the last element from an array?"
    options: ["shift()", "pop()", "splice()", "slice()"]
    answer: "pop()"

  - id: 5
    type: select-all
    question: "Which of these are falsy values in JavaScript?"
    options: ["0", "''", "null", "[]", "undefined", "false"]
    answers: ["0", "''", "null", "undefined", "false"]

  - id: 6
    type: fill-blank
    question: "The ___ operator is used to spread elements of an array."
    answer: "spread"
    accept: ["spread", "...", "spread operator"]

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
---
