---
title: "Quiz Functionality Test"
topic: "General"
description: "A test quiz covering all five question types."
emoji: "🧪"
questions:
  - id: 1
    type: true-false
    question: "The Earth orbits the Sun."
    answer: true
    explanation: "Earth is the third planet from the Sun and completes one full orbit around it every 365.25 days — which is why we have a leap year every four years."

  - id: 2
    type: multiple-choice
    question: "What is the capital of Japan?"
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"]
    answer: "Tokyo"

  - id: 3
    type: select-all
    question: "Which of these are planets in our solar system?"
    options: ["Mars", "Pluto", "Venus", "Andromeda", "Saturn"]
    answers: ["Mars", "Venus", "Saturn"]

  - id: 4
    type: fill-blank
    question: "The capital of Australia is ___."
    answer: "Canberra"
    accept: ["canberra", "Canberra"]

  - id: 5
    type: matching
    question: "Match each country to its capital city."
    pairs:
      - left: "Germany"
        right: "Berlin"
      - left: "Italy"
        right: "Rome"
      - left: "Spain"
        right: "Madrid"
---
