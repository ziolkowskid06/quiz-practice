---
title: "Agile Principles & Ceremonies"
topic: "Project Management"
description: "Master the four Scrum ceremonies and all 12 Agile Manifesto principles tested on the PMP exam."
emoji: "🔄"
questions:
  - id: 1
    type: true-false
    question: "The Daily Stand-up is a status report to management."
    answer: false
    explanation: "The Daily Stand-up is a team-owned planning session for the next 24 hours. Its purpose is to surface blockers and coordinate work — not to report status upward. Treating it as a management status meeting undermines team ownership and self-organization."

  - id: 2
    type: multiple-choice
    question: "What is the primary purpose of Sprint Planning?"
    options: ["Set the Sprint goal and select backlog items the team commits to", "Report project status to stakeholders", "Review the previous Sprint's increment for acceptance", "Improve the team's process for the next iteration"]
    answer: "Set the Sprint goal and select backlog items the team commits to"
    explanation: "Sprint Planning answers two questions: What can we deliver this cycle? and How will we do it? The team pulls work from the backlog themselves — the Scrum Master facilitates but never assigns tasks."

  - id: 3
    type: true-false
    question: "Backlog Refinement is one of the 5 official Scrum events as defined by the Scrum Guide."
    answer: false
    explanation: "The 5 official Scrum events are: the Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. Backlog Refinement is an ongoing activity, not a formal event. PMP prep material commonly treats it as a ceremony — but the Scrum Guide does not list it as an official event."

  - id: 4
    type: multiple-choice
    question: "Which Scrum ceremony is best described as Lessons Learned done every two weeks?"
    options: ["Sprint Planning", "Sprint Review", "Sprint Retrospective", "Backlog Refinement"]
    answer: "Sprint Retrospective"
    explanation: "The Retrospective focuses on HOW the team worked — process, people, and tools. In Waterfall, Lessons Learned are documented once at close and rarely consulted. In Agile, improvements are selected and actioned at the end of every Sprint (Kaizen)."

  - id: 5
    type: fill-blank
    question: "Backlog Refinement is the Agile equivalent of ___, where large Epics are progressively broken into smaller, estimable User Stories as the team approaches them."
    answer: "Progressive Elaboration"
    accept: ["progressive elaboration"]
    explanation: "Progressive Elaboration means detailing work as more information becomes available. Backlog Refinement embodies this by continuously decomposing future backlog items — ensuring stories are Ready before they enter a Sprint."

  - id: 6
    type: multiple-choice
    question: "What is the maximum time-box for a Daily Stand-up?"
    options: ["5 minutes", "15 minutes", "30 minutes", "1 hour"]
    answer: "15 minutes"
    explanation: "The Daily Stand-up is time-boxed to 15 minutes. It is a brief synchronization point, not a full status meeting. Keeping it short ensures the team surfaces blockers quickly without consuming productive work time."

  - id: 7
    type: select-all
    question: "Which of the following statements about the Sprint Retrospective are TRUE? Select all that apply."
    options: ["It focuses on the process and team dynamics, not the product increment", "It produces a potentially shippable product increment", "It is the primary Agile practice for Continuous Improvement (Kaizen)", "It examines what was built rather than how it was built", "The team selects improvements to implement in the very next Sprint"]
    answers: ["It focuses on the process and team dynamics, not the product increment", "It is the primary Agile practice for Continuous Improvement (Kaizen)", "The team selects improvements to implement in the very next Sprint"]
    explanation: "The Retrospective is about HOW the team works (process). The Sprint Review covers WHAT was built (product). Improvements are chosen and actioned immediately — making Kaizen a living practice, not a shelf document."

  - id: 8
    type: matching
    question: "Match each Scrum ceremony to its primary focus."
    pairs:
      - left: "Sprint Planning"
        right: "The What and How for the upcoming Sprint"
      - left: "Backlog Refinement"
        right: "Detailing and estimating future backlog items"
      - left: "Daily Stand-up"
        right: "Daily coordination and impediment removal"
      - left: "Sprint Retrospective"
        right: "Team process improvement (Kaizen)"
    explanation: "Each ceremony serves a distinct purpose. Confusing the Sprint Review (product inspection) with the Sprint Retrospective (process inspection) is one of the most common PMP exam traps."

  - id: 9
    type: true-false
    question: "In Sprint Planning, the Scrum Master assigns specific tasks to individual team members."
    answer: false
    explanation: "The team self-organizes and pulls work from the backlog. The Scrum Master facilitates but never assigns tasks — assigning work is command-and-control behavior, the opposite of Servant Leadership."

  - id: 10
    type: multiple-choice
    question: "During the Daily Stand-up a team member identifies a blocker. What is the Scrum Master's correct response?"
    options: ["Solve the blocker during the 15-minute meeting", "Note the impediment and resolve it after the meeting", "Escalate the blocker directly to the project sponsor", "Remove the blocked story from the Sprint backlog immediately"]
    answer: "Note the impediment and resolve it after the meeting"
    explanation: "The Stand-up surfaces blockers — it does not solve them. The Scrum Master notes the impediment and removes it after the meeting. Solving it during the Stand-up would extend the time-box and distract the rest of the team."

  - id: 11
    type: fill-blank
    question: "The Sprint ___ examines what was built (the product), while the Sprint Retrospective examines how it was built (the process)."
    answer: "Review"
    accept: ["review"]
    explanation: "The Sprint Review is a product inspection with stakeholders — a value check. The Retrospective is the team's internal look at process, tools, and collaboration. Mixing these two events up is a classic PMP exam trap."

  - id: 12
    type: true-false
    question: "In Agile, the Sprint Retrospective replaces end-of-project Lessons Learned — improvements are captured and actioned every Sprint rather than filed away at project close."
    answer: true
    explanation: "Waterfall Lessons Learned are often archived and never applied. The Retrospective makes improvement a living practice by identifying and implementing process changes at the end of every Sprint — before problems calcify."

  - id: 13
    type: select-all
    question: "Which of the following activities occur during Backlog Refinement? Select all that apply."
    options: ["Breaking Epics into smaller, estimable User Stories", "Formally releasing the Sprint increment to customers", "Verifying that items are Ready before they enter a Sprint", "Assigning tasks to individual developers", "Estimating upcoming backlog items collaboratively"]
    answers: ["Breaking Epics into smaller, estimable User Stories", "Verifying that items are Ready before they enter a Sprint", "Estimating upcoming backlog items collaboratively"]
    explanation: "Refinement prepares the backlog — decomposing, clarifying, and estimating future items so they are Ready to be pulled into a Sprint. Formal releases happen at the Sprint Review; task assignments happen during Sprint Planning by the team."

  - id: 14
    type: multiple-choice
    question: "Why is the Daily Stand-up NOT considered a status report to management?"
    options: ["Management is never permitted to attend the meeting", "It is a team planning session focused on coordination and blocker removal for the next 24 hours", "Status reports are only sent monthly in Agile", "The Scrum Master provides a separate status report to the sponsor"]
    answer: "It is a team planning session focused on coordination and blocker removal for the next 24 hours"
    explanation: "The Stand-up is team-owned and team-focused. Developers coordinate among themselves and surface blockers — not report upward. Treating it as a management status meeting shifts accountability from the team to the PM, undermining self-organization."

  - id: 15
    type: true-false
    question: "According to the Agile Manifesto, working software is the primary measure of progress."
    answer: true
    explanation: "Agile Principle 7 states this explicitly. Unlike Waterfall, where percent-complete or milestones are used, Agile measures progress by functional, working software delivered to the customer — an objective fact rather than a subjective guess."

  - id: 16
    type: multiple-choice
    question: "Agile Manifesto Principle 10 defines simplicity as the art of maximizing the amount of work ___ — it is essential."
    options: ["completed on time", "not done", "done by the team", "approved by the customer"]
    answer: "not done"
    explanation: "Principle 10 is the Agile defense against Gold Plating and Scope Creep. It challenges teams to ask whether work is truly needed before committing resources — maximizing value by eliminating unnecessary effort."

  - id: 17
    type: fill-blank
    question: "Agile Principle 8 promotes ___ development, meaning the team maintains a constant, indefinite working pace without burnout."
    answer: "sustainable"
    accept: ["sustainable"]
    explanation: "Principle 8 directly attacks the Death March pattern common in late-stage Waterfall projects. If a team is consistently working overtime, the root cause is poor capacity planning or scope management — not insufficient effort."

  - id: 18
    type: multiple-choice
    question: "Which group of Agile Manifesto principles best aligns with the PMI concept of Servant Leadership and team empowerment?"
    options: ["Value Delivery Shift (Principles 1, 3, 7)", "Change and Response Shift (Principles 2, 10)", "Human and Team Shift (Principles 4, 5, 6, 11, 12)", "Sustainability and Quality Shift (Principles 8, 9)"]
    answer: "Human and Team Shift (Principles 4, 5, 6, 11, 12)"
    explanation: "Principles 4-6 and 11-12 cover daily collaboration, motivated individuals, face-to-face communication, self-organizing teams, and regular reflection — all direct expressions of Servant Leadership and psychological safety."

  - id: 19
    type: select-all
    question: "Which of the following principles belong to the Agile Value Delivery Shift (Principles 1, 3, and 7)? Select all that apply."
    options: ["Satisfy the customer through early and continuous delivery", "Welcome changing requirements even late in development", "Deliver working software frequently", "Working software is the primary measure of progress", "Continuous attention to technical excellence enhances agility"]
    answers: ["Satisfy the customer through early and continuous delivery", "Deliver working software frequently", "Working software is the primary measure of progress"]
    explanation: "Principles 1, 3, and 7 all focus on delivering tangible value early and often. They reject big-bang delivery and percent-complete metrics in favor of working software as proof of real progress."

  - id: 20
    type: true-false
    question: "Agile Principle 9 states that continuous attention to technical excellence HINDERS agility by slowing down delivery."
    answer: false
    explanation: "Principle 9 states the opposite: continuous technical excellence ENHANCES agility. Cutting corners creates Technical Debt that slows future delivery. Quality is a strategic investment that enables speed — not an obstacle to it."

  - id: 21
    type: multiple-choice
    question: "The Sprint Retrospective is a direct application of which Agile Manifesto principle?"
    options: ["Principle 1 — Satisfy the customer through early delivery", "Principle 9 — Continuous attention to technical excellence", "Principle 12 — Regular reflection and tuning", "Principle 6 — Face-to-face conversation"]
    answer: "Principle 12 — Regular reflection and tuning"
    explanation: "Principle 12 states: at regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior. The Sprint Retrospective is the direct mechanism for implementing this principle every iteration."

  - id: 22
    type: matching
    question: "Match each Agile Manifesto principle number to its core message."
    pairs:
      - left: "Principle 1"
        right: "Satisfy the customer through early and continuous delivery"
      - left: "Principle 5"
        right: "Build around motivated individuals and trust them to get the job done"
      - left: "Principle 10"
        right: "Maximize the amount of work NOT done — simplicity is essential"
      - left: "Principle 12"
        right: "Reflect at regular intervals and tune behavior to improve"
    explanation: "These four principles span value delivery (1), team empowerment (5), lean thinking (10), and continuous improvement (12) — four of the most frequently tested Manifesto principles on the PMP exam."

  - id: 23
    type: true-false
    question: "Viewed together, the 12 Agile Manifesto principles function as a Risk Management Framework — each principle mitigates a common reason Waterfall projects fail."
    answer: true
    explanation: "Early delivery reduces the risk of building the wrong thing. Daily communication reduces silo risk. Regular reflection prevents process stagnation. Simplicity prevents gold plating. Each principle targets a specific failure mode of traditional project management."

  - id: 24
    type: multiple-choice
    question: "Agile Principle 11 states that the best architectures, requirements, and designs emerge from:"
    options: ["The Project Manager's upfront planning decisions", "Self-organizing teams", "Detailed requirements documentation in the initiation phase", "The Product Owner working independently"]
    answer: "Self-organizing teams"
    explanation: "Principle 11 shifts the PM from Chief Architect to Facilitator. The people closest to the work have the deepest insight — empowering self-organization produces better technical outcomes than top-down design."

  - id: 25
    type: fill-blank
    question: "According to Agile Principle 6, the most efficient and effective method of conveying information to and within a development team is ___."
    answer: "face-to-face conversation"
    accept: ["face to face conversation", "face-to-face", "face to face"]
    explanation: "Principle 6 prioritizes direct conversation because documents can be misinterpreted, but tone and body language clarify intent immediately. This principle is the Agile justification for the Daily Stand-up over written status reports."

  - id: 26
    type: select-all
    question: "Which of the following accurately describe the Sustainability and Quality Shift (Principles 8 and 9)? Select all that apply."
    options: ["Agile teams should maintain a constant pace indefinitely without burnout", "Deliver working software as the primary measure of progress", "Continuous attention to technical excellence enhances agility", "Self-organizing teams produce the best architectures", "Consistent overtime signals a failure of capacity planning, not insufficient effort"]
    answers: ["Agile teams should maintain a constant pace indefinitely without burnout", "Continuous attention to technical excellence enhances agility", "Consistent overtime signals a failure of capacity planning, not insufficient effort"]
    explanation: "Principles 8 and 9 protect the team (from burnout) and the codebase (from Technical Debt). Principle 7 (working software) belongs to Value Delivery; Principle 11 (self-organizing teams) belongs to Human and Team."

  - id: 27
    type: true-false
    question: "Agile Principle 2 — welcoming changing requirements — applies ONLY during the early stages of development."
    answer: false
    explanation: "Principle 2 explicitly states: welcome changing requirements, even LATE in development. In Agile, late change is a competitive advantage used to serve the customer — not a failure of planning as it would be in Waterfall."

  - id: 28
    type: multiple-choice
    question: "Which Agile Manifesto principle most directly defends against both Gold Plating and Scope Creep?"
    options: ["Principle 1 — Early and continuous delivery", "Principle 7 — Working software as the measure of progress", "Principle 10 — Maximizing the amount of work not done", "Principle 12 — Regular reflection and tuning"]
    answer: "Principle 10 — Maximizing the amount of work not done"
    explanation: "Principle 10 (Simplicity) instructs teams to only build what is immediately needed. It directly counters Gold Plating (building unrequested extras) and Scope Creep (uncontrolled scope expansion) by making waste elimination a core team value."

  - id: 29
    type: fill-blank
    question: "Technical Debt accumulates when teams violate Agile Principle ___, which demands continuous attention to technical excellence and good design."
    answer: "9"
    accept: ["9", "nine"]
    explanation: "When teams cut corners on quality to meet a Sprint deadline, they violate Principle 9 and accumulate Technical Debt — code that is increasingly difficult to maintain and extend, paradoxically slowing future delivery."
---
