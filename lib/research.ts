import { researchAdditions } from "./research-additions";
export type Signal = "Supported" | "Developing" | "Open question";

export type ResearchSource = {
  id: string;
  year: number;
  title: string;
  authors: string;
  journal: string;
  kind: string;
  signal: Signal;
  pathway: string;
  finding: string;
  caution: string;
  href: string;
};

export const researchSources: ResearchSource[] = [
  ...researchAdditions,
  {
  "id": "carver-2010",
  "year": 2010,
  "title": "Optimism",
  "authors": "Carver, Scheier & Segerstrom",
  "journal": "Clinical Psychology Review",
  "kind": "Research review",
  "signal": "Supported",
  "pathway": "Definitions · coping · wellbeing",
  "finding": "Reviews optimism as favorable expectations about the future and its relationships with coping, wellbeing, and health.",
  "caution": "A broad review brings together different kinds of evidence; it does not establish that every association is causal.",
  "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4161121/"
},
  {
  "id": "rozanski-2019",
  "year": 2019,
  "title": "Association of Optimism With Cardiovascular Events and All-Cause Mortality",
  "authors": "Rozanski, Bavishi, Kubzansky & Cohen",
  "journal": "JAMA Network Open",
  "kind": "Systematic review + meta-analysis · 15 studies",
  "signal": "Supported",
  "pathway": "Health · cardiovascular outcomes",
  "finding": "Across 229,391 participants, higher optimism was associated with lower risk of cardiovascular events and all-cause mortality.",
  "caution": "Observational evidence and substantial variation between studies limit causal conclusions. Increasing optimism has not been shown here to produce the same health outcomes.",
  "href": "https://pubmed.ncbi.nlm.nih.gov/31560385/"
},
  {
  "id": "lee-2019",
  "year": 2019,
  "title": "Optimism is associated with exceptional longevity in 2 epidemiologic cohorts of men and women",
  "authors": "Lee et al.",
  "journal": "PNAS",
  "kind": "Longitudinal cohort study",
  "signal": "Developing",
  "pathway": "Health · longevity",
  "finding": "Higher optimism was associated with longer life and a greater likelihood of reaching age 85 in two cohorts of older adults.",
  "caution": "An observational association does not show that an optimism intervention extends life. The cohorts also limit generalization.",
  "href": "https://pubmed.ncbi.nlm.nih.gov/31451635/"
},
  {
  "id": "chen-2025",
  "year": 2025,
  "title": "Changes in optimism and subsequent health and wellbeing outcomes in older adults: an outcome-wide analysis",
  "authors": "Chen, Nakamura, Kim, Kubzansky & VanderWeele",
  "journal": "Aging & Mental Health",
  "kind": "Longitudinal study · n=12,998",
  "signal": "Developing",
  "pathway": "Change over time · wellbeing · aging",
  "finding": "Increases in optimism were associated with several later wellbeing measures, better self-rated health, and lower mortality risk.",
  "caution": "Associations were not found for specific disease outcomes or health behaviors. Observational changes do not establish cause and effect.",
  "href": "https://pubmed.ncbi.nlm.nih.gov/39742439/"
},
  {
  "id": "lai-2026",
  "year": 2026,
  "title": "A pilot study: virtual reality-based intervention to boost optimism and alleviate stress, anxiety, and depression in undergraduates",
  "authors": "Lai et al.",
  "journal": "Frontiers in Psychology",
  "kind": "Pilot randomized trial · n=28",
  "signal": "Developing",
  "pathway": "Practice · virtual reality · optimism",
  "finding": "A positive cognitive behavioral VR program improved measured optimism in the short term compared with a task-based VR control.",
  "caution": "The sample was small. Group-by-time differences across longer follow-up were not significant; larger trials are needed.",
  "href": "https://pubmed.ncbi.nlm.nih.gov/41822426/"
},
  {
    id: "sharot-2007", year: 2007,
    title: "Neural mechanisms mediating optimism bias",
    authors: "Sharot, Riccardi, Raio & Phelps", journal: "Nature", kind: "Primary fMRI study", signal: "Developing",
    pathway: "Future simulation · ACC · amygdala",
    finding: "When participants imagined positive future events, activity in rostral anterior cingulate and amygdala-related circuitry tracked optimistic future simulation.",
    caution: "Small neuroimaging studies identify correlates, not a single biological cause of optimism.",
    href: "https://www.nature.com/articles/nature06280",
  },
  {
    id: "sharot-2011", year: 2011,
    title: "How unrealistic optimism is maintained in the face of reality",
    authors: "Sharot, Korn & Dolan", journal: "Nature Neuroscience", kind: "Primary behavioral + fMRI study", signal: "Developing",
    pathway: "Belief updating · inferior frontal gyrus",
    finding: "Participants generally updated beliefs more after desirable than undesirable information; reduced coding of undesirable estimation errors was associated with this asymmetry.",
    caution: "This concerns optimism bias in probability estimates, not all forms of dispositional or realistic optimism.",
    href: "https://pubmed.ncbi.nlm.nih.gov/21983684/",
  },
  {
    id: "sharot-2012", year: 2012,
    title: "How dopamine enhances an optimism bias in humans",
    authors: "Sharot et al.", journal: "Current Biology", kind: "Double-blind pharmacological study", signal: "Developing",
    pathway: "Dopamine · information updating",
    finding: "L-DOPA increased the tendency to update beliefs more from desirable than undesirable information in healthy participants.",
    caution: "This does not establish dopamine as an ‘optimism chemical,’ and it does not justify dopaminergic treatment for pessimism.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3424419/",
  },
  {
    id: "kuzmanovic-2016", year: 2016,
    title: "The role of neural reward circuitry in self-referential optimistic belief updates",
    authors: "Kuzmanovic, Jefferson & Vogeley", journal: "NeuroImage", kind: "Primary fMRI study", signal: "Developing",
    pathway: "vmPFC · ventral striatum · self-valuation",
    finding: "Self-related favorable updating engaged regions implicated in subjective value and reward processing.",
    caution: "The work links task behavior to brain activity; it does not show that these regions uniquely produce optimism.",
    href: "https://pubmed.ncbi.nlm.nih.gov/26883063/",
  },
  {
    id: "mosing-2009", year: 2009,
    title: "Genetic and environmental influences on optimism and its relationship to mental and self-rated health",
    authors: "Mosing et al.", journal: "Behavior Genetics", kind: "Twin study · n=3,053", signal: "Developing",
    pathway: "Temperament · genetics · environment",
    finding: "Additive genetic factors explained an estimated 36% of variation in optimism in this older twin sample; non-shared environmental factors explained the remainder.",
    caution: "Heritability is population- and context-specific; it does not imply immutability or identify a gene for optimism.",
    href: "https://pubmed.ncbi.nlm.nih.gov/19618259/",
  },
  {
    id: "hao-2023", year: 2023,
    title: "Pessimistic cognitive biases mediate socioeconomic status and children’s mental health problems",
    authors: "Hao, Evans & Farah", journal: "Scientific Reports", kind: "Observational childhood study · n=341", signal: "Developing",
    pathway: "Adversity · interpretation · development",
    finding: "Persistent, pervasive adversity was associated with a more pessimistic attributional style among nine-year-olds and statistically mediated part of the SES association.",
    caution: "The sample limits generalization, and mediation in observational data does not by itself prove causality.",
    href: "https://pubmed.ncbi.nlm.nih.gov/36997593/",
  },
  {
    id: "brydon-2009", year: 2009,
    title: "Dispositional optimism and stress-induced changes in immunity and negative mood",
    authors: "Brydon et al.", journal: "Brain, Behavior, and Immunity", kind: "Stress + immune challenge study · n=59", signal: "Developing",
    pathway: "Stress appraisal · IL-6 · cortisol",
    finding: "Higher optimism was associated with differences in stress-related inflammatory and mood responses during an experimental stress and immune challenge protocol.",
    caution: "The sample was small and male; psychoneuroimmune relationships vary by stressor and are not uniformly protective.",
    href: "https://pubmed.ncbi.nlm.nih.gov/19272441/",
  },
  {
    id: "nicolson-2020", year: 2020,
    title: "Imagining a positive future reduces cortisol response to awakening and reactivity to acute stress",
    authors: "Nicolson, Peters & In den Bosch-Meevissen", journal: "Psychoneuroendocrinology", kind: "Randomized intervention study", signal: "Developing",
    pathway: "Future imagery · HPA axis · cortisol",
    finding: "Two weeks of positive-future imagery reduced cortisol responses relative to an active control, but did not produce a greater increase in measured optimism.",
    caution: "A short laboratory intervention and cortisol endpoints are not evidence of durable health effects or clinical efficacy.",
    href: "https://pubmed.ncbi.nlm.nih.gov/32344176/",
  },
  {
    id: "roy-2010", year: 2010,
    title: "Association of optimism and pessimism with inflammation and hemostasis in MESA",
    authors: "Roy et al.", journal: "Psychosomatic Medicine", kind: "Cross-sectional cohort · n=6,814", signal: "Developing",
    pathway: "Inflammation · behavior · cardiovascular context",
    finding: "Pessimism was associated with several inflammatory markers; associations were attenuated after health behavior and metabolic adjustment.",
    caution: "Cross-sectional associations cannot determine whether pessimism causes inflammation, inflammation affects outlook, or shared factors influence both.",
    href: "https://pubmed.ncbi.nlm.nih.gov/20100888/",
  },
  {
    id: "carrillo-2019", year: 2019,
    title: "Effects of the Best Possible Self intervention",
    authors: "Carrillo et al.", journal: "PLOS ONE", kind: "Systematic review + meta-analysis · 29 studies", signal: "Supported",
    pathway: "Practice · future imagery · cognition",
    finding: "Best Possible Self exercises produced small average improvements in measured optimism and wellbeing compared with controls.",
    caution: "Study quality, heterogeneity, and short follow-up constrain conclusions about persistence or health outcomes.",
    href: "https://pubmed.ncbi.nlm.nih.gov/31545815/",
  },
  {
    id: "badulescu-2024", year: 2024,
    title: "GLP-1 agonists and effects on reward behaviour",
    authors: "Badulescu et al.", journal: "Physiology & Behavior", kind: "Systematic review of human studies", signal: "Developing",
    pathway: "GLP-1 · appetite · reward salience",
    finding: "Human studies suggest GLP-1 receptor agonists can influence food-related reward responses, energy intake, and some reward-related behavior in metabolic populations.",
    caution: "The evidence is concentrated on food, obesity, and diabetes—not optimism, pessimism, future belief, or a general motivation treatment.",
    href: "https://pubmed.ncbi.nlm.nih.gov/38945189/",
  },
  {
    id: "li-2025", year: 2025,
    title: "Repurposing GLP-1 receptor agonists for the treatment of depression",
    authors: "Li et al.", journal: "European Neuropsychopharmacology", kind: "Systematic review", signal: "Open question",
    pathway: "GLP-1 · mood · neuroinflammation · plasticity",
    finding: "Preclinical results were more consistently positive than human evidence; only one of three clinical studies reported a statistically significant antidepressant effect.",
    caution: "Depression is not pessimism. These findings do not establish clinical efficacy or a validated target for pessimistic beliefs.",
    href: "https://pubmed.ncbi.nlm.nih.gov/40925272/",
  },
];

export const pathwaySummary = [
  ["01", "Prediction", "The brain simulates possible futures and assigns them personal value.", "Imagining future events"],
  ["02", "Updating", "Good news and bad news can affect our expectations differently.", "Responding to new information"],
  ["03", "Learning", "Experience teaches us which outcomes to expect and which actions to repeat.", "Learning from outcomes"],
  ["04", "Stress", "Research examines how outlook relates to stress responses in the body.", "The body’s response to stress"],
  ["05", "Experience", "Adversity, safety, relationships, and culture tune expectations over time.", "The circumstances we live through"],
  ["06", "Action", "Behavior can reinforce agency or helplessness through real-world feedback.", "What happens when we act"],
];

export const optimismSources = researchSources.filter(source => !["badulescu-2024", "li-2025"].includes(source.id));
export const frontierSources = researchSources.filter(source => ["badulescu-2024", "li-2025"].includes(source.id));
