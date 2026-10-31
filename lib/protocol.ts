export type ProtocolSource = {
  label: string;
  href: string;
};

export type ProtocolTrack = {
  id: string;
  title: string;
  description: string;
  questions: string[];
};

export type ProtocolComponent = {
  id: string;
  title: string;
  purpose: string;
  practice: string;
  evidence: string;
  openQuestion: string;
  sources: ProtocolSource[];
};

export type ProtocolStage = {
  id: string;
  title: string;
  description: string;
  outputs: string[];
  decision: string;
};

export type ProtocolMeasure = {
  title: string;
  question: string;
  approach: string;
  sources: ProtocolSource[];
};

export type OptimismProtocol = {
  title: string;
  status: "Development draft 0.1";
  purpose: string;
  scope: string;
  tracks: ProtocolTrack[];
  components: ProtocolComponent[];
  stages: ProtocolStage[];
  measures: ProtocolMeasure[];
  unresolvedDecisions: string[];
  versions: {
    version: string;
    date: string;
    status: string;
    summary: string;
  }[];
  sources: ProtocolSource[];
};

export const protocol: OptimismProtocol = {
  title: "The Optimism Protocol",
  status: "Development draft 0.1",
  purpose: "Develop a practical, testable way to cultivate optimism: see worthwhile possibilities, respond to evidence, and take action toward a future that matters.",
  scope: "This draft sets out what we propose to develop and how we would evaluate it. The exercises below are candidate ingredients. Their combination, sequence, and schedule have not been validated as an Optimism Project protocol.",
  tracks: [
    {
      id: "practical-cultivation",
      title: "Practical cultivation",
      description: "Build a program of reflection, future imagination, and goal planning that people can use in everyday life. Study whether it changes expectations and supports useful action over time.",
      questions: [
        "Which practices help which people, in which circumstances?",
        "How much practice is useful, and how long do any changes last?",
        "Can outlook improve while judgment stays responsive to setbacks, risks, and new information?",
      ],
    },
    {
      id: "biological-research",
      title: "Biological research",
      description: "Investigate how learning, reward, stress, and future simulation relate to optimism. This exploratory track develops questions about mechanisms; it does not add medicines or biological treatments to the public practice program.",
      questions: [
        "Which biological findings directly concern optimism, and which concern related constructs?",
        "Do laboratory effects on belief updating translate into everyday expectations and functioning?",
        "What direct evidence and independent review would be needed before proposing a human intervention study?",
      ],
    },
  ],
  components: [
    {
      id: "possible-future",
      title: "Imagine a worthwhile future",
      purpose: "Make positive possibilities more concrete and connect them to effort, choices, and support.",
      practice: "Choose an area of life that matters. Describe a future in which things have gone well after working toward your goals. Include what you did and what helped you along the way.",
      evidence: "Best Possible Self exercises have produced small average improvements in measured optimism and wellbeing. Study instructions and schedules vary; this prompt is an introductory adaptation.",
      openQuestion: "Which instructions and practice schedule are acceptable, useful, and associated with change that persists?",
      sources: [
        { label: "Carrillo et al., 2019 · Best Possible Self review", href: "https://pubmed.ncbi.nlm.nih.gov/31545815/" },
        { label: "Chen et al., 2023 · Induced optimism experiments", href: "https://pubmed.ncbi.nlm.nih.gov/37378047/" },
      ],
    },
    {
      id: "obstacle-and-action",
      title: "Connect possibility to action",
      purpose: "Turn a desired outcome into a manageable next step while making room for obstacles.",
      practice: "Name a goal, describe why the outcome matters, and identify one obstacle. Make a specific plan: if that obstacle arises, then I will take this action. Include help or resources you may need.",
      evidence: "Mental contrasting with if–then planning has evidence for improving goal attainment on average. That evidence does not establish that the method itself increases optimism.",
      openQuestion: "Does adding goal planning to future reflection improve everyday follow-through, and is that change related to outlook?",
      sources: [
        { label: "Wang, Wang & Gai, 2021 · Goal-attainment meta-analysis", href: "https://pubmed.ncbi.nlm.nih.gov/34054628/" },
      ],
    },
    {
      id: "expectation-review",
      title: "Learn from what happens",
      purpose: "Keep expectations open to evidence and make progress visible without requiring a positive interpretation of every event.",
      practice: "Record one expectation and the facts behind it. Later, compare it with what happened. Note what you learned, what remains uncertain, and whether your next step should change.",
      evidence: "Research distinguishes favorable expectations from unrealistic predictions and shows why the comparison standard matters. This review exercise is a project-designed candidate, not a validated optimism intervention.",
      openQuestion: "Can reviewing predictions support more flexible expectations without increasing rumination or pressure to feel positive?",
      sources: [
        { label: "Shepperd et al., 2015 · Understanding unrealistic optimism", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4467896/" },
      ],
    },
  ],
  stages: [
    {
      id: "define-scope",
      title: "Define the scope",
      description: "Specify who the program is for, what it aims to change, and the proposed link between each practice and each outcome.",
      outputs: ["A clear intended audience and use case", "An evidence map for each candidate component", "A theory of how the components might work together"],
      decision: "Proceed when the questions and intended outcomes are specific enough to guide development; revise assumptions that the evidence does not support.",
    },
    {
      id: "co-design",
      title: "Develop it with people",
      description: "Seek input from intended users, optimism researchers, and relevant practitioners. Explore the language, effort, access needs, and circumstances that shape participation.",
      outputs: ["A documented draft with clear instructions", "Feedback on relevance, accessibility, and burden", "Revisions linked to feedback and evidence"],
      decision: "Refine or remove components that are confusing, inaccessible, or unhelpful before designing a feasibility study.",
    },
    {
      id: "feasibility",
      title: "Test feasibility",
      description: "Design a small study to learn whether people can use the program and whether the planned evaluation is workable. Obtain appropriate review before recruiting participants.",
      outputs: ["Prespecified feasibility questions and progression criteria", "Information on participation, completion, and acceptability", "A record of difficulties and unwanted effects"],
      decision: "Use the results to revise, continue, or stop. Feasibility alone would not establish effectiveness.",
    },
    {
      id: "evaluation",
      title: "Evaluate change and durability",
      description: "If feasibility supports proceeding, specify a suitable comparison, validated measures, follow-up, and an analysis plan before a formal evaluation begins.",
      outputs: ["A registered study plan and versioned protocol", "Outcomes for outlook, functioning, and unwanted effects", "Transparent results, including null findings and limitations"],
      decision: "Decide what to revise or study further using the size, uncertainty, durability, and practical importance of the results.",
    },
  ],
  measures: [
    {
      title: "Current outlook",
      question: "Do expectations change during and after practice?",
      approach: "Consider an appropriate validated state measure, such as the State Optimism Measure, after checking suitability and use requirements for the intended audience. Separate immediate shifts from sustained change.",
      sources: [{ label: "Millstein et al., 2019 · State Optimism Measure", href: "https://pubmed.ncbi.nlm.nih.gov/31026732/" }],
    },
    {
      title: "General expectations",
      question: "Does change extend beyond a single exercise or situation?",
      approach: "Consider the LOT-R alongside follow-up assessment. Treat scores as continuous measures and avoid inventing diagnostic categories or a threshold for success.",
      sources: [{ label: "Scheier, Carver & Bridges, 1994 · LOT-R", href: "https://www.cmu.edu/dietrich/psychology/pdf/scales/LOTR_article.pdf" }],
    },
    {
      title: "Everyday action and functioning",
      question: "Does a change in outlook make a useful difference in everyday life?",
      approach: "Define outcomes with intended users, such as follow-through on a chosen action or progress toward a meaningful goal. Measure these separately from optimism and avoid assuming that improved mood produces improved health.",
      sources: [{ label: "Chen et al., 2023 · Outlook and downstream outcomes", href: "https://pubmed.ncbi.nlm.nih.gov/37378047/" }],
    },
    {
      title: "Judgment, experience, and burden",
      question: "Can the program support possibility while respecting reality and individual circumstances?",
      approach: "Plan how to assess responses to new information, acceptability, time demands, and unwanted effects. Select the methods before evaluation rather than treating positive feedback as proof.",
      sources: [
        { label: "Shepperd et al., 2015 · Unrealistic optimism", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4467896/" },
        { label: "Skivington et al., 2021 · Intervention-development framework", href: "https://www.bmj.com/content/374/bmj.n2061" },
      ],
    },
  ],
  unresolvedDecisions: [
    "Who should the first version serve, and in what everyday setting?",
    "Which candidate components belong together, and in what sequence?",
    "What frequency and duration of practice are useful and manageable?",
    "Which outcome should be primary, and what change would matter to participants?",
    "What comparator and follow-up periods would answer the research question?",
    "Who will lead the work, provide independent review, and fund an evaluation?",
    "How will consent, data handling, access needs, and public reporting be designed before any study?",
  ],
  versions: [
    {
      version: "0.1",
      date: "2026-10-31",
      status: "Editorial development draft",
      summary: "Initial public outline of purpose, candidate components, research tracks, and evaluation questions. This record does not represent an approved or registered protocol, an active study, or evidence that the proposed program works.",
    },
  ],
  sources: [
    { label: "MRC/NIHR framework for developing and evaluating interventions", href: "https://www.bmj.com/content/374/bmj.n2061" },
    { label: "SPIRIT 2025 guidance for a future randomized-trial protocol", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12035670/" },
    { label: "Sharot et al., 2012 · Dopamine and optimism bias in a laboratory task", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3424419/" },
  ],
};
