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
    explanation: "Tokyo is the capital and largest city of Japan, with a greater metropolitan population of over 37 million people — making it the most populous metropolitan area in the world. Japan's capital was moved from Kyoto to Tokyo in 1869."

  - id: 3
    type: select-all
    question: "Which of these are planets in our solar system?"
    options: ["Mars", "Pluto", "Venus", "Andromeda", "Saturn"]
    answers: ["Mars", "Venus", "Saturn"]
    explanation: "Mars, Venus, and Saturn are all planets in our solar system. Pluto was reclassified as a dwarf planet in 2006. Andromeda is not a planet — it is a galaxy (the Andromeda Galaxy), the nearest large galaxy to the Milky Way."

  - id: 4
    type: fill-blank
    question: "The capital of Australia is ___."
    answer: "Canberra"
    accept: ["canberra", "Canberra"]
    explanation: "Canberra became Australia's capital in 1913. It was chosen as a compromise between the rival cities of Sydney and Melbourne, both of which wanted to be the capital. Canberra is a planned city, purpose-built for its role as the seat of government."

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
    explanation: "Berlin has been Germany's capital since reunification in 1990 (and before the division in 1945). Rome has been Italy's capital since 1871 when it became part of the unified Kingdom of Italy. Madrid has been Spain's capital since 1561 when King Philip II moved the court there."
---
