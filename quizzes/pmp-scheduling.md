---
title: "PMP Acronyms - Scheduling"
topic: "Project Management"
description: "Understand the meaning of all abbreviations"
emoji: "💼"
questions:
    - id: 1
      type: fill-blank
      question: "CPM"
      answer: "Critical Path Method"
      accept: ["Critical Path Method", "critical path method"]
      explanation: "A method used to estimate the minimum project duration and determine the amount of scheduling flexibility on the logical network paths within the schedule model."

    - id: 2
      type: fill-blank
      question: "FS"
      answer: "Finish-to-Start"
      accept: ["Finish-to-Start", "finish to start"]
      explanation: "The most common logical relationship in which a successor activity cannot start until a predecessor activity has finished. Most project schedules rely heavily on this dependency."

    - id: 3
      type: fill-blank
      question: "PERT"
      answer: "Program Evaluation and Review Technique"
      accept: ["Program Evaluation and Review Technique", "program evaluation and review technique"]
      explanation: "A technique that applies a weighted average of optimistic, pessimistic, and most likely duration estimates when there is uncertainty with the individual activity estimates."

    - id: 4
      type: fill-blank
      question: "TF"
      answer: "Total Float"
      accept: ["Total Float", "total float", "slack"]
      explanation: "The amount of time that a schedule activity can be delayed or extended from its early start date without delaying the project finish date or violating a schedule constraint."

    - id: 5
      type: fill-blank
      question: "AD"
      answer: "Activity Duration"
      accept: ["Activity Duration"]
      explanation: "The total number of work periods (not including holidays or non-working time) required to complete a specific task."

    - id: 6
      type: fill-blank
      question: "ADM"
      answer: "Arrow Diagram Method"
      accept: ["Arrow Diagram Method"]
      explanation: "A network scheduling technique where arrows represent activities. Unlike PDM (AON), this method mostly focuses on Finish-to-Start relationships and may require 'dummy' activities."

    - id: 7
      type: fill-blank
      question: "ES"
      answer: "Early Start"
      accept: ["Early Start"]
      explanation: "The earliest possible point in time that an activity can begin based on the network logic and any constraints. Determined during the 'Forward Pass' in CPM."

    - id: 8
      type: fill-blank
      question: "EF"
      answer: "Early Finish"
      accept: ["Early Finish"]
      explanation: "The earliest possible point an activity can be completed. Formula: $Early Start + Duration - 1$ (or simply $+ Duration$ depending on the counting convention used)."

    - id: 9
      type: fill-blank
      question: "LS"
      answer: "Late Start"
      accept: ["Late Start"]
      explanation: "The latest possible point an activity can start without delaying the project end date. Determined during the 'Backward Pass' in CPM."

    - id: 10
      type: fill-blank
      question: "LF"
      answer: "Late Finish"
      accept: ["Late Finish"]
      explanation: "The latest an activity can finish without delaying the project. If $LF = EF$, the activity is on the Critical Path."

    - id: 11
      type: fill-blank
      question: "SS"
      answer: "Start-to-Start"
      accept: ["Start-to-Start"]
      explanation: "A relationship where Task B cannot start until Task A has started. Often used to show tasks that can overlap significantly."

    - id: 12
      type: fill-blank
      question: "FF"
      answer: "Finish-to-Finish"
      accept: ["Finish-to-Finish"]
      explanation: "A relationship where Task B cannot finish until Task A has finished. Often used for related activities that must wrap up at the same time."

    - id: 13
      type: fill-blank
      question: "SF"
      answer: "Start-to-Finish"
      accept: ["Start-to-Finish"]
      explanation: "The rarest relationship. Task B cannot finish until Task A starts. An example is a night shift security guard (Task B) who cannot finish their shift until the morning guard (Task A) starts theirs."

    - id: 14
      type: fill-blank
      question: "GERT"
      answer: "Graphical Evaluation and Review Technique"
      accept: ["Graphical Evaluation and Review Technique"]
      explanation: "A sophisticated network analysis technique that allows for loops (repeating a task) and conditional branching (if Test A fails, go back to step 1), which standard CPM does not allow."

    - id: 15
      type: fill-blank
      question: "LOB"
      answer: "Line of Balance"
      accept: ["Line of Balance"]
      explanation: "A management technique for repetitive work, commonly used in manufacturing or construction with identical units (like building 50 identical houses), to ensure a steady flow of production."

    - id: 16
      type: fill-blank
      question: "AOA"
      answer: "Activity-on-Arrow"
      accept: ["Activity on Arrow"]
      explanation: "A network diagramming technique where activities are represented by arrows and connected at nodes (events). It only allows for Finish-to-Start relationships."

    - id: 17
      type: fill-blank
      question: "PDM"
      answer: "Precedence Diagram Method"
      accept: ["Precedence Diagram Method"]
      explanation: "A technique used for constructing a schedule model in which activities are represented by nodes and are graphically linked by one or more logical relationships."

    - id: 18
      type: fill-blank
      question: "AON"
      answer: "Activity-on-Node"
      accept: ["Activity-on-Node", "Activity on Node", "activity on node"]
      explanation: "The modern standard network diagramming technique where activities are represented by boxes (nodes) and arrows show logical dependencies. It is the basis for the Precedence Diagram Method (PDM) and supports all four dependency types: FS, FF, SS, and SF."

    - id: 19
      type: fill-blank
      question: "SD"
      answer: "Standard Deviation"
      accept: ["Standard Deviation", "standard deviation"]
      explanation: "A statistical measure of how spread out the range of estimates is from the mean in a PERT analysis. Formula: $(P - O) / 6$. A smaller SD indicates higher confidence in the estimate; a larger SD indicates more uncertainty."
---
