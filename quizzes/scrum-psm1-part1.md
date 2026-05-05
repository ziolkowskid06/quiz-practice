---
title: "PSM I — Part 1: Scrum Foundations"
topic: "PMP"
description: "Scrum theory, empiricism, the Scrum Team, and core framework concepts."
emoji: "🏗️"
questions:
  - id: 1
    type: multiple-choice
    question: "In the waterfall methodology, the duration of activities like development and testing are:"
    options:
      - "Planned to be fixed irrespective of any calculation (time-boxed)"
      - "Predicted using some calculations based on \"today's weather\""
      - "Never decided upfront"
    answer: "Predicted using some calculations based on \"today's weather\""
    explanation: "Waterfall uses upfront estimation (\"today's weather\" forecasting) to predict how long each phase will take based on known data, committing to those durations in a plan. Scrum differs by using time-boxing: Sprints have a fixed maximum duration regardless of how much work remains. The trap is confusing waterfall's estimation-based scheduling with Scrum's fixed time-boxes."

  - id: 2
    type: true-false
    question: "In waterfall, the project team often gets early feedback from customers or markets about the product they are building, so they can act on this feedback on time."
    answer: false
    explanation: "Waterfall defers customer feedback until late in the cycle — typically at acceptance testing after development is complete. This is one of the core problems Scrum addresses through Sprints and Sprint Reviews, which create frequent inspect-and-adapt opportunities with stakeholders. The trap is assuming that planned review gates in waterfall constitute 'early' feedback."

  - id: 3
    type: select-all
    question: "What factors will increase complexity? Select all that apply."
    options:
      - "Larger number of people on the project"
      - "Longer duration of the project"
      - "Batching of a large number of features into one big release"
    answers:
      - "Larger number of people on the project"
      - "Longer duration of the project"
      - "Batching of a large number of features into one big release"
    explanation: "All three factors increase complexity: more people multiply communication channels and coordination overhead; longer duration expands exposure to changing conditions; large batch releases delay feedback and compound the cost of late defects. Scrum counteracts all three by keeping teams small (3–9 Developers), using short Sprints, and delivering an Increment every Sprint."

  - id: 4
    type: multiple-choice
    question: "Building complex products like software is a complex adaptive problem. Complex adaptive problems are:"
    options:
      - "Deterministic."
      - "Stochastic."
      - "Hard to predict even using past history."
    answer: "Hard to predict even using past history."
    explanation: "Complex adaptive problems are non-deterministic and non-linear — past experience cannot reliably predict future outcomes because the problem space changes as work proceeds. This is why Scrum uses empiricism (transparency, inspection, adaptation) rather than detailed upfront planning. The trap is choosing 'stochastic' — stochastic implies randomness within a known distribution, which still permits modelling, whereas complex adaptive problems cannot be reliably modelled at all."

  - id: 5
    type: select-all
    question: "Empiricism provides:"
    options:
      - "Frequent feedback opportunities to obtain information that can be used to plan better and eliminate the uncertainty."
      - "Frequent opportunities to discuss different possibilities."
      - "Frequent opportunities to make informed decisions thus reducing risk."
    answers:
      - "Frequent opportunities to discuss different possibilities."
      - "Frequent opportunities to make informed decisions thus reducing risk."
    explanation: "Empiricism — the foundation of Scrum — is grounded in transparency, inspection, and adaptation, enabling the team to discuss possibilities and make informed decisions to reduce risk. Option (a) is a trap: while Scrum does use feedback loops, empiricism does not 'eliminate' uncertainty; it manages it by making decisions based on what is actually known, not by planning it away."

  - id: 6
    type: multiple-choice
    question: "Scrum is a newer way of doing things to address complex problems because it:"
    options:
      - "Offers new terminology for traditional practices."
      - "Is easier to master than the traditional way."
      - "Increases the opportunity to control risk and optimizes the predictability of progress."
      - "Is closely associated with emerging technologies."
    answer: "Increases the opportunity to control risk and optimizes the predictability of progress."
    explanation: "The Scrum Guide states that Scrum 'increases the opportunity to control risk and optimizes the predictability of progress' through its empirical, iterative approach. The traps are (a) — Scrum's terminology is genuinely new, but that is not why it addresses complexity — and (b) — the Scrum Guide explicitly warns that Scrum is easy to understand but difficult to master."

  - id: 7
    type: multiple-choice
    question: "Scrum effectively limits the risk of unknowingly doing something wrong by:"
    options:
      - "Having a detailed and extensive risk management plan."
      - "Having multiple checkpoints and a thorough review by senior management at those checkpoints."
      - "Using short iterations called Sprints."
    answer: "Using short iterations called Sprints."
    explanation: "Short Sprints limit risk exposure by capping the window in which undetected errors can accumulate — each Sprint produces an Increment that can be inspected and corrected. A risk management plan (a) is a predictive tool that doesn't limit what you can unknowingly build wrong. Senior management checkpoints (b) are not a Scrum mechanism and create the bottleneck Scrum is designed to eliminate."

  - id: 8
    type: multiple-choice
    question: "Scrum has been used to:"
    options:
      - "Develop products, product enhancements, and operational environments for products use."
      - "Research viable markets and new product capabilities."
      - "Manage the operation of organizations."
      - "All of the above."
    answer: "All of the above."
    explanation: "The Scrum Guide explicitly lists all of these as proven uses of Scrum, noting it has been used in product development, research, operations, and more. The trap is assuming Scrum is limited to software development — it is a general framework for complex adaptive work."

  - id: 9
    type: multiple-choice
    question: "The Scrum Team is focused on:"
    options:
      - "The Product Goal."
      - "Testing of the Product."
      - "Design of the Product."
    answer: "The Product Goal."
    explanation: "The Scrum Guide (2020) defines the Product Goal as the long-term objective for the Scrum Team, and the team must fulfill or abandon it before adopting a new one. Testing and design are activities the Developers perform, but they are not the unifying focus — the Product Goal is. The trap is selecting a specific discipline (testing, design) instead of the strategic commitment the whole team shares."

  - id: 10
    type: multiple-choice
    question: "Scrum is:"
    options:
      - "A framework to generate value through adaptive solutions for complex problems."
      - "A collection of the industry's best practices in information technology."
      - "A body of knowledge on software engineering to build products."
    answer: "A framework to generate value through adaptive solutions for complex problems."
    explanation: "This is the verbatim opening definition from the 2020 Scrum Guide: Scrum is a lightweight framework that helps people, teams, and organisations generate value through adaptive solutions for complex problems. Option (b) is a common distractor — Scrum is not a best-practices collection; it is a framework that deliberately leaves room for specific practices to be chosen. Option (c) confuses Scrum with XP or technical engineering disciplines."

  - id: 11
    type: multiple-choice
    question: "To reduce the likelihood of not meeting big commitments, Scrum uses timeboxing so that:"
    options:
      - "Planned events can happen on time."
      - "Commitments have additional buffer of time."
      - "Events cannot exceed a predetermined amount of time."
    answer: "Events cannot exceed a predetermined amount of time."
    explanation: "The Scrum Guide defines timeboxing as a maximum duration that an event cannot exceed — not a buffer or a schedule anchor. This limits time spent in ceremony and forces the team to prioritise within a fixed window. Option (a) is partially true but misses the point; option (b) is false — timeboxing removes buffers by fixing the ceiling."

  - id: 12
    type: select-all
    question: "The formal opportunities for inspection and adaptation in Scrum are:"
    options:
      - "The Sprint."
      - "The Scrum Team."
      - "The Product Increment."
      - "None of the above."
    answers:
      - "None of the above."
    explanation: "The five formal Scrum events — Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective, and the Sprint itself — are the designated opportunities for inspection and adaptation. The Sprint, the Scrum Team, and the Product Increment are not events. The trap is selecting 'The Sprint' — a Sprint is a container for the other events, not itself the formal inspect-and-adapt opportunity."

  - id: 13
    type: select-all
    question: "The Scrum framework consists of:"
    options:
      - "Scrum Standards."
      - "Scrum Teams."
      - "Product Development Processes."
      - "Roles, events, artifacts, and rules associated with Scrum Teams."
    answers:
      - "Scrum Teams."
      - "Roles, events, artifacts, and rules associated with Scrum Teams."
    explanation: "The Scrum Guide defines Scrum as consisting of Scrum Teams and their associated roles, events, artifacts, and rules. There are no 'Scrum Standards' — Scrum is a framework, not a standards body. Product development processes are not prescribed by Scrum; the team selects their own practices within the framework."

  - id: 14
    type: multiple-choice
    question: "As per empiricism, knowledge is acquired by:"
    options:
      - "Experience."
      - "Analytical tools."
      - "Formal teaching."
    answer: "Experience."
    explanation: "Empiricism asserts that knowledge comes from experience and that decisions are made based on what is observed. This underpins Scrum's three pillars: transparency makes work visible so it can be observed; inspection assesses it; adaptation acts on what was learned. Analytical tools and formal teaching both involve inference from theory, not direct experience — the opposite of empiricism."

  - id: 15
    type: select-all
    question: "What are the accountabilities in a Scrum Team? Select all that apply."
    options:
      - "Project Manager"
      - "Programmer"
      - "Tester"
      - "Business Analyst"
      - "Architect"
      - "Operations Analyst"
      - "None of the above"
    answers:
      - "None of the above"
    explanation: "The Scrum Guide defines three accountabilities: Product Owner, Scrum Master, and Developers. None of the listed job titles — Project Manager, Programmer, Tester, etc. — are Scrum accountabilities. 'Developers' is the Scrum accountability that encompasses all technical work; a person may be a programmer in practice, but their Scrum accountability is Developer, not Programmer."

  - id: 16
    type: select-all
    question: "In Scrum, the Product Owner:"
    options:
      - "Hands over the Product Backlog to the Developers and leaves them alone. They only meet up again during final product delivery."
      - "Freezes the Product Backlog and tries not to change it."
      - "Works only with designated Developers and not all the Developers."
      - "Continuously collaborates with the Developers, sometimes almost every day."
    answers:
      - "Continuously collaborates with the Developers, sometimes almost every day."
    explanation: "The Scrum Guide states that the Product Owner collaborates with the Developers throughout the Sprint, clarifying Product Backlog items and answering questions — this often happens daily. The trap answers all depict the Product Owner in a traditional business-analyst handoff role, which Scrum explicitly rejects. Freezing the backlog also contradicts the Scrum Guide, which requires the Product Owner to continuously order and refine it."

  - id: 17
    type: true-false
    question: "In Scrum, the 'servant-leader' is the new name for the traditional role called 'Project Manager.'"
    answer: false
    explanation: "The Scrum Master is described in the Scrum Guide as a servant-leader, but this is not simply a rename of the Project Manager role. A Project Manager uses command-and-control management; the Scrum Master serves the team by enabling self-management, removing impediments, and coaching Scrum adoption — fundamentally different accountabilities with fundamentally different authority models."

  - id: 18
    type: true-false
    question: "The Scrum Master is the manager of the Scrum Team."
    answer: false
    explanation: "The Scrum Guide explicitly states that the Scrum Master does not manage the Scrum Team. The Scrum Team is self-managing — they choose how to accomplish their work. The Scrum Master serves the team as a coach, facilitator, and impediment-remover. Calling the Scrum Master a manager is a classic exam trap that conflates leadership with authority."

  - id: 19
    type: multiple-choice
    question: "In a traditional approach, ___ organizes and manages the team members' work, and ___ is their management style."
    options:
      - "Business Manager, People Centricity"
      - "Project Manager, Command and Control"
      - "The team, Self-Management"
    answer: "Project Manager, Command and Control"
    explanation: "Traditional project management places a Project Manager in authority over the team, assigning tasks and monitoring progress — a command-and-control model. Scrum replaces this with self-management: the Developers decide internally who does what, when, and how. Understanding this contrast helps on exam questions that ask why a Scrum Master should not direct the team."

  - id: 20
    type: true-false
    question: "In self-managing teams, each team member takes accountability for the progress of only their own work."
    answer: false
    explanation: "The Scrum Guide states that the Scrum Team is accountable collectively — they hold each other accountable as professionals. Self-management means the team decides how to distribute work, not that each person siloes their accountability. The trap is confusing individual task ownership (who does what) with collective accountability (the team succeeds or fails together)."

  - id: 21
    type: select-all
    question: "To deliver the highest business value, what enables the Scrum Team to balance creativity, flexibility, and productivity? Select all that apply."
    options:
      - "Strong Team Management and Guidance by a team member identified as their leader"
      - "Having all the skills required to perform all their work without external help"
      - "A Performance Management System that rewards the super achievers of the team"
      - "Structuring the team such that it can self-manage its work against a common goal"
    answers:
      - "Having all the skills required to perform all their work without external help"
      - "Structuring the team such that it can self-manage its work against a common goal"
    explanation: "The Scrum Guide requires the Scrum Team to be cross-functional (possessing all necessary skills internally) and self-managing (deciding who, what, and how). These two properties together enable adaptability and high value delivery. Options (a) and (c) both introduce hierarchy and external management, which contradict Scrum's self-management principle."

  - id: 22
    type: select-all
    question: "As a self-managing team, what can a Scrum Team manage? Select all that apply."
    options:
      - "Managing their work to reach a common goal"
      - "Managing their human-related aspects like leave, firing one of the team members, office dress code, etc."
      - "Managing some other teams"
      - "Managing to support ad-hoc high-priority requirements from important executives"
    answers:
      - "Managing their work to reach a common goal"
    explanation: "Scrum's self-management means the team decides how to organise and execute their work toward the Sprint Goal — not broader HR, organisational, or political authority. HR matters (leave, firing) remain with the organisation. Managing other teams and responding to ad-hoc executive requests both violate the Sprint Goal focus and the Scrum value of commitment."

  - id: 23
    type: true-false
    question: "In Scrum, Team Velocity is a good metric to track the progress of product development."
    answer: false
    explanation: "Velocity is not prescribed by the Scrum Guide and is not a recommended measure of progress. The Scrum Guide states that progress is inspected at the Sprint Review through the Increment — a working, usable product. Velocity is a planning tool some teams use, but it can be gamed, varies between teams, and tells nothing about the actual value delivered."

  - id: 24
    type: select-all
    question: "A Scrum Team must produce the following artifacts. Select all that apply."
    options:
      - "Project Plan"
      - "Product Backlog"
      - "Design Document"
      - "Sprint Backlog"
      - "Test Case Specifications"
      - "Project Status Report"
      - "Increment"
    answers:
      - "Product Backlog"
      - "Sprint Backlog"
      - "Increment"
    explanation: "The Scrum Guide defines exactly three artifacts: Product Backlog, Sprint Backlog, and Increment. Project Plans, Design Documents, Test Case Specifications, and Status Reports are all traditional project management outputs not prescribed by Scrum. The trap is selecting documentation artefacts that feel necessary from a traditional background."

  - id: 25
    type: true-false
    question: "Scrum Teams create six artifacts: Product Backlog, Sprint Backlog, Increment, Product Goal, Sprint Goal, and Definition of Done."
    answer: false
    explanation: "The Scrum Guide (2020) defines three artifacts — Product Backlog, Sprint Backlog, and Increment — each with a corresponding commitment: Product Goal, Sprint Goal, and Definition of Done respectively. The commitments are not separate artifacts; they are properties of their parent artifacts. Confusing commitments with artifacts is a common PSM I trap."

  - id: 26
    type: multiple-choice
    question: "Scrum is best described as a:"
    options:
      - "Software methodology."
      - "Framework for developing and sustaining complex products."
      - "Product development process."
      - "Collection of best practices."
    answer: "Framework for developing and sustaining complex products."
    explanation: "Earlier versions of the Scrum Guide described Scrum as 'a framework for developing and sustaining complex products.' Scrum is not a methodology (it doesn't prescribe detailed processes), not a product development process (it is a framework within which processes operate), and not a best-practices collection. The 2020 Scrum Guide updated the definition to emphasise value delivery, but this framing still appears on PSM I exams."

  - id: 27
    type: multiple-choice
    question: "Transparency, Inspection, and Adaptation are the three pillars of:"
    options:
      - "Empirical Process Control Theory."
      - "Lean."
      - "PDCA."
      - "Six Sigma."
    answer: "Empirical Process Control Theory."
    explanation: "The Scrum Guide grounds Scrum in empiricism — specifically Empirical Process Control — whose three pillars are transparency, inspection, and adaptation. Lean's pillars are value and waste reduction; PDCA (Plan-Do-Check-Act) is a continuous improvement cycle; Six Sigma targets defect reduction. Only empiricism names these exact three pillars."

  - id: 28
    type: multiple-choice
    question: "Transparency in empiricism refers to:"
    options:
      - "Clear thinking and planning by each team member."
      - "The significant aspects of the product development process are defined by common standards and made visible so the observers will share the same understanding."
      - "The highest levels of morality."
    answer: "The significant aspects of the product development process are defined by common standards and made visible so the observers will share the same understanding."
    explanation: "The Scrum Guide defines transparency as making significant aspects of the process visible to those responsible for the outcome, using common standards so observers share a common understanding. Without shared standards, two people inspecting the same artifact may reach different conclusions. Option (a) confuses transparency with planning clarity; option (c) conflates transparency with ethical behaviour."

  - id: 29
    type: multiple-choice
    question: "What is used by the Scrum Team to identify unfinished work in a Sprint?"
    options:
      - "Coding Standard"
      - "Definition of Ready"
      - "Testing Standard"
      - "Definition of Done"
    answer: "Definition of Done"
    explanation: "The Definition of Done is the Scrum Team's formal commitment attached to the Increment — it defines what 'complete' means. Any work that does not meet the Definition of Done is not releasable and must be returned to the Product Backlog. The Definition of Ready (option b) is a non-Scrum Guide concept describing when a backlog item is ready to be taken into a Sprint — it is the opposite end of the lifecycle."

  - id: 30
    type: multiple-choice
    question: "A Developer is requested by an important stakeholder to help with an urgent task outside the Sprint Goal. The Developer sets aside Sprint work for the day to help. Which statement best describes this action?"
    options:
      - "The Developer has gone the extra mile and must be rewarded."
      - "The Developer has violated Scrum rules by not consulting with his manager."
      - "The Developer did not live by the Scrum value of focus."
    answer: "The Developer did not live by the Scrum value of focus."
    explanation: "Scrum's five values include Focus — the team concentrates on Sprint work and the Sprint Goal. Accepting ad-hoc work from stakeholders dilutes focus and jeopardises the Sprint Goal commitment. Option (a) is a management-thinking trap that rewards responsiveness over commitment. Option (b) is wrong because Developers don't have a manager in Scrum — they would consult the Scrum Master or Product Owner, not a manager."

  - id: 31
    type: multiple-choice
    question: "Shortly into using Scrum for the first time, the Scrum Team runs into several issues following Scrum. The most common inference is:"
    options:
      - "Scrum should have been applied for Product Development instead of Software Development."
      - "The team should have followed only Scrum's guidance about software engineering practices."
      - "The Scrum Team didn't plan the project completely in advance."
      - "It is normal for first timers. Scrum will expose weaknesses in the organisational ecosystem; treat them as improvement opportunities."
    answer: "It is normal for first timers. Scrum will expose weaknesses in the organisational ecosystem; treat them as improvement opportunities."
    explanation: "The Scrum Guide acknowledges that Scrum deliberately surfaces organisational dysfunctions — this is by design, not failure. First-time Scrum adoption almost always reveals process, culture, or structure issues that were previously hidden. The exam frequently tests whether candidates understand that Scrum's value includes revealing these problems so they can be addressed, rather than masking them."

  - id: 32
    type: multiple-choice
    question: "Is Scrum immutable?"
    options:
      - "Yes"
      - "No"
    answer: "Yes"
    explanation: "The Scrum Guide states that Scrum's framework is immutable — you can implement only parts of it, but the result would not be Scrum. Teams may augment Scrum with additional techniques, practices, and methods, but the core rules, events, artifacts, and accountabilities cannot be selectively omitted or modified. This is a common PSM I trap: candidates assume Scrum is infinitely flexible, when in fact its rules are fixed."

  - id: 33
    type: multiple-choice
    question: "The organisation or senior management's support:"
    options:
      - "Is not needed for Scrum implementations."
      - "Is not needed because there is no scope for management in Scrum."
      - "Is needed to support the Product Owner to maximise the product value and the Scrum Master to coach and implement Scrum."
    answer: "Is needed to support the Product Owner to maximise the product value and the Scrum Master to coach and implement Scrum."
    explanation: "The Scrum Guide and Scrum literature are clear that organisational support is critical for Scrum to succeed. The Product Owner needs authority to make product decisions, and the Scrum Master needs organisational backing to remove systemic impediments. Options (a) and (b) are traps based on the misconception that Scrum is purely team-internal — senior management must enable, even if not directing, the work."

  - id: 34
    type: multiple-choice
    question: "A Scrum Team is at the end of a Sprint. The next Sprint starts:"
    options:
      - "Only after the product Increment is released to production."
      - "Only after the Retrospective event of the current Sprint."
      - "Only after the team for the next Sprint is on board."
      - "Only after the Sprint Planning."
    answer: "Only after the Retrospective event of the current Sprint."
    explanation: "The Scrum Guide states that a new Sprint starts immediately after the conclusion of the previous Sprint. The Sprint Retrospective is the final event of the Sprint, so the next Sprint begins after it concludes. Option (a) is wrong because releasing to production is not required to end a Sprint. Options (c) and (d) are wrong because the team is continuous and Sprint Planning is the first event of the new Sprint, not a prerequisite for it to start."

  - id: 35
    type: true-false
    question: "Only the Product Owner can come up with items for the Product Backlog; others cannot provide input, recommendations, or ideas."
    answer: false
    explanation: "The Scrum Guide states that while the Product Owner is accountable for the Product Backlog — including its content, ordering, and availability — anyone can contribute items, ideas, or input. The Product Owner may delegate work but retains final accountability. The trap is conflating accountability (Product Owner's alone) with contribution (open to anyone)."

  - id: 36
    type: select-all
    question: "A Scrum Team needs to have the following roles. Select all that apply."
    options:
      - "Product Manager"
      - "Business Manager"
      - "Architect"
      - "Developer"
      - "Tester"
      - "Programmer"
      - "Scrum Master"
      - "Project Leader"
      - "Product Owner"
    answers:
      - "Developer"
      - "Scrum Master"
      - "Product Owner"
    explanation: "The Scrum Guide defines exactly three accountabilities in a Scrum Team: Product Owner, Scrum Master, and Developers. All other titles — Architect, Tester, Programmer, Project Leader, etc. — are job descriptions, not Scrum accountabilities. A person titled 'Tester' would hold the Developer accountability in Scrum. The exam frequently presents a long list of titles to see if candidates can identify the three Scrum accountabilities."
---
