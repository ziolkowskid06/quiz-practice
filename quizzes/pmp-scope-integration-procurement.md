---
title: "Scope, Integration, Procurement & Communication"
topic: "Project Management"
description: "Master contract types, dispute resolution, scope creep vs. gold plating, integration management, functional requirements, communication methods, and project closure types."
emoji: "📋"
questions:
  - id: 1
    type: true-false
    question: "A Firm Fixed Price (FFP) contract places the maximum financial risk on the seller — if the work takes longer than planned, the seller absorbs all additional cost."
    answer: true
    explanation: "FFP is the buyer's most protective contract. The price is set at signing and cannot change unless scope changes. The seller bears all cost risk, which motivates efficiency. The PM's role is strictly 'scope guarding' — preventing unauthorized additions that would trigger legitimate contract adjustments."

  - id: 2
    type: multiple-choice
    question: "Which contract type is most appropriate for high-risk experimental or R&D work where the seller cannot accurately predict costs and would never agree to a fixed price?"
    options: ["Firm Fixed Price (FFP)", "Fixed Price Incentive Fee (FPIF)", "Cost Plus Incentive Fee (CPIF)", "Cost Plus Fixed Fee (CPFF)"]
    answer: "Cost Plus Fixed Fee (CPFF)"
    explanation: "CPFF places maximum risk on the buyer — the seller is reimbursed for all allowable costs plus a fixed profit regardless of total cost. This is appropriate for R&D and cutting-edge technology where scope uncertainty is too high for any fixed-price commitment. The PM essentially says: 'Focus on the breakthrough; I'll absorb the financial risk.'"

  - id: 3
    type: multiple-choice
    question: "What is the key structural difference between an FFP and an FPIF contract?"
    options: ["FPIF allows unlimited cost growth; FFP has a ceiling", "FPIF adds financial incentives for hitting specific targets (early delivery, cost savings); FFP has no incentive mechanism", "FPIF reimburses actual costs; FFP does not", "FFP requires an audit; FPIF does not"]
    answer: "FPIF adds financial incentives for hitting specific targets (early delivery, cost savings); FFP has no incentive mechanism"
    explanation: "FPIF retains the FFP ceiling price but attaches a 'carrot' — extra fee for achieving specific metrics like an aggressive delivery date or a technical milestone. This turns the relationship into a performance-driven partnership rather than a pure transactional exchange."

  - id: 4
    type: fill-blank
    question: "In a Cost Plus ___ Fee contract, the buyer pays all allowable costs plus a fixed dollar profit that does not change regardless of how high the actual costs become."
    answer: "Fixed"
    accept: ["fixed", "Fixed"]
    explanation: "CPFF decouples profit from cost performance — the seller's profit is the same whether costs run $1M or $3M. This removes any financial incentive for cost control. CPFF is the correct choice for experimental work where no reasonable seller would accept a variable-fee structure based on uncertain outcomes."

  - id: 5
    type: multiple-choice
    question: "Which contract type is best for large, complex projects with moderate scope certainty where both buyer and seller want to share the incentive for controlling costs?"
    options: ["FFP", "FPIF", "CPIF", "CPFF"]
    answer: "CPIF"
    explanation: "CPIF reimburses actual costs AND adjusts the seller's fee based on a shared savings formula. If the seller spends less than planned, both parties split the savings. This creates a genuine partnership incentive — appropriate when the buyer must pay actual costs but wants the seller motivated to be efficient."

  - id: 6
    type: true-false
    question: "In Agile contracting, Time and Materials (T&M) contracts with a Not-to-Exceed cap are preferred because they allow scope to evolve adaptively while keeping a ceiling on buyer cost exposure."
    answer: true
    explanation: "T&M with a cap combines Adaptive scope flexibility (scope can evolve each Sprint) with Predictive financial protection (the not-to-exceed limit caps buyer risk). This hybrid contract structure reflects Agile's value-driven delivery model while maintaining fiscal governance."

  - id: 7
    type: multiple-choice
    question: "A vendor is forced into an FFP contract for a project with low scope certainty. What is the likely outcome?"
    options: ["The vendor delivers high quality since they bear all the risk", "The vendor underbids to win the contract, then submits excessive Change Requests to recover costs", "The vendor absorbs all overruns and the buyer benefits from cost predictability", "The contract naturally transitions to CPFF once scope uncertainty becomes apparent"]
    answer: "The vendor underbids to win the contract, then submits excessive Change Requests to recover costs"
    explanation: "A desperate vendor will submit an artificially low bid to win an FFP contract when scope is unclear. Once awarded, they use legitimate (and illegitimate) Change Requests to recover costs. This is a root cause of procurement disputes. Matching contract type to scope certainty prevents this adversarial dynamic."

  - id: 8
    type: select-all
    question: "Which contract types place the majority of financial risk on the BUYER? Select all that apply."
    options: ["Firm Fixed Price (FFP)", "Fixed Price Incentive Fee (FPIF)", "Cost Plus Incentive Fee (CPIF)", "Cost Plus Fixed Fee (CPFF)"]
    answers: ["Cost Plus Incentive Fee (CPIF)", "Cost Plus Fixed Fee (CPFF)"]
    explanation: "Cost-Reimbursable contracts (CPIF, CPFF) shift risk to the buyer — the buyer pays actual costs regardless of overruns. FFP and FPIF are Fixed-Price contracts where the seller absorbs cost risk. The spectrum runs: FFP (max seller risk) → FPIF → CPIF → CPFF (max buyer risk)."

  - id: 9
    type: matching
    question: "Match each contract type to its risk holder and best use case."
    pairs:
      - left: "FFP"
        right: "Maximum seller risk — clearly defined scope, standard deliverables"
      - left: "FPIF"
        right: "Mostly seller risk — clear scope + incentive for specific performance targets"
      - left: "CPIF"
        right: "Mostly buyer risk — large complex projects with shared cost-savings incentive"
      - left: "CPFF"
        right: "Maximum buyer risk — R&D or experimental work with high uncertainty"
    explanation: "The contract risk spectrum runs from FFP (seller bears all cost risk) to CPFF (buyer bears all cost risk). Scope certainty is the primary selection factor: high certainty → Fixed Price; low certainty → Cost Reimbursable. Mismatching contract type to scope certainty is a root cause of procurement disputes."

  - id: 10
    type: multiple-choice
    question: "In Claims Administration, what is PMI's preferred method for resolving a contractual dispute between buyer and seller?"
    options: ["Arbitration", "Litigation (court)", "Negotiation", "Mediation"]
    answer: "Negotiation"
    explanation: "PMI establishes a clear preference hierarchy: Negotiation first, then ADR (mediation/arbitration), and litigation only as a last resort. Litigation is expensive, time-consuming, public, and destroys the working relationship — a failure of professional project management."

  - id: 11
    type: true-false
    question: "Arbitration and Mediation are both forms of Alternative Dispute Resolution (ADR) — the key difference is that Arbitration produces a binding decision while Mediation helps parties reach their own agreement."
    answer: true
    explanation: "Mediation uses a neutral third party to facilitate negotiation — the outcome is an agreement the parties reach themselves (non-binding unless formalized). Arbitration uses a neutral third party who makes a final, binding decision. Both avoid court, but Arbitration is a more definitive resolution."

  - id: 12
    type: multiple-choice
    question: "A buyer and seller cannot resolve a contract dispute through negotiation. Their contract contains an ADR clause. What is the next appropriate step before litigation?"
    options: ["Issue a formal Stop Work Order", "File a claim in civil court", "Engage mediation or arbitration as specified in the ADR clause", "Escalate directly to the project sponsor for a unilateral decision"]
    answer: "Engage mediation or arbitration as specified in the ADR clause"
    explanation: "Modern contracts routinely include ADR clauses requiring mediation or arbitration before litigation is permitted. ADR is faster, cheaper, more private, and preserves more of the working relationship than court. It is the standard PMI-preferred escalation path after negotiation fails."

  - id: 13
    type: select-all
    question: "Which of the following are forms of Alternative Dispute Resolution (ADR) that avoid formal court litigation? Select all that apply."
    options: ["Negotiation", "Mediation", "Arbitration", "Claims Administration", "Inspection"]
    answers: ["Mediation", "Arbitration"]
    explanation: "ADR specifically refers to Mediation (neutral facilitates agreement) and Arbitration (neutral makes binding decision). Negotiation is the preferred first step before ADR. Claims Administration is the broader process of tracking and managing contract disputes. Inspection is a quality/scope tool, not a dispute resolution method."

  - id: 14
    type: multiple-choice
    question: "A team member proactively builds in additional features they believe the customer will appreciate, beyond what was requested or specified. This is an example of:"
    options: ["Scope Creep", "Gold Plating", "Progressive Elaboration", "Value Engineering"]
    answer: "Gold Plating"
    explanation: "Gold Plating is internally-driven — the team adds unrequested extras, believing the customer will value them. Scope Creep is externally-driven — stakeholders push unauthorized additions. Both consume unplanned budget and schedule. PMI treats Gold Plating as a risk because it diverts resources from planned, high-priority work."

  - id: 15
    type: true-false
    question: "In Agile, uncontrolled scope expansion is called 'Scope Creep,' just as it is in Waterfall."
    answer: false
    explanation: "In Agile, scope evolution is called 'Backlog Evolution' — not Creep. Because Agile uses fixed time-boxes and fixed teams, new scope must compete with existing items for priority. The Product Owner manages this trade-off explicitly. The Burnup chart makes scope changes visible so stakeholders can see the trade-off in real time."

  - id: 16
    type: multiple-choice
    question: "A stakeholder requests an unplanned change mid-project. What is the PMI-correct first response?"
    options: ["Immediately decline to protect the scope baseline", "Immediately implement the change to maintain stakeholder satisfaction", "Assess the impact on scope, schedule, cost, and risk before deciding", "Escalate to the Change Control Board without analysis"]
    answer: "Assess the impact on scope, schedule, cost, and risk before deciding"
    explanation: "The PMI 'Assess Before Acting' mindset applies to all change requests. The PM neither automatically approves nor refuses — they analyze the impact on the Triple Constraint and present options to the right decision-maker. The goal is to turn a change request into a transparent trade-off conversation."

  - id: 17
    type: fill-blank
    question: "The risk response strategy where a team member adds extra features they believe the customer will like — without being asked — is called ___ Plating."
    answer: "Gold"
    accept: ["gold", "Gold"]
    explanation: "Gold Plating diverts team capacity from contracted, high-value deliverables to unplanned additions. PMI considers it a risk because: the customer may not value the extras; the team spends unplanned resources; and if the extras introduce defects, the PM is responsible for work that was never authorized."

  - id: 18
    type: multiple-choice
    question: "What is the key characteristic that distinguishes a Functional Requirement from a Non-Functional Requirement?"
    options: ["Functional requirements are written as 'shall' statements; non-functional requirements use 'should'", "Functional requirements describe WHAT the product does (behaviors); non-functional requirements describe HOW WELL it performs (quality attributes)", "Functional requirements come from stakeholders; non-functional requirements come from the technical team", "Functional requirements are mandatory; non-functional requirements are optional"]
    answer: "Functional requirements describe WHAT the product does (behaviors); non-functional requirements describe HOW WELL it performs (quality attributes)"
    explanation: "Functional = behavior/utility (the car must have brakes). Non-Functional = quality/performance attribute (the brakes must stop the car within 100 feet at 60 mph). Both are critical — projects that deliver functional requirements but ignore non-functional ones (performance, security, reliability) often produce technically compliant but operationally unusable products."

  - id: 19
    type: true-false
    question: "\"The system shall allow users to reset their password via email\" is an example of a non-functional requirement."
    answer: false
    explanation: "This is a Functional Requirement — it describes a specific behavior (password reset via email) that the system must perform. A Non-Functional version would be: 'The password reset email must be delivered within 30 seconds' — which specifies the performance quality attribute of that same function."

  - id: 20
    type: multiple-choice
    question: "In Agile, functional requirements are typically expressed as:"
    options: ["\"The system shall...\" statements in a Software Requirements Specification", "User Stories in the format: As a [User], I want [Action], so that [Value]", "Non-functional performance benchmarks in the Definition of Done", "Acceptance criteria defined by the Scrum Master"]
    answer: "User Stories in the format: As a [User], I want [Action], so that [Value]"
    explanation: "User Stories shift the focus from system-centric 'shall' statements to customer-centric value expressions. The format forces the team to articulate WHO benefits, WHAT they want to do, and WHY it matters — making the business value explicit and preventing teams from building features that no one actually uses."

  - id: 21
    type: select-all
    question: "Which of the following are processes within Project Scope Management per PMBOK 6? Select all that apply."
    options: ["Collect Requirements", "Define Scope", "Develop Project Charter", "Create WBS", "Validate Scope", "Control Scope"]
    answers: ["Collect Requirements", "Define Scope", "Create WBS", "Validate Scope", "Control Scope"]
    explanation: "The 6 Scope Management processes are: Plan Scope Management, Collect Requirements, Define Scope, Create WBS, Validate Scope, and Control Scope. Develop Project Charter belongs to Integration Management. All 6 scope processes must be known for the PMP exam."

  - id: 22
    type: true-false
    question: "Project Integration Management can be partially delegated to a subject matter expert because it spans multiple knowledge areas and requires deep technical knowledge."
    answer: false
    explanation: "Integration Management is the only knowledge area the PM cannot delegate. It is the 'glue' function — only the PM has the full-system view needed to integrate changes across scope, schedule, cost, quality, and risk simultaneously. A SME may own a knowledge area; only the PM owns integration."

  - id: 23
    type: multiple-choice
    question: "Which Project Integration Management process acts as the 'gatekeeper,' ensuring no change is approved without assessing its impact on the entire project system?"
    options: ["Direct and Manage Project Work", "Monitor and Control Project Work", "Perform Integrated Change Control", "Manage Project Knowledge"]
    answer: "Perform Integrated Change Control"
    explanation: "Perform Integrated Change Control (the CCB process) evaluates every change request for its ripple effects across all constraints — scope, schedule, cost, quality, and risk. It prevents isolated approvals that create downstream problems. In Agile, the Product Owner performs this integration function through backlog prioritization."

  - id: 24
    type: fill-blank
    question: "The PMBOK 6th Edition added '___ Project Knowledge' as a new Integration process to ensure lessons learned are captured and shared during the project — not just archived at project close."
    answer: "Manage"
    accept: ["manage", "Manage"]
    explanation: "Manage Project Knowledge treats knowledge as a project asset. By capturing lessons during execution (not just at close), the organization benefits in real time and knowledge transfer is not lost when team members leave mid-project. It reflects the PMI principle of continuous organizational learning."

  - id: 25
    type: multiple-choice
    question: "Which Integration Management process formally authorizes the project and grants the PM the authority to spend company resources?"
    options: ["Develop Project Management Plan", "Direct and Manage Project Work", "Develop Project Charter", "Perform Integrated Change Control"]
    answer: "Develop Project Charter"
    explanation: "The Project Charter is the project's 'birth certificate.' Without it, the PM is a volunteer — technically doing work with no formal authority. The Charter formally connects the project to the Business Case, names the PM, and authorizes resource expenditure. Anything done before the charter is pre-project work."

  - id: 26
    type: matching
    question: "Match each Integration Management process to its Process Group."
    pairs:
      - left: "Develop Project Charter"
        right: "Initiating — formal project authorization"
      - left: "Develop Project Management Plan"
        right: "Planning — consolidates all subsidiary plans and baselines"
      - left: "Direct and Manage Project Work"
        right: "Executing — leading the team and creating deliverables"
      - left: "Perform Integrated Change Control"
        right: "Monitoring & Controlling — gatekeeper for all change requests"
    explanation: "The 7 Integration processes span all 5 Process Groups. Charter = Initiating. Project Mgmt Plan = Planning. Direct & Manage + Manage Knowledge = Executing. Monitor & Control + Integrated Change Control = M&C. Close Project = Closing. Integration touches every phase — it is the PM's core ongoing responsibility."

  - id: 27
    type: multiple-choice
    question: "Validate Scope and Control Quality are sometimes confused on the PMP exam. What is the key distinction?"
    options: ["Validate Scope checks for defects; Control Quality checks for stakeholder acceptance", "Validate Scope is stakeholder acceptance of completed deliverables; Control Quality is the team verifying conformance to requirements before presenting to stakeholders", "Validate Scope is performed at the start of the project; Control Quality is performed at the end", "They are the same process under different Knowledge Area names"]
    answer: "Validate Scope is stakeholder acceptance of completed deliverables; Control Quality is the team verifying conformance to requirements before presenting to stakeholders"
    explanation: "Sequence matters: Control Quality (does the team confirm it's correct?) comes BEFORE Validate Scope (does the customer accept it?). Control Quality is internal; Validate Scope is external. Presenting a defective deliverable for customer acceptance bypasses Control Quality and destroys trust."

  - id: 28
    type: true-false
    question: "The primary purpose of Perform Integrated Change Control is to prevent all changes from being approved, maintaining the original scope baseline."
    answer: false
    explanation: "Integrated Change Control does not block changes — it ensures they are properly assessed and approved by the right authority. Changes that add value and are formally approved are legitimate. The process protects baseline integrity by preventing unauthorized or unanalyzed changes, not all changes."

  - id: 29
    type: multiple-choice
    question: "In Waterfall, the Work Breakdown Structure (WBS) is the primary tool for decomposing project scope. What replaces it in Agile?"
    options: ["The Gantt Chart and Sprint Backlog", "The Product Backlog and User Story Mapping", "The Risk Register and Acceptance Criteria", "The Resource Breakdown Structure and Velocity Chart"]
    answer: "The Product Backlog and User Story Mapping"
    explanation: "In Agile, the Product Backlog is the living scope container — continuously refined and reprioritized. User Story Mapping provides the structural decomposition that the WBS provides in Waterfall. Instead of a fixed hierarchical decomposition, Agile uses progressive elaboration to detail work just-in-time."

  - id: 30
    type: select-all
    question: "Which of the following accurately describe Scope Creep? Select all that apply."
    options: ["It is the unauthorized or uncontrolled expansion of scope without adjustments to time, cost, or resources", "It is driven by team members adding unrequested features they believe the customer will appreciate", "Root causes include vague initial requirements and a lack of formal change process", "It is welcomed and managed in Agile through Backlog Evolution with trade-off decisions", "The PMI-correct first response is to analyze impact before approving or denying the change"]
    answers: ["It is the unauthorized or uncontrolled expansion of scope without adjustments to time, cost, or resources", "Root causes include vague initial requirements and a lack of formal change process", "It is welcomed and managed in Agile through Backlog Evolution with trade-off decisions", "The PMI-correct first response is to analyze impact before approving or denying the change"]
    explanation: "Scope Creep is stakeholder-driven unauthorized expansion. Its root causes are vague requirements and absent change control. In Agile, scope evolution is managed (not prevented) through backlog prioritization. The item about team members adding extras describes Gold Plating, not Scope Creep."

  - id: 31
    type: multiple-choice
    question: "A PM needs to resolve an urgent misunderstanding about a critical technical requirement with a key stakeholder. Which communication method should they use?"
    options: ["Push — send a detailed email with all technical specifications attached", "Pull — post the updated specification on the project SharePoint site", "Interactive — schedule a meeting or call to discuss in real time", "Multidirectional — post in the team collaboration platform for broader input"]
    answer: "Interactive — schedule a meeting or call to discuss in real time"
    explanation: "Interactive communication is the 'gold standard' for urgent, sensitive, or complex topics. It provides an immediate feedback loop — the PM can detect misunderstanding in real time and correct it before it becomes a project impediment. For urgent misunderstandings, any non-interactive method risks compounding the confusion."

  - id: 32
    type: true-false
    question: "Push communication guarantees that the recipient has read and understood the information sent."
    answer: false
    explanation: "Push communication (email, memo, status report) only guarantees that information was sent — not received, read, or understood. 'Sent' does not equal 'received.' For high-stakes or sensitive information, Push should be followed up with Interactive communication to confirm understanding."

  - id: 33
    type: multiple-choice
    question: "A project has 10,000 global stakeholders who need access to technical specifications at their own pace and discretion. Which communication method is most efficient?"
    options: ["Push — email the specifications to all 10,000 stakeholders", "Interactive — hold webinars for groups of stakeholders", "Pull — post specifications in a central accessible repository (SharePoint, Wiki)", "Multidirectional — create a collaboration platform for all stakeholders"]
    answer: "Pull — post specifications in a central accessible repository (SharePoint, Wiki)"
    explanation: "Pull communication is designed for large volumes of information reaching large audiences. Posting to a PMIS or Wiki empowers stakeholders to retrieve what they need when they need it — preventing inbox overload and ensuring the most current version is always accessible."

  - id: 34
    type: fill-blank
    question: "Communication where information flows freely between many parties simultaneously without routing through a central authority — the model used in Agile self-organizing teams and collaboration platforms — is called ___ communication."
    answer: "Multidirectional"
    accept: ["multidirectional", "Multidirectional", "multi-directional"]
    explanation: "Multidirectional communication creates a 'web' of knowledge sharing across silos. In Agile Daily Stand-ups and collaboration tools like Teams or Slack, experts talk directly to each other without routing through the PM. This accelerates problem-solving by connecting people with the right knowledge at the point of need."

  - id: 35
    type: select-all
    question: "Which of the following are characteristics of Push communication? Select all that apply."
    options: ["Information is sent to specific recipients who must receive it", "It provides an immediate feedback loop to verify understanding", "It is best suited for creating a formal record or audit trail", "Sent does not guarantee read or understood", "It is the most effective method for resolving complex misunderstandings"]
    answers: ["Information is sent to specific recipients who must receive it", "It is best suited for creating a formal record or audit trail", "Sent does not guarantee read or understood"]
    explanation: "Push communication (emails, memos, reports) is one-way outbound — it reaches specific recipients and creates a paper trail. Its key limitation is no immediate feedback loop, meaning the sender cannot confirm comprehension. For complex misunderstandings or urgent decisions, Interactive communication is required."

  - id: 36
    type: matching
    question: "Match each communication method to its best use case."
    pairs:
      - left: "Interactive"
        right: "Conflict resolution, urgent decisions, sensitive topics requiring immediate feedback"
      - left: "Push"
        right: "Weekly status reports, formal notices, and creating audit trails"
      - left: "Pull"
        right: "Technical specifications and reference docs for large audiences"
      - left: "Multidirectional"
        right: "Self-organizing team collaboration and cross-functional problem-solving"
    explanation: "Choosing the right communication method is a strategic decision. Match urgency and sensitivity to Interactive. Match formal accountability to Push. Match large volumes to Pull. Match collaborative innovation to Multidirectional. Mismatching method to need is a root cause of stakeholder engagement failures."

  - id: 37
    type: multiple-choice
    question: "A project concludes when its development team is absorbed into the IT operations department to maintain the new system long-term. This is an example of which closure type?"
    options: ["Extinction", "Starvation", "Integration", "Addition"]
    answer: "Integration"
    explanation: "Integration closure occurs when project outputs, staff, and equipment are absorbed into existing organizational operations — the project 'becomes' Business as Usual. The transition requires heavy Knowledge Transfer documentation to ensure the operations team can maintain what the project created."

  - id: 38
    type: true-false
    question: "Starvation (cutting a project's budget and resources without formally closing it) is an acceptable and efficient way to end a project that no longer serves organizational priorities."
    answer: false
    explanation: "PMI considers Starvation a red flag — it leaves the project in bureaucratic limbo, consuming administrative overhead without delivering value. The PMI mindset calls for the PM to force a conversation with the sponsor and recommend formal Extinction (close the project properly) rather than allowing it to die slowly."

  - id: 39
    type: multiple-choice
    question: "A project to explore a new product line is so successful that the company creates an entirely new permanent division dedicated to it. This is an example of which closure type?"
    options: ["Extinction", "Starvation", "Integration", "Addition"]
    answer: "Addition"
    explanation: "Addition occurs when a project becomes its own permanent organizational unit — a 'promotion' from temporary project to permanent structure. It is the ultimate proof of Value-Driven Delivery. The PM's focus shifts to Organizational Change Management, helping the new unit establish itself within the company hierarchy."

  - id: 40
    type: matching
    question: "Match each project closure type to its description."
    pairs:
      - left: "Extinction"
        right: "Project formally stops — either completed successfully or cancelled as a failure"
      - left: "Starvation"
        right: "Budget and resources are cut off; project left in unresolved limbo"
      - left: "Integration"
        right: "Project outputs and team are absorbed into ongoing organizational operations"
      - left: "Addition"
        right: "Project becomes a new permanent department within the organization"
    explanation: "The four closure types describe how projects end. Extinction = deliberate stop. Starvation = neglect (PMI considers this unprofessional). Integration = absorbed into BAU. Addition = elevated to permanent organizational structure. PMI prefers formal Extinction over Starvation even for cancelled projects."

  - id: 41
    type: true-false
    question: "When a project is formally cancelled (Extinction), PMI still requires the PM to document lessons learned and archive all project records."
    answer: true
    explanation: "Close Project or Phase must be performed regardless of how the project ends — success or cancellation. Documenting why the project was cancelled updates Organizational Process Assets (OPAs) and prevents the organization from repeating the same mistake or investing in a similar non-viable initiative."

  - id: 42
    type: multiple-choice
    question: "Which of the 10 PMBOK Knowledge Areas is solely owned by the Project Manager, cannot be delegated to specialists, and serves as the 'glue' connecting all other areas?"
    options: ["Project Risk Management", "Project Scope Management", "Project Integration Management", "Project Quality Management"]
    answer: "Project Integration Management"
    explanation: "Integration Management is the PM's exclusive domain. Only the PM has the full-system perspective needed to assess how a change in one area (scope) ripples into all others (cost, schedule, risk, quality). It cannot be delegated because integration requires simultaneous visibility across every knowledge area."

  - id: 43
    type: multiple-choice
    question: "Which communication method is described as 'multidirectional in real time' and is the most effective for ensuring shared understanding between two or more parties?"
    options: ["Push", "Pull", "Interactive", "Public"]
    answer: "Interactive"
    explanation: "Interactive communication is real-time and multidirectional — both parties can see, hear, and respond immediately. This immediate feedback loop is what makes it the most effective method for ensuring common understanding. Agile Principle 6 cites it as the most efficient communication method for development teams."

  - id: 44
    type: select-all
    question: "Which of the following are accurate descriptions of the Integration Management process 'Direct and Manage Project Work'? Select all that apply."
    options: ["It is where the actual project deliverables are created", "It corresponds to the 'Do' phase of Deming's PDCA cycle", "It is performed only during the Initiating Process Group", "It involves leading the team and executing the activities defined in the Project Management Plan", "It produces Work Performance Data as an output"]
    answers: ["It is where the actual project deliverables are created", "It corresponds to the 'Do' phase of Deming's PDCA cycle", "It involves leading the team and executing the activities defined in the Project Management Plan", "It produces Work Performance Data as an output"]
    explanation: "Direct and Manage Project Work is the Executing process where the PM leads the team in creating deliverables. It maps to the 'Do' phase of PDCA. It produces Work Performance Data (raw observations) which flows into Monitor and Control. It occurs throughout Executing — not just in Initiating."

  - id: 45
    type: true-false
    question: "In Agile, the Change Control Board (CCB) and Perform Integrated Change Control process are typically replaced by the Product Owner, who manages scope changes through continuous backlog prioritization."
    answer: true
    explanation: "Agile embeds integration into the Product Owner role and the Sprint cadence. Instead of a formal CCB reviewing written change requests, the Product Owner continuously re-prioritizes the backlog based on new information and stakeholder feedback. The Sprint Review and Sprint Planning ceremonies are the Agile equivalent of integrated change governance."
---
