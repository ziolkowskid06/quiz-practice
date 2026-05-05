---
title: "PSM I — Part 2: Scrum in Practice"
topic: "SCRUM"
description: "Starting Scrum, Scrum roles, stakeholder interactions, Sprint execution, and closing."
emoji: "⚙️"
questions:
  - id: 1
    type: select-all
    question: "Before starting the first Sprint, what needs to be in place?"
    options:
      - "A complete Product Backlog capturing detailed product needs."
      - "Availability of the Project Manager."
      - "Just enough Product Backlog Items with business ideas for the first Sprint."
      - "Completed System Architecture."
      - "Staffed Scrum Team."
    answers:
      - "Just enough Product Backlog Items with business ideas for the first Sprint."
      - "Staffed Scrum Team."
    explanation: "The Scrum Guide requires a Scrum Team and a Product Backlog with enough items to start — not a complete backlog or upfront architecture. The trap is assuming Scrum needs a fully elaborated backlog before Sprint 1; Scrum embraces progressive elaboration, so 'just enough' is the correct standard."

  - id: 2
    type: multiple-choice
    question: "The size of the Scrum Team is:"
    options:
      - "7 plus/minus 2."
      - "Typically 10 or fewer people."
      - "3 to 9."
      - "None of the above."
    answer: "Typically 10 or fewer people."
    explanation: "The 2020 Scrum Guide states the Scrum Team is typically 10 or fewer people. The older '7 plus/minus 2' and '3–9' figures are from superseded guidance; the current Guide uses 'typically 10 or fewer' to allow flexibility while discouraging larger teams."

  - id: 3
    type: multiple-choice
    question: "When a Scrum Team adds new team members to replace outgoing members, the productivity of the team:"
    options:
      - "Will be negatively impacted."
      - "Will be positively impacted."
      - "Will remain the same."
    answer: "Will be negatively impacted."
    explanation: "Adding or replacing team members disrupts the established working relationships, shared context, and team dynamics, causing a temporary drop in productivity. This reflects the well-known Tuckman model concept — teams re-enter forming/storming stages whenever membership changes."

  - id: 4
    type: select-all
    question: "In Scrum, the technical design of the solution is:"
    options:
      - "Built one module after another with the Architect's guidance."
      - "Initially created as a common architectural pattern by selected designers and architects and shared with others to build on top of it."
      - "Started with just enough design which emerges throughout the Sprints."
      - "Reached through focused attention during core design hours in the Sprint."
    answers:
      - "Started with just enough design which emerges throughout the Sprints."
      - "Reached through focused attention during core design hours in the Sprint."
    explanation: "Scrum promotes emergent design — starting with just enough architecture and refining it iteratively through focused work within each Sprint. The trap is selecting the 'big upfront architecture' options; Scrum does not prohibit architects but explicitly opposes a separate, locked design phase before development."

  - id: 5
    type: multiple-choice
    question: "A Scrum Team can have an exclusive first Sprint to prepare a Product Backlog, which is the sole outcome from that Sprint."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "The Scrum Guide requires every Sprint to produce a usable Increment. A Sprint dedicated solely to backlog preparation produces no Increment and therefore violates the core definition of a Sprint. This is a common trap; even Sprint 1 must deliver a done Increment."

  - id: 6
    type: multiple-choice
    question: "In Backlog Refinement sessions, the Developers perform development activities such as coding and testing."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "Backlog Refinement is about adding detail, estimates, and order to Product Backlog Items — not about coding or testing. Those are Sprint execution activities. Confusing refinement with Sprint work is a frequent exam trap."

  - id: 7
    type: multiple-choice
    question: "Which is the correct statement about the Product Backlog?"
    options:
      - "The Product Backlog cannot be changed without a change request to the Product Owner."
      - "The Product Backlog is not updated when a Sprint is in progress."
      - "The Product Backlog can be updated anytime by the Product Owner. Changes in business requirements, market conditions, or technology may cause changes to the Product Backlog."
    answer: "The Product Backlog can be updated anytime by the Product Owner. Changes in business requirements, market conditions, or technology may cause changes to the Product Backlog."
    explanation: "The Scrum Guide states the Product Backlog is a living artifact that the Product Owner continuously updates in response to changing conditions. A formal change-request process contradicts Scrum's empirical approach, and freezing the backlog during a Sprint contradicts the PO's accountability."

  - id: 8
    type: multiple-choice
    question: "How does a Scrum Team define the Definition of Done?"
    options:
      - "It always creates a new Definition of Done."
      - "It checks with the Product Owner if a Definition of Done is required and then proceeds to create one."
      - "None of the above."
    answer: "None of the above."
    explanation: "The Scrum Guide states that if a Definition of Done exists at the organizational level, the Scrum Team must use it as a minimum standard; only if none exists does the team create one. Neither option A nor B captures this nuance — the correct answer is 'none of the above.'"

  - id: 9
    type: multiple-choice
    question: "Which of the following statements about the Product Backlog is NOT correct?"
    options:
      - "Only the people who perform the work can finalize the estimate of Product Backlog Items."
      - "The Product Owner always orders the Product Backlog Items based solely on the value of each individual item compared to another item."
      - "Multiple Scrum Teams working on the same product should have only one common Product Backlog."
      - "A Scrum Master can author a Product Backlog Item for the Product Owner's consideration."
      - "The Developers finalize all estimates."
    answer: "The Product Owner always orders the Product Backlog Items based solely on the value of each individual item compared to another item."
    explanation: "The Scrum Guide gives the Product Owner full authority to order the Product Backlog using any criteria they deem appropriate — value is one input, but risk, dependencies, and technical coherence may also factor in. 'Solely on individual item value' is an over-restriction not found in the Scrum Guide."

  - id: 10
    type: multiple-choice
    question: "The Product Backlog is ordered by:"
    options:
      - "The individual Product Backlog Item's value."
      - "Whatever is deemed as appropriate by the Product Owner."
      - "The priority of senior management."
    answer: "Whatever is deemed as appropriate by the Product Owner."
    explanation: "The Scrum Guide grants the Product Owner sole authority to order the Product Backlog however they see fit, considering value, risk, dependencies, and other factors. 'Individual item value only' and 'senior management priority' both inappropriately constrain or transfer the Product Owner's authority."

  - id: 11
    type: multiple-choice
    question: "Which of the following statements about the Scrum Master is true?"
    options:
      - "Scrum Master is a management position. A person with strong project management experience in delivering results is a good fit."
      - "Scrum Master is an optional position. An alternative is to train the team on Scrum before they start, and they can self-manage without a Scrum Master."
      - "Scrum Master is a management position. A person with Scrum experience and a coaching style of servant leadership is a good fit."
      - "None of the above."
    answer: "None of the above."
    explanation: "The 2020 Scrum Guide describes the Scrum Master as a true leader who serves the Scrum Team — not a traditional management role focused on delivery results. The Scrum Master is not optional; the Scrum Guide lists it as one of three mandatory accountabilities. The trap in option C is calling it a 'management position,' which contradicts servant leadership."

  - id: 12
    type: select-all
    question: "What are some examples of Product Backlog management techniques where a Scrum Master can coach the Product Owner and Developers?"
    options:
      - "Creating a common standard for the preferred level of description/transparency each Product Backlog Item should meet before Sprint Planning."
      - "In addition to using value, ordering items with input from Developers on technical coherence."
      - "Choosing a tool to manage the Product Backlog."
      - "Writing items as user stories with acceptance tests."
    answers:
      - "Creating a common standard for the preferred level of description/transparency each Product Backlog Item should meet before Sprint Planning."
      - "In addition to using value, ordering items with input from Developers on technical coherence."
      - "Writing items as user stories with acceptance tests."
    explanation: "The Scrum Guide identifies these as coaching responsibilities of the Scrum Master. Choosing a specific tool is an operational decision, not a coaching technique for Product Backlog management. The Scrum Master coaches on transparency, ordering criteria, and item formats — not on tooling choices."

  - id: 13
    type: multiple-choice
    question: "The Developers lack sufficient product-domain understanding. The Scrum Master need not take an active interest in improving this as it's not related to Scrum."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "The Scrum Master is accountable for the Scrum Team's effectiveness, which includes helping team members acquire the skills and knowledge they need. A domain understanding gap directly impairs the Developers' ability to collaborate with the Product Owner and deliver value, making it a Scrum Master concern."

  - id: 14
    type: multiple-choice
    question: "The role of the Scrum Master with respect to the Scrum artifacts is to:"
    options:
      - "Coach the Team to increase the transparency of the artifacts."
      - "Decide the format of the artifacts and ensure the Team follows it."
      - "Own the artifacts and be responsible for keeping them up to date."
    answer: "Coach the Team to increase the transparency of the artifacts."
    explanation: "The Scrum Guide assigns artifact ownership to specific accountabilities (Product Owner owns the Product Backlog; Developers own the Sprint Backlog) — not the Scrum Master. The Scrum Master's role is to serve and coach, fostering transparency rather than owning or dictating artifact formats."

  - id: 15
    type: multiple-choice
    question: "In a Scrum Team, if the Scrum Master is also a Developer, then:"
    options:
      - "They should not participate in the Daily Scrum."
      - "They must participate in the Daily Scrum."
      - "They can participate in the Daily Scrum only if the Developers invite them."
    answer: "They must participate in the Daily Scrum."
    explanation: "The Daily Scrum is an event for the Developers; a person holding both the Scrum Master and Developer accountabilities participates as a Developer and must attend. The Scrum Guide permits one person to hold multiple accountabilities, and participation follows from the Developer role."

  - id: 16
    type: multiple-choice
    question: "During a Sprint Review, stakeholders say progress isn't transparent and they can't see next steps. Who bears primary responsibility?"
    options:
      - "Scrum Team"
      - "Scrum Master"
      - "Product Owner"
      - "Developers"
    answer: "Product Owner"
    explanation: "The Product Owner is accountable for managing the Product Backlog and ensuring stakeholders understand the product's status and direction — including at the Sprint Review. Transparency of progress and the roadmap toward the Product Goal is a Product Owner accountability, not the Scrum Master's or Developers' primary responsibility."

  - id: 17
    type: multiple-choice
    question: "A stakeholder asks a Developer to do urgent work outside the Sprint Goal. The Developer refers them to the Product Owner. The Scrum Master should:"
    options:
      - "Do nothing (the Developer acted correctly)."
      - "Coach the Developer to support senior management requirements."
      - "Form a sub-team for such external requests."
    answer: "Do nothing (the Developer acted correctly)."
    explanation: "The Scrum Guide states that no one outside the Scrum Team may direct the Developers to work on different or additional tasks; such requests must go through the Product Owner. The Developer followed the correct protocol, so no Scrum Master intervention is needed."

  - id: 18
    type: multiple-choice
    question: "The number one priority of the Product Owner is:"
    options:
      - "Managing the development work."
      - "Guarding the team from interruptions."
      - "Maximizing the value of the Scrum Team's work."
      - "Testing Developers' work against detailed requirements."
    answer: "Maximizing the value of the Scrum Team's work."
    explanation: "The Scrum Guide explicitly states that the Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. Managing development work is the Developers' domain; guarding from interruptions is a Scrum Master responsibility."

  - id: 19
    type: multiple-choice
    question: "An organization forms Scrum Teams of 15 members because it maps their current team sizes. What should be done?"
    options:
      - "This is okay. It will speed up the Scrum transformation."
      - "Scrum is immutable. It is recommended that the Scrum Team follow the guideline of ten or fewer people in order to drive the Scrum-based change."
      - "It is up to the Teams to decide how they want to be formed."
    answer: "Scrum is immutable. It is recommended that the Scrum Team follow the guideline of ten or fewer people in order to drive the Scrum-based change."
    explanation: "The Scrum Guide is intentionally incomplete and rules out modifications that undermine its pillars. Teams of 15 violate the 'typically 10 or fewer' guideline, which exists to maintain communication efficiency and cohesion. Mapping legacy team sizes to Scrum without adjustment defeats the purpose of the Scrum transformation."

  - id: 20
    type: multiple-choice
    question: "A conflicting Developer's behavior causes issues. Who is responsible for removing this issue?"
    options:
      - "Management"
      - "Product Owner"
      - "Scrum Master"
      - "Scrum Team"
    answer: "Scrum Team"
    explanation: "The Scrum Guide states the Scrum Team is self-managing — they resolve their own internal issues, including interpersonal conflicts. While the Scrum Master may coach, accountability for resolving team dynamics lies with the Scrum Team itself, not management or any single role."

  - id: 21
    type: multiple-choice
    question: "A team hands the Increment to an external team for specialized testing to meet the Definition of Done. Is this truly a cross-functional team?"
    options:
      - "Yes"
      - "No"
    answer: "No"
    explanation: "The Scrum Guide defines a cross-functional team as one that has all the competencies needed to create a done Increment without depending on others outside the team. Relying on an external team for testing to meet the Definition of Done means the Scrum Team lacks a required competency — it is not truly cross-functional."

  - id: 22
    type: multiple-choice
    question: "A team has technical specialists who work only when needed and are idle otherwise. What should you do?"
    options:
      - "Continue with specialists, deliver fully integrated Increments, and gradually organize work to fully leverage specialty skills (including upskilling others)."
      - "Let a Project Manager coordinate staffing and partial allocations to avoid idle time."
      - "Defer special work to later Sprints and add specialists only then; stub for now."
    answer: "Continue with specialists, deliver fully integrated Increments, and gradually organize work to fully leverage specialty skills (including upskilling others)."
    explanation: "Scrum embraces cross-functionality as a goal to work toward, not a prerequisite. The correct approach is to keep delivering integrated Increments while gradually broadening skills across the team. Introducing a Project Manager or deferring work undermines Scrum's self-management and iterative delivery principles."

  - id: 23
    type: multiple-choice
    question: "A Scrum Team decides to reduce Daily Scrum to once a week. What should happen?"
    options:
      - "Needs approval by the Team Manager."
      - "Needs approval by the Agile Coach."
      - "The Scrum Team is self-managing; they can choose their practices."
      - "The Scrum Master should coach the team on the essentials of conducting Daily Scrums."
    answer: "The Scrum Master should coach the team on the essentials of conducting Daily Scrums."
    explanation: "The Daily Scrum is a prescribed Scrum event with a fixed cadence of once per day during the Sprint. While teams are self-managing, they cannot modify mandatory Scrum events — Scrum is immutable. The Scrum Master's responsibility is to coach the team on why daily inspection and adaptation of the Sprint plan is essential."

  - id: 24
    type: select-all
    question: "Mid-Sprint, the team has capacity and wants to add more work. Who should be present to decide and modify the Sprint Backlog?"
    options:
      - "Senior Developer of the Scrum Team"
      - "Scrum Master"
      - "All Developers"
      - "Product Owner"
      - "Scrum Team"
    answers:
      - "All Developers"
      - "Product Owner"
    explanation: "The Sprint Backlog belongs to the Developers, so any changes require the agreement of all Developers. Adding new work also affects the Sprint Goal and product value, which requires the Product Owner's input on what to add. The Scrum Master is not required for Sprint Backlog modifications, and seniority does not grant special authority."

  - id: 25
    type: multiple-choice
    question: "The support of the organization or senior management is:"
    options:
      - "Not needed for Scrum implementations."
      - "Not needed because there is no scope for management in Scrum."
      - "Needed to support the Product Owner to maximize the product value and the Scrum Master to coach and implement Scrum."
    answer: "Needed to support the Product Owner to maximize the product value and the Scrum Master to coach and implement Scrum."
    explanation: "The Scrum Guide acknowledges that organizational support enables the Product Owner and Scrum Master to fulfil their accountabilities effectively. Without management support, the Product Owner cannot make empowered decisions and the Scrum Master cannot drive organizational change. Saying Scrum has 'no scope for management' confuses the absence of a Project Manager role with the absence of any management involvement."

  - id: 26
    type: multiple-choice
    question: "Who must participate in the Sprint Review?"
    options:
      - "Scrum Team"
      - "Audit Team"
      - "Technical and domain experts"
      - "Stakeholders"
    answer: "Scrum Team"
    explanation: "The Scrum Guide mandates that the Sprint Review is attended by the Scrum Team; stakeholders are invited by the Product Owner but their attendance is not mandatory. Audit teams and technical experts are never required participants. The trap is assuming stakeholder presence is mandatory — it is encouraged but not required."

  - id: 27
    type: select-all
    question: "Who performs inspections in Scrum events?"
    options:
      - "Product Owner"
      - "Corporate Audit Group"
      - "Developers"
      - "Senior Management"
      - "Technical Domain Experts"
      - "Invited Stakeholders"
    answers:
      - "Product Owner"
      - "Developers"
      - "Invited Stakeholders"
    explanation: "Scrum events are inspection opportunities for the Scrum Team (Product Owner and Developers) and invited stakeholders. Corporate Audit Groups and Senior Management are not designated inspectors within Scrum's empirical framework; adding external auditors as inspectors would undermine the team's self-management."

  - id: 28
    type: multiple-choice
    question: "You are a Scrum Master and the organization plans a Scrum road show, asking you to help. You should:"
    options:
      - "Gladly volunteer because the Scrum Master also coaches the organization."
      - "Politely refuse to keep focus on the Sprint Goal."
      - "Delegate to team members for their learning and visibility."
    answer: "Gladly volunteer because the Scrum Master also coaches the organization."
    explanation: "The Scrum Guide lists coaching the organization on Scrum adoption as an explicit Scrum Master accountability. A Scrum road show is an organizational change activity that falls squarely within this responsibility. Refusing or delegating neglects a core part of the Scrum Master's service to the organization."

  - id: 29
    type: multiple-choice
    question: "Since the Scrum Team is self-managing, it can create an additional role to represent the organization within Scrum."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "The Scrum Guide defines exactly three accountabilities within a Scrum Team: Product Owner, Scrum Master, and Developers. No additional roles are recognized. Creating new roles within Scrum — even for legitimate organizational needs — violates Scrum's immutable framework."

  - id: 30
    type: multiple-choice
    question: "An executive wants Developers to include a critical feature in the current Sprint. The Developers should:"
    options:
      - "Work on it since it's the organization's priority."
      - "Ask the executive to work with the Product Owner."
      - "Negotiate swapping in an item of comparable scope."
    answer: "Ask the executive to work with the Product Owner."
    explanation: "The Scrum Guide explicitly prohibits anyone outside the Scrum Team from directing the Developers to work on different tasks; such requests must route through the Product Owner. Developers acting on executive instructions bypasses the Product Owner's authority and risks the Sprint Goal."

  - id: 31
    type: multiple-choice
    question: "Senior management does not influence the Product Owner on how the product evolves."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "The Scrum Guide notes that the Product Owner may represent the desires of a committee but must be one empowered person. Senior management can and does influence the Product Owner through organizational direction and strategic goals — the Product Owner is not isolated from the organization."

  - id: 32
    type: multiple-choice
    question: "A Scrum Team must be cross-functional. This means:"
    options:
      - "Each team member must be cross-skilled."
      - "The team must include all organizational tech functions."
      - "The team has all competencies needed to create the Increment per the Definition of Done."
      - "Work is divided by subfunctions and synced at Sprint Review."
    answer: "The team has all competencies needed to create the Increment per the Definition of Done."
    explanation: "The Scrum Guide defines cross-functional as the team collectively possessing all skills needed to create a done Increment — it does not require every individual to be a generalist. The trap is option A: individual cross-skilling is desirable but is not the definition of a cross-functional team."

  - id: 33
    type: multiple-choice
    question: "A customer wants to communicate something important about the product to the Scrum Team. Who should they talk to?"
    options:
      - "The whole team together"
      - "Product Owner"
      - "Scrum Master"
      - "Developers"
    answer: "Product Owner"
    explanation: "The Product Owner is accountable for managing stakeholder communication regarding product direction and requirements. Customers and external stakeholders communicate with the Scrum Team primarily through the Product Owner, who translates their needs into Product Backlog Items."

  - id: 34
    type: multiple-choice
    question: "In a Scrum Team, only the Product Owner communicates with stakeholders — with no exceptions."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "The Scrum Guide does not prohibit Developers or the Scrum Master from communicating with stakeholders; for example, Developers interact directly with stakeholders during Sprint Reviews. The Product Owner is the primary interface for product-direction communication, but this is not an absolute restriction on all communication."

  - id: 35
    type: multiple-choice
    question: "A Developer spots a technical issue that requires other Developers to collaborate. Who needs to facilitate this?"
    options:
      - "Product Owner"
      - "Scrum Master"
      - "Developers"
    answer: "Developers"
    explanation: "The Scrum Team is self-managing, meaning Developers organize their own work and collaboration without requiring management or facilitation from the Scrum Master. The Scrum Master removes impediments that the team cannot resolve; internal technical collaboration is within the Developers' self-management responsibility."

  - id: 36
    type: multiple-choice
    question: "In the early days of a product's initial Sprint, the Product Backlog:"
    options:
      - "Only lays out the initially known and best-understood requirements."
      - "Is as comprehensive as needed to complete the product."
      - "Is not shared until supplemented with other specs."
    answer: "Only lays out the initially known and best-understood requirements."
    explanation: "The Scrum Guide treats the Product Backlog as a living artifact that evolves; in early Sprints it captures only what is currently known. Requiring a comprehensive backlog before starting violates the empirical, iterative nature of Scrum, and withholding the backlog defeats its transparency purpose."

  - id: 37
    type: multiple-choice
    question: "Why does a Scrum Master ensure the team and outsiders adhere to Scrum rules?"
    options:
      - "To preserve hierarchy and communication protocol."
      - "To maximize the value created by the Scrum Team."
      - "To avoid failing future audits."
    answer: "To maximize the value created by the Scrum Team."
    explanation: "The Scrum Guide positions the Scrum Master as a servant leader whose purpose is to enable the Scrum Team's effectiveness and value delivery. Scrum rules exist to enable empiricism and continuous improvement, not to satisfy audit requirements or maintain organizational hierarchy."

  - id: 38
    type: multiple-choice
    question: "Sprint Backlog MUST contain at least one improvement item identified from the Sprint Retrospective."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "The 2020 Scrum Guide removed the prior guidance that the Sprint Backlog must include at least one high-priority process improvement. The Retrospective should result in actionable improvements, but there is no mandatory requirement to add a specific improvement item to every Sprint Backlog."

  - id: 39
    type: multiple-choice
    question: "In the first few Sprints, the Developers are expected to focus on:"
    options:
      - "Setting up the basic infrastructure needed for subsequent Sprint work."
      - "Reviewing and baselining the project plan so the changes can be controlled."
      - "Iteratively refining the requirements and obtaining sign-off from the Product Owner."
      - "Delivering a valuable and useful product Increment."
      - "All of the above."
    answer: "Delivering a valuable and useful product Increment."
    explanation: "The Scrum Guide requires every Sprint to produce a done, potentially releasable Increment from Sprint 1 onward — there are no setup or baseline Sprints. Infrastructure work should be part of delivering the Increment, not a separate pre-delivery phase."

  - id: 40
    type: multiple-choice
    question: "Which of the following does the Sprint Goal provide?"
    options:
      - "Guidance to the team on why it is building the Increment"
      - "Flexibility to the team about the functionalities implemented in this Sprint"
      - "Coherence so that team members can work together"
      - "It communicates why the Sprint is valuable to stakeholders"
      - "All the above"
    answer: "All the above"
    explanation: "The Scrum Guide explicitly describes the Sprint Goal as providing guidance (why), flexibility (how the Increment is achieved), coherence (team focus), and value communication to stakeholders. All four purposes are enumerated in the Scrum Guide's Sprint Goal section."

  - id: 41
    type: multiple-choice
    question: "Which estimation unit must be used by the Developers for the work needed to convert selected Product Backlog Items into a working product Increment?"
    options:
      - "Function Points"
      - "Ideal Hours"
      - "Story Points"
      - "Any useful sizing technique"
    answer: "Any useful sizing technique"
    explanation: "The Scrum Guide does not prescribe any specific estimation unit; Developers may use whatever technique they find useful. Story points and ideal hours are common but not mandated. The PSM I exam frequently tests that Scrum prescribes no specific estimation method."

  - id: 42
    type: multiple-choice
    question: "The Sprint Backlog is modified throughout the Sprint. As soon as a new task is identified:"
    options:
      - "The Product Owner adds it to the Sprint Backlog and communicates it to the Scrum Team."
      - "The Scrum Master adds it to the Sprint Backlog and communicates it to the Scrum Team."
      - "The Developers add it to the Sprint Backlog and communicate it to the Scrum Team."
    answer: "The Developers add it to the Sprint Backlog and communicate it to the Scrum Team."
    explanation: "The Sprint Backlog is owned and maintained by the Developers. Only Developers may add, update, or remove items from the Sprint Backlog. The Product Owner and Scrum Master do not modify the Sprint Backlog unilaterally."

  - id: 43
    type: multiple-choice
    question: "A Scrum Team decides to assign ownership of every Sprint Backlog Item to separate individuals. The Scrum Master should:"
    options:
      - "Encourage this practice as it increases productivity."
      - "Coach the team to collectively take ownership of the Sprint Backlog Items even though an individual works on a specific item."
      - "Encourage this practice as it increases individual accountability."
    answer: "Coach the team to collectively take ownership of the Sprint Backlog Items even though an individual works on a specific item."
    explanation: "The Scrum Guide describes the Sprint Backlog as collectively owned by the Developers as a whole. While individuals may work specific items, collective ownership ensures the team is accountable for the Sprint Goal together. Assigning exclusive individual ownership fragments accountability and undermines collaboration."

  - id: 44
    type: multiple-choice
    question: "During the Sprint, the Sprint Backlog can be modified as more is learned, but no changes are made that would endanger the Sprint Goal."
    options:
      - "True"
      - "False"
    answer: "True"
    explanation: "The Scrum Guide explicitly states that the Sprint Backlog evolves throughout the Sprint as more is learned, but that the Sprint Goal is immutable during the Sprint and no changes that endanger it are permitted. This protects focus while still allowing the team to adapt implementation details."

  - id: 45
    type: multiple-choice
    question: "Since the team is self-managing in Scrum and they manage their own work, they do not need any planning to perform their work."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "Self-management means the team decides how to organize their work — it does not eliminate the need for planning. Sprint Planning is a mandatory Scrum event precisely because even self-managing teams benefit from collaborative planning to establish a Sprint Goal and a plan for achieving it."

  - id: 46
    type: multiple-choice
    question: "Not having the Daily Scrum will:"
    options:
      - "Reduce the opportunity to create a status report."
      - "Reduce the speed of development work."
      - "Reduce the transparency of overall progress."
    answer: "Reduce the transparency of overall progress."
    explanation: "The Daily Scrum is an inspection event that keeps the team's progress toward the Sprint Goal visible and enables rapid adaptation. Its primary purpose is transparency and planning, not status reporting. The trap is option A — the Daily Scrum is not a status report mechanism."

  - id: 47
    type: multiple-choice
    question: "Developers must use three standard questions (yesterday, today, impediment) in Daily Scrum."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "The 2020 Scrum Guide removed the three prescribed questions from the Daily Scrum format. The Developers choose whatever structure achieves the event's purpose: inspecting progress toward the Sprint Goal and adapting the plan. This is a high-frequency exam trap based on the pre-2020 Scrum Guide."

  - id: 48
    type: multiple-choice
    question: "During the Daily Scrum, a team member says he doesn't know when his task will be complete. The best response is:"
    options:
      - "It's acceptable as the Sprint Review date is far away."
      - "Replace the team member with a new team member."
      - "The Developers should collaborate to plan alternative steps (e.g., pairing) to eliminate the risk of missing the Sprint Goal."
      - "The Scrum Master should mentor the team member on how to estimate the task."
    answer: "The Developers should collaborate to plan alternative steps (e.g., pairing) to eliminate the risk of missing the Sprint Goal."
    explanation: "The Daily Scrum exists so Developers can identify risks and adapt their plan immediately. An uncertain completion timeline is a risk to the Sprint Goal, and the Scrum Guide expects the team to self-organize a response (e.g., pairing, re-scoping) rather than escalating to the Scrum Master or ignoring it."

  - id: 49
    type: multiple-choice
    question: "In Scrum, using a Burn-down Chart is a foolproof way to estimate completion."
    options:
      - "Incorrect. The Burn-up Chart is the better alternative."
      - "Incorrect. Such practices, though useful, do not replace empiricism."
      - "Correct. If the team is highly disciplined in updating the Burn-down Chart, this can be true."
    answer: "Incorrect. Such practices, though useful, do not replace empiricism."
    explanation: "The Scrum Guide acknowledges various forecasting tools but states they do not replace empiricism — the actual inspection of a real Increment. Burn-down and Burn-up charts are useful but remain forecasts based on past velocity, not guarantees. No tool replaces the empirical feedback loop Scrum relies on."

  - id: 50
    type: multiple-choice
    question: "Within every Sprint, the working Increment should be tested progressively starting from unit testing, then integration testing, and finally user acceptance testing."
    options:
      - "Yes. It is the prescribed method."
      - "No. The test strategy is decided by the Quality Assurance Lead in the team."
      - "Not necessarily. It is up to the team to find the best approach to testing."
      - "Incorrect. It should also include non-functional testing."
    answer: "Not necessarily. It is up to the team to find the best approach to testing."
    explanation: "The Scrum Guide does not prescribe a specific testing sequence or strategy; Developers are responsible for the quality of their work and choose how to achieve it. Prescribing a fixed test pipeline (unit → integration → UAT) is a Waterfall convention not required by Scrum."

  - id: 51
    type: multiple-choice
    question: "The Increment is a step towards:"
    options:
      - "A vision or goal."
      - "Sprint completion or project closure."
      - "Sign-off or phase completion."
    answer: "A vision or goal."
    explanation: "The Scrum Guide describes each Increment as a concrete step toward the Product Goal — a long-term objective for the product. Sprint completion, project closure, and phase sign-offs are project-management constructs not used in the Scrum Guide, which frames work as a continuous pursuit of a product vision."

  - id: 52
    type: multiple-choice
    question: "In the Sprint Review, the presentation of the product Increment to stakeholders is:"
    options:
      - "To get the Sprint completion sign-off."
      - "To provide the status of the project."
      - "To elicit feedback."
    answer: "To elicit feedback."
    explanation: "The Scrum Guide frames the Sprint Review as an inspection and adaptation event focused on eliciting stakeholder feedback to update the Product Backlog. It is not a formal sign-off or a status meeting — those are Waterfall constructs. The output is an updated Product Backlog reflecting what to do next."

  - id: 53
    type: multiple-choice
    question: "The difference between the Product Burn-down Chart and the Sprint Burn-down Chart is:"
    options:
      - "In the Product Burn-down Chart, the number of Product Backlog Items is shown on the y-axis. In the Sprint Burn-down Chart, the number of tasks is shown on the y-axis."
      - "In the Product Burn-down Chart, the Sprints are shown on the x-axis. In the Sprint Burn-down Chart, the days of the Sprint are shown on the x-axis."
      - "In the Product Burn-down Chart, the Sprints are shown on the y-axis. In the Sprint Burn-down Chart, the days are shown on the y-axis."
    answer: "In the Product Burn-down Chart, the Sprints are shown on the x-axis. In the Sprint Burn-down Chart, the days of the Sprint are shown on the x-axis."
    explanation: "The Product Burn-down Chart plots remaining work across Sprints (x-axis = Sprints), while the Sprint Burn-down Chart plots remaining work across days within a single Sprint (x-axis = days). Option C inverts the axes, which is the common trap."

  - id: 54
    type: select-all
    question: "The Sprint Review is an event that requires:"
    options:
      - "The Product Owner's sign-off."
      - "Active participation of the stakeholders invited by the Product Owner."
      - "Transition sign-off."
      - "Inspection and adaptation activities."
    answers:
      - "Active participation of the stakeholders invited by the Product Owner."
      - "Inspection and adaptation activities."
    explanation: "The Scrum Guide describes the Sprint Review as a working session involving active stakeholder participation and inspection/adaptation of the product and backlog. It explicitly is not a sign-off event — neither the Product Owner's sign-off nor a formal transition sign-off is part of Scrum's Sprint Review."

  - id: 55
    type: multiple-choice
    question: "What is inspected in the Sprint Retrospective?"
    options:
      - "Sprint Improvement Plan"
      - "Scrum Team"
      - "Sprint Backlog"
    answer: "Scrum Team"
    explanation: "The Scrum Guide states that the Sprint Retrospective inspects the Scrum Team itself — how individuals interact, processes used, tools, and the Definition of Done. The Sprint Backlog is inspected during the Daily Scrum and Sprint Review, and an improvement plan is an output of the Retrospective, not its input."

  - id: 56
    type: multiple-choice
    question: "Which is true regarding the Sprint Retrospective and Sprint Review?"
    options:
      - "The Retrospective focuses on the Scrum Team's processes and people, and the Sprint Review focuses on the product."
      - "The Retrospective focuses on the product, and the Sprint Review focuses on the Scrum Team's processes."
      - "The Retrospective focuses on the Scrum Team's processes and people, and the Sprint Review focuses on velocity."
    answer: "The Retrospective focuses on the Scrum Team's processes and people, and the Sprint Review focuses on the product."
    explanation: "The Scrum Guide is unambiguous: the Sprint Retrospective inspects the team (people, processes, tools, interactions), while the Sprint Review inspects the product Increment and updates the Product Backlog. Velocity is a common metric but not the focus of the Sprint Review per the Scrum Guide."

  - id: 57
    type: multiple-choice
    question: "A Scrum Team has only three Developers. The time box for the Daily Scrum is:"
    options:
      - "3 minutes"
      - "15 minutes"
      - "Per team's decision"
    answer: "15 minutes"
    explanation: "The Scrum Guide fixes the Daily Scrum time box at 15 minutes regardless of team size. This is a mandatory Scrum rule, not an adjustable guideline. The trap is assuming a smaller team can shorten the time box — Scrum's time boxes are fixed upper limits."

  - id: 58
    type: multiple-choice
    question: "Throughout the effort, who owns the Scrum events, sets them up, and invites participants?"
    options:
      - "Product Owner"
      - "Scrum Master"
      - "Scrum Team"
      - "Developers"
    answer: "Scrum Team"
    explanation: "The Scrum Guide assigns accountability for Scrum events to the Scrum Team as a whole, though specific roles have facilitation responsibilities (e.g., the Scrum Master facilitates the Retrospective if needed). The Scrum Team collectively owns the events; no single role is universally responsible for setting up all events."

  - id: 59
    type: select-all
    question: "What should be the frequency of inspection in Scrum?"
    options:
      - "As planned in the Sprint Planning"
      - "As needed by the Product Owner"
      - "In every event within the Sprint"
      - "Frequently, as decided by the team, but not getting in the way of work"
    answers:
      - "In every event within the Sprint"
      - "Frequently, as decided by the team, but not getting in the way of work"
    explanation: "The Scrum Guide states that inspection occurs in every Scrum event and also encourages frequent inspection beyond formal events, provided it does not get in the way of work. Inspection frequency is not solely determined by Sprint Planning or the Product Owner's needs."

  - id: 60
    type: multiple-choice
    question: "All the activities that happen within Scrum are called Scrum events."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "Scrum defines five specific events: the Sprint itself, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. Many activities occur within a Sprint (e.g., Backlog Refinement, development work, testing) that are not formal Scrum events. Calling all activities 'events' misrepresents the Scrum framework."

  - id: 61
    type: multiple-choice
    question: "A good guideline: Definition of Done = checklist of quality to reach a potentially usable state; Acceptance Criteria = specified business functionality."
    options:
      - "True"
      - "False"
    answer: "True"
    explanation: "The Definition of Done is a quality standard that applies to every Increment, while Acceptance Criteria are item-specific conditions that define when a particular Product Backlog Item is complete from a business perspective. These are complementary but distinct concepts; confusing them is a common PSM I trap."

  - id: 62
    type: multiple-choice
    question: "After a Sprint Review, the Product Owner deems the product has reached end-of-life and the Product Backlog can be closed. The next immediate step is:"
    options:
      - "To communicate the Scrum Team's availability to stakeholders."
      - "To conduct a Retrospective."
      - "To write transition documentation."
    answer: "To communicate the Scrum Team's availability to stakeholders."
    explanation: "When the Product Owner determines there is no more value to pursue (product end-of-life), the Sprint ends and the Scrum Team is released. The immediate next step is communicating team availability to the organization. Conducting a Retrospective is valuable but not the prescribed immediate next step when the product is being closed."

  - id: 63
    type: multiple-choice
    question: "In a Retrospective, a Scrum Team decides to revise the Sprint length. The new Sprint length needs to be agreed upon by the Product Owner."
    options:
      - "True"
      - "False"
    answer: "True"
    explanation: "Sprint length is a key Scrum Team decision that affects the Product Owner's ability to plan releases and manage stakeholder expectations. While the Scrum Team decides its own processes, the Product Owner is part of the Scrum Team and must agree to a Sprint length change — this is not a Developers-only decision."

  - id: 64
    type: multiple-choice
    question: "Mid-Sprint, some PBIs can't be finished but the Sprint Goal is still achievable. What should happen next?"
    options:
      - "Consult the Product Owner; if they agree, cancel and plan a new Sprint."
      - "Don't cancel; extend the Sprint duration."
      - "Collaborate with the Product Owner to remove the PBIs that can't be finished; add new items up to capacity; complete the Sprint."
    answer: "Collaborate with the Product Owner to remove the PBIs that can't be finished; add new items up to capacity; complete the Sprint."
    explanation: "The Scrum Guide permits scope adjustment within a Sprint when the Sprint Goal is still achievable. The team should collaborate with the Product Owner to remove unfinishable items and potentially add replacement items, preserving the Sprint Goal without cancellation or extension. Sprint cancellation is only warranted when the Sprint Goal itself becomes obsolete."

  - id: 65
    type: multiple-choice
    question: "At Sprint Planning, stories lack enough information to forecast. The next immediate step is:"
    options:
      - "Scrum Master cancels the Sprint."
      - "Developers start with whatever is known."
      - "Developers make it transparent they can't forecast; negotiate with the Product Owner to refine stories to ready."
      - "Discuss root cause in the Retrospective."
    answer: "Developers make it transparent they can't forecast; negotiate with the Product Owner to refine stories to ready."
    explanation: "The Scrum Guide requires Sprint Planning to produce a Sprint Goal and a plan the Developers are confident in. If stories are insufficiently refined, Developers must raise this transparently and work with the Product Owner to refine them before committing — starting with insufficient information risks the Sprint Goal from day one."

  - id: 66
    type: multiple-choice
    question: "Holding the Daily Scrum at the same time and place makes it easier for the Product Owner and Scrum Master to participate."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "The Scrum Guide states that holding the Daily Scrum at a consistent time and place reduces complexity — but its primary purpose is to benefit the Developers who own it. The Daily Scrum is for the Developers; the Product Owner and Scrum Master do not need to attend unless the Scrum Master is also a Developer."

  - id: 67
    type: multiple-choice
    question: "A discussion of what to do next is an additional element in the Sprint Review. Which statement is correct?"
    options:
      - "False"
      - "True, and the next Sprint's scope is finalized here."
      - "True, and it may capture probable PBIs for the next Sprint, but scope is finalized in Sprint Planning."
    answer: "True, and it may capture probable PBIs for the next Sprint, but scope is finalized in Sprint Planning."
    explanation: "The Sprint Review includes a collaborative discussion about what to do next, which may update the Product Backlog with probable items for the next Sprint. However, the Scrum Guide is clear that Sprint scope — the Sprint Backlog — is finalized during Sprint Planning, not the Sprint Review."

  - id: 68
    type: multiple-choice
    question: "Many stakeholders are expected; the Sprint Review will exceed 4 hours. Can the team increase its duration?"
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "The Scrum Guide time-boxes the Sprint Review to a maximum of 4 hours for a one-month Sprint (proportionally shorter for shorter Sprints). This is a fixed upper limit, not an average. The number of stakeholders does not justify exceeding the time box — the team should adapt the meeting format instead."

  - id: 69
    type: multiple-choice
    question: "A Sprint Burn-down shows an upward spike mid-Sprint. This indicates:"
    options:
      - "Planned work was removed."
      - "The Product Owner added a new item to the Sprint."
      - "Developers added new work."
    answer: "Developers added new work."
    explanation: "An upward spike in remaining work on a Burn-down Chart means work was added, not completed or removed. Only Developers can modify the Sprint Backlog, so an upward spike reflects the Developers identifying additional tasks needed to meet the Sprint Goal. The Product Owner cannot unilaterally add work to the Sprint Backlog."

  - id: 70
    type: multiple-choice
    question: "The value attached to a Product Backlog Item is guaranteed to be realized."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "The Scrum Guide acknowledges that value is empirical — it is expected but not guaranteed. Business conditions change, assumptions may prove wrong, and stakeholder needs evolve. Scrum's iterative approach exists precisely because value realization is uncertain and must be validated through continuous inspection."

  - id: 71
    type: multiple-choice
    question: "Who finalizes how many Product Backlog Items go into the Sprint Backlog?"
    options:
      - "Product Owner"
      - "Scrum Master"
      - "Developers"
      - "Scrum Team together, using velocity as a standard"
    answer: "Developers"
    explanation: "The Scrum Guide explicitly states that only the Developers can assess how much work they can take on in a Sprint. The Product Owner may influence priority and scope, but the final selection of items is the Developers' decision based on their capacity and past performance."

  - id: 72
    type: multiple-choice
    question: "After Sprint Planning, selected PBIs are frozen; the only way to modify them is for the Product Owner to cancel the Sprint."
    options:
      - "True"
      - "False"
    answer: "False"
    explanation: "The Scrum Guide explicitly allows the Sprint Backlog to evolve throughout the Sprint as new work is discovered. The Developers can add or remove tasks at any time. Sprint cancellation is a separate, rare decision triggered by the Sprint Goal becoming obsolete — it is not a mechanism for modifying the Sprint Backlog."
---
