---
title: "PSM I — Part 3: Advanced & Model Assessment"
topic: "SCRUM"
description: "Quick tests, exam strategy tips, and a full 80-question model PSM I assessment."
emoji: "🎯"
questions:
  - id: 1
    type: multiple-choice
    question: "Having more than ten members on a Scrum Team..."
    options:
      - "Is good because a larger team increases productivity."
      - "Is good because there is more opportunity for cross training and backups."
      - "Is not recommended because smaller teams communicate better and are more productive."
      - "Is not recommended because the Scrum roles cannot be provided to everyone on the team."
    answer: "Is not recommended because smaller teams communicate better and are more productive."
    explanation: "The Scrum Guide recommends Scrum Teams be small enough to be nimble and large enough to complete significant work — typically 10 or fewer people. Smaller teams communicate better and are more productive. The wrong-answer trap is option d: Scrum roles are not distributed one-per-person, so team size is not constrained by role count."

  - id: 2
    type: multiple-choice
    question: "Mid-Sprint the burn-down shows a big divergence between planned and actual. The inference is..."
    options:
      - "The Scrum Master did not plan the Sprint properly."
      - "There is more remaining work to do than originally anticipated."
      - "There is less remaining work to do than originally anticipated."
      - "The Developers need to re-plan as soon as possible."
    answer: "The Developers need to re-plan as soon as possible."
    explanation: "The Sprint Backlog is owned and updated by the Developers; when progress diverges from the plan, they adapt immediately rather than waiting for a scheduled event. Option b/c tries to interpret the direction of divergence, but the chart alone does not confirm which direction — the key Scrum response is for the Developers to inspect and re-plan. Option a incorrectly assigns Sprint planning responsibility to the Scrum Master."

  - id: 3
    type: select-all
    question: "Sprint Planning meetings are routinely exceeding the time-box. Likely causes?"
    options:
      - "The Scrum Master does not moderate and control the participants."
      - "The Team didn't invest enough into Backlog Refinement."
      - "The Product Backlog size is huge."
      - "The Developers are trying to get a perfect and detailed Sprint plan."
    answers:
      - "The Team didn't invest enough into Backlog Refinement."
      - "The Developers are trying to get a perfect and detailed Sprint plan."
    explanation: "Backlog Refinement prepares PBIs so Sprint Planning can be efficient; skipping it forces clarification during Sprint Planning, blowing the time-box. Scrum also warns against seeking a perfect plan — the Sprint Backlog only needs enough detail to start and the plan emerges. Option a is a trap: the Scrum Master facilitates but is not a controller of participants; the team owns its events."

  - id: 4
    type: multiple-choice
    question: "A Scrum Team is defining PBIs. They aren't using User Story format. The Scrum Master should..."
    options:
      - "Correct the team's behavior by coaching them about User Stories."
      - "Add a business analyst responsible for documenting PBIs as User Stories."
      - "Let the team decide the format of the PBIs."
    answer: "Let the team decide the format of the PBIs."
    explanation: "The Scrum Guide does not prescribe User Stories or any specific PBI format — that is a team-level decision. The Scrum Master respects team self-management and does not impose practices the Scrum Guide does not require. Adding a BA (option b) would violate the Scrum principle of a self-contained, cross-functional team."

  - id: 5
    type: multiple-choice
    question: "The estimation method recommended by Scrum is..."
    options:
      - "Poker Game."
      - "T-Shirt Sizing."
      - "Expert Judgement."
      - "None of the above."
    answer: "None of the above."
    explanation: "The Scrum Guide does not recommend or prescribe any specific estimation technique. Planning Poker, T-Shirt Sizing, and Expert Judgement are all valid external practices, but Scrum is silent on which to use. The common trap is assuming Planning Poker is 'the Scrum method' because it is widely associated with agile teams."

  - id: 6
    type: multiple-choice
    question: "A Scrum Team created the Sprint Backlog as a task board. Your inference?"
    options:
      - "The team can represent the Sprint Backlog in any form that makes sense for them."
      - "It's okay, but it must follow all Kanban principles."
      - "The Scrum Master should advise creating a proper matrix (PBIs, tasks, estimates, owners, dates)."
    answer: "The team can represent the Sprint Backlog in any form that makes sense for them."
    explanation: "The Scrum Guide specifies what the Sprint Backlog contains (Sprint Goal, selected PBIs, and a plan) but does not mandate a specific format. The team chooses the representation that best serves their inspection and adaptation needs. Option b incorrectly imports Kanban rules; option c prescribes a format that Scrum does not require."

  - id: 7
    type: multiple-choice
    question: "Effort required to fix or refactor a product after it has been built is known as..."
    options:
      - "Maintenance."
      - "Technical Debt."
      - "Plumbing code."
    answer: "Technical Debt."
    explanation: "Technical Debt refers to the accumulated cost of rework caused by choosing a quick or incomplete solution now instead of a better approach that would take longer. The Scrum Guide acknowledges technical debt implicitly through the Definition of Done — items that do not meet DoD create technical debt. Maintenance covers routine upkeep, not the rework cost of prior shortcuts."

  - id: 8
    type: multiple-choice
    question: "Mid-Sprint, Developers identified a defect that is a clear gap in the current Sprint's feature (not a new requirement). The defect should be..."
    options:
      - "Deferred to the Product Backlog."
      - "Deferred since it's not critical."
      - "Fixed in the current Sprint."
    answer: "Fixed in the current Sprint."
    explanation: "A defect within the current Sprint's scope is part of meeting the Definition of Done for that Sprint's Increment — it is not a new requirement but an obligation to deliver a Done Increment. Deferring it (options a and b) would leave the Increment below the standard of Done, creating technical debt. The Developers own quality within the Sprint."

  - id: 9
    type: multiple-choice
    question: "A team often gets production support work and created a sub-team for it. This is..."
    options:
      - "Okay to create sub-teams within a Scrum Team."
      - "Not okay since there cannot be sub-teams within a Scrum Team."
      - "Acceptable: do production support as one team first, then return to Sprint work."
    answer: "Not okay since there cannot be sub-teams within a Scrum Team."
    explanation: "The Scrum Guide explicitly states there are no sub-teams or hierarchies within a Scrum Team. Creating a sub-team fragments the team and undermines shared accountability. The correct approach is for the whole team to manage production support transparently, ideally by including it in Sprint planning rather than splitting the team."

  - id: 10
    type: multiple-choice
    question: "The architectural features of the product need to be..."
    options:
      - "Evolved along with the Sprint deliveries."
      - "Completely designed upfront before the Sprints."
      - "Decided at least at a skeleton level in Sprint zero."
    answer: "Evolved along with the Sprint deliveries."
    explanation: "Scrum embraces emergent architecture — design evolves incrementally as the product and understanding grow. 'Sprint zero' is not a Scrum concept, and big upfront design contradicts empiricism. The trap is option c: while some initial thinking may occur, Scrum does not recognize a dedicated 'Sprint zero' for architecture."

  - id: 11
    type: multiple-choice
    question: "After the Sprint Review, production release in Scrum requires..."
    options:
      - "Hardening Sprints."
      - "Non-Functional Testing."
      - "Architectural Validations."
      - "Usability/End User testing."
      - "All of the above."
      - "None of the above."
    answer: "None of the above."
    explanation: "The Scrum Guide states that a Done Increment is potentially releasable without any additional work — if the Definition of Done is met, no hardening Sprints, extra testing phases, or validation gates are needed. These activities are symptoms of an incomplete Definition of Done, not Scrum-prescribed steps. The exam frequently tests whether candidates understand that Done means truly done."

  - id: 12
    type: select-all
    question: "Hundreds of developers must be formed into Scrum Teams. Which considerations are appropriate?"
    options:
      - "Each team must have a required number of technical leads."
      - "Each team must be sized to reduce external dependencies with less internal communication issues."
      - "Each team must be a business feature team."
      - "The team formation should seek input from the business side."
      - "Each team must be a technical component team."
    answers:
      - "Each team must be sized to reduce external dependencies with less internal communication issues."
      - "The team formation should seek input from the business side."
    explanation: "Scrum teams should be sized to minimize external dependencies and maximize communication efficiency. Business input to team formation ensures alignment with product goals. Technical leads (option a) are not a Scrum concept — Scrum has no hierarchy within the team. Feature teams (option c) are preferred over component teams (option e) in Scrum-at-scale, but the question asks what is 'appropriate' as a consideration, and mandating feature-only teams is too prescriptive given the context."

  - id: 13
    type: multiple-choice
    question: "For a large product (100+ Developers), what is the most appropriate approach to develop the overall technical architecture?"
    options:
      - "Start with minimal teams, evolve foundational architecture from high-value features and expected NFRs, then add more teams."
      - "Create a complete reference architecture upfront and hand it over."
      - "Identify a few best designers to guide implementation during Sprints."
      - "Divide into technical component teams that design and manage their own components."
    answer: "Start with minimal teams, evolve foundational architecture from high-value features and expected NFRs, then add more teams."
    explanation: "Scrum's empirical approach favors evolving architecture incrementally from real features rather than designing it upfront. Starting small allows architecture to be validated against actual delivery before scaling. Upfront architecture (option b) violates empiricism; component teams (option d) create hand-off dependencies that conflict with Scrum's cross-functional team principle."

  - id: 14
    type: multiple-choice
    question: "Multiple Scrum Teams working on the same product — how many Product Owners and Product Backlogs?"
    options:
      - "Multiple Product Owners and multiple Product Backlogs."
      - "One Product Owner and one Product Backlog."
      - "Multiple Product Owners and one Product Backlog."
      - "One Product Owner and multiple Product Backlogs."
    answer: "One Product Owner and one Product Backlog."
    explanation: "The Scrum Guide is explicit: one product has one Product Backlog and one Product Owner, regardless of how many Scrum Teams work on it. Multiple backlogs would fragment product direction and make prioritization incoherent. The common trap is option c — while one PO can delegate, accountability cannot be split across multiple POs for the same product."

  - id: 15
    type: true-false
    question: "With multiple Scrum Teams working from the same Product Backlog, each team selects PBIs for the Sprint with guidance from the Product Owner."
    answer: true
    explanation: "The Scrum Guide confirms that when multiple teams share a Product Backlog, each team selects its own PBIs during Sprint Planning, with the Product Owner providing priority guidance. This preserves team autonomy (self-selection) while ensuring the PO's value ordering is respected. Teams do not have separate backlogs assigned by a manager."

  - id: 16
    type: multiple-choice
    question: "The role of the Scrum Master in the Sprint Retrospective is..."
    options:
      - "Auditor."
      - "Silent Observer."
      - "Peer Team Member."
      - "None of the above."
    answer: "Peer Team Member."
    explanation: "The Scrum Master participates in the Sprint Retrospective as a peer team member — a full participant, not an observer or auditor. The Scrum Guide notes the Scrum Master participates and ensures the event is positive and productive. The trap is 'None of the above' — candidates who over-formalize the SM role sometimes miss that Scrum Masters are members of the Scrum Team."

  - id: 17
    type: multiple-choice
    question: "To deliver a single product, three different Scrum Teams are formed. How many Product Owners are needed?"
    options:
      - "As many as recommended by the Scrum Master."
      - "Three."
      - "One."
    answer: "One."
    explanation: "One product has exactly one Product Owner, regardless of team count. The Product Owner is accountable for maximizing product value and managing a single Product Backlog. Having three POs for one product would create conflicting priorities. The Scrum Master does not decide on the number of POs."

  - id: 18
    type: multiple-choice
    question: "Scrum framework is founded on..."
    options:
      - "Empiricism."
      - "Empiricism and Technical Practices."
      - "Empiricism and Emotional Intelligence."
    answer: "Empiricism."
    explanation: "The Scrum Guide states that Scrum is founded on empiricism and lean thinking. Technical practices and emotional intelligence are valuable but are not cited as the foundations of Scrum. The exam tests whether you know the exact Scrum Guide language — 'empiricism and lean thinking' — and can distinguish it from looser descriptions."

  - id: 19
    type: multiple-choice
    question: "Sprint Goal: 'All the Sprint code should have passed 100% automated unit tests.' This is..."
    options:
      - "Not an appropriate goal since the Sprint Goal should be about expected business value."
      - "Incorrect since the Product Owner formulates the goal, not the Scrum Team."
      - "A well-formed Sprint Goal."
    answer: "Not an appropriate goal since the Sprint Goal should be about expected business value."
    explanation: "The Scrum Guide defines the Sprint Goal as the single objective for the Sprint that creates coherence and focus for the Developers — it should communicate why the Sprint is valuable. A purely technical metric like '100% unit test pass rate' is a quality measure, not a business objective. Option b is also wrong because the Sprint Goal is collaboratively created by the whole Scrum Team during Sprint Planning."

  - id: 20
    type: true-false
    question: "A Developer cannot also play the Scrum Master's role."
    answer: false
    explanation: "The Scrum Guide does not prohibit a Developer from also serving as Scrum Master, though it notes this can be challenging in larger teams. In small teams, a Developer may take on both accountabilities. The exam tests that you know Scrum roles are accountabilities, not exclusive job titles, and that a single person can hold multiple accountabilities."

  - id: 21
    type: multiple-choice
    question: "The duration (length) of the Sprint is decided by the..."
    options:
      - "Product Owner."
      - "Scrum Master."
      - "Scrum Team."
    answer: "Scrum Team."
    explanation: "The Scrum Guide states that the Scrum Team decides the Sprint length, not any single role. While the Scrum Master often facilitates this discussion, the decision belongs to the team as a whole. The trap is to assign the decision to the Scrum Master (who manages the framework) or the Product Owner (who owns the backlog)."

  - id: 22
    type: multiple-choice
    question: "During the Daily Scrum, which plan is used to understand changes in progress?"
    options:
      - "Sprint Backlog"
      - "Product Backlog"
      - "Sprint Burn-down"
    answer: "Sprint Backlog"
    explanation: "The Scrum Guide states that Developers inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary. The Sprint Backlog is the living plan for the Sprint; the Daily Scrum is when Developers use it to assess their progress. Burn-down charts are useful tracking tools but are not mandated by Scrum and are not the artifact 'used' during the Daily Scrum."

  - id: 23
    type: multiple-choice
    question: "An executive wants Developers to take a critical feature into the current Sprint. The Developers..."
    options:
      - "Should work on it since it's the organization's priority."
      - "Should ask the executive to work with the Product Owner."
      - "Should ask the executive to select work to be removed to keep the same Sprint load."
    answer: "Should ask the executive to work with the Product Owner."
    explanation: "Only the Product Owner can change what is in the Sprint Backlog, and only by collaborating with the Developers. The Scrum Guide protects the Developers from external interference during the Sprint. Option c sounds like a reasonable trade-off but bypasses the PO's authority — all scope negotiations go through the Product Owner."

  - id: 24
    type: multiple-choice
    question: "The Scrum Team uses information from Scrum artifacts to make ongoing decisions. The soundness of these decisions depends on the..."
    options:
      - "Artifacts' Adaptability."
      - "Artifacts' Transparency."
      - "Artifacts' Agility."
      - "Artifacts' Format."
    answer: "Artifacts' Transparency."
    explanation: "The Scrum Guide states that Scrum's artifacts represent work or value and are designed to maximize transparency of key information. Decisions based on opaque or incomplete artifacts reduce empiricism's effectiveness. The exam tests the three pillars of empiricism: Transparency, Inspection, Adaptation — transparency of artifacts is foundational to the other two."

  - id: 25
    type: multiple-choice
    question: "An organization decides to have small Scrum Teams with fewer than three Developers. The likely result could be..."
    options:
      - "The team may have decreased interaction."
      - "The team may have a skills shortage."
      - "The team may have low productivity gains."
      - "All of the above."
    answer: "All of the above."
    explanation: "The Scrum Guide recommends the Scrum Team be small enough to remain nimble but large enough to complete significant work — typically having fewer than 3 Developers results in decreased interaction, skills shortage, and low productivity. All three risks are real consequences of under-sizing. The trap is choosing only one risk when the question asks for the 'likely result' broadly."

  - id: 26
    type: multiple-choice
    question: "The product development project delivers an internal feature. The team is skilled and experienced. The Sprint lengths can be..."
    options:
      - "Decided after the first release."
      - "Ignored since it's an internal project."
      - "A maximum of one calendar month."
    answer: "A maximum of one calendar month."
    explanation: "The Scrum Guide sets an absolute maximum Sprint length of one calendar month for all Scrum projects — internal or external, regardless of team experience. Longer Sprints create too much risk, lose the benefits of frequent inspection, and may result in the Sprint Goal becoming invalid. Sprint length is never optional or context-dependent in this way."

  - id: 27
    type: select-all
    question: "Empiricism provides..."
    options:
      - "Frequent opportunities to obtain information so uncertainty can be completely eliminated."
      - "Frequent opportunities to discuss different possibilities."
      - "Frequent opportunities to make informed decisions reducing risk."
    answers:
      - "Frequent opportunities to discuss different possibilities."
      - "Frequent opportunities to make informed decisions reducing risk."
    explanation: "Empiricism reduces uncertainty but cannot eliminate it — the Scrum Guide is clear that uncertainty is managed, not removed. Empiricism's value is in providing frequent inspect-and-adapt cycles that enable informed decision-making. Option a is the classic trap: 'completely eliminated' is always wrong in a Scrum/empirical context."

  - id: 28
    type: multiple-choice
    question: "The leadership model followed by the Scrum Master is..."
    options:
      - "Micro-management."
      - "Servant Leadership."
      - "Command and Control."
    answer: "Servant Leadership."
    explanation: "The Scrum Guide explicitly describes the Scrum Master as a true leader who serves the Scrum Team and the larger organization — servant leadership. The Scrum Master does not command or micro-manage; they coach, facilitate, and remove impediments. This is a direct definition question testing Scrum Guide vocabulary."

  - id: 29
    type: multiple-choice
    question: "During a Sprint Review, stakeholders say progress isn't transparent and they don't understand next steps. Who is responsible?"
    options:
      - "Developers"
      - "Product Owner"
      - "Scrum Master"
      - "Scrum Team"
    answer: "Product Owner"
    explanation: "The Product Owner is accountable for transparency of the Product Backlog and for communicating product direction to stakeholders. Explaining progress and 'what comes next' is a core Product Owner responsibility. The Scrum Master facilitates the event but the PO owns stakeholder communication about the product vision and backlog status."

  - id: 30
    type: multiple-choice
    question: "Mid-Sprint, a manager requests a team member to help with an external task. What should the member do?"
    options:
      - "Support it since it's important."
      - "Ask the manager to speak with the Scrum Master."
      - "Politely decline and explain their responsibility and accountability to the Scrum Team."
    answer: "Politely decline and explain their responsibility and accountability to the Scrum Team."
    explanation: "Developers are accountable to the Scrum Team and their Sprint commitments. The Scrum Guide protects the team from mid-Sprint interruptions that undermine the Sprint Goal. Option b (refer to Scrum Master) is a reasonable step but the developer's first action should be to own their accountability and decline — escalating to the SM is secondary."

  - id: 31
    type: true-false
    question: "Adding more Scrum Teams to a single product will most likely increase the original teams' productivity."
    answer: false
    explanation: "Adding more teams increases coordination overhead, communication complexity, and integration effort — this typically reduces original team productivity in the short to medium term. The Scrum Guide and scaling experience both confirm that more teams mean more inter-team dependencies to manage. The trap is assuming more resources always equal more output."

  - id: 32
    type: multiple-choice
    question: "Within a few Sprints, Scrum increases the transparency of..."
    options:
      - "Technical ability of the team to create a Product Increment."
      - "Information of real progress."
      - "Both."
    answer: "Both."
    explanation: "Scrum's inspect-and-adapt cycles surface both the team's true technical capability to produce Increments and the real state of progress against the Product Goal. Both types of transparency emerge quickly with Scrum. The exam tests understanding that Scrum's transparency mechanism is broad, not limited to just one dimension."

  - id: 33
    type: multiple-choice
    question: "A Sprint longer than one calendar month may result in..."
    options:
      - "Too much to inspect in short meetings."
      - "Detached stakeholders."
      - "Increased complexity needing more traditional controls like documentation."
      - "All of the above."
    answer: "All of the above."
    explanation: "The Scrum Guide warns that longer Sprints increase risk, complexity, and the chance the Sprint Goal becomes obsolete. Long Sprints also disengage stakeholders who lack frequent feedback loops and force teams back toward waterfall-style controls. All three listed consequences are real — the trap is selecting only the most obvious one."

  - id: 34
    type: multiple-choice
    question: "The work left against time is shown by..."
    options:
      - "Team Velocity."
      - "Burn-down graph."
      - "Story Points Burn."
      - "Release Burn-up."
    answer: "Burn-down graph."
    explanation: "A burn-down chart plots remaining work (y-axis) against time (x-axis), showing how much work is left. Velocity measures throughput per Sprint, not remaining work over time. Burn-up charts show completed work increasing, not remaining work decreasing. This is a direct definition question."

  - id: 35
    type: multiple-choice
    question: "In the Sprint Review, besides reviewing the Increment and progress, 'what to do next' is also discussed. Which statement is correct?"
    options:
      - "False."
      - "True, and the scope of the next Sprint is also finalized here."
      - "True, and it may capture probable PBIs for the next Sprint, but scope is deferred to Sprint Planning."
    answer: "True, and it may capture probable PBIs for the next Sprint, but scope is deferred to Sprint Planning."
    explanation: "The Scrum Guide confirms that the Sprint Review results in an updated Product Backlog that defines probable PBIs for the next Sprint — but the Sprint Backlog and Sprint scope are not finalized until Sprint Planning. Option b is the key trap: the Sprint Review informs but does not replace Sprint Planning."

  - id: 36
    type: multiple-choice
    question: "Mid-Sprint, the Product Owner wants Developers in an important customer meeting. What should happen?"
    options:
      - "Developers should stay focused on the Sprint Goal; involve the Scrum Master to educate and plan for next Sprint if needed."
      - "Developers should participate since it's with customers."
      - "Stop Sprint work until the meeting to understand concerns."
    answer: "Developers should stay focused on the Sprint Goal; involve the Scrum Master to educate and plan for next Sprint if needed."
    explanation: "The Sprint protects Developers from interruptions so they can meet the Sprint Goal. Even well-intentioned interruptions like customer meetings undermine the predictability the Sprint provides. The Scrum Master's role is to protect the team and coach the PO to plan such activities outside the Sprint. Options b and c both break Sprint integrity."

  - id: 37
    type: multiple-choice
    question: "A Scrum Team decides to reduce Daily Scrum frequency to once a week. What is the correct response?"
    options:
      - "The team is self-managing and can choose their own practices."
      - "Such decisions need Agile Coach approval."
      - "Self-management must still follow Scrum; the Scrum Master should coach on Daily Scrum essentials."
    answer: "Self-management must still follow Scrum; the Scrum Master should coach on Daily Scrum essentials."
    explanation: "Self-management in Scrum operates within the Scrum framework — teams choose how to do their work, not whether to follow prescribed events. The Daily Scrum is a mandatory Scrum event for the Developers. The Scrum Master must uphold the framework. Option a is the classic self-management trap: self-management has boundaries defined by Scrum itself."

  - id: 38
    type: multiple-choice
    question: "Who performs inspections of the work in Scrum?"
    options:
      - "External Audit Team"
      - "Scrum Master at defined inspection points"
      - "Developers"
    answer: "Developers"
    explanation: "The Scrum Guide states that those doing the work perform the inspections — the Developers inspect their own work to detect undesirable variances. Inspection is embedded in the Scrum events, all of which are run by the Scrum Team, not external auditors. The Scrum Master does not conduct inspections of the work itself."

  - id: 39
    type: multiple-choice
    question: "In the Daily Scrum, a member doesn't know when their task will be complete. What should happen?"
    options:
      - "Acceptable since Sprint Review is far away."
      - "Replace the member."
      - "Developers collaborate on alternatives (e.g., pairing) to de-risk meeting the Sprint Goal."
      - "Ask the Scrum Master to mentor them on estimating."
    answer: "Developers collaborate on alternatives (e.g., pairing) to de-risk meeting the Sprint Goal."
    explanation: "The Daily Scrum's purpose is to identify impediments and adapt the plan to protect the Sprint Goal. When a task has no clear completion horizon, the team — not the Scrum Master or management — takes corrective action by collaborating, pairing, or re-slicing work. Replacing the member (option b) is a punitive, non-Scrum response."

  - id: 40
    type: multiple-choice
    question: "In every Sprint, testing must progress unit → integration → UAT. Is this correct?"
    options:
      - "Yes. This is the prescribed method."
      - "No. The QA Lead decides the testing strategy."
      - "Not necessary; ensure each Increment is thoroughly tested, integrated, and meets the DoD — the team chooses the best method."
      - "Incorrect; must also include non-functional testing."
    answer: "Not necessary; ensure each Increment is thoroughly tested, integrated, and meets the DoD — the team chooses the best method."
    explanation: "Scrum does not prescribe a testing sequence. The team decides how to achieve a Done Increment that meets the Definition of Done. A QA Lead role (option b) is not a Scrum role. Option d incorrectly prescribes NFT as mandatory. The DoD captures the team's quality standards, and how they get there is their choice."

  - id: 41
    type: multiple-choice
    question: "Mid-Sprint your team gets additional members. What is the likely result?"
    options:
      - "Take more stories on top of the forecast."
      - "Re-run Sprint Planning to get buy-in."
      - "Productivity may suffer."
    answer: "Productivity may suffer."
    explanation: "Adding members mid-Sprint disrupts the team's established rhythm, increases onboarding and communication overhead, and typically reduces productivity in the short term (Brooks's Law). The Sprint Backlog is not expanded simply because headcount grew. Re-running Sprint Planning mid-Sprint is not a Scrum practice for this scenario."

  - id: 42
    type: multiple-choice
    question: "Sprint goals like 'Develop Data layer for Functionality A' imply..."
    options:
      - "Horizontal decomposition — recommended."
      - "Vertical decomposition — recommended."
      - "Horizontal decomposition — NOT recommended."
      - "Vertical decomposition — NOT recommended."
    answer: "Horizontal decomposition — NOT recommended."
    explanation: "Building a 'data layer' is a horizontal technical slice that does not deliver end-to-end business value. Scrum and agile best practice favor vertical decomposition — features that deliver value from UI to data store in one Sprint. Horizontal decomposition (tech layer by layer) defers integration and business value, which contradicts the Increment's definition of Done and potentially releasable."

  - id: 43
    type: multiple-choice
    question: "The Definition of Done is..."
    options:
      - "Initially defined per product by the Scrum Team, but may change throughout the product development duration."
      - "Initially defined by the Scrum Team and does not change."
      - "Defined after the first Sprint based on insights from the first Sprint Review."
    answer: "Initially defined per product by the Scrum Team, but may change throughout the product development duration."
    explanation: "The Scrum Guide confirms the DoD is created by the Scrum Team (or adopted from organizational standards) and evolves — teams strengthen the DoD over time as they improve. Option b incorrectly says it never changes. Option c incorrectly defers DoD creation until after the first Sprint — the DoD must exist before development begins."

  - id: 44
    type: select-all
    question: "Which of the following statements about Sprint execution is true?"
    options:
      - "After Sprint Planning, a Sprint cannot proceed without complete requirement specification."
      - "After Sprint Planning, a Sprint cannot proceed without a Sprint Goal."
      - "After Sprint Planning, a Sprint can proceed without a complete Sprint Backlog."
      - "After Sprint Planning, a Sprint cannot proceed without complete architecture."
    answers:
      - "After Sprint Planning, a Sprint cannot proceed without a Sprint Goal."
      - "After Sprint Planning, a Sprint can proceed without a complete Sprint Backlog."
    explanation: "The Sprint Goal is mandatory — without it there is no coherent objective for the Sprint. However, the Sprint Backlog can be incomplete at Sprint start; Developers may not be able to decompose all planned work on day one, and the plan emerges during the Sprint. Complete requirements and architecture upfront violate empiricism and are not Scrum requirements."

  - id: 45
    type: true-false
    question: "A Scrum Team is self-managing and empowered. It means it has the authority to decide internally who does what, when, and how."
    answer: true
    explanation: "The Scrum Guide defines self-managing Scrum Teams as choosing who does the work, how it is done, and when — within the Sprint. This is a foundational Scrum principle that distinguishes self-managing teams from teams that receive task assignments from a manager. External parties (PO, SM, management) do not assign tasks to Developers."

  - id: 46
    type: multiple-choice
    question: "A Product Owner is not available for Scrum events and not supportive enough for the Developers. The next immediate accountability is with the..."
    options:
      - "Developers who need to cancel the Sprint."
      - "Stakeholders who need to get a written commitment from the Product Owner."
      - "Product Owner's manager who needs to engage the Developers and understand their problems."
      - "Scrum Master who needs to educate the Product Owner on their role."
    answer: "Scrum Master who needs to educate the Product Owner on their role."
    explanation: "The Scrum Master serves the Product Owner by coaching them on product goal management, empiricism, and fulfilling their Scrum accountabilities. When a PO is disengaged, the Scrum Master's first action is coaching — not canceling the Sprint or escalating to the PO's manager. Canceling the Sprint (option a) is a last resort reserved for the PO when the Sprint Goal is obsolete."

  - id: 47
    type: multiple-choice
    question: "When is a Product Backlog retired?"
    options:
      - "When the Product Owner retires."
      - "When all the Sprints are over."
      - "When the Product retires."
      - "When the Customer provides sign-off on completion of the project."
    answer: "When the Product retires."
    explanation: "The Product Backlog exists as long as the product exists — it is not tied to project phases, sprint counts, or sign-offs. The Scrum Guide states that the Product Backlog is never complete and only ceases to exist when the product ceases to exist. Tying backlog retirement to sign-off or Sprint count reflects traditional project thinking, not Scrum."

  - id: 48
    type: true-false
    question: "A Product Owner cannot send a representative (delegate) to the Sprint Review."
    answer: true
    explanation: "The Product Owner must personally attend the Sprint Review — it is their opportunity to inspect the Increment and adapt the Product Backlog with stakeholders. The Scrum Guide does not provide for a PO delegate at Sprint Review; the PO's presence and active participation is required. Delegating this event undermines the PO's core accountability."

  - id: 49
    type: multiple-choice
    question: "A Product Owner is knowledgeable on technology and imposes technical conditions the product should meet. These conditions must be added to the..."
    options:
      - "Product Backlog."
      - "Sprint Backlog."
      - "Definition of Done."
    answer: "Definition of Done."
    explanation: "Technical quality conditions — non-functional requirements, coding standards, integration requirements — belong in the Definition of Done, not individual PBIs or the Sprint Backlog. The DoD is the shared quality standard for every Increment. Adding them to the Product Backlog (option a) would mean they only apply to specific items, not the whole product."

  - id: 50
    type: multiple-choice
    question: "An Increment is..."
    options:
      - "The sum of the value of all Increments from previous Sprints integrated with the Done Product Backlog Items in the latest Sprint."
      - "The sum of the Product Backlog Items selected into the Sprint Backlog."
      - "The sum of the Product Backlog Items Done in the latest Sprint."
    answer: "The sum of the value of all Increments from previous Sprints integrated with the Done Product Backlog Items in the latest Sprint."
    explanation: "The Scrum Guide defines an Increment as additive to prior Increments — each new Increment integrates with all previous ones, building toward the Product Goal. Option c is a common trap that limits the Increment to only the current Sprint's output; option b confuses the Sprint Backlog (selected items) with the Increment (Done items integrated with prior work)."

  - id: 51
    type: select-all
    question: "Which are true statements about the Sprint Goal?"
    options:
      - "The Scrum Team is responsible for formulating a Sprint Goal."
      - "When existing Product Backlog Items in the Sprint Backlog are modified, the Sprint Goal is bound to become invalid."
      - "The coherence between Product Backlog Items is made transparent by the Sprint Goal. Lack of coherence will lead to the Developers working individually."
    answers:
      - "The Scrum Team is responsible for formulating a Sprint Goal."
      - "The coherence between Product Backlog Items is made transparent by the Sprint Goal. Lack of coherence will lead to the Developers working individually."
    explanation: "The Scrum Guide states the Sprint Goal is created collaboratively by the whole Scrum Team during Sprint Planning. It also notes the Sprint Goal creates coherence — without it, Developers may work on unrelated items independently. Option b is wrong: modifying PBIs in the Sprint Backlog does not automatically invalidate the Sprint Goal; only the PO can cancel a Sprint when the Goal becomes obsolete."

  - id: 52
    type: multiple-choice
    question: "Which is NOT a Product Backlog Management activity?"
    options:
      - "Clearly expressing and ordering Product Backlog Items."
      - "Optimizing the value of the work of the Developers."
      - "Using formal change control to manage Product Backlog when the market provides feedback from product usage."
      - "Ensuring the Developers understand items in the Product Backlog to the level needed."
    answer: "Using formal change control to manage Product Backlog when the market provides feedback from product usage."
    explanation: "The Scrum Guide does not include formal change control as a Product Backlog management activity — the PB is a living artifact that changes dynamically based on feedback, learning, and market signals without bureaucratic change processes. The other three options directly reflect Scrum Guide language on PB management (product backlog management is now called product goal management in Scrum Guide 2020, but the activities listed are still accurate)."

  - id: 53
    type: select-all
    question: "The Scrum Team must participate in which events?"
    options:
      - "Sprint Planning."
      - "Daily Scrum."
      - "Sprint Review."
      - "Sprint Retrospective."
    answers:
      - "Sprint Planning."
      - "Sprint Review."
      - "Sprint Retrospective."
    explanation: "The whole Scrum Team (PO, SM, Developers) participates in Sprint Planning, Sprint Review, and Sprint Retrospective. The Daily Scrum is attended by Developers only — the Scrum Master and Product Owner are not required attendees, though they may observe. This is a high-frequency exam trap."

  - id: 54
    type: multiple-choice
    question: "An inspector finds that a work aspect deviates outside acceptable limits, and that the resulting product will be unacceptable. When will the team adjust this work aspect to minimize the deviation?"
    options:
      - "In the next Scrum event."
      - "As soon as possible."
      - "After the Scrum Master approves the adjustment."
    answer: "As soon as possible."
    explanation: "The Scrum Guide's adaptation pillar states that if inspection reveals an unacceptable deviation, adjustment must be made as soon as possible to minimize further deviation. Waiting for the next Scrum event delays correction and allows the problem to compound. The Scrum Master does not need to approve adjustments — teams self-manage their work."

  - id: 55
    type: true-false
    question: "A Scrum Team can identify improvements only during the Sprint Retrospective."
    answer: false
    explanation: "The Scrum Guide encourages continuous improvement — improvements can be identified at any time during the Sprint. The Sprint Retrospective is the formal event dedicated to this purpose, but Developers can and should identify and implement improvements whenever they arise. Limiting improvement to one event per Sprint would slow the team's growth."

  - id: 56
    type: select-all
    question: "For the first Sprint, inputs are the Product Backlog and projected Developer capacity. What additional inputs apply to subsequent Sprints?"
    options:
      - "The defect list from the previous Sprint."
      - "The Sprint Plan."
      - "The past performance of the Developers."
      - "The latest Product Increment."
    answers:
      - "The past performance of the Developers."
      - "The latest Product Increment."
    explanation: "Subsequent Sprints have additional empirical inputs: the team's past velocity and performance inform forecasting, and the latest Increment (which must be integrated and potentially releasable) is the baseline to build on. A 'defect list' is not a distinct Scrum input — defects are reflected in the Product Backlog. A 'Sprint Plan' is an output of Sprint Planning, not an input."

  - id: 57
    type: true-false
    question: "When a Sprint is cancelled, the Scrum Team discards all the work and refines a new Product Backlog."
    answer: false
    explanation: "When a Sprint is cancelled, completed and Done PBIs may be accepted by the Product Owner. Incomplete PBIs are re-estimated and returned to the Product Backlog for reprioritization — not discarded. The Product Backlog is not rebuilt from scratch; it is updated to reflect the new reality. This tests whether candidates know the Sprint cancellation procedure precisely."

  - id: 58
    type: multiple-choice
    question: "At the end of Sprint Planning, the Developers could not decompose all the work into units of one day or less — only the first few days. What should happen?"
    options:
      - "The Developers should close Sprint Planning and start the work."
      - "Since the team is self-managing, they should continue Sprint Planning in the following days before they start the work."
      - "The Scrum Master should coach the team in required skills."
    answer: "The Developers should close Sprint Planning and start the work."
    explanation: "The Scrum Guide explicitly allows Developers to start the Sprint even if not all work is fully decomposed — it is often enough to plan just the first few days of work, with the remainder decomposed during the Sprint. Extending Sprint Planning to cover everything violates the time-box principle. This is the classic 'perfect plan vs. good enough to start' trap."

  - id: 59
    type: multiple-choice
    question: "What is a key inspect and adapt meeting for the Developers?"
    options:
      - "Project Status Meeting"
      - "Daily Scrum"
      - "Design Sessions"
    answer: "Daily Scrum"
    explanation: "The Daily Scrum is the Developers' dedicated 15-minute inspect-and-adapt event — they inspect progress toward the Sprint Goal and adapt the Sprint Backlog accordingly. Project Status Meetings are not a Scrum event. Design Sessions are informal and not a prescribed Scrum event. The Daily Scrum is the Scrum Guide's answer here."

  - id: 60
    type: select-all
    question: "Which are true statements about Product Owner authority and Developer responsibilities?"
    options:
      - "Only the Product Owner should update the Product Backlog without delegating to anyone."
      - "Only the Developers should be responsible for estimates of the Product Backlog Items."
      - "Only the Product Owner should cancel the Sprint. Others can influence the decision to cancel."
      - "Only the Product Owner can change the Sprint Backlog."
    answers:
      - "Only the Developers should be responsible for estimates of the Product Backlog Items."
      - "Only the Product Owner should cancel the Sprint. Others can influence the decision to cancel."
    explanation: "Developers own estimates — no manager or PO should override them per the Scrum Guide. Only the PO can cancel a Sprint, though stakeholders and others may provide input. Option a is wrong because the PO can delegate PB update tasks to Developers (while remaining accountable). Option d is wrong because the Sprint Backlog belongs to and is modified by the Developers, not the PO."

  - id: 61
    type: multiple-choice
    question: "The standard used by the Product Owner and the Scrum Team to identify unfinished work in a Sprint is..."
    options:
      - "Coding Standard"
      - "Definition of Ready"
      - "Testing Standard"
      - "Definition of Done"
    answer: "Definition of Done"
    explanation: "The Definition of Done is the formal standard used to determine whether an Increment is complete. Any PBI that does not meet the DoD is unfinished and either returned to the Product Backlog or addressed within the Sprint. The Definition of Ready is about when a PBI is ready to be pulled into a Sprint, not about completion."

  - id: 62
    type: multiple-choice
    question: "Scrum is immutable. What may be the result of an organization modifying the Scrum Framework for the convenience of existing culture?"
    options:
      - "The organization may lose the opportunity to expose its current cultural dysfunctions that impede developing the Product Increment Sprint after Sprint."
      - "Scrum is bound by technical tools and these tools will break."
      - "It can only be done with the help of Scrum coaches."
    answer: "The organization may lose the opportunity to expose its current cultural dysfunctions that impede developing the Product Increment Sprint after Sprint."
    explanation: "The Scrum Guide states Scrum is immutable because modifying it hides problems rather than surfacing them. Scrum's designed constraints act as a diagnostic tool — cultural dysfunctions and organizational impediments become visible precisely because of Scrum's structure. Making Scrum 'more comfortable' removes its ability to expose what needs to change."

  - id: 63
    type: true-false
    question: "In a Scrum-based software project, 'Earned Value' is a good metric to track product development progress."
    answer: false
    explanation: "Earned Value Management requires predictable scope and cost baselines, which contradicts Scrum's empirical, adaptive approach. Scrum progress is better tracked using Sprint velocity, burn-down/burn-up charts, and the Product Backlog. EVM is a predictive project management tool; applying it to Scrum distorts the empirical feedback loops Scrum relies on."

  - id: 64
    type: multiple-choice
    question: "The Scrum Master manages..."
    options:
      - "Scrum People"
      - "Scrum Framework"
      - "Scrum Technology"
      - "All of them"
      - "None of them"
    answer: "Scrum Framework"
    explanation: "The Scrum Master is accountable for the Scrum Team's effectiveness by ensuring Scrum is understood and enacted — they manage (uphold and protect) the Scrum Framework. They do not manage people (self-managing teams) or technology. The Scrum Master is a leader and coach, not a traditional manager."

  - id: 65
    type: multiple-choice
    question: "Which Scrum events facilitate inspection and adaptation?"
    options:
      - "Sprint"
      - "Backlog Refinement"
      - "Sprint Retrospective"
      - "Development Work"
    answer: "Sprint Retrospective"
    explanation: "The Scrum Guide identifies five formal events, each designed for inspection and adaptation: the Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. However, of the options given, only the Sprint Retrospective is listed as a dedicated inspect-and-adapt event. Backlog Refinement and Development Work are not formal Scrum events. Note: the Sprint itself is a container, but the answer choice here tests which listed option is a formal event."

  - id: 66
    type: multiple-choice
    question: "The Sprint Review is an opportunity to review..."
    options:
      - "Timeline and Budget"
      - "Defects and causes"
      - "Requirements and Capacity"
      - "All of the above"
    answer: "Timeline and Budget"
    explanation: "The Scrum Guide states the Sprint Review includes review of the timeline, budget, potential capabilities, and marketplace when determining what to do next. This surprises many candidates who expect the answer to be purely product-focused — but the Sprint Review is a business meeting, not just a demo, and includes business context like timeline and budget."

  - id: 67
    type: multiple-choice
    question: "The Scrum Team optimizes the following and delivers business value..."
    options:
      - "Flexibility, creativity, and productivity"
      - "Self-Improvement, Leadership, Motivation"
      - "Individual Power, Heroic Efforts, Recognition"
    answer: "Flexibility, creativity, and productivity"
    explanation: "The Scrum Guide describes the Scrum Team as optimizing flexibility, creativity, and productivity to deliver value. This aligns with Scrum's lightweight, empirical framework that enables teams to respond to change. Heroic individual effort (option c) and management-oriented traits (option b) are contrary to the team-based, sustainable-pace principles Scrum promotes."

  - id: 68
    type: true-false
    question: "Scrum allows having gaps between two subsequent Sprints, in which the team can accomplish support activities and team building activities."
    answer: false
    explanation: "The Scrum Guide explicitly states that a new Sprint starts immediately after the conclusion of the previous Sprint — there are no gaps between Sprints. Any support activities, team building, or operational work must be accounted for within the Sprint as part of the team's capacity, not in gaps outside the Sprint cadence."

  - id: 69
    type: multiple-choice
    question: "Sprint Planning helps in..."
    options:
      - "Building entire technical architecture"
      - "Staffing plan"
      - "Testing strategy"
      - "Release plan"
      - "None of the above"
    answer: "None of the above"
    explanation: "Sprint Planning's purpose is to create the Sprint Goal and the Sprint Backlog — the plan for the upcoming Sprint. It does not produce a technical architecture, staffing plan, testing strategy, or release plan. Those activities happen through other means: architecture emerges over Sprints, staffing is an organizational concern, and testing strategy is defined by the team outside Sprint Planning."

  - id: 70
    type: multiple-choice
    question: "When can a Product Owner negotiate the scope of what the team will work on next?"
    options:
      - "Anytime during the current Sprint with or without Developers' consent"
      - "Until the Sprint Planning for the current Sprint"
      - "Both"
    answer: "Until the Sprint Planning for the current Sprint"
    explanation: "The Product Owner can negotiate scope with the Developers during Sprint Planning — clarifying, adding, or removing items to fit the Sprint. Once the Sprint starts, the Sprint Backlog scope is under the Developers' control and only changed through negotiation with the PO; the PO cannot unilaterally change scope mid-Sprint. Option a incorrectly removes the Developers' consent requirement."

  - id: 71
    type: multiple-choice
    question: "The Developers have not completed any of the Product Backlog Items selected for the Sprint by Sprint end. The next step is..."
    options:
      - "Extend the Sprint since Scrum favors getting done."
      - "Advise the Product Owner to accept the completed portion of the incomplete Product Backlog Items, and plan to complete them next Sprint."
      - "End the Sprint with a Retrospective, since Scrum favors time boxing."
    answer: "End the Sprint with a Retrospective, since Scrum favors time boxing."
    explanation: "Sprints are time-boxed and never extended — the Sprint ends at its fixed time regardless of completion status. Incomplete PBIs return to the Product Backlog for re-estimation and reprioritization. Accepting partial PBIs (option b) violates the Definition of Done, which requires items to be fully Done before acceptance. This is a core time-boxing principle test."

  - id: 72
    type: multiple-choice
    question: "The Scrum Team, based on learning from previous Sprints, decides to revisit the length of the Sprint. What is the appropriate Scrum event to discuss and agree on the change?"
    options:
      - "Scrum Planning"
      - "Sprint Planning"
      - "Retrospective"
      - "Daily Scrum"
    answer: "Retrospective"
    explanation: "The Sprint Retrospective is the appropriate event for the Scrum Team to inspect its process and decide on structural improvements — including Sprint length. Sprint length is a process decision, not a product decision, making the Retrospective the right forum. Sprint Planning focuses on the upcoming Sprint's scope and goal, not process changes."

  - id: 73
    type: multiple-choice
    question: "To effectively track Sprint progress, Scrum mandates..."
    options:
      - "Preparing Sprint burn-down charts"
      - "Increasing the transparency by frequently updating the remaining work"
      - "Earned Value approach"
    answer: "Increasing the transparency by frequently updating the remaining work"
    explanation: "The Scrum Guide mandates that Developers track remaining work and update the Sprint Backlog frequently — but it does not mandate burn-down charts specifically. Burn-down charts are a common optional practice. EVM is not a Scrum mandate. The mandated behavior is transparency through frequent updates to remaining work."

  - id: 74
    type: true-false
    question: "Only the Product Owner can come up with items that can be considered for the Product Backlog. Others cannot provide input, recommendations, or ideas about new items."
    answer: false
    explanation: "The Scrum Guide states anyone can submit ideas to the Product Backlog — stakeholders, Developers, Scrum Masters, and others. However, only the Product Owner decides what is added, prioritized, and removed. The PO is accountable for the backlog but does not have a monopoly on generating ideas for it."

  - id: 75
    type: multiple-choice
    question: "Sprint Planning is the only occasion where Developers estimate Product Backlog Items."
    options:
      - "True, because without estimates the team cannot plan what can go into the Sprint."
      - "False, estimation of Product Backlog Items is a continuous event throughout."
    answer: "False, estimation of Product Backlog Items is a continuous event throughout."
    explanation: "Backlog Refinement — which happens continuously — includes estimating and re-estimating PBIs. Estimates are updated as new information emerges during Sprints. Sprint Planning uses existing estimates but estimation is not limited to that event. Continuous refinement and re-estimation is a key Scrum practice that keeps the Product Backlog accurate."

  - id: 76
    type: multiple-choice
    question: "Which is true about Sprint Retrospective and Sprint Review?"
    options:
      - "Sprint Retrospective focuses on the Product and Sprint Review focuses on development processes."
      - "Sprint Retrospective focuses on development processes and Sprint Review focuses on Velocity."
      - "Sprint Retrospective focuses on development processes and Sprint Review focuses on the Product."
    answer: "Sprint Retrospective focuses on development processes and Sprint Review focuses on the Product."
    explanation: "The Scrum Guide is explicit: the Sprint Retrospective inspects the process, tools, relationships, and Definition of Done (how we work), while the Sprint Review inspects the Increment and product progress (what we built). Confusing these two is the most common exam trap in this area — both involve inspection and adaptation but focus on different domains."

  - id: 77
    type: multiple-choice
    question: "A Scrum Team often runs into conflicting requirements from different departments, ad-hoc work requests from different business managers, and no feedback on Increments. What is the likely cause?"
    options:
      - "Issues with how the Scrum Master guides the team."
      - "Issues with Product Owner responsibilities."
      - "Issues with planning abilities of the Developers."
    answer: "Issues with Product Owner responsibilities."
    explanation: "Conflicting requirements, unfiltered requests from multiple stakeholders, and absent feedback on Increments are all symptoms of a weak or absent Product Owner. The PO's core job is to be the single authority for the Product Backlog, shield the team from conflicting inputs, and actively engage with Increment reviews. These dysfunctions are PO accountability failures."

  - id: 78
    type: multiple-choice
    question: "During a Sprint Review, the Scrum Master notices the Product Owner does not use the Product burn-down graph to explain status to stakeholders. The Scrum Master should..."
    options:
      - "Coach the Product Owner on the importance of using this Scrum tool."
      - "Cancel the Sprint Review and reschedule when the Product Owner is ready with this tool."
      - "Do nothing."
    answer: "Do nothing."
    explanation: "The Scrum Guide does not mandate any specific tracking tool, including burn-down charts. The Product Owner is free to communicate product status using whatever approach serves their stakeholders. The Scrum Master should not impose tools that Scrum does not require. Option a would be incorrect coaching — coaching the PO to use a non-mandated tool is overreach."

  - id: 79
    type: multiple-choice
    question: "A short expression of the purpose of a Sprint, often a business need, is called..."
    options:
      - "Sprint Goal"
      - "Acceptance Criteria"
      - "Definition of Done"
    answer: "Sprint Goal"
    explanation: "The Scrum Guide defines the Sprint Goal as the single objective for the Sprint — a concise expression of the business value the Sprint delivers. It is collaboratively created during Sprint Planning. Acceptance Criteria are conditions for individual PBIs; the Definition of Done is a quality checklist for all Increments. Both are distinct from the Sprint Goal."

  - id: 80
    type: true-false
    question: "It is mandatory that the Definition of Done includes 'Release to Production.'"
    answer: false
    explanation: "The Scrum Guide does not mandate any specific item in the Definition of Done — the team defines it based on their context. While 'potentially releasable' is the standard for an Increment, the DoD does not have to include an actual release step. In many contexts, release is a separate business decision made by the Product Owner after the Sprint."

  - id: 81
    type: multiple-choice
    question: "Under which topic of Sprint Planning are Developers more active and the Product Owner mostly observing or clarifying?"
    options:
      - "Topic One (Why)"
      - "Topic Two (What)"
      - "Topic Three (How)"
    answer: "Topic Three (How)"
    explanation: "Sprint Planning Topic Three (How) is where Developers plan the work — decomposing PBIs into tasks and deciding how they will build the Increment. The PO is mostly available to clarify rather than lead. Topic One (Why) and Topic Two (What) involve active PO engagement to set the Sprint Goal and select PBIs."

  - id: 82
    type: multiple-choice
    question: "Definition of Done is..."
    options:
      - "Testing strategy for the Scrum Team."
      - "A standard used by the Scrum Team to assess if a product Increment is Done."
      - "Defined by Product Owner and safeguarded by Scrum Master."
    answer: "A standard used by the Scrum Team to assess if a product Increment is Done."
    explanation: "The Scrum Guide defines the Definition of Done as a formal description of the state of the Increment when it meets the quality measures required for the product. It is created by the Scrum Team (or organization), not the PO alone. It is not a testing strategy — it is a completion checklist."

  - id: 83
    type: multiple-choice
    question: "Shortly into using Scrum for the first time in an organization, the Scrum Team runs into several impediments. The most common inference is..."
    options:
      - "Scrum does not work for their organization."
      - "The Scrum Team did not plan the project end-to-end well in advance."
      - "It is normal for first timers. Scrum will expose all weaknesses in the current eco-system that impede developing Product Increments in short Sprints."
    answer: "It is normal for first timers. Scrum will expose all weaknesses in the current eco-system that impede developing Product Increments in short Sprints."
    explanation: "The Scrum Guide acknowledges that Scrum makes visible the dysfunctions of the current system — this is a feature, not a bug. First-time Scrum teams encountering impediments is expected and normal. Concluding 'Scrum doesn't work' (option a) or that the team needed more upfront planning (option b) both miss Scrum's diagnostic purpose."

  - id: 84
    type: multiple-choice
    question: "A person external to the Scrum Team with a specific interest in and knowledge of a product required for incremental discovery is known as..."
    options:
      - "Technical/Domain Expert"
      - "Stakeholder"
      - "Senior Management"
    answer: "Stakeholder"
    explanation: "The Scrum Guide defines a stakeholder as someone external to the Scrum Team who has an interest in the product and whose input is needed for incremental discovery. Domain/Technical Experts may be stakeholders but the Scrum Guide's specific term is 'stakeholder.' Senior Management is a subset of stakeholders, not the term Scrum uses."

  - id: 85
    type: multiple-choice
    question: "On their kick-off day, a new Scrum Team didn't have any Scrum tool. The next best thing to do is..."
    options:
      - "Expedite the installation of the tool before the close of iteration zero."
      - "Get the recommendation from the Product Owner about how to manage Scrum artifacts without the tool."
      - "Do nothing. Implementation of Scrum does not require any tool."
    answer: "Do nothing. Implementation of Scrum does not require any tool."
    explanation: "Scrum does not require any specific tools — it can be practiced with a whiteboard, sticky notes, or any tracking mechanism. The Scrum Guide contains no tool requirements. 'Iteration zero' is not a Scrum concept. The team can start immediately; tools can be added later if they help. This tests whether candidates conflate Scrum with specific tooling."

  - id: 86
    type: multiple-choice
    question: "The Developers try to put together some guidelines on testing approach. Who will own these guidelines?"
    options:
      - "Developers"
      - "Test Lead"
      - "Scrum Master"
    answer: "Developers"
    explanation: "Developers are accountable for the technical practices, standards, and approaches used to create the Increment. Testing guidelines are a technical artifact owned by the Developers. 'Test Lead' is not a Scrum role, and the Scrum Master facilitates process rather than owning technical artifacts."

  - id: 87
    type: select-all
    question: "The mandatory participants of the Sprint Retrospective meeting are..."
    options:
      - "Product Owner"
      - "Stakeholders invited by Product Owner"
      - "Scrum Master"
      - "Developers"
      - "Technical/Domain/Process experts invited by Scrum Team"
    answers:
      - "Product Owner"
      - "Scrum Master"
      - "Developers"
    explanation: "The Scrum Guide requires all three Scrum Team accountabilities — Product Owner, Scrum Master, and Developers — to attend the Sprint Retrospective. Stakeholders and external experts are not invited to the Retrospective; it is an internal Scrum Team event. This is a frequent exam trap: the Sprint Review includes stakeholders but the Retrospective does not."

  - id: 88
    type: multiple-choice
    question: "Sprint Backlog is modified throughout the Sprint. As soon as a new task is identified..."
    options:
      - "Product Owner adds it to the Sprint Backlog and communicates about it to the Scrum Team."
      - "Scrum Master adds it to the Sprint Backlog and communicates about it to the Scrum Team."
      - "Developers add it to the Sprint Backlog and communicate about it to the Scrum Team."
    answer: "Developers add it to the Sprint Backlog and communicate about it to the Scrum Team."
    explanation: "The Sprint Backlog belongs to and is maintained by the Developers. Only Developers add, modify, or remove tasks from the Sprint Backlog during the Sprint. The PO and SM do not update the Sprint Backlog. This reinforces the Developers' ownership of the Sprint-level plan."

  - id: 89
    type: select-all
    question: "The Sprint Review is an event that requires..."
    options:
      - "Product Owner's sign-off"
      - "Stakeholders' active participation"
      - "Transition sign-off"
      - "Inspection and Adaptation activities"
    answers:
      - "Stakeholders' active participation"
      - "Inspection and Adaptation activities"
    explanation: "The Sprint Review requires stakeholder participation — they inspect the Increment and collaborate on future direction. The event is fundamentally an inspect-and-adapt activity for the product. 'Sign-off' (options a and c) is a waterfall concept not found in Scrum; the Sprint Review is collaborative, not approval-based."

  - id: 90
    type: multiple-choice
    question: "Multiple Scrum Teams are required to work on the same product. How can they integrate their development?"
    options:
      - "By mutually working with each other to create an integrated Increment."
      - "By maintaining individual Product Backlogs for each team."
      - "By setting up common working sessions between lead Developers of each team to merge changes before Sprint Review."
    answer: "By mutually working with each other to create an integrated Increment."
    explanation: "Multiple teams on the same product must integrate continuously and produce a single integrated Increment each Sprint. Separate Product Backlogs (option b) are explicitly prohibited by the Scrum Guide — one product has one PB. Option c describes a merge ceremony that delays integration; Scrum favors continuous integration so the Increment is always potentially releasable."

  - id: 91
    type: multiple-choice
    question: "The Sprint Backlog emerges during the Sprint because Developers modify it throughout. In the middle of the Sprint, new work is added to the Sprint Backlog. As a result, estimated remaining work will..."
    options:
      - "Increase"
      - "Decrease"
      - "Stay the same"
    answer: "Increase"
    explanation: "Adding new work to the Sprint Backlog mid-Sprint increases the total estimated remaining work. This is expected — as Developers learn more during the Sprint, new tasks emerge and are added to the plan. Burn-down charts may show remaining work going up before coming back down. This tests whether candidates understand the Sprint Backlog as an emerging, living plan."

  - id: 92
    type: multiple-choice
    question: "A Scrum Team develops software. Only when the Product Owner decides to release, the team creates end-user documentation for the Product Increment at that point. Is this correct?"
    options:
      - "It is correct. Creating documents early will require constant effort to keep them updated."
      - "It is correct. Scrum favors less documentation and deferring the decision to last minute."
      - "It is incorrect. Anything required for the Product Increment to be valuable and useful (potentially releasable to production) is recommended to be part of the Definition of Done."
    answer: "It is incorrect. Anything required for the Product Increment to be valuable and useful (potentially releasable to production) is recommended to be part of the Definition of Done."
    explanation: "The Scrum Guide requires that the Increment be potentially releasable at Sprint end. If end-user documentation is required for the product to be usable and valuable, it belongs in the DoD and must be done each Sprint — not deferred to release time. Deferring it creates technical debt and means the Increment was never truly Done."

  - id: 93
    type: select-all
    question: "Pick the Scrum Values."
    options:
      - "Respect and Courage"
      - "Simplicity"
      - "Commitment and Openness"
      - "Creativity and Intuition"
      - "Focus"
    answers:
      - "Respect and Courage"
      - "Commitment and Openness"
      - "Focus"
    explanation: "The five Scrum Values are: Commitment, Focus, Openness, Respect, and Courage. Simplicity is an XP value. Creativity and Intuition are not Scrum values. The exam regularly tests exact recall of the five Scrum values — memorize them as a set."

  - id: 94
    type: multiple-choice
    question: "A Scrum Team has five members. Each one works on a different product. What could we infer about the team?"
    options:
      - "The team will have higher productivity since division of work is clear."
      - "The team implements diversity, a principle of Scrum."
      - "The potential of teamwork and benefit of Scrum is less."
      - "All of them still will have a common Definition of Done."
    answer: "The potential of teamwork and benefit of Scrum is less."
    explanation: "Scrum's strength comes from a team collaborating on a shared goal — when each member works on a different product, there is no shared Sprint Goal, no opportunity for cross-functional collaboration, and no collective accountability. The benefits of Scrum (inspection, adaptation, team synergy) are greatly diminished. A shared DoD (option d) requires a shared product."

  - id: 95
    type: multiple-choice
    question: "Team Velocity refers to..."
    options:
      - "Average of amount of Product Backlog Items turned into Done Items per Sprint."
      - "Average rate of churn of team members in the Scrum Team during a Sprint."
      - "Average number of defects per Sprint normalized over all defect types."
    answer: "Average of amount of Product Backlog Items turned into Done Items per Sprint."
    explanation: "Velocity is the team's average throughput — how much work (measured in story points or PBI count) the team completes per Sprint. It is an internal planning tool, not a performance metric for management. Options b and c describe team stability and quality metrics respectively, not velocity."

  - id: 96
    type: multiple-choice
    question: "One of the major challenges for a team getting newly into Scrum can be..."
    options:
      - "Developing skills to produce a usable Increment just within a short Sprint."
      - "Learning about Scrum terminology."
      - "Difficulty in getting adapted to Scrum tools."
    answer: "Developing skills to produce a usable Increment just within a short Sprint."
    explanation: "The hardest adjustment for new Scrum teams is the disciplined engineering required to produce a Done, potentially releasable Increment within a short time-box. Terminology and tools are secondary challenges. This is the core technical and process discipline challenge that Scrum exposes immediately."

  - id: 97
    type: multiple-choice
    question: "In the middle of the Sprint, the Developers find that a few more days of work is needed to complete the scope. The planning options include..."
    options:
      - "Add more team members."
      - "Catch up using weekends."
      - "Defer testing after stakeholder's demo."
      - "Involve the Product Owner and negotiate alternatives."
      - "All of the above."
    answer: "Involve the Product Owner and negotiate alternatives."
    explanation: "When Developers cannot complete planned work, the correct Scrum response is to collaborate with the Product Owner to adjust scope — removing or descoping PBIs to fit the Sprint capacity while preserving the Sprint Goal. Adding people mid-Sprint (option a) typically reduces productivity. Working weekends or deferring testing compromise quality and sustainability. Sprints are never extended."

  - id: 98
    type: true-false
    question: "The Scrum Master forecasts the Product burn-down during Sprint Review."
    answer: false
    explanation: "Product burn-down is a product-level planning tool owned by the Product Owner, who uses it to communicate progress to stakeholders. The Scrum Master does not forecast or own product-level metrics. The Scrum Master facilitates the Sprint Review event but does not present product-level forecasts — that is the Product Owner's responsibility."

  - id: 99
    type: multiple-choice
    question: "In the middle of the Sprint, the Developers did not get some technical tools that were originally promised. This will slow down the work. The next best thing to do is..."
    options:
      - "Scrum Master should escalate to Project Manager."
      - "Product Owner should cancel the Sprint."
      - "The Developers should assess the impact to meeting the Sprint Goal and the Definition of Done, and find alternatives to still meet the Sprint Goal without compromising the Definition of Done."
    answer: "The Developers should assess the impact to meeting the Sprint Goal and the Definition of Done, and find alternatives to still meet the Sprint Goal without compromising the Definition of Done."
    explanation: "Developers own the Sprint Backlog and the plan for meeting the Sprint Goal. When impediments arise, they first assess impact and seek alternatives. The Scrum Master can help remove organizational impediments, but the Developers' first response is self-management. Sprint cancellation (option b) is reserved for when the Sprint Goal becomes obsolete, not when tools are delayed."

  - id: 100
    type: multiple-choice
    question: "Velocity is an indication of team performance. It may be used by..."
    options:
      - "The Scrum Team as an internal measure to plan and track their improvements."
      - "The managers to do performance appraisals for the team."
      - "The organization to aggregate into organization-level productivity."
    answer: "The Scrum Team as an internal measure to plan and track their improvements."
    explanation: "Velocity is an internal team planning tool — used by the team to forecast future Sprint capacity and track their own improvement trends. Using velocity for management appraisals or organizational comparisons misapplies the metric, creates gaming incentives, and destroys trust. The Scrum Guide discourages using velocity as an external performance measure."

  - id: 101
    type: multiple-choice
    question: "In a new Scrum Team, a Scrum Master notices that a Developer works on a task that is not contributing to the Sprint Goal or the Sprint Backlog. The Scrum Master..."
    options:
      - "Should escalate this to the Product Owner."
      - "Should discuss with the team member and educate about Scrum way of working."
      - "Should not interrupt since the team is self-managing."
    answer: "Should discuss with the team member and educate about Scrum way of working."
    explanation: "The Scrum Master serves the team by coaching on Scrum practices and protecting the Sprint Goal. A Developer working outside the Sprint Backlog is a Scrum violation that the SM should address through coaching — not by escalating to the PO or ignoring it under the banner of self-management. Self-management operates within the Scrum framework."

  - id: 102
    type: multiple-choice
    question: "A Scrum Team has the following condition under the Definition of Done: 'All the code to be reviewed and approved by an Industry Coding Standard Organization.' This organization is a third-party expert outside the Scrum Team."
    options:
      - "The Definition of Done is less effective, because it contains conditions not completely within the influence of the Scrum Team."
      - "The Definition of Done is more effective, because it ensures that required standards are met."
      - "The Definition of Done can contain anything as decided by the Product Owner."
    answer: "The Definition of Done is less effective, because it contains conditions not completely within the influence of the Scrum Team."
    explanation: "A DoD condition that depends on an external party creates a dependency the team cannot control, which can block Sprint completion and undermine the 'Done' commitment. The Scrum Guide recommends the DoD reflect conditions the team can reliably meet. The DoD is not set by the PO alone (option c); it is a Scrum Team artifact."

  - id: 103
    type: multiple-choice
    question: "During Sprints, Developers need to wait for another team to provide dependent input, often causing delays. What can be recommended?"
    options:
      - "The team is not cross-functional enough. The team should take the Scrum Master's help in educating the organization to add team members with appropriate skills."
      - "The team should agree on a Service Level Agreement (SLA) with another team and escalate to the Scrum Master if the SLA is breached."
      - "The team can mock up the sample of input instead of waiting and do the Sprint Review on time. The Product Increment can be refactored when the other team provides input."
    answer: "The team is not cross-functional enough. The team should take the Scrum Master's help in educating the organization to add team members with appropriate skills."
    explanation: "Consistent dependency on another team signals a cross-functionality gap. The Scrum Guide requires teams to have all the skills needed to create a Done Increment without external dependencies. The Scrum Master should help the organization restructure to make the team truly cross-functional. SLAs (option b) and workarounds (option c) are band-aids that perpetuate the structural problem."

  - id: 104
    type: multiple-choice
    question: "The Scrum Team gathers for Sprint Planning. The Product Owner has PBIs but Developers find they don't provide enough information to forecast. The next best thing to do is..."
    options:
      - "The Scrum Master cancels the Sprint."
      - "The Developers proceed with starting with whatever is known."
      - "The Developers make it transparent that they cannot forecast with insufficient information, and negotiate with the Product Owner on refining the Product Backlog Items to ready state."
      - "The Scrum Team discusses the root cause in the Retrospective."
    answer: "The Developers make it transparent that they cannot forecast with insufficient information, and negotiate with the Product Owner on refining the Product Backlog Items to ready state."
    explanation: "Transparency is a core Scrum pillar — Developers must be transparent about what they need to make a forecast. The right action is to negotiate refinement of PBIs before committing to them. Only the PO can cancel a Sprint (option a); proceeding blind (option b) risks a failed Sprint; the Retrospective (option d) is too late for fixing the current Sprint."

  - id: 105
    type: multiple-choice
    question: "In the middle of the Sprint, the Developers find that they have more capacity to take more work. The next best thing to do is..."
    options:
      - "Make it transparent to the Product Owner immediately and collaborate to add additional work."
      - "Consult and follow the Scrum Master's direction."
      - "Keep that as a contingency to accommodate unplanned work."
    answer: "Make it transparent to the Product Owner immediately and collaborate to add additional work."
    explanation: "When Developers have excess capacity, they should be transparent with the Product Owner and pull additional PBIs from the Product Backlog to maximize Sprint value. This is an empirical, value-maximizing response. Keeping capacity in reserve (option c) is wasteful. The Scrum Master does not direct what work is taken on (option b) — that is a PO and Developer collaboration."

  - id: 106
    type: multiple-choice
    question: "The Developers are not having regular (Daily) Scrums. As a Scrum Master, you..."
    options:
      - "Will advise them to think about conducting regular Scrums, but will let them take the decision themselves as they are self-managing."
      - "Will escalate this to resource managers."
      - "Will step in directly to guard the Scrum Framework by asking action-begetting questions to the team and positively influencing them to conduct Scrum events."
    answer: "Will step in directly to guard the Scrum Framework by asking action-begetting questions to the team and positively influencing them to conduct Scrum events."
    explanation: "The Scrum Master is accountable for Scrum being understood and enacted. The Daily Scrum is a mandatory Scrum event and the SM must act — not just advise — when it is skipped. Option a mistreats self-management as unlimited discretion; self-management operates within Scrum. Option b violates Scrum's servant-leadership model. The SM uses coaching, not command, to protect the framework."

  - id: 107
    type: multiple-choice
    question: "When a Scrum Team adds new team members to replace departing ones, the productivity of the team..."
    options:
      - "Will be negatively impacted."
      - "Will be positively impacted."
      - "Will remain the same."
    answer: "Will be negatively impacted."
    explanation: "Any team membership change — even replacing departing members with equally skilled newcomers — disrupts established team dynamics, communication patterns, and shared context. Productivity typically drops while the team re-forms. This is consistent with both Scrum experience and Tuckman's team development model (forming-storming-norming-performing cycle restarts)."

  - id: 108
    type: multiple-choice
    question: "The role of Scrum Master with respect to Scrum artifacts is..."
    options:
      - "Coach the team to increase the transparency of the artifacts."
      - "Decide the format of the artifacts and ensure the team follows it."
      - "Owner of the artifacts and responsible for having them up to date."
    answer: "Coach the team to increase the transparency of the artifacts."
    explanation: "The Scrum Master's responsibility toward artifacts is to ensure they are transparent and understood. The SM coaches the team to maintain and improve artifact transparency. The SM does not own or dictate the format of artifacts — the Scrum Guide assigns artifact ownership to specific roles (PB to PO, Sprint Backlog to Developers, Increment to Scrum Team)."

  - id: 109
    type: multiple-choice
    question: "Scrum is used to optimize value and control risk in complex product development. A component of value optimization is..."
    options:
      - "Averaging out the values delivered over Sprints and using it to make decisions."
      - "Deciding to continue a Sprint only after verifying if it has enough value worth the effort."
      - "Ensuring that the Developers are not having idle time by constantly monitoring their productivity."
    answer: "Deciding to continue a Sprint only after verifying if it has enough value worth the effort."
    explanation: "The Scrum Guide discusses the Product Owner's authority to cancel a Sprint when the Sprint Goal becomes obsolete — reflecting that Sprints only continue when they deliver sufficient value. Averaging values (option a) is a metrics approach not described in Scrum. Monitoring Developers for idle time (option c) is command-and-control micro-management, antithetical to Scrum."

  - id: 110
    type: multiple-choice
    question: "Three Scrum Teams are working as part of a big project to develop a product. When Sprints are in motion, there will be..."
    options:
      - "Three Product Backlogs and three Sprint Backlogs."
      - "One Product Backlog and three Sprint Backlogs."
      - "One Product Backlog and one Sprint Backlog."
    answer: "One Product Backlog and three Sprint Backlogs."
    explanation: "The Scrum Guide is definitive: one product has exactly one Product Backlog, regardless of team count. Each Scrum Team, however, maintains its own Sprint Backlog representing its plan for the Sprint. Three teams on one product means one PB and three Sprint Backlogs. This is a high-frequency exam question."

  - id: 111
    type: multiple-choice
    question: "Usually, when Scrum is applied newly in an organization..."
    options:
      - "Power of empiricism will be transparent."
      - "Everything that impedes producing value in short Sprints and accumulation of waste will be made transparent."
      - "The organization change management process defined by Scrum should be followed to avoid implementation issues."
    answer: "Everything that impedes producing value in short Sprints and accumulation of waste will be made transparent."
    explanation: "The Scrum Guide notes that Scrum makes visible the dysfunction, inefficiency, and impediments in the current system. When first applying Scrum, organizations discover what blocks frequent value delivery — this is Scrum's diagnostic and improvement mechanism. Scrum does not define a change management process (option c)."

  - id: 112
    type: multiple-choice
    question: "In empiricism, decisions are based on..."
    options:
      - "Scientific calculation and prediction."
      - "Meeting and brainstorming."
      - "Observation, experience, and experimentation."
    answer: "Observation, experience, and experimentation."
    explanation: "The Scrum Guide defines empiricism as knowledge coming from experience and decisions based on what is observed. The three pillars — Transparency, Inspection, Adaptation — are all rooted in actual observation and experience, not theoretical calculation or unstructured discussion. This is a direct Scrum Guide definition question."

  - id: 113
    type: multiple-choice
    question: "What is the correct statement about technical design in Scrum?"
    options:
      - "The technical design continuously evolves over the Sprints. The team should have some basic guidelines to start with, but try to emerge the design through the Sprints."
      - "The team can choose to have an exclusive Sprint only to finalize the technical design. At the end, the design should be approved by the project architect."
      - "The team does not need to pay attention on architecture as it will evolve itself as a by-product of self-management."
    answer: "The technical design continuously evolves over the Sprints. The team should have some basic guidelines to start with, but try to emerge the design through the Sprints."
    explanation: "Scrum supports emergent architecture — starting with lightweight guiding principles and allowing design to evolve through delivery. A dedicated architecture-only Sprint (option b) produces no Done Increment and violates Sprint purpose. Ignoring architecture (option c) leads to technical debt and collapse. The team actively tends to architecture through each Sprint."

  - id: 114
    type: multiple-choice
    question: "The Developers of a Scrum Team are often interrupted mid-Sprint and assigned to work on high-priority items. This frequently leads to not meeting the Sprint Goal. The most likely cause could be..."
    options:
      - "The Developers are not technically competent."
      - "The Product Owner authority is ineffective or influenced by another authority."
      - "Sprint Planning is poor."
    answer: "The Product Owner authority is ineffective or influenced by another authority."
    explanation: "Persistent mid-Sprint interruptions that override the Sprint Goal indicate that the Product Owner is not effectively protecting the team or is being overridden by external authority (managers, executives). The PO is the single authority for what Developers work on; if others can bypass this, the PO's authority is compromised. This is a PO accountability and organizational problem."

  - id: 115
    type: select-all
    question: "The Developers are accountable for..."
    options:
      - "Selecting the Product Backlog Items for the Sprint after clarifying with the Product Owner."
      - "Reporting to the Scrum Master."
      - "Creating a valuable and useful Increment every Sprint."
      - "Increasing the productivity as per management goal."
    answers:
      - "Selecting the Product Backlog Items for the Sprint after clarifying with the Product Owner."
      - "Creating a valuable and useful Increment every Sprint."
    explanation: "The Scrum Guide states Developers are accountable for creating a Done Increment every Sprint and for selecting PBIs they can complete during Sprint Planning. Developers do not report to the Scrum Master (no hierarchy within Scrum Team) and are not obligated to meet externally set productivity targets. Self-management means the team determines how much they can complete."

  - id: 116
    type: multiple-choice
    question: "The process of new facts or knowledge coming into existence or becoming visible unexpectedly is called..."
    options:
      - "Transparency"
      - "Inspection"
      - "Emergence"
    answer: "Emergence"
    explanation: "Emergence refers to the Scrum principle that knowledge, requirements, and solutions surface progressively as work proceeds rather than being fully known upfront. This is why Scrum uses a Product Backlog that evolves rather than a fixed requirements document. Transparency makes information visible; Inspection evaluates it — Emergence is the source of new knowledge."

  - id: 117
    type: multiple-choice
    question: "Middle of the Sprint, the team comes to know that there are some usage-related changes to the product needs. The Product Backlog..."
    options:
      - "Is modified to reflect the new need."
      - "Is closed. Project is cancelled and a new Product Backlog will be built."
      - "Is not impacted and the Sprints continue."
    answer: "Is modified to reflect the new need."
    explanation: "The Product Backlog is a living artifact — it is continuously updated to reflect new learning, market changes, and evolving needs. This is a core Scrum principle. Projects are not cancelled because requirements change (option b). Ignoring changes (option c) violates empiricism and Scrum's commitment to delivering value."

  - id: 118
    type: multiple-choice
    question: "Mid-Sprint, Developers find that some PBIs forecast for this Sprint cannot be finished due to significant additional effort, but they can still meet the Sprint Goal with the remaining items. The next thing to do is..."
    options:
      - "Consult with the Product Owner and if they agree, cancel the current Sprint and plan a new Sprint with new estimations."
      - "Do not cancel or modify the Sprint. Extend the Sprint duration as required for the additional effort."
      - "Collaborate with the Product Owner to remove the PBIs that cannot progress, add new work up to team capacity, and complete the Sprint."
    answer: "Collaborate with the Product Owner to remove the PBIs that cannot progress, add new work up to team capacity, and complete the Sprint."
    explanation: "When PBIs cannot be completed but the Sprint Goal is still achievable, the Scrum approach is to negotiate scope with the PO — remove the blocked items and potentially pull in new PBIs — while completing the Sprint. Cancellation (option a) is reserved for when the Sprint Goal itself is obsolete. Extending the Sprint (option b) violates time-boxing."

  - id: 119
    type: true-false
    question: "A good guideline to differentiate Acceptance Criteria from Definition of Done is: Definition of Done provides a checklist of quality measures to take the Increment close to usable state, while Acceptance Criteria specify the business functionality."
    answer: true
    explanation: "This is the correct distinction: the DoD applies to all Increments as a quality standard (non-functional, cross-cutting), while Acceptance Criteria are specific to individual PBIs and describe the business behavior that must be satisfied. Understanding this distinction is critical for both the exam and real Scrum practice."

  - id: 120
    type: multiple-choice
    question: "What is the desirable team composition for a large product development program?"
    options:
      - "Program is divided into individual Scrums based on business feature. Each Scrum Team has all the skills needed to finish the job without external help."
      - "Program is divided into individual Scrums based on technical components. Each Scrum Team has its component-specific skills needed to finish their own component without external help."
      - "Program is organized into consumer Scrums and service provider Scrums. Each Scrum gets dependencies done by leveraging their Product Owner position."
    answer: "Program is divided into individual Scrums based on business feature. Each Scrum Team has all the skills needed to finish the job without external help."
    explanation: "Scrum scales best with feature teams — cross-functional teams aligned to business value streams that can deliver end-to-end functionality independently. Component teams (option b) create dependencies and hand-offs that slow delivery. Consumer/provider hierarchies (option c) add coordination overhead and contradict Scrum's flat team structure."

  - id: 121
    type: multiple-choice
    question: "How are Non-Functional Requirements addressed by the Scrum Team?"
    options:
      - "By testing them in a Hardening Sprint."
      - "By ensuring that they are met by every Increment and typically defining them in the Definition of Done."
      - "By having a Non-Functional System Team owning them."
    answer: "By ensuring that they are met by every Increment and typically defining them in the Definition of Done."
    explanation: "Non-Functional Requirements (performance, security, scalability, etc.) should be embedded in the Definition of Done so they are verified with every Increment — not deferred to a Hardening Sprint or owned by a separate team. Hardening Sprints are a waterfall anti-pattern in Scrum. A separate NFR team creates dependencies that violate cross-functional team principles."

  - id: 122
    type: multiple-choice
    question: "A Scrum Team has technical specialists who are idle when their special skills are not needed. What should be done?"
    options:
      - "Continue to have the specialists to deliver fully integrated Increments. Gradually facilitate the Developers to organize their work to fully leverage these special skills. If required, enhance everyone's domain of expertise so no one is idle."
      - "Let the project manager coordinate their staffing needs and plan partial allocations to different teams to avoid idle time."
      - "Defer and accumulate the special work to later Sprints until specialists are needed full time. Deliver the Increment with workarounds."
    answer: "Continue to have the specialists to deliver fully integrated Increments. Gradually facilitate the Developers to organize their work to fully leverage these special skills. If required, enhance everyone's domain of expertise so no one is idle."
    explanation: "Scrum encourages cross-skilling over time to reduce dependencies and idle time within the team. The immediate priority is still delivering integrated Increments using specialists' knowledge. Partial allocation to multiple teams (option b) introduces a project-manager-coordination model that Scrum replaces. Deferring specialized work (option c) creates technical debt and integration problems."

  - id: 123
    type: multiple-choice
    question: "The Product Owner provides transparency of their product plan to stakeholders and the Scrum Team through..."
    options:
      - "Planning Backlog"
      - "Sprint Backlog"
      - "Project Backlog"
      - "Product Backlog"
    answer: "Product Backlog"
    explanation: "The Product Backlog is the single source of truth for what will be built and in what order. The PO uses it to communicate product vision, priorities, and plans to all stakeholders. 'Planning Backlog' and 'Project Backlog' are not Scrum terms. The Sprint Backlog is a team-internal planning artifact, not a product transparency tool for stakeholders."

  - id: 124
    type: true-false
    question: "The Developers can deliver an Increment that meets the Definition of Done, but the Increment can still have defects that are known to the team and the Product Owner."
    answer: true
    explanation: "Meeting the Definition of Done does not guarantee zero defects — it guarantees meeting the DoD criteria the team defined. If the DoD does not require all known defects to be fixed (e.g., low-priority cosmetic bugs logged in the Product Backlog), the Increment can be Done and still have known issues. However, this underscores the importance of a strong DoD."

  - id: 125
    type: select-all
    question: "During the Daily Scrum, the Scrum Master's role is to..."
    options:
      - "Facilitate discussions of the Developers."
      - "Moderate and control so that everyone gets a fair chance to speak."
      - "Ensure that all 3 questions have been answered."
      - "Teach the Developers to keep the Daily Scrum within the 15-minute time-box."
      - "All of the above."
    answers:
      - "Facilitate discussions of the Developers."
      - "Teach the Developers to keep the Daily Scrum within the 15-minute time-box."
    explanation: "The Scrum Guide says the Scrum Master ensures the Daily Scrum takes place and teaches Developers to keep it within the 15-minute time-box. The SM may facilitate if needed. However, the Scrum Guide no longer mandates three specific questions — that was removed in the 2020 update. Option b (moderate/control) describes a meeting chair, not a servant-leader SM. The Daily Scrum is run by and for the Developers."

  - id: 126
    type: true-false
    question: "For the Product Backlog Refinement act, the Scrum Team needs to define a recurring pre-set time every week outside the current working hours of the Developers."
    answer: false
    explanation: "The Scrum Guide does not prescribe when, how often, or in what format Backlog Refinement occurs — only that it consumes no more than 10% of the Developers' capacity. The team decides how and when to refine. There is no requirement for it to happen outside working hours or at a fixed weekly slot."

  - id: 127
    type: multiple-choice
    question: "Burn-up and Burn-down charts show evolution of progress over time. In particular..."
    options:
      - "Burn-up shows increase in completion, while Burn-down shows remaining effort."
      - "Burn-up shows increase in team productivity, while Burn-down shows decrease in productivity."
      - "Burn-up shows increase in turn-around time, while Burn-down shows decrease in turn-around time."
    answer: "Burn-up shows increase in completion, while Burn-down shows remaining effort."
    explanation: "Burn-up charts track completed work increasing toward the total scope (showing progress made). Burn-down charts track remaining work decreasing toward zero (showing work left to do). Both are useful progress visualization tools; neither measures productivity or turn-around time directly. This is a direct definition question."

  - id: 128
    type: multiple-choice
    question: "The Developers meet every day to inspect progress and adapt the next day's plan. If the Daily Scrum exposes the need to re-plan the rest of the Sprint, these re-planning activities happen..."
    options:
      - "During the Daily Scrum."
      - "Immediately after the Daily Scrum."
      - "As soon as the team gets some extra time."
      - "The Sprint plan cannot be revised except during Sprint Planning."
    answer: "Immediately after the Daily Scrum."
    explanation: "The Daily Scrum is a 15-minute focused sync — detailed re-planning happens immediately after the Daily Scrum in a separate discussion. Re-planning during the Daily Scrum would blow the time-box. The Sprint Backlog is a living plan that can be updated any time, but the structured re-planning conversation follows, not replaces, the Daily Scrum."

  - id: 129
    type: multiple-choice
    question: "A Scrum Team decides to have an exclusive Sprint to evolve the technical architecture. The sole outcome of this Sprint is a finalized architecture design."
    options:
      - "It is a good practice since it will help the design to emerge."
      - "It is not the Scrum approach, since every Sprint must produce at least one releasable functionality."
      - "It does not matter, since the team is self-managing about how to perform their work."
    answer: "It is not the Scrum approach, since every Sprint must produce at least one releasable functionality."
    explanation: "Every Sprint must result in a Done Increment — a usable product increment, not just a design artifact. Architecture-only Sprints produce no potentially releasable functionality, violating the Scrum Guide's requirement for each Sprint to deliver a Done Increment. Architecture should emerge from feature delivery, not precede it in a dedicated Sprint."

  - id: 130
    type: multiple-choice
    question: "In a Scrum-based software development effort, one of the Product Backlog Items is asking for production of a document while the Sprint Goal will also deliver a Product Increment."
    options:
      - "It is not okay. Every Product Backlog item must be about working software."
      - "It is not okay. Documentation is not needed until the Product Owner chooses to release an Increment to production."
      - "It is okay. A Sprint can produce a document as the sole outcome of the Sprint."
      - "It is okay. A Sprint can produce other deliverables like a document requested by the Product Owner along with a working Increment."
    answer: "It is okay. A Sprint can produce other deliverables like a document requested by the Product Owner along with a working Increment."
    explanation: "Scrum does not restrict PBIs to working software only — any work that delivers value, including documentation requested by the PO, can be in the Sprint alongside the product Increment. Option c is a trap: a Sprint cannot produce only a document as its sole outcome — it must include a Done Increment. Options a and b are overly restrictive."

  - id: 131
    type: multiple-choice
    question: "An organization needs to structure hundreds of Developers into Scrum Teams. As a Scrum Master, you will..."
    options:
      - "Work with organization management and prepare the best structure for each Scrum Team based on seniority and skills of the Developers."
      - "Identify the required number of Scrum Masters and require them to choose their Scrum Teams."
      - "Facilitate awareness of the Developers about the goals and objectives of the product development, coach them about Scrum, and let them work among themselves to form the Scrum Teams."
    answer: "Facilitate awareness of the Developers about the goals and objectives of the product development, coach them about Scrum, and let them work among themselves to form the Scrum Teams."
    explanation: "Scrum Master serves by enabling self-organization — Developers should self-select into teams based on shared understanding of product goals. Top-down assignment by management or SM (options a and b) removes self-organization and can create resentment. Developers who understand the goals and Scrum will form effective teams themselves."

  - id: 132
    type: select-all
    question: "It is essential for the Product Owner to have these skills. Usually the Scrum Master serves the Product Owner by coaching them..."
    options:
      - "Software application development."
      - "Understanding and practicing agility."
      - "Coaching the team."
      - "Product planning in empirical environments."
    answers:
      - "Understanding and practicing agility."
      - "Product planning in empirical environments."
    explanation: "The Scrum Guide specifies that the Scrum Master serves the PO by coaching them on goal-setting techniques, empiricism, and agile product management. Software development skill (option a) is not a PO requirement per Scrum. Coaching the team (option c) is the SM's responsibility, not the PO's."

  - id: 133
    type: multiple-choice
    question: "An organization decides to convert all Project Managers into Scrum Masters. This strategy is..."
    options:
      - "Good. The project managers already know how to run projects. They just need training on Scrum."
      - "Bad. It will create resentment because they will have a small team to manage."
      - "Questionable. Identifying persons who are inclined or experienced in coaching and facilitation as their leadership style is a better strategy."
    answer: "Questionable. Identifying persons who are inclined or experienced in coaching and facilitation as their leadership style is a better strategy."
    explanation: "Scrum Master requires a servant-leadership, coaching, and facilitation mindset — skills that differ significantly from traditional project management's planning and control focus. Bulk conversion of PMs to SMs risks putting command-and-control practitioners in servant-leader roles. The organization should select SMs based on coaching aptitude, not just current title."

  - id: 134
    type: select-all
    question: "A Product Owner requests Developers to help with some tasks related to Product Backlog maintenance. What is true?"
    options:
      - "The Scrum Master should step in and coach the Product Owner to perform their job themselves."
      - "It is okay, but the Product Owner is still accountable for the Product Backlog maintenance."
      - "The Developers should refer the Product Owner to speak with their manager."
      - "The Developers can volunteer if this additional task does not impact their Sprint work."
    answers:
      - "It is okay, but the Product Owner is still accountable for the Product Backlog maintenance."
      - "The Developers can volunteer if this additional task does not impact their Sprint work."
    explanation: "The Scrum Guide explicitly allows the PO to delegate Product Backlog work to others, including Developers — the PO remains accountable for the result but does not have to do all the work personally. Developers may volunteer if capacity allows. Option a is wrong because delegating PB tasks is a valid PO practice, not something the SM should prevent. Option c is wrong as referring to a manager is irrelevant here."
---
