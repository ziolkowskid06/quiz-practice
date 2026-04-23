---
title: "Agile Frameworks, Life Cycles & Tools"
topic: "Project Management"
description: "Test your mastery of project life cycles, phase gates, Agile frameworks (Scrum, Kanban, XP, FDD, AUP, Crystal, Scrumban), and Agile tools (charts, story points, swarming, roadmap grooming)."
emoji: "🗂️"
questions:
  - id: 1
    type: true-false
    question: "In PMI terminology, 'Plan-Driven' and 'Predictive' are used interchangeably to describe the same lifecycle approach."
    answer: true
    explanation: "Both terms describe a lifecycle where the plan drives the work and scope is fully defined upfront. PMI uses them as synonyms — both assume that thorough planning allows the project to predict and execute with minimal change."

  - id: 2
    type: multiple-choice
    question: "When should a project manager choose an Adaptive (Agile) lifecycle over a Predictive one?"
    options: ["When scope is fully defined and the technical solution is well-understood", "When requirements are evolving and the technical path is unclear", "When baseline management is the primary success factor", "When the project must deliver one large release at the end"]
    answer: "When requirements are evolving and the technical path is unclear"
    explanation: "The Adaptive lifecycle is chosen when requirements and/or technical approach carry high uncertainty. It accepts that not everything can be known upfront and delivers value through frequent increments, adapting to feedback after every Sprint."

  - id: 3
    type: true-false
    question: "An Adaptive (Agile) lifecycle delivers all project value in one 'Big Bang' release at the end."
    answer: false
    explanation: "Adaptive lifecycles deliver value in frequent, small, usable increments after each iteration. Big Bang delivery is the hallmark of a Predictive lifecycle. Continuous incremental delivery is a defining characteristic of Agile."

  - id: 4
    type: multiple-choice
    question: "According to PMBOK 6 (Section 1.2.4.3), which of the following is NOT a synonym for Phase Gate?"
    options: ["Kill Point", "Stage Gate", "Sprint Review", "Phase Exit"]
    answer: "Sprint Review"
    explanation: "PMBOK 6 explicitly lists Kill Point, Phase Review, Stage Gate, Phase Entrance, and Phase Exit as synonyms for Phase Gate. The Sprint Review is an Agile ceremony — a product value check — not a formal governance gate."

  - id: 5
    type: fill-blank
    question: "Phase Gates are called '___ Points' when the emphasis is on the organization's ability to formally stop a project that no longer provides business value."
    answer: "Kill"
    accept: ["kill"]
    explanation: "The term 'Kill Point' emphasizes the governance purpose of Phase Gates: giving the organization a structured opportunity to stop a failing or misaligned project rather than continuing due to the sunk cost fallacy."

  - id: 6
    type: select-all
    question: "Which of the following are synonyms for Phase Gate as defined in PMBOK 6 Section 1.2.4.3? Select all that apply."
    options: ["Phase Review", "Sprint Review", "Stage Gate", "Kill Point", "Phase Exit"]
    answers: ["Phase Review", "Stage Gate", "Kill Point", "Phase Exit"]
    explanation: "PMBOK 6 lists Phase Review, Stage Gate, Kill Point, Phase Entrance, and Phase Exit as all referring to the same formal governance event. Sprint Review is an Agile ceremony and is not in this list."

  - id: 7
    type: multiple-choice
    question: "What PMI mindset does the Phase Gate reinforce by allowing sponsors to formally stop a project that no longer serves organizational strategy?"
    options: ["Baseline Management", "Fighting the Sunk Cost Fallacy", "Continuous Delivery", "Scope Baseline Control"]
    answer: "Fighting the Sunk Cost Fallacy"
    explanation: "A core PMI mindset is that money already spent (sunk cost) should never justify continuing a failing project. Phase Gates give the sponsor a formal, graceful way to stop the project based on current value — not past investment."

  - id: 8
    type: true-false
    question: "In an Agile lifecycle, the Sprint Review serves the same governance role as a Waterfall Phase Gate — both are formal Go/No-Go decisions."
    answer: false
    explanation: "A Waterfall Phase Gate is a governance check (Go/No-Go to proceed or kill). An Agile Sprint Review is a value check — the Product Owner inspects the increment and decides whether to release or keep iterating. The Sprint Review is not a kill-point governance event."

  - id: 9
    type: multiple-choice
    question: "A project involves stable hardware procurement alongside experimental software development. Which lifecycle best fits this situation?"
    options: ["Predictive", "Adaptive", "Hybrid", "Plan-Driven"]
    answer: "Hybrid"
    explanation: "A Hybrid lifecycle uses Predictive for stable, well-understood work (hardware procurement) and Adaptive for uncertain, evolving work (software development). This is the PMI expression of Tailoring — fitting the approach to each work package's specific uncertainty level."

  - id: 10
    type: fill-blank
    question: "In an Adaptive lifecycle, instead of managing a static scope baseline, the project manager manages a ___ that is continuously re-prioritized to ensure the highest-value work is always executed first."
    answer: "Backlog"
    accept: ["backlog", "product backlog"]
    explanation: "The Backlog replaces the static scope baseline in Agile. It is a living, prioritized list of work items that can change as the team learns. Value-Driven Delivery means always working on the most important item — not just what was planned at the start."

  - id: 11
    type: select-all
    question: "Which of the following are characteristics of an Adaptive lifecycle? Select all that apply."
    options: ["Scope is fully defined and fixed upfront", "Requirements are welcomed to change even late in development", "Delivery occurs in frequent, small increments", "Success is measured by adherence to the original baseline", "The backlog is continuously re-prioritized for maximum value"]
    answers: ["Requirements are welcomed to change even late in development", "Delivery occurs in frequent, small increments", "The backlog is continuously re-prioritized for maximum value"]
    explanation: "Adaptive lifecycles are defined by evolving requirements, incremental delivery, and ongoing backlog prioritization. Fixed scope and baseline adherence are Predictive lifecycle characteristics."

  - id: 12
    type: matching
    question: "Match each lifecycle to its primary characteristic."
    pairs:
      - left: "Predictive"
        right: "Scope fixed upfront; single delivery at project end"
      - left: "Adaptive"
        right: "Evolving requirements; frequent incremental delivery"
      - left: "Hybrid"
        right: "Predictive for stable work; Adaptive for uncertain work"
      - left: "Plan-Driven"
        right: "The plan is the primary driver — a synonym for Predictive"
    explanation: "Each lifecycle maps to a distinct relationship with scope and uncertainty. Predictive and Plan-Driven are synonyms. Hybrid is the ultimate Tailoring expression — choosing the right approach for each work package based on its uncertainty profile."

  - id: 13
    type: multiple-choice
    question: "PMI frames the lifecycle selection decision around two uncertainty questions: 'Do we know WHAT to build?' (Requirements Uncertainty) and:"
    options: ["Do we know the total cost?", "Do we know HOW to build it? (Technical Uncertainty)", "Do we know when it will be done?", "Do we know who the stakeholders are?"]
    answer: "Do we know HOW to build it? (Technical Uncertainty)"
    explanation: "PMI's framework for lifecycle selection asks about Requirements Uncertainty (what) and Technical Uncertainty (how). If both are low, use Predictive. If either is high, move toward Adaptive. If both types of work exist in the same project, use Hybrid."

  - id: 14
    type: true-false
    question: "A 'Phase Review' and a 'Phase Exit' describe the same governance event from different angles — Phase Review emphasizes the evaluation meeting; Phase Exit emphasizes that exit criteria have been met."
    answer: true
    explanation: "PMBOK 6 notes these are the same event described differently. Phase Review/Stage Review terms emphasize the meeting/evaluation process. Phase Exit/Gate Exit terms emphasize the formal closure confirmation. In practice, 'Phase Gate' or 'Stage Gate' are the most common names."

  - id: 15
    type: multiple-choice
    question: "When deciding whether to proceed past a Phase Gate, which document is the primary reference for confirming the project is still viable and aligned with organizational strategy?"
    options: ["Project Schedule", "Business Case", "Risk Register", "Lessons Learned Register"]
    answer: "Business Case"
    explanation: "The Phase Gate exists to ensure the project remains aligned with the Business Case — the documented justification for the project's existence and expected ROI. If the project no longer delivers the expected value, the Gate is the governance mechanism to stop it."

  - id: 16
    type: multiple-choice
    question: "Which Agile framework is best suited for high-volume, unpredictable work such as production support and help-desk operations?"
    options: ["Scrum", "XP", "Kanban", "FDD"]
    answer: "Kanban"
    explanation: "Kanban is flow-based with no fixed Sprints, making it ideal for unpredictable, continuous work. Its WIP limits surface bottlenecks and its pull-based system prevents overload. Scrum's two-week time-box suits predictable product development better than support operations."

  - id: 17
    type: true-false
    question: "Kanban uses fixed-length Sprints just like Scrum."
    answer: false
    explanation: "Kanban is a flow-based system with no fixed Sprint time-boxes. Work moves through the board continuously as capacity becomes available. This distinction — flow vs. time-box — is a common PMP exam trap between Kanban and Scrum."

  - id: 18
    type: fill-blank
    question: "XP's practice in which two developers share a single workstation — one writing code and one reviewing in real time — is called ___ Programming."
    answer: "Pair"
    accept: ["pair", "Pair"]
    explanation: "Pair Programming is a core XP practice that makes code review continuous. It reinforces Agile Principle 9 (technical excellence) by catching defects at the moment of creation rather than weeks later in QA."

  - id: 19
    type: multiple-choice
    question: "Which Agile framework is described as 'barely sufficient' — a family of methods that right-sizes process weight based on team size and project criticality?"
    options: ["Scrum", "Crystal", "Scrumban", "AUP"]
    answer: "Crystal"
    explanation: "Crystal (created by Alistair Cockburn) is a family of color-coded methods — Crystal Clear, Crystal Yellow, Crystal Orange, etc. — that scale process weight to team size and risk. Smaller, lower-risk teams use lighter processes; larger, safety-critical teams use heavier ones."

  - id: 20
    type: select-all
    question: "Which of the following are core practices of eXtreme Programming (XP)? Select all that apply."
    options: ["Pair Programming", "Sprint Retrospective", "Test-Driven Development (TDD)", "Continuous Integration", "WIP Limits"]
    answers: ["Pair Programming", "Test-Driven Development (TDD)", "Continuous Integration"]
    explanation: "XP's core engineering practices are Pair Programming (continuous code review), TDD (write tests before code), and Continuous Integration (frequent code merging to catch integration errors early). Sprint Retrospective is a Scrum event; WIP Limits are a Kanban concept."

  - id: 21
    type: multiple-choice
    question: "Which Agile framework bridges Waterfall and Agile by retaining traditional lifecycle phases (Inception, Elaboration, Construction, Transition) while working iteratively within each phase?"
    options: ["Scrum", "Crystal", "FDD", "Agile Unified Process (AUP)"]
    answer: "Agile Unified Process (AUP)"
    explanation: "AUP is a simplified version of the Rational Unified Process (RUP) that follows 'serial in the large, iterative in the small.' It retains familiar lifecycle phases while working in short iterations — making it the ideal bridge for organizations transitioning from Waterfall."

  - id: 22
    type: matching
    question: "Match each Agile framework to its primary use case."
    pairs:
      - left: "Kanban"
        right: "Continuous flow for high-volume, unpredictable support work"
      - left: "XP"
        right: "High-risk software where technical quality is the primary concern"
      - left: "Crystal"
        right: "Right-sizing process by team size and project criticality"
      - left: "FDD"
        right: "Model-centric delivery for larger teams needing upfront architecture"
    explanation: "Each framework solves a specific problem. Kanban = flow management. XP = technical excellence. Crystal = process scaling. FDD = structured feature delivery for larger teams. Knowing when to choose which framework is a core PMP exam skill."

  - id: 23
    type: multiple-choice
    question: "What is the primary purpose of the Velocity Chart in Agile?"
    options: ["Track work remaining in the current Sprint", "Forecast how much work the team can realistically commit to in future Sprints", "Visualize total scope added by the Product Owner", "Show individual developer productivity"]
    answer: "Forecast how much work the team can realistically commit to in future Sprints"
    explanation: "The Velocity Chart tracks story points completed per Sprint over time. Its primary purpose is capacity planning — using historical performance data to make realistic commitments for future Sprints. Using it to measure individual productivity violates Agile team principles."

  - id: 24
    type: true-false
    question: "A Burndown chart can detect Scope Creep because it shows a separate 'scope' line moving upward when new work is added mid-Sprint."
    answer: false
    explanation: "A Burndown chart only shows work REMAINING — it cannot distinguish between slow progress and scope addition. The Burnup chart has two lines (work done and total scope), making Scope Creep visible when the scope line rises."

  - id: 25
    type: multiple-choice
    question: "A team's Burnup chart shows the 'work done' line rising steadily, but the 'total scope' line is also rising. What does this most likely indicate?"
    options: ["The team is ahead of schedule", "Scope Creep — new work is being added faster than it is completed", "The team has achieved sustainable pace", "The Sprint Retrospective produced improvement items"]
    answer: "Scope Creep — new work is being added faster than it is completed"
    explanation: "The Burnup chart's two-line design makes Scope Creep visible. When the scope line rises alongside or faster than the work-done line, it provides objective evidence that the finish line is moving — enabling a fact-based conversation with stakeholders about trade-offs."

  - id: 26
    type: fill-blank
    question: "Story points use the Modified ___ Sequence (1, 2, 3, 5, 8, 13, 20, 40, 100) because estimation accuracy decreases as tasks grow larger, making large gaps between high values appropriate."
    answer: "Fibonacci"
    accept: ["fibonacci", "Fibonacci"]
    explanation: "The Modified Fibonacci Sequence reflects the Cone of Uncertainty. The large gaps between 13, 20, and 40 acknowledge that a '14-point' story is not meaningfully different from a '13-point' story — the jump to 20 forces honest acknowledgment of high complexity."

  - id: 27
    type: multiple-choice
    question: "Why do Agile teams use story points instead of hours for estimation?"
    options: ["Story points are easier to track in project management software", "Hours require knowing who will do the work; story points measure relative size independent of the individual", "PMI mandates story points on all Agile projects", "Story points can be directly converted to cost for stakeholder budgeting"]
    answer: "Hours require knowing who will do the work; story points measure relative size independent of the individual"
    explanation: "Story points decouple effort from the individual. A 5-point story is a 5-point story regardless of who builds it — the difference appears in velocity (a senior dev completes more points per Sprint). This allows the team to estimate before knowing task assignments."

  - id: 28
    type: true-false
    question: "When a stakeholder asks 'How many hours is a 5-point story?', the PMI-correct response is to provide the conversion to support stakeholder planning."
    answer: false
    explanation: "Converting story points to hours applies Waterfall Fixed-Price thinking to an Agile environment. The PM's role is to protect the team's estimation process. Story points are for team workload management; Velocity (average points per Sprint) is the correct metric for stakeholder roadmap discussions."

  - id: 29
    type: multiple-choice
    question: "A user story is estimated at 40 story points. What action should the team take during Backlog Refinement?"
    options: ["Accept it — large estimates are normal for complex features", "Assign it to the most senior developer immediately", "Decompose it — a 40-point story is likely an Epic that must be broken into smaller, estimable stories", "Defer it to the next Sprint automatically"]
    answer: "Decompose it — a 40-point story is likely an Epic that must be broken into smaller, estimable stories"
    explanation: "A 20- or 40-point story is a red flag that the item is too large (an Epic) and not Ready to pull into a Sprint. Progressive Elaboration — decomposing large items into smaller, estimable stories — is the primary purpose of Backlog Refinement."

  - id: 30
    type: select-all
    question: "Which of the following accurately describe Swarming in Agile? Select all that apply."
    options: ["Multiple team members focus all effort on one high-priority item to complete it quickly", "It is triggered when the end of a Sprint approaches with stories nearly but not fully Done", "The Scrum Master assigns roles during swarming", "It embodies the philosophy of 'Stop Starting, Start Finishing'", "It reduces WIP and eliminates bottlenecks caused by handoffs"]
    answers: ["Multiple team members focus all effort on one high-priority item to complete it quickly", "It is triggered when the end of a Sprint approaches with stories nearly but not fully Done", "It embodies the philosophy of 'Stop Starting, Start Finishing'", "It reduces WIP and eliminates bottlenecks caused by handoffs"]
    explanation: "Swarming is a collaborative WIP-reduction technique. The trigger is a stuck or nearly-done high-priority story. The Scrum Master never assigns tasks — the team self-organizes. Swarming maximizes throughput (value delivered) over utilization (individuals staying busy)."

  - id: 31
    type: multiple-choice
    question: "Roadmap Grooming differs from Backlog Refinement primarily in that it focuses on:"
    options: ["Decomposing User Stories into tasks for the next Sprint", "Adjusting strategic Themes, Epics, and milestone dates to keep the long-term plan aligned with business goals", "Estimating individual story points for the upcoming iteration", "Reviewing the Sprint increment with stakeholders for acceptance"]
    answer: "Adjusting strategic Themes, Epics, and milestone dates to keep the long-term plan aligned with business goals"
    explanation: "Roadmap Grooming is strategic (horizon: months to quarters), involving the PM, Product Owner, and stakeholders. Backlog Refinement is tactical (horizon: next 1–2 Sprints), involving the Scrum team. Confusing their horizons and participants is a common exam trap."

  - id: 32
    type: matching
    question: "Match each Agile chart to what it primarily tracks."
    pairs:
      - left: "Velocity Chart"
        right: "Story points completed per Sprint — used for future capacity forecasting"
      - left: "Task Board"
        right: "In-flight work status across To Do, In Progress, and Done"
      - left: "Burndown Chart"
        right: "Work remaining in the current Sprint vs. the ideal completion line"
      - left: "Burnup Chart"
        right: "Work done vs. total scope — reveals Scope Creep when scope line rises"
    explanation: "Each chart is an information radiator with a distinct purpose. Velocity = future planning. Task Board = daily workflow transparency. Burndown = daily progress monitoring. Burnup = scope integrity. Knowing which chart to reference in a given scenario is a key PMP exam skill."

  - id: 33
    type: true-false
    question: "Scrumban eliminates all Sprint cadence and event structure from Scrum, replacing it entirely with continuous Kanban flow."
    answer: false
    explanation: "Scrumban is a hybrid that retains Scrum's roles and events (retrospectives, daily standups) while adding Kanban's WIP limits and pull-based planning. It relaxes rigid Sprint boundaries for unpredictable work — it does not eliminate Scrum structure entirely."

  - id: 34
    type: select-all
    question: "Which of the following activities typically occur during a Roadmap Grooming session? Select all that apply."
    options: ["Re-prioritizing strategic Themes based on current risks or market shifts", "Breaking User Stories into tasks for Sprint Planning", "Adjusting ROM estimates for future Epics based on actual team velocity", "Updating milestone dates using Trend Analysis from recent Sprint data", "Formally accepting the Sprint increment for customer release"]
    answers: ["Re-prioritizing strategic Themes based on current risks or market shifts", "Adjusting ROM estimates for future Epics based on actual team velocity", "Updating milestone dates using Trend Analysis from recent Sprint data"]
    explanation: "Roadmap Grooming re-prioritizes Themes, updates ROM estimates, and refreshes milestone dates at a strategic level. Breaking stories into tasks is Sprint Planning; accepting increments is the Sprint Review — both are separate Scrum ceremonies."

  - id: 35
    type: multiple-choice
    question: "Feature-Driven Development (FDD) is best suited for which type of project environment?"
    options: ["Small start-up teams needing minimal process overhead", "Large or corporate teams requiring upfront architectural modeling before feature delivery", "Production support teams handling unpredictable ticket volumes", "High-risk software projects where technical quality is the primary concern"]
    answer: "Large or corporate teams requiring upfront architectural modeling before feature delivery"
    explanation: "FDD's 5-step process (Develop Overall Model → Build Features List → Plan → Design → Build by Feature) provides more upfront structure than Scrum. It is designed for larger teams or corporate environments where some architectural modeling is needed before feature-level iteration begins."
---
