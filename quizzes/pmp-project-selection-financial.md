---
title: "Project Selection: Financial Methods"
topic: "Project Management"
description: "Master BCR, NPV, IRR, ROI, Payback Period, and the PMBOK project selection taxonomy."
emoji: "💰"
questions:
  - id: 1
    type: true-false
    question: "A BCR greater than 1 means project benefits outweigh costs and is generally a go signal."
    answer: true
    explanation: "BCR = PV of Benefits / PV of Costs. When BCR > 1, benefits exceed costs. BCR < 1 means costs outweigh benefits (no-go). BCR = 1 is break-even and requires additional criteria to decide."

  - id: 2
    type: true-false
    question: "A BCR of exactly 1 means the project should be rejected."
    answer: false
    explanation: "BCR = 1 is break-even — benefits exactly equal costs. This is not an automatic rejection. Additional strategic or qualitative criteria are needed to make a decision. Only BCR < 1 signals a clear no-go."

  - id: 3
    type: true-false
    question: "The standard Payback Period formula accounts for the time value of money."
    answer: false
    explanation: "The standard PBP does NOT discount future cash flows. A dollar returned in year 5 is treated identically to a dollar returned today. The Discounted Payback Period variant applies a discount rate and does account for TVM, but the standard formula does not."

  - id: 4
    type: true-false
    question: "When choosing between two projects, PMI always prefers the one with the higher NPV over the one with the higher BCR."
    answer: true
    explanation: "NPV accounts for the time value of money and the absolute size of returns. BCR only shows the ratio of benefits to costs and ignores project size and TVM. When NPV and BCR point to different projects, PMI's preferred answer is always the higher NPV."

  - id: 5
    type: true-false
    question: "A project with NPV equal to zero should be rejected because it generates no profit."
    answer: false
    explanation: "NPV = 0 means the project exactly covers its cost of capital — it breaks even in real terms. This is not the same as generating no value. It covers the required rate of return. Additional strategic criteria may still justify proceeding."

  - id: 6
    type: true-false
    question: "IRR is the discount rate at which a project's NPV equals zero."
    answer: true
    explanation: "This is the PMI-exact definition of IRR. If IRR exceeds the required rate of return (hurdle rate), the project is worth pursuing. The exam may distract with the phrase 'rate at which the project breaks even' — know the precise definition."

  - id: 7
    type: true-false
    question: "A higher IRR is always preferred over a lower IRR when comparing projects."
    answer: true
    explanation: "Higher IRR means a higher rate of return relative to the cost of capital. All else equal, the project with the higher IRR is the better investment. IRR must also exceed the required rate of return (hurdle rate) to be worth pursuing."

  - id: 8
    type: true-false
    question: "The standard Payback Period ignores all cash flows that occur after the break-even point."
    answer: true
    explanation: "This is PBP's second critical weakness. A project that pays back in 2 years and earns nothing afterward looks identical to one that pays back in 2 years and then earns millions for a decade. PBP cannot distinguish profitability after break-even."

  - id: 9
    type: true-false
    question: "Multi-Objective Programming and Multi-Criteria Decision Analysis (MCDA) are the same method under a different name."
    answer: false
    explanation: "These are distinct methods in different PMBOK categories. MCDA (weighted scoring) is a Benefit Measurement Method. Multi-Objective Programming is a mathematical algorithm under Constrained Optimization Methods. The exam tests this distinction directly."

  - id: 10
    type: true-false
    question: "Constrained Optimization Methods are appropriate when simple scoring models cannot find the optimal portfolio mix across multiple simultaneous constraints."
    answer: true
    explanation: "Constrained Optimization uses complex mathematical algorithms (LP, NLP, Integer Programming, etc.) to find the optimal combination of projects across many constraints simultaneously. Simple Benefit Measurement Methods like BCR or scoring models cannot handle this level of complexity."

  - id: 11
    type: multiple-choice
    question: "Which of the following is the correct formula for BCR?"
    options: ["Total Benefits / Total Costs", "PV of Benefits / PV of Costs", "Net Benefits / Initial Investment", "PV of Costs / PV of Benefits"]
    answer: "PV of Benefits / PV of Costs"
    explanation: "BCR uses present values, not raw figures. The formula is BCR = PV of Benefits / PV of Costs. Using present values is critical because BCR is a financial ratio that must account for the timing of cash flows through discounting."

  - id: 12
    type: multiple-choice
    question: "Project A has a BCR of 1.9 and NPV of $80,000. Project B has a BCR of 1.4 and NPV of $120,000. According to PMI, which project should be selected?"
    options: ["Project A — higher BCR indicates a better value ratio", "Project B — higher NPV is always preferred", "Either project — both have BCR greater than 1", "Request more information before deciding"]
    answer: "Project B — higher NPV is always preferred"
    explanation: "When NPV and BCR point to different projects, PMI always prefers the higher NPV. NPV accounts for the time value of money and the absolute size of returns. BCR ignores project size and TVM — a slightly lower BCR but much higher NPV delivers more real value."

  - id: 13
    type: multiple-choice
    question: "What is the PMI-correct definition of Internal Rate of Return (IRR)?"
    options: ["The interest rate at which the project breaks even", "The discount rate at which NPV equals zero", "The required rate of return set by the organization", "The rate of return on investment over the project duration"]
    answer: "The discount rate at which NPV equals zero"
    explanation: "IRR is precisely the discount rate (r) that makes NPV = 0. If IRR exceeds the required rate of return (hurdle rate), the project is worth pursuing. The phrase 'rate at which the project breaks even' is a loose paraphrase — know the exact PMI definition."

  - id: 14
    type: multiple-choice
    question: "An organization needs to find the optimal mix of 80 proposed projects given simultaneous constraints including budget caps, staff availability, regulatory mandates, and strategic priorities. Which project selection method is most appropriate?"
    options: ["Benefit-Cost Ratio", "Net Present Value", "Constrained Optimization", "Scoring Model"]
    answer: "Constrained Optimization"
    explanation: "When there are multiple simultaneous constraints and many variables, Constrained Optimization methods (LP, NLP, Integer Programming, etc.) use mathematical algorithms to find the optimal portfolio mix. Simple Benefit Measurement Methods like BCR or scoring models cannot handle this complexity."

  - id: 15
    type: multiple-choice
    question: "Which of the following best describes the primary weakness of the standard Payback Period formula?"
    options: ["It is too complex for non-financial stakeholders to understand", "It does not account for the time value of money", "It requires a discount rate assumption to calculate", "It can only be applied to projects with uniform cash flows"]
    answer: "It does not account for the time value of money"
    explanation: "The standard PBP treats all future cash flows as equivalent regardless of when they occur. This is its primary exam-tested weakness. The Discounted Payback Period variant fixes this by applying a discount rate. PBP is actually known for being simple and NOT requiring a discount rate."

  - id: 16
    type: multiple-choice
    question: "In Agile project management, selecting which features to build in the next Sprint is most analogous to which predictive project management activity?"
    options: ["Change control review", "Benefit Measurement Analysis", "Earned Value reporting", "Resource leveling"]
    answer: "Benefit Measurement Analysis"
    explanation: "In Agile, Product Backlog prioritization uses value mapping and MoSCoW — effectively performing a Benefit Measurement Analysis every sprint cycle. Features are ranked and selected based on relative value to the organization, mirroring how Benefit Measurement Methods compare and rank projects."

  - id: 17
    type: multiple-choice
    question: "Which of the following correctly describes the relationship between IRR and the required rate of return?"
    options: ["IRR must equal the required rate of return for a project to proceed", "If IRR exceeds the required rate of return, the project is worth pursuing", "The required rate of return must always be higher than IRR", "IRR is only relevant when NPV cannot be calculated"]
    answer: "If IRR exceeds the required rate of return, the project is worth pursuing"
    explanation: "The required rate of return (hurdle rate) is the minimum acceptable return. If IRR > hurdle rate, the project generates returns above the cost of capital. If IRR < hurdle rate, the project does not cover its cost of capital and should not proceed."

  - id: 18
    type: multiple-choice
    question: "An Agile team delivers a Minimum Viable Product in Sprint 1, allowing the organization to begin generating revenue immediately. What effect does this have on the Payback Period compared to a traditional Waterfall approach?"
    options: ["No effect — PBP is calculated the same way regardless of approach", "It increases the payback period because of sprint overhead costs", "It shortens the payback period through early incremental value delivery", "It eliminates the need to calculate payback period on Agile projects"]
    answer: "It shortens the payback period through early incremental value delivery"
    explanation: "Waterfall delivers all value at the end (Big Bang release), meaning the investment phase runs in full before payback begins. Agile delivers high-value features incrementally, starting cash flow recovery earlier. This actively shortens the payback period — one of Agile's key financial advantages."

  - id: 19
    type: multiple-choice
    question: "Which of the following is classified as a Benefit Measurement Method under PMBOK project selection?"
    options: ["Linear Programming", "Dynamic Programming", "Scoring Model (MCDA)", "Multi-Objective Programming"]
    answer: "Scoring Model (MCDA)"
    explanation: "Benefit Measurement Methods are comparison-based tools: BCR, NPV, IRR, ROI, Payback Period, and Scoring Models (MCDA). Linear Programming, Dynamic Programming, and Multi-Objective Programming are all Constrained Optimization Methods — mathematical algorithms, not comparison tools."

  - id: 20
    type: multiple-choice
    question: "A PM explains: 'Adding 10 more engineers to this module will not produce 10 times more output — coordination overhead increases exponentially and efficiency drops.' Which analytical model does this best illustrate?"
    options: ["Linear Programming", "Nonlinear Analysis", "Multi-Objective Programming", "Benefit-Cost Ratio"]
    answer: "Nonlinear Analysis"
    explanation: "Nonlinear Analysis models scenarios where relationships are not proportional — such as the Law of Diminishing Returns. Linear Programming assumes proportional relationships. When adding resources causes exponentially diminishing output, the relationship is nonlinear and requires Nonlinear Analysis."

  - id: 21
    type: multiple-choice
    question: "The ROI formula is:"
    options: ["(Net Benefits / Initial Investment) / Project Duration", "(Net Benefits / Cost) x 100%", "Total Revenue / Total Cost", "(NPV minus Initial Investment) / NPV"]
    answer: "(Net Benefits / Cost) x 100%"
    explanation: "ROI = (Net Benefits / Cost) x 100%. This expresses the return as a percentage of what was invested. Higher ROI = better. Note: ROI does not account for time value of money, which is why NPV is the more rigorous long-term metric."

  - id: 22
    type: multiple-choice
    question: "What does the variable r represent in the NPV formula?"
    options: ["Rate of inflation for the project period", "Risk factor assigned to the project", "Discount rate (cost of capital or required rate of return)", "Return on investment percentage"]
    answer: "Discount rate (cost of capital or required rate of return)"
    explanation: "In the NPV formula, r is the discount rate — the organization's cost of capital or required rate of return. It converts future cash flows into present-day values. Misidentifying r is a common source of NPV calculation errors on the exam."

  - id: 23
    type: multiple-choice
    question: "Which of the following correctly describes the Discounted Payback Period?"
    options: ["It is identical to the standard Payback Period formula", "It applies a discount rate to future cash flows before cumulating them", "It ignores the time value of money just like the standard formula", "It is a Constrained Optimization Method"]
    answer: "It applies a discount rate to future cash flows before cumulating them"
    explanation: "The Discounted Payback Period fixes the standard PBP's TVM weakness by discounting future cash flows before adding them up. This makes the break-even timeline longer than the standard PBP (since discounted values are smaller) but gives a more accurate picture of when the investment is truly recovered."

  - id: 24
    type: multiple-choice
    question: "Multi-Criteria Decision Analysis (MCDA) — also called weighted scoring — is classified under which PMBOK project selection category?"
    options: ["Constrained Optimization Methods", "Benefit Measurement Methods", "Mathematical Programming", "Portfolio Balancing"]
    answer: "Benefit Measurement Methods"
    explanation: "MCDA / weighted scoring compares projects by assigning weighted criteria (strategic fit, risk, profitability) and ranking options. This is a comparison-based approach — a Benefit Measurement Method. Multi-Objective Programming, which sounds similar, is actually a mathematical algorithm under Constrained Optimization."

  - id: 25
    type: multiple-choice
    question: "When selecting Project A over competing Project B, what does the value of the foregone Project B represent?"
    options: ["Sunk cost", "Opportunity cost", "Risk exposure", "Resource conflict cost"]
    answer: "Opportunity cost"
    explanation: "Opportunity cost is the value of the best alternative you give up when making a decision. In project selection, when you choose Project A, Project B's NPV is your opportunity cost. PMI expects PMs to recognize that every selection decision carries an implicit cost — what you did not choose."

  - id: 26
    type: select-all
    question: "Which of the following are classified as Benefit Measurement Methods? (Select all that apply)"
    options: ["BCR", "Linear Programming", "NPV", "IRR", "Payback Period", "Scoring Model"]
    answers: ["BCR", "NPV", "IRR", "Payback Period", "Scoring Model"]
    explanation: "Benefit Measurement Methods are comparison-based tools used to evaluate and rank projects: BCR, NPV, IRR, ROI, Payback Period, and Scoring Models (MCDA). Linear Programming is a Constrained Optimization Method — a mathematical algorithm, not a comparison tool."

  - id: 27
    type: select-all
    question: "Which of the following are weaknesses of the standard Payback Period? (Select all that apply)"
    options: ["Ignores time value of money", "Requires a complex discount rate assumption", "Ignores cash flows that occur after the payback point", "Does not measure total profitability", "Is difficult for stakeholders to understand"]
    answers: ["Ignores time value of money", "Ignores cash flows that occur after the payback point", "Does not measure total profitability"]
    explanation: "PBP has three core weaknesses: (1) treats future dollars the same as today's dollars (ignores TVM); (2) cannot distinguish projects that earn millions after break-even vs. nothing; (3) only tells you WHEN you break even, not HOW MUCH you make. PBP does NOT require a discount rate and IS easy to explain — those are its advantages."

  - id: 28
    type: select-all
    question: "Which of the following statements about NPV are correct? (Select all that apply)"
    options: ["NPV greater than zero means the project adds value above cost of capital", "NPV less than zero always means the project must be terminated immediately", "NPV equal to zero means the project covers its cost of capital", "Higher NPV is always preferred when selecting between projects", "NPV ignores time value of money"]
    answers: ["NPV greater than zero means the project adds value above cost of capital", "NPV equal to zero means the project covers its cost of capital", "Higher NPV is always preferred when selecting between projects"]
    explanation: "NPV > 0 = adds value (go). NPV = 0 = break-even, covers cost of capital (not automatically rejected — context matters). NPV < 0 = loses money in real terms. Higher NPV always wins in head-to-head selection. NPV uses discounting so it fully accounts for TVM."

  - id: 29
    type: select-all
    question: "Which of the following are classified as Constrained Optimization Methods? (Select all that apply)"
    options: ["Linear Programming", "BCR", "Nonlinear Programming", "Integer Programming", "Dynamic Programming", "Multi-Objective Programming"]
    answers: ["Linear Programming", "Nonlinear Programming", "Integer Programming", "Dynamic Programming", "Multi-Objective Programming"]
    explanation: "Constrained Optimization Methods are mathematical algorithms: Linear Programming, Nonlinear Programming, Integer Programming, Dynamic Programming, and Multi-Objective Programming. BCR is a Benefit Measurement Method — a comparison tool, not a mathematical algorithm."

  - id: 30
    type: select-all
    question: "Which of the following are true about BCR? (Select all that apply)"
    options: ["BCR equals PV of Benefits divided by PV of Costs", "BCR greater than 1 indicates benefits outweigh costs", "BCR accounts for the time value of money", "BCR equal to 1 is a break-even result requiring additional criteria", "Higher BCR always overrides higher NPV in project selection"]
    answers: ["BCR equals PV of Benefits divided by PV of Costs", "BCR greater than 1 indicates benefits outweigh costs", "BCR equal to 1 is a break-even result requiring additional criteria"]
    explanation: "BCR = PV of Benefits / PV of Costs. BCR > 1 = go; BCR = 1 = break-even (not auto-go); BCR < 1 = no-go. BCR does NOT account for time value of money or project size. When BCR and NPV conflict, NPV always wins per PMI."

  - id: 31
    type: select-all
    question: "Which of the following correctly describe the Agile approach to the Payback Period? (Select all that apply)"
    options: ["Agile ignores payback period entirely", "Agile shortens the payback period through incremental delivery", "Delivering highest-value features first accelerates cash flow recovery", "Agile payback is calculated using the same formula as Waterfall payback"]
    answers: ["Agile shortens the payback period through incremental delivery", "Delivering highest-value features first accelerates cash flow recovery"]
    explanation: "Agile actively shrinks the payback period by delivering the most valuable work first through incremental delivery. An MVP in Sprint 1 means the organization starts receiving cash flow before the project ends, unlike Waterfall which delivers all value at the end (Big Bang release)."

  - id: 32
    type: select-all
    question: "Which of the following are true about IRR? (Select all that apply)"
    options: ["IRR is the discount rate at which NPV equals zero", "Higher IRR is preferred when comparing projects", "IRR must exceed the required rate of return for a project to be worth pursuing", "IRR and NPV always identify the same preferred project", "IRR accounts for the absolute size of the investment"]
    answers: ["IRR is the discount rate at which NPV equals zero", "Higher IRR is preferred when comparing projects", "IRR must exceed the required rate of return for a project to be worth pursuing"]
    explanation: "IRR = discount rate at NPV = 0. Higher IRR = better. IRR must beat the hurdle rate. However, IRR and NPV do NOT always agree — when they conflict, NPV wins. IRR also does not account for project size (absolute investment amount)."

  - id: 33
    type: select-all
    question: "Which of the following are reasons an organization might prefer Payback Period over NPV? (Select all that apply)"
    options: ["It is simpler to explain to non-financial stakeholders", "It accounts for total long-term profitability", "It focuses on liquidity and speed of capital recovery", "It does not require a discount rate assumption", "It provides more accurate financial forecasting than NPV"]
    answers: ["It is simpler to explain to non-financial stakeholders", "It focuses on liquidity and speed of capital recovery", "It does not require a discount rate assumption"]
    explanation: "PBP advantages: simplicity (easy to explain), liquidity focus (how fast do we get our money back?), and no discount rate needed. PBP does NOT measure total profitability or account for TVM, so it is less accurate than NPV for long-term financial decisions."

  - id: 34
    type: select-all
    question: "Which of the following statements about NPV equal to zero are correct? (Select all that apply)"
    options: ["The project covers its cost of capital", "The project should be automatically rejected", "The project is at break-even in real terms", "Additional criteria are needed to make a selection decision", "The project is generating profit above the cost of capital"]
    answers: ["The project covers its cost of capital", "The project is at break-even in real terms", "Additional criteria are needed to make a selection decision"]
    explanation: "NPV = 0 means the project exactly pays back the investment at the required rate of return — break-even. It is not generating excess profit above cost of capital, but it is not losing money either. This is not an automatic rejection — strategic or qualitative factors may still justify proceeding."

  - id: 35
    type: select-all
    question: "Which of the following are true about Constrained Optimization Methods? (Select all that apply)"
    options: ["They are used for complex multi-variable portfolio decisions", "They include NPV and BCR", "They use mathematical algorithms", "They are most appropriate when simple scoring models fail to find the optimal mix", "They are always performed manually without computer support"]
    answers: ["They are used for complex multi-variable portfolio decisions", "They use mathematical algorithms", "They are most appropriate when simple scoring models fail to find the optimal mix"]
    explanation: "Constrained Optimization Methods use mathematical algorithms to solve complex portfolio problems with many simultaneous constraints. They are NOT performed manually — computers are required. NPV and BCR are Benefit Measurement Methods, not Constrained Optimization."

  - id: 36
    type: fill-blank
    question: "The formula for BCR is ___ divided by PV of Costs."
    answer: "PV of Benefits"
    accept: ["present value of benefits", "pv of benefits"]
    explanation: "BCR = PV of Benefits / PV of Costs. Using present values (not raw figures) is critical — BCR discounts future benefits to today's dollar value before comparing them to costs."

  - id: 37
    type: fill-blank
    question: "In the NPV formula, the variable r represents the ___ rate."
    answer: "discount"
    accept: ["discount rate"]
    explanation: "r is the discount rate — the organization's cost of capital or required rate of return. It converts future cash flows into present-day values. Missing or misidentifying r is a common source of NPV errors."

  - id: 38
    type: fill-blank
    question: "IRR is the ___ rate at which the project's NPV equals zero."
    answer: "discount"
    accept: ["discount rate"]
    explanation: "By PMI definition, IRR is the specific discount rate that makes NPV = 0. If IRR exceeds the required rate of return, the project creates value above the cost of capital."

  - id: 39
    type: fill-blank
    question: "The formula for ROI is (Net Benefits / Cost) x ___."
    answer: "100%"
    accept: ["100", "100 percent"]
    explanation: "ROI = (Net Benefits / Cost) x 100%. This expresses the return as a percentage. For example, Net Benefits $50k / Cost $100k = ROI of 50%."

  - id: 40
    type: fill-blank
    question: "For a project with constant annual cash inflows, Payback Period = Initial Investment / ___."
    answer: "Periodic Cash Inflow"
    accept: ["periodic cash inflow", "annual cash inflow", "cash inflow"]
    explanation: "This formula applies only when cash flows are uniform each period. For non-uniform cash flows, you track cumulative cash flow year-by-year until the running total crosses zero."

  - id: 41
    type: fill-blank
    question: "The Discounted Payback Period applies a ___ rate to future cash flows before cumulating them, fixing the TVM weakness of the standard formula."
    answer: "discount"
    accept: ["discount rate"]
    explanation: "By discounting future cash flows before cumulation, the Discounted PBP gives a more accurate break-even timeline. The standard PBP treats all cash flows equally regardless of timing."

  - id: 42
    type: fill-blank
    question: "The two main PMBOK categories of project selection methods are Benefit Measurement Methods and ___ Optimization Methods."
    answer: "Constrained"
    accept: ["constrained"]
    explanation: "PMBOK 6 divides all project selection methods into exactly two categories: Benefit Measurement Methods (comparison-based) and Constrained Optimization Methods (algorithm-based). Knowing this taxonomy is essential for category-identification questions."

  - id: 43
    type: fill-blank
    question: "When selecting between competing projects, PMI prefers the project with the higher ___ because it accounts for time value of money and absolute return."
    answer: "NPV"
    accept: ["net present value", "npv"]
    explanation: "NPV is PMI's preferred selection metric because it accounts for TVM, absolute project size, and total return. BCR only shows the ratio of benefits to costs and cannot tell you which project delivers more real value in absolute terms."

  - id: 44
    type: fill-blank
    question: "An organization forgoes selecting Project B in order to select Project A. The value of the foregone Project B is called the ___ cost."
    answer: "opportunity"
    accept: ["opportunity cost"]
    explanation: "Opportunity cost is the value of the best alternative you give up. In project selection, when you choose Project A, Project B's NPV represents the opportunity cost of that decision."

  - id: 45
    type: fill-blank
    question: "Linear Programming assumes that relationships between variables are ___, meaning doubling the input produces a proportional doubling of output."
    answer: "proportional"
    accept: ["linear", "proportional"]
    explanation: "Linear Programming's core assumption is proportional (linear) relationships. If you add 2 developers, you expect 2x the output. When this assumption breaks down — e.g., adding people causes coordination overhead — Nonlinear Analysis is more appropriate."

  - id: 46
    type: matching
    question: "Match each financial metric to its decision rule."
    pairs:
      - left: "NPV greater than zero"
        right: "Project adds value above cost of capital; proceed"
      - left: "BCR greater than 1"
        right: "Benefits outweigh costs; generally proceed"
      - left: "IRR exceeds the hurdle rate"
        right: "Project exceeds required rate of return; proceed"
      - left: "Shorter Payback Period"
        right: "Lower financial exposure; preferred all else equal"
    explanation: "These are the four core financial decision rules. NPV and IRR account for TVM; BCR and PBP do not. When NPV and BCR point to different projects, always choose the higher NPV."

  - id: 47
    type: matching
    question: "Match each project selection method to its PMBOK category."
    pairs:
      - left: "BCR"
        right: "Benefit Measurement Method"
      - left: "Linear Programming"
        right: "Constrained Optimization Method"
      - left: "Scoring Model (MCDA)"
        right: "Benefit Measurement Method"
      - left: "Multi-Objective Programming"
        right: "Constrained Optimization Method"
    explanation: "Benefit Measurement = comparison-based tools (BCR, NPV, IRR, ROI, PBP, Scoring Models). Constrained Optimization = mathematical algorithms (LP, NLP, Integer, Dynamic, Multi-Objective). MCDA and Multi-Objective Programming sound similar but belong to different categories."

  - id: 48
    type: matching
    question: "Match each financial metric to its formula or definition."
    pairs:
      - left: "BCR"
        right: "PV of Benefits / PV of Costs"
      - left: "ROI"
        right: "(Net Benefits / Cost) x 100%"
      - left: "Payback Period"
        right: "Initial Investment / Periodic Cash Inflow"
      - left: "IRR"
        right: "Discount rate at which NPV equals zero"
    explanation: "Four formulas every PMP candidate must know cold. BCR and PBP do not account for TVM. ROI gives a percentage. IRR is a definition, not a formula you calculate manually on the exam."

  - id: 49
    type: matching
    question: "Match each Constrained Optimization tool to its primary description."
    pairs:
      - left: "Linear Programming"
        right: "Optimizes outcomes when variable relationships are proportional"
      - left: "Nonlinear Analysis"
        right: "Models scenarios with diminishing returns or exponential changes"
      - left: "Integer Programming"
        right: "Used when solutions must be whole numbers (e.g., number of staff)"
      - left: "Multi-Objective Programming"
        right: "Balances multiple competing priorities using mathematical algorithms"
    explanation: "Each CO tool has a specific use case. Linear = proportional relationships. Nonlinear = diminishing returns. Integer = whole-number constraints. Multi-Objective = multiple competing criteria in a mathematical model (not the same as MCDA)."

  - id: 50
    type: matching
    question: "Match each NPV condition to its correct meaning."
    pairs:
      - left: "NPV greater than zero"
        right: "Project adds value above the cost of capital"
      - left: "NPV equals zero"
        right: "Project exactly covers its cost of capital (break-even)"
      - left: "NPV less than zero"
        right: "Project loses money in real terms"
      - left: "Highest NPV among competing projects"
        right: "PMI-preferred project selection choice over higher BCR"
    explanation: "The three-case NPV rule is exam-critical. NPV = 0 is not rejection — it is break-even. When BCR and NPV conflict in a selection question, always pick the project with the higher NPV."
---
