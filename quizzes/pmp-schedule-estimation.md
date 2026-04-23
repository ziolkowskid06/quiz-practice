---
title: "Schedule Compression, Estimation & EVM"
topic: "Project Management"
description: "Master schedule compression (fast tracking, crashing, Brooks' Law), Critical Chain vs CPM, three-point estimating formulas, estimate ranges, and EVM monitoring tools."
emoji: "📊"
questions:
  - id: 1
    type: true-false
    question: "A Lead allows a successor activity to begin before its predecessor has fully finished, effectively overlapping the two activities."
    answer: true
    explanation: "A Lead is a negative lag applied to an FS relationship (e.g., FS - 2 days). It accelerates the schedule by starting the successor early. Lead is the mechanism behind Fast Tracking — intentionally overlapping activities at the cost of increased rework risk."

  - id: 2
    type: multiple-choice
    question: "What distinguishes a Lag from a Buffer in project scheduling?"
    options: ["A Lag is for uncertainty; a Buffer is a technical requirement", "A Lag is a mandatory technical delay between activities; a Buffer protects against uncertainty", "A Lag is added by the PM; a Buffer is added by the team", "They are synonyms used in different methodologies"]
    answer: "A Lag is a mandatory technical delay between activities; a Buffer protects against uncertainty"
    explanation: "A Lag is non-negotiable technical wait time (e.g., 3-day concrete cure). You cannot 'manage away' a lag. A Buffer is a deliberate reserve added to protect against uncertainty — it is a risk management tool. Confusing them is a common exam trap."

  - id: 3
    type: fill-blank
    question: "Fast tracking changes sequential activities into ___ activities to compress the schedule without adding resources."
    answer: "parallel"
    accept: ["parallel", "overlapping", "concurrent"]
    explanation: "Fast tracking turns a sequential (Finish-to-Start) dependency into overlapping work. It is cost-neutral but introduces rework risk — if earlier work changes, work started on the successor may need to be redone."

  - id: 4
    type: multiple-choice
    question: "Fast tracking trades ___ for time, while crashing trades ___ for time."
    options: ["Money / Risk", "Risk / Money", "Quality / Cost", "Scope / Schedule"]
    answer: "Risk / Money"
    explanation: "Fast tracking trades Risk (rework risk from overlapping tasks) for Time. Crashing trades Money (additional resources, overtime) for Time. This distinction is one of the most tested schedule compression comparisons on the PMP exam."

  - id: 5
    type: true-false
    question: "Fast tracking can be applied to activities with mandatory (hard logic) dependencies."
    answer: false
    explanation: "Fast tracking only works on Discretionary Dependencies (preferred logic). Mandatory dependencies have physical or contractual constraints that cannot be overlapped. You cannot paint a wall before the drywall is hung, no matter how much the sponsor pressures you."

  - id: 6
    type: true-false
    question: "Fast tracking helps compress the overall project schedule even when the overlapped activities are NOT on the Critical Path."
    answer: false
    explanation: "Schedule compression only shortens the project end date when applied to Critical Path activities. Overlapping tasks on a path with float does not change the project's end date — it only adds rework risk for no benefit."

  - id: 7
    type: multiple-choice
    question: "Which schedule compression technique adds resources (overtime, contractors) to reduce activity duration on the Critical Path?"
    options: ["Fast Tracking", "Crashing", "Resource Leveling", "Schedule Compression"]
    answer: "Crashing"
    explanation: "Crashing is defined as shortening the schedule for the least incremental cost by adding resources. It only applies to Critical Path activities — crashing a task with float does nothing to shorten the project end date."

  - id: 8
    type: fill-blank
    question: "The Crash Cost Slope formula is: (Crash Cost - Normal Cost) / (Normal Time - Crash Time). When selecting which activity to crash first, you choose the activity with the ___ crash cost slope on the Critical Path."
    answer: "lowest"
    accept: ["lowest", "least", "cheapest"]
    explanation: "The crash cost slope tells you how much each day of compression costs. You crash the Critical Path activity with the lowest cost-per-day first to get the maximum schedule reduction for the minimum additional spend — a data-driven decision, not an emotional one."

  - id: 9
    type: multiple-choice
    question: "Brooks' Law states that adding manpower to a late software project:"
    options: ["Recovers the schedule proportionally to the people added", "Makes it later", "Has no effect on schedule or quality", "Reduces quality but always shortens the schedule"]
    answer: "Makes it later"
    explanation: "Brooks' Law describes the Law of Diminishing Returns in software: new team members require onboarding and increase communication overhead. The result is more coordination burden on existing team members, paradoxically slowing the project further."

  - id: 10
    type: select-all
    question: "Which of the following statements about Fast Tracking are TRUE? Select all that apply."
    options: ["It is generally cost-neutral — no additional resources are required", "It increases the risk of rework if earlier work changes", "It can only be applied to Discretionary Dependencies", "It shortens the schedule regardless of whether activities are on the Critical Path", "In Agile, concurrent Sprint work is a natural form of fast tracking"]
    answers: ["It is generally cost-neutral — no additional resources are required", "It increases the risk of rework if earlier work changes", "It can only be applied to Discretionary Dependencies", "In Agile, concurrent Sprint work is a natural form of fast tracking"]
    explanation: "Fast tracking is cost-neutral (Risk for Time trade), creates rework risk, requires discretionary dependencies, and is the default state in Agile Sprints. It only helps if applied to Critical Path activities — overlapping non-critical tasks adds risk without compressing the end date."

  - id: 11
    type: matching
    question: "Match each schedule concept to its primary purpose."
    pairs:
      - left: "Lead"
        right: "Accelerates schedule by starting successor before predecessor finishes"
      - left: "Lag"
        right: "Mandatory technical delay that cannot be eliminated"
      - left: "Buffer"
        right: "Deliberate time reserve to protect against uncertainty and risk"
      - left: "Sprint"
        right: "Fixed time-box that creates a delivery cadence and limits scope"
    explanation: "Lead = acceleration tool (schedule compression). Lag = physical/technical constraint. Buffer = risk management reserve. Sprint = Agile iteration container. Each manages time differently — lead/lag fine-tune CPM schedules; buffers protect CCM chains; Sprints define Agile cadence."

  - id: 12
    type: true-false
    question: "In Agile, when a Sprint falls behind, the preferred response to timeline pressure is to add more developers (crash the Sprint)."
    answer: false
    explanation: "In Agile, resources are fixed and time-boxes are fixed. When a Sprint is behind, the team reduces scope — moving lower-priority stories out of the Sprint to ensure 'Must-Haves' are delivered on time. Adding people mid-Sprint disrupts the team's cohesion and violates Brooks' Law."

  - id: 13
    type: multiple-choice
    question: "A sponsor demands a 10-day schedule reduction. Fast tracking has already been applied to all eligible activities. What is the next schedule compression option?"
    options: ["Accept the delay and re-baseline the schedule", "Apply resource leveling", "Crash the Critical Path activity with the lowest cost-per-day slope", "Reduce the project scope"]
    answer: "Crash the Critical Path activity with the lowest cost-per-day slope"
    explanation: "When fast tracking is exhausted, crashing is the next compression technique. The PM identifies the Critical Path activity with the lowest crash cost slope and presents the sponsor with a precise cost/time trade-off — turning an emotional deadline demand into a data-driven decision."

  - id: 14
    type: true-false
    question: "After crashing one Critical Path activity, the PM should immediately crash the next most expensive activity without re-checking the network."
    answer: false
    explanation: "After crashing an activity, the Critical Path may shift — a previously non-critical path can become the new bottleneck. Continuing to crash the original path would waste money while missing the actual constraint. Always re-analyze the network after each crash increment."

  - id: 15
    type: multiple-choice
    question: "A project is behind schedule. The PM considers fast tracking Tasks A and B (which have 15 days of float). What is the likely outcome?"
    options: ["The project end date shortens by the overlap amount", "The project end date does not change, but rework risk increases", "The project cost increases proportionally", "Fast tracking improves team velocity permanently"]
    answer: "The project end date does not change, but rework risk increases"
    explanation: "Fast tracking non-critical path tasks does not shorten the project end date — only Critical Path activities control the final date. Overlapping tasks with float only adds rework risk for no schedule benefit."

  - id: 16
    type: select-all
    question: "Which of the following are valid reasons to choose Crashing over Fast Tracking? Select all that apply."
    options: ["All remaining Critical Path dependencies are mandatory and cannot be overlapped", "The cost of rework risk exceeds the cost of additional resources", "The project has unlimited float on all remaining activities", "Brooks' Law makes adding resources counterproductive in the current context"]
    answers: ["All remaining Critical Path dependencies are mandatory and cannot be overlapped", "The cost of rework risk exceeds the cost of additional resources"]
    explanation: "Crashing is preferred when fast tracking is blocked (mandatory dependencies exist) or when the rework risk of overlapping exceeds the cost of additional resources. If Brooks' Law applies (software with communication overhead), neither technique may be effective — scope reduction should be considered instead."

  - id: 17
    type: multiple-choice
    question: "What critical dimension does Critical Chain Method (CCM) add to Critical Path Method (CPM) that CPM ignores?"
    options: ["Risk probability scores", "Resource availability and constraints", "Stakeholder approval gates", "Activity cost slopes"]
    answer: "Resource availability and constraints"
    explanation: "CPM determines the Critical Path based on logical dependencies alone. CCM adds resource constraints — a path is only truly 'critical' if the people and equipment needed to execute it are actually available. This is the defining distinction between the two methods."

  - id: 18
    type: true-false
    question: "Student Syndrome describes the tendency for work to expand and fill all the time available for its completion."
    answer: false
    explanation: "Student Syndrome is the tendency to wait until the last minute to start a task because there is a safety margin (padding) built in. Parkinson's Law is the concept that work expands to fill the time available. Both undermine schedule performance, and CCM is designed to counter both."

  - id: 19
    type: multiple-choice
    question: "Parkinson's Law states that:"
    options: ["Adding manpower to a late project makes it later", "Work expands to fill the time available for its completion", "Waiting until the deadline to start a task because padding exists", "The cost of change increases exponentially as the project progresses"]
    answer: "Work expands to fill the time available for its completion"
    explanation: "Parkinson's Law explains why giving someone 10 days for a 5-day task results in a 10-day delivery — the work unconsciously expands. CCM counters this by removing individual task padding and placing safety reserves as explicit Project Buffers at the chain's end."

  - id: 20
    type: fill-blank
    question: "In Critical Chain Method, individual task safety padding is removed and consolidated at the end of the project as a ___ Buffer, which protects the project's delivery commitment date."
    answer: "Project"
    accept: ["project", "Project"]
    explanation: "The Project Buffer sits at the end of the Critical Chain and absorbs delays from any task on the chain. By removing individual padding, CCM eliminates the waste of Student Syndrome and Parkinson's Law while still protecting the final delivery date."

  - id: 21
    type: true-false
    question: "A Feeding Buffer in CCM is placed at the end of the project to protect the final delivery date."
    answer: false
    explanation: "The Project Buffer protects the final delivery date. Feeding Buffers are placed where non-critical paths merge into the Critical Chain — they prevent delays in supporting work from disrupting the chain. The two buffer types serve distinct purposes and are placed in different locations."

  - id: 22
    type: multiple-choice
    question: "In Critical Chain Method, project progress is measured by monitoring:"
    options: ["Percent complete of individual tasks", "Buffer consumption — how much of the Project Buffer has been used", "Earned Value (EV) vs. Planned Value (PV)", "Milestone achievement dates"]
    answer: "Buffer consumption — how much of the Project Buffer has been used"
    explanation: "CCM replaces percent-complete tracking with Buffer Consumption. If the Project Buffer is 80% intact, the project is healthy — even if individual tasks ran late. This prevents panic over single-task delays and focuses attention on the delivery commitment."

  - id: 23
    type: matching
    question: "Match each CCM element to its purpose."
    pairs:
      - left: "Student Syndrome"
        right: "Waiting until the deadline to start because padding provides a safety net"
      - left: "Parkinson's Law"
        right: "Work expands to fill all time available, regardless of actual complexity"
      - left: "Project Buffer"
        right: "Consolidated safety reserve at the end of the Critical Chain"
      - left: "Feeding Buffer"
        right: "Protects the Critical Chain where non-critical paths merge into it"
    explanation: "CCM is designed to counter Student Syndrome and Parkinson's Law by removing task-level padding and replacing it with explicit buffers. The Project Buffer protects the end date; Feeding Buffers protect the chain from lateral disruptions."

  - id: 24
    type: fill-blank
    question: "The Beta/PERT three-point estimate formula is: (O + ___M + P) / 6, where the multiplier gives greater statistical weight to the Most Likely scenario."
    answer: "4"
    accept: ["4", "four"]
    explanation: "The PERT/Beta formula (O + 4M + P) / 6 weights the Most Likely estimate four times more than Optimistic or Pessimistic. This produces a more realistic estimate than a simple average and is the standard formula for Quantitative Risk Analysis on the PMP exam."

  - id: 25
    type: multiple-choice
    question: "What is the key difference between the Triangular and Beta/PERT three-point estimating formulas?"
    options: ["Triangular uses two data points; Beta/PERT uses three", "Triangular gives equal weight to all three inputs; Beta/PERT weights Most Likely four times heavier", "Beta/PERT requires Monte Carlo simulation; Triangular does not", "Triangular is for cost estimates; Beta/PERT is for schedule estimates"]
    answer: "Triangular gives equal weight to all three inputs; Beta/PERT weights Most Likely four times heavier"
    explanation: "Triangular = (O + M + P) / 3 — a simple average. Beta/PERT = (O + 4M + P) / 6 — weights Most Likely heavily because the most-likely scenario is statistically more probable than either extreme. Beta/PERT is the PMI-preferred formula for risk-adjusted estimates."

  - id: 26
    type: multiple-choice
    question: "Which estimating technique is MOST accurate but also the most time-consuming and expensive to perform?"
    options: ["Analogous (Top-Down)", "Parametric", "Bottom-Up", "Three-Point"]
    answer: "Bottom-Up"
    explanation: "Bottom-Up Estimating starts at the lowest WBS level (work packages), estimates each component, and rolls up to the project total. It requires a fully decomposed scope and input from the experts doing the work — producing the highest accuracy at the highest estimation cost."

  - id: 27
    type: multiple-choice
    question: "A construction firm estimates a new project at $200 per square foot based on historical data from 50 similar projects. This is an example of which estimating technique?"
    options: ["Bottom-Up Estimating", "Analogous Estimating", "Parametric Estimating", "Three-Point Estimating"]
    answer: "Parametric Estimating"
    explanation: "Parametric Estimating uses a proven mathematical relationship between a historical variable (cost/sq ft) and a quantifiable project parameter (sq footage). It is fast and highly accurate when the underlying data is reliable — more precise than Analogous and less time-consuming than Bottom-Up."

  - id: 28
    type: fill-blank
    question: "A Rough Order of Magnitude (ROM) estimate carries a range of ___% to +75%, reflecting the high uncertainty present during the Initiating phase."
    answer: "-25"
    accept: ["-25", "negative 25", "-25%"]
    explanation: "ROM (-25% to +75%) is used during initiation before the WBS is built. The asymmetric range (more upside risk than downside) reflects that cost overruns are more common than coming in under budget at the earliest project stage. It is based on Analogous or Top-Down estimating."

  - id: 29
    type: matching
    question: "Match each estimate type to its accuracy range and phase."
    pairs:
      - left: "Rough Order of Magnitude (ROM)"
        right: "-25% to +75% — used during Initiating phase"
      - left: "Budget Estimate"
        right: "-10% to +25% — used during Planning phase"
      - left: "Definitive Estimate"
        right: "-5% to +10% — used in late Planning or early Execution"
      - left: "Bottom-Up Estimate"
        right: "Basis of the Definitive estimate — built from detailed WBS work packages"
    explanation: "Estimate ranges narrow as the project progresses through the Cone of Uncertainty. ROM is a feasibility check; Budget secures formal funding; Definitive creates the cost baseline for execution. Bottom-Up is the technique that produces the Definitive estimate."

  - id: 30
    type: true-false
    question: "A Definitive estimate can be created during the Initiating phase when the sponsor requires a firm project commitment before signing the charter."
    answer: false
    explanation: "A Definitive estimate (-5% to +10%) requires a fully decomposed WBS and detailed Bottom-Up estimation — work that occurs in late Planning or early Execution. Providing a Definitive estimate during Initiation is technically impossible and sets a misleading expectation. A ROM estimate is the correct deliverable at that stage."

  - id: 31
    type: multiple-choice
    question: "A sponsor requests a cost estimate before the WBS has been built, to decide whether to fund the project. Which technique and estimate type is most appropriate?"
    options: ["Bottom-Up Estimating — Definitive Estimate", "Parametric Estimating — Budget Estimate", "Analogous (Top-Down) Estimating — ROM Estimate", "Three-Point Estimating — Beta/PERT Range"]
    answer: "Analogous (Top-Down) Estimating — ROM Estimate"
    explanation: "During Initiating, scope detail is not yet available. Analogous Estimating uses historical data from similar projects to produce a ROM (-25% to +75%) estimate. A Senior PM presents this as a range — not a fixed commitment — to manage expectations and avoid being held to an early guess."

  - id: 32
    type: multiple-choice
    question: "What is the primary purpose of Earned Value Analysis (EVA) in project monitoring?"
    options: ["Calculate the team's capacity for future Sprints", "Provide an objective, mathematical status of scope, schedule, and cost in one integrated set of metrics", "Forecast stakeholder satisfaction at project completion", "Determine the critical path after scope changes"]
    answer: "Provide an objective, mathematical status of scope, schedule, and cost in one integrated set of metrics"
    explanation: "EVA integrates the Triple Constraint into one measurement framework. Instead of subjective status reports ('I'm 90% done'), EVA uses PV, EV, and AC to produce objective variances (CV, SV) and performance indices (CPI, SPI) — giving the sponsor hard data, not estimates."

  - id: 33
    type: true-false
    question: "Earned Value Analysis (EVA) provides a more objective measure of project progress than a team member's statement of 'I'm 90% done.'"
    answer: true
    explanation: "EVM replaces subjective percent-complete reporting with mathematical evidence. EV (Earned Value) measures the budgeted value of work actually completed against PV (what was planned) and AC (what was spent). '90% done' is an opinion; EV is a fact derived from accepted deliverables."

  - id: 34
    type: fill-blank
    question: "The metric that compares the value of work accomplished (EV) to the money actually spent (AC) is the ___ Performance Index (CPI)."
    answer: "Cost"
    accept: ["cost", "Cost"]
    explanation: "CPI = EV / AC. A CPI above 1.0 means you are earning more value than you are spending (under budget). A CPI below 1.0 means you are spending more than the value you are producing (over budget). CPI is the single most reliable predictor of final project cost."

  - id: 35
    type: multiple-choice
    question: "A project's CPI is 0.8. What does this tell the project manager?"
    options: ["The project is 80% complete", "For every $1.00 spent, only $0.80 of planned value has been earned", "The project will finish 80% of its scope on time", "The project schedule is running at 80% efficiency"]
    answer: "For every $1.00 spent, only $0.80 of planned value has been earned"
    explanation: "CPI = EV/AC = 0.8 means $0.80 earned per $1.00 spent — the project is over budget. If this trend continues, the EAC (forecast final cost) will be the Budget at Completion (BAC) divided by 0.8, producing a significant overrun."

  - id: 36
    type: multiple-choice
    question: "Which EVM metric projects the TOTAL final cost of the project based on current performance?"
    options: ["Estimate to Complete (ETC)", "Estimate at Completion (EAC)", "Cost Variance (CV)", "Budget at Completion (BAC)"]
    answer: "Estimate at Completion (EAC)"
    explanation: "EAC is the forecasted total cost at completion. The most common formula (EAC = BAC / CPI) uses current cost performance to project the final total. It gives the sponsor early warning of budget overruns — long before the money runs out."

  - id: 37
    type: true-false
    question: "Trend Analysis evaluates a single performance data point to determine whether a project is healthy."
    answer: false
    explanation: "Trend Analysis requires multiple data points over time to identify patterns. A single CPI of 0.9 is just a snapshot. Trend Analysis asks: Is the CPI improving (0.8 → 0.9) or deteriorating (1.1 → 0.9)? The direction of change determines whether corrective actions are working."

  - id: 38
    type: multiple-choice
    question: "A project's CPI has moved from 0.78 to 0.85 to 0.92 over three consecutive reporting periods. What does Trend Analysis indicate?"
    options: ["The project is over budget and deteriorating", "Corrective actions are working and performance is recovering", "The project will finish exactly on budget", "The CPI trend is irrelevant — only the current value matters"]
    answer: "Corrective actions are working and performance is recovering"
    explanation: "An improving CPI trend (0.78 → 0.85 → 0.92) indicates that corrective actions are producing results. Trend Analysis tells the PM whether to stay the course or escalate. This context might justify not crashing the schedule, since the team appears to be recovering naturally."

  - id: 39
    type: multiple-choice
    question: "Reserve Analysis compares the amount of contingency reserve REMAINING to:"
    options: ["The original project budget", "The amount of identified risk remaining in the project", "The number of unresolved stakeholder issues", "The team's velocity in the current Sprint"]
    answer: "The amount of identified risk remaining in the project"
    explanation: "Reserve Analysis is a risk-informed budget health check. As risks are retired (their probability window passes), the reserve needed decreases. If all contingency has been spent on early risks but significant risk remains, the PM must alert the sponsor immediately."

  - id: 40
    type: true-false
    question: "According to PMI, contingency reserves may be used to cover scope creep when the project budget is running low."
    answer: false
    explanation: "PMI is explicit: contingency reserves are designated for identified risks (known-unknowns). Using them for scope creep violates the reserve's purpose and leaves the project exposed to the risks the reserve was meant to cover. Scope creep must be addressed through change control — not by raiding the contingency fund."

  - id: 41
    type: select-all
    question: "Which of the following are core components of the Earned Value Management framework? Select all that apply."
    options: ["Planned Value (PV)", "Earned Value (EV)", "Actual Cost (AC)", "Story Points", "Cost Performance Index (CPI)", "Net Present Value (NPV)"]
    answers: ["Planned Value (PV)", "Earned Value (EV)", "Actual Cost (AC)", "Cost Performance Index (CPI)"]
    explanation: "The EVM framework is built on three primary data points — PV (planned work value), EV (earned work value), AC (actual cost spent) — and two performance indices — CPI (cost efficiency) and SPI (schedule efficiency). Story Points are an Agile tool; NPV is a portfolio selection tool."

  - id: 42
    type: matching
    question: "Match each EVM monitoring activity to the primary question it answers."
    pairs:
      - left: "Earned Value Analysis (EVA)"
        right: "Where are we today? — objective cost, schedule, and scope status"
      - left: "Forecasting (EAC)"
        right: "Where will we finish? — projected final cost based on current performance"
      - left: "Trend Analysis"
        right: "Is performance getting better or worse over time?"
      - left: "Reserve Analysis"
        right: "Is our contingency safety net still adequate for the remaining risks?"
    explanation: "Each activity looks through a different temporal lens: EVA = present status; Forecasting = future projection; Trend Analysis = historical pattern; Reserve Analysis = remaining financial risk coverage. A complete monitoring picture requires all four."

  - id: 43
    type: true-false
    question: "If EVA shows a project is over budget (CPI < 1.0) but Trend Analysis shows CPI improving each month, the PM may decide NOT to crash the schedule — choosing instead to let the recovering team continue."
    answer: true
    explanation: "This reflects the PMI 'Assess Before Acting' mindset. A single below-1.0 CPI triggers alarm, but Trend Analysis provides crucial context. If corrective actions are demonstrably working and the trajectory is positive, crashing adds cost and disruption for a problem that is already resolving."
---
