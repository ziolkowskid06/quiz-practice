---
title: "Risk Management & Quality Management"
topic: "Project Management"
description: "Master risk responses, risk artifacts, qualitative vs quantitative analysis, quality theorists (Crosby, Juran, Deming, Shewhart), Cost of Quality, and QA vs QC."
emoji: "🛡️"
questions:
  - id: 1
    type: multiple-choice
    question: "Which risk response strategy involves changing the Project Management Plan to eliminate a threat entirely — removing the root cause before it can manifest?"
    options: ["Mitigation", "Active Acceptance", "Avoidance", "Transfer"]
    answer: "Avoidance"
    explanation: "Avoidance is used when a risk is so high-impact it could derail or kill the project. It eliminates the root cause by removing scope, changing the approach, or choosing a different vendor. It is the most proactive of all negative risk responses."

  - id: 2
    type: multiple-choice
    question: "What is the critical distinction between Active Acceptance and Passive Acceptance?"
    options: ["Active Acceptance requires reducing the risk's probability before it occurs; Passive Acceptance does not", "Active Acceptance sets aside a Contingency Reserve for the risk; Passive Acceptance takes no action and uses a Workaround if the risk happens", "Active Acceptance transfers the risk to a third party; Passive Acceptance keeps it with the team", "They are synonyms used in different project methodologies"]
    answer: "Active Acceptance sets aside a Contingency Reserve for the risk; Passive Acceptance takes no action and uses a Workaround if the risk happens"
    explanation: "The distinction is preparation: Active Acceptance = budget and plan (contingency reserve + plan); Passive Acceptance = document and wait (no reserve, workaround improvised if risk fires). Both accept the risk, but only Active Acceptance funds a response."

  - id: 3
    type: fill-blank
    question: "The risk response strategy that reduces either the probability of a threat occurring or the impact if it does occur — without eliminating it entirely — is called ___."
    answer: "Mitigation"
    accept: ["mitigation", "Mitigation"]
    explanation: "Mitigation takes action now (investing a small cost) to make the risk less likely or less damaging. Examples: prototype testing, redundant systems, quality checklists. It is appropriate when full avoidance is impractical but reducing exposure is achievable."

  - id: 4
    type: true-false
    question: "Passive Acceptance is appropriate for high-probability, high-impact risks when the PM has full confidence the team can handle them if they occur."
    answer: false
    explanation: "Passive Acceptance is only appropriate for low-probability, low-impact risks where planning a response costs more than the risk itself. High-impact risks demand Avoidance, Mitigation, or Active Acceptance. Applying Passive Acceptance to serious threats is negligence, not confidence."

  - id: 5
    type: select-all
    question: "Which risk response strategies require proactive action BEFORE the risk occurs? Select all that apply."
    options: ["Avoidance", "Mitigation", "Active Acceptance", "Passive Acceptance"]
    answers: ["Avoidance", "Mitigation", "Active Acceptance"]
    explanation: "Avoidance (eliminate the cause), Mitigation (reduce probability/impact), and Active Acceptance (set aside contingency reserve) all require decisions and actions before the risk fires. Passive Acceptance is the only strategy that takes no action before the risk occurs."

  - id: 6
    type: multiple-choice
    question: "What is the primary distinction between the Risk Register and the Risk Report?"
    options: ["The Risk Register is for stakeholders; the Risk Report is for the project team", "The Risk Register is the detailed database of all individual risks; the Risk Report is an executive summary of overall project risk exposure", "The Risk Register tracks opportunities; the Risk Report tracks threats", "They are the same document presented to different audiences"]
    answer: "The Risk Register is the detailed database of all individual risks; the Risk Report is an executive summary of overall project risk exposure"
    explanation: "Risk Register = granular data (every risk, owner, P&I score, planned response). Risk Report = strategic dashboard (overall exposure, critical risk trends) for the Sponsor and Steering Committee. Stakeholders need the summary; the PM needs the detail."

  - id: 7
    type: true-false
    question: "A Contingency Plan is automatically activated when a risk is identified, without waiting for a specific trigger event."
    answer: false
    explanation: "A Contingency Plan is trigger-based — it activates only when predefined warning signs indicate the risk is occurring (e.g., 'vendor misses three consecutive delivery dates'). Without a defined trigger, the PM cannot know when to execute Plan A. The trigger is what separates management from worrying."

  - id: 8
    type: multiple-choice
    question: "What is the key difference between a Fallback Plan and a Workaround?"
    options: ["A Fallback Plan is for opportunities; a Workaround is for threats", "A Fallback Plan is a planned response developed in advance for a known risk; a Workaround is an unplanned response improvised when an unknown or passively accepted risk occurs", "A Fallback Plan uses contingency reserves; a Workaround uses management reserves", "They are synonyms — both describe a secondary risk response"]
    answer: "A Fallback Plan is a planned response developed in advance for a known risk; a Workaround is an unplanned response improvised when an unknown or passively accepted risk occurs"
    explanation: "Fallback Plan = planned in advance, for an identified risk, when the Contingency Plan (Plan A) fails. Workaround = unplanned, improvised on the fly for a risk that was not identified or was passively accepted. The fallback is proactive; the workaround is reactive."

  - id: 9
    type: fill-blank
    question: "The artifact that serves as the comprehensive, living database for every identified project risk — tracking description, category, owner, probability, impact, and planned responses — is the Risk ___."
    answer: "Register"
    accept: ["register", "Register"]
    explanation: "The Risk Register is the 'source of truth' for all individual risks. It is continuously updated throughout the project. Assigning a Risk Owner to every line item ensures accountability — someone is actively monitoring each specific threat or opportunity."

  - id: 10
    type: multiple-choice
    question: "The Risk Watch List is an output of which risk management process?"
    options: ["Identify Risks", "Perform Qualitative Risk Analysis", "Perform Quantitative Risk Analysis", "Plan Risk Responses"]
    answer: "Perform Qualitative Risk Analysis"
    explanation: "Qualitative Risk Analysis prioritizes all identified risks by scoring probability and impact. Low-priority risks (low P&I) are placed on the Watch List rather than being actively managed. This ensures team energy focuses on the 'Vital Few' critical risks."

  - id: 11
    type: true-false
    question: "Risks placed on the Watch List are closed and never need to be reviewed again during the project."
    answer: false
    explanation: "The Watch List is NOT a discard pile. Risks are dynamic — a low-priority risk today can become a high-priority threat next month due to environmental changes (new regulations, vendor instability). Regular Risk Review meetings must include Watch List reassessment and trigger monitoring."

  - id: 12
    type: matching
    question: "Match each risk artifact to its primary purpose."
    pairs:
      - left: "Risk Register"
        right: "Detailed database of every individual risk, owner, and planned response"
      - left: "Risk Report"
        right: "Executive summary of overall project risk exposure for the Sponsor"
      - left: "Contingency Plan"
        right: "Plan A — pre-defined response activated when a risk trigger occurs"
      - left: "Fallback Plan"
        right: "Plan B — activated when the Contingency Plan fails or is insufficient"
    explanation: "Each artifact serves a distinct stakeholder and purpose in the risk lifecycle. Register = PM operational tool. Report = sponsor communication. Contingency = first response. Fallback = last resort before scope/budget escalation."

  - id: 13
    type: multiple-choice
    question: "Qualitative Risk Analysis prioritizes risks using subjective scales. What makes Quantitative Risk Analysis fundamentally different?"
    options: ["It only analyzes schedule risks, not cost risks", "It uses numerical data and statistical simulation to quantify the actual financial or schedule impact of high-priority risks", "It is required on all projects regardless of size", "It replaces Qualitative Analysis once a project moves into execution"]
    answer: "It uses numerical data and statistical simulation to quantify the actual financial or schedule impact of high-priority risks"
    explanation: "Qualitative = filter (ranks all risks quickly, subjectively). Quantitative = microscope (mathematically quantifies the impact of top-priority risks using tools like Monte Carlo). Qualitative always comes first; Quantitative is optional and reserved for large, complex, or high-stakes projects."

  - id: 14
    type: true-false
    question: "Quantitative Risk Analysis is mandatory on all PMP-managed projects."
    answer: false
    explanation: "Quantitative Risk Analysis is optional. It is used on large, complex, or high-stakes projects where the cost of the analysis is justified by the value of the statistical data. On smaller projects, the cost of running Monte Carlo simulations may exceed the value of the information produced."

  - id: 15
    type: select-all
    question: "Which of the following are tools used in Quantitative Risk Analysis? Select all that apply."
    options: ["Probability and Impact (P&I) Matrix", "Monte Carlo Simulation", "Tornado Diagram", "Decision Trees / Expected Monetary Value (EMV)", "Risk Breakdown Structure (RBS)"]
    answers: ["Monte Carlo Simulation", "Tornado Diagram", "Decision Trees / Expected Monetary Value (EMV)"]
    explanation: "Quantitative tools are mathematical: Monte Carlo (probability simulation), Tornado Diagram (identifies which single variable has the most impact), and Decision Trees/EMV (calculates expected value of decisions under uncertainty). P&I Matrix and RBS are Qualitative tools used for prioritization and categorization."

  - id: 16
    type: multiple-choice
    question: "Qualitative Risk Analysis produces a prioritized Risk Register. Quantitative Risk Analysis produces:"
    options: ["A Watch List of low-priority risks", "A probabilistic forecast of cost or schedule impact (e.g., '90% confident the project costs between $1.1M and $1.3M')", "A definitive estimate of the project's total cost", "A list of approved risk responses for the top 10 risks"]
    answer: "A probabilistic forecast of cost or schedule impact (e.g., '90% confident the project costs between $1.1M and $1.3M')"
    explanation: "Quantitative analysis converts 'High/Medium/Low' risk ratings into numerical probability distributions. The output is a confidence interval — a statistically defensible range rather than a single number. This bridges risk data to Sponsor Go/No-Go decisions at Phase Gates."

  - id: 17
    type: true-false
    question: "A Workaround, unlike a Contingency Plan, is an unplanned response developed on-the-fly after an unidentified or passively accepted risk fires."
    answer: true
    explanation: "Workarounds are improvised — they are the result of Passive Acceptance or risks that escaped identification. They reflect reactive risk management. The PMI mindset prefers proactive planning (Contingency + Fallback Plans) so teams execute prepared responses rather than improvising under pressure."

  - id: 18
    type: multiple-choice
    question: "A risk that was passively accepted has just occurred, and the team has no pre-planned response. What must the team develop?"
    options: ["A Contingency Plan retroactively", "A Workaround", "A Fallback Plan", "A Risk Report for the sponsor"]
    answer: "A Workaround"
    explanation: "When a passively accepted risk fires with no pre-planned response, the team must develop a Workaround — an improvised, unplanned response created in real time. This is precisely why PMI cautions against over-relying on Passive Acceptance for anything above low-priority risks."

  - id: 19
    type: select-all
    question: "Which of the following statements about Qualitative Risk Analysis are TRUE? Select all that apply."
    options: ["It is performed on every project regardless of size", "It uses subjective scales like High/Medium/Low to assess probability and impact", "It produces a probabilistic financial forecast using Monte Carlo Simulation", "It is the process that places low-priority risks on the Watch List", "It always precedes Quantitative Risk Analysis"]
    answers: ["It is performed on every project regardless of size", "It uses subjective scales like High/Medium/Low to assess probability and impact", "It is the process that places low-priority risks on the Watch List", "It always precedes Quantitative Risk Analysis"]
    explanation: "Qualitative Analysis is mandatory on all projects (fast, inexpensive), uses subjective scoring, produces the Watch List for low-priority risks, and is always the first analysis step. Monte Carlo is a Quantitative tool — it is NOT part of Qualitative Analysis."

  - id: 20
    type: multiple-choice
    question: "Which theorist is known for the concept of 'Zero Defects' and the argument that 'Quality is Free' because prevention always costs less than rework?"
    options: ["Deming", "Juran", "Crosby", "Shewhart"]
    answer: "Crosby"
    explanation: "Philip Crosby coined 'Zero Defects' and his Four Absolutes of Quality Management. His core argument: the total cost of doing things right the first time (prevention) is always lower than the cumulative cost of rework, warranties, and reputation damage. Quality is not a trade-off — it is an investment."

  - id: 21
    type: multiple-choice
    question: "Joseph Juran defined quality as:"
    options: ["Zero Defects", "Fitness for Use", "Conformance to Requirements", "Statistical Process Control"]
    answer: "Fitness for Use"
    explanation: "Juran's definition focuses on the customer's actual purpose. A product that meets its technical checklist but cannot serve the customer's real business need is a quality failure. This aligns directly with PMI's Stakeholder Satisfaction principle — the customer's use case is the ultimate quality standard."

  - id: 22
    type: true-false
    question: "Deming's 14 Points argue that 85% of quality problems are caused by individual workers who need better supervision and performance management."
    answer: false
    explanation: "Deming argued the opposite: 85% of quality problems are caused by the SYSTEM — the processes, tools, and management decisions — not the workers. This is why a Senior PM asks 'What in our process allowed this error?' rather than 'Who made this mistake?' It is a foundational Servant Leadership principle."

  - id: 23
    type: multiple-choice
    question: "Which quality theorist created the PDCA (Plan-Do-Check-Act) cycle and is considered the father of Total Quality Management (TQM)?"
    options: ["Crosby", "Juran", "Shewhart", "Deming"]
    answer: "Deming"
    explanation: "W. Edwards Deming popularized TQM and the PDCA cycle. PDCA is the engine behind every improvement cycle — from Waterfall phase reviews to Agile Sprint Retrospectives. Deming is often called the 'Godfather of Agile' because the Retrospective is a pure expression of the 'Act' phase of PDCA."

  - id: 24
    type: fill-blank
    question: "Walter Shewhart invented the ___ Chart — a statistical tool that distinguishes between 'common cause' variation (normal) and 'special cause' variation (a signal requiring PM action)."
    answer: "Control"
    accept: ["control", "Control"]
    explanation: "Control Charts (Statistical Process Control, or SPC) allow PMs to distinguish noise from signal. Not every variance requires intervention — only special cause variations indicate a systemic problem. This embodies the PMI 'Assess Before Acting' mindset: use data, not intuition, to decide when to intervene."

  - id: 25
    type: matching
    question: "Match each quality theorist to their signature concept."
    pairs:
      - left: "Philip Crosby"
        right: "Zero Defects — Quality is Free; prevention over inspection"
      - left: "Joseph Juran"
        right: "Fitness for Use — the Juran Trilogy and the Pareto 80/20 Principle"
      - left: "W. Edwards Deming"
        right: "PDCA cycle — 85% of quality problems are caused by the system"
      - left: "Walter Shewhart"
        right: "Control Charts — Statistical Process Control to separate noise from signal"
    explanation: "Each theorist contributed a distinct lens: Crosby = zero tolerance for defects. Juran = customer-defined quality + the vital few. Deming = systemic improvement + PDCA. Shewhart = statistical evidence for intervention decisions. Together they form the foundation of the PMP quality domain."

  - id: 26
    type: fill-blank
    question: "Juran popularized the ___ Principle (80/20 Rule) in quality management, stating that 80% of quality problems stem from just 20% of the root causes — the 'Vital Few.'"
    answer: "Pareto"
    accept: ["pareto", "Pareto"]
    explanation: "The Pareto Principle directs quality improvement effort toward the highest-impact root causes rather than treating all defects equally. By fixing the 'Vital Few' causes, teams can eliminate the majority of quality problems — maximizing improvement ROI."

  - id: 27
    type: multiple-choice
    question: "The Sprint Retrospective is considered an Agile manifestation of Deming's PDCA cycle. Which phase of PDCA does the Retrospective most directly represent?"
    options: ["Plan", "Do", "Check", "Act"]
    answer: "Act"
    explanation: "The Retrospective is the 'Act' phase — where the team uses what was learned (Check = Sprint Review data) to adjust behavior for the next cycle. It embodies Deming's systemic improvement philosophy: continuous small adjustments based on evidence, not heroics at project close."

  - id: 28
    type: multiple-choice
    question: "What is the key distinction between Prevention costs and Appraisal costs in the Cost of Quality framework?"
    options: ["Prevention covers internal failures; Appraisal covers external failures", "Prevention costs occur before work begins (training, planning); Appraisal costs occur during/after work to verify it is correct (testing, inspection)", "Prevention is a direct cost; Appraisal is an indirect cost", "Prevention is performed by the PM; Appraisal is performed by the customer"]
    answer: "Prevention costs occur before work begins (training, planning); Appraisal costs occur during/after work to verify it is correct (testing, inspection)"
    explanation: "Prevention = before (training, process design, clear requirements). Appraisal = during/after (testing, code review, inspections, audits). PMI's mantra is 'Prevention over Inspection' — investing more upfront in prevention reduces the need for appraisal and eliminates failure costs entirely."

  - id: 29
    type: true-false
    question: "The PMI quality mantra is 'Inspection over Prevention' — thorough testing is the gold standard for delivering quality products."
    answer: false
    explanation: "PMI's mantra is 'Prevention over Inspection.' Prevention addresses root causes before defects occur. Inspection finds defects after they are created. A defect found internally (appraisal cost) is far cheaper than one found by the customer (external failure cost) — but preventing it entirely is cheapest of all."

  - id: 30
    type: select-all
    question: "Which of the following are examples of Appraisal costs in the Cost of Quality framework? Select all that apply."
    options: ["Team training on quality standards before the project begins", "Unit testing a deliverable for defects against requirements", "Physical inspection of a construction deliverable for conformance", "Conducting a code review to find defects in completed work", "Writing a Quality Management Plan during planning"]
    answers: ["Unit testing a deliverable for defects against requirements", "Physical inspection of a construction deliverable for conformance", "Conducting a code review to find defects in completed work"]
    explanation: "Appraisal costs happen during or after work to verify correctness: testing, physical inspection, code reviews, audits. Training before work begins and writing the Quality Management Plan are Prevention costs — they occur before any work is created."

  - id: 31
    type: true-false
    question: "Quality Assurance (QA) focuses on the PRODUCT deliverable, while Quality Control (QC) focuses on the PROCESS used to create it."
    answer: false
    explanation: "This is reversed. QA (Manage Quality) focuses on the PROCESS — ensuring the team follows the right procedures to prevent defects. QC (Control Quality) focuses on the PRODUCT — inspecting deliverables to find and fix defects. QA is proactive/process; QC is reactive/product."

  - id: 32
    type: multiple-choice
    question: "Which PMBOK process name corresponds to Quality Assurance — the proactive, process-focused quality activity?"
    options: ["Plan Quality Management", "Control Quality", "Manage Quality", "Validate Scope"]
    answer: "Manage Quality"
    explanation: "PMBOK renamed Quality Assurance to 'Manage Quality' to emphasize its strategic nature. It is about managing the process — auditing adherence to the Quality Management Plan, identifying root causes of process deficiencies, and making improvements before defects reach the product."

  - id: 33
    type: multiple-choice
    question: "A PM commissions a third-party audit to verify the team is following the approved Quality Management Plan templates and checklists. This is an example of:"
    options: ["Quality Control (Control Quality)", "Quality Assurance (Manage Quality)", "Validate Scope", "Cost of Quality — Appraisal"]
    answer: "Quality Assurance (Manage Quality)"
    explanation: "Quality Audits are the signature QA activity. They examine the PROCESS — asking 'Are we following the plan?' not 'Is this deliverable correct?' When you see 'audit' or 'process improvement' in an exam scenario, your answer is Quality Assurance / Manage Quality."

  - id: 34
    type: matching
    question: "Match each quality concept to its primary characteristic."
    pairs:
      - left: "Quality Assurance (QA)"
        right: "Process-focused; proactive; Manage Quality PMBOK process"
      - left: "Quality Control (QC)"
        right: "Product-focused; reactive; Control Quality PMBOK process"
      - left: "Prevention Cost"
        right: "Spending before work begins to eliminate root causes of defects"
      - left: "Appraisal Cost"
        right: "Spending during/after work to verify conformance to requirements"
    explanation: "QA = orchard health (process). QC = fruit quality (product). Prevention = eliminating root causes upfront. Appraisal = verifying output. The PMI quality hierarchy: Prevention is cheapest; Appraisal finds what Prevention misses; Internal Failure is caught in QC; External Failure is the most expensive outcome."

  - id: 35
    type: select-all
    question: "Which of the following are examples of Quality CONTROL (QC) activities? Select all that apply."
    options: ["Auditing the team's adherence to the Quality Management Plan", "Testing the final software build against acceptance criteria", "Physically inspecting a construction deliverable for specification conformance", "Conducting a Sprint Retrospective to improve the development process", "Running regression tests to verify a product works after changes"]
    answers: ["Testing the final software build against acceptance criteria", "Physically inspecting a construction deliverable for specification conformance", "Running regression tests to verify a product works after changes"]
    explanation: "QC activities examine the PRODUCT: testing against acceptance criteria, physical inspections, regression tests. Auditing process adherence is QA. Sprint Retrospectives are QA — they improve the process, not inspect the product."

  - id: 36
    type: true-false
    question: "The Sprint Retrospective is an Agile expression of Quality Assurance because it focuses on improving the team's process rather than inspecting the product increment."
    answer: true
    explanation: "The Retrospective is pure QA — it examines HOW the team works (process improvement). The Sprint Review examines WHAT was built (product inspection = QC). This distinction — Review = QC, Retrospective = QA — is one of the highest-frequency traps on the PMP exam."
---
