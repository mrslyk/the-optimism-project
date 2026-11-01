import type { ResearchSource } from "./research";

export const mindBodyResearch: ResearchSource[] = [
  {
    id: "karhu-2025", year: 2025,
    title: "Dispositional optimism and pessimism in relation to physical activity and fitness in adulthood – a 15-year follow-up study",
    authors: "Karhu, Veijola, Leinonen, Niemelä, Tammelin & Hintsanen",
    journal: "Psychology & Health", kind: "Longitudinal cohort · n=7,146", signal: "Developing",
    pathway: "Mind & body · activity · pessimism",
    finding: "In a Finnish cohort followed from age 31 to 46, favorable expectations predicted more later leisure activity, and greater activity predicted lower pessimism. Some associations also involved measured activity or muscular fitness.",
    caution: "Observational follow-up cannot establish cause and effect. The results differ across measures and do not establish that completing a fitness game changes optimism.",
    href: "https://pubmed.ncbi.nlm.nih.gov/41251297/",
  },
  {
    id: "miller-2016", year: 2016,
    title: "Walking facilitates positive affect (even when expecting the opposite)",
    authors: "Miller & Krizan", journal: "Emotion", kind: "Three behavioral experiments", signal: "Developing",
    pathway: "Mind & body · movement · positive emotion",
    finding: "Walking increased positive emotion in three experiments, including when participants expected the experience to worsen their mood.",
    caution: "The outcome was immediate positive emotion, not enduring optimism. These experiments do not establish the effects of a Cadoo challenge or a combined game curriculum.",
    href: "https://pubmed.ncbi.nlm.nih.gov/27100368/",
  },
  {
    id: "hernandez-2020", year: 2020,
    title: "The Association of Optimism with Sleep Duration and Quality: Findings from the Coronary Artery Risk and Development in Young Adults (CARDIA) Study",
    authors: "Hernandez et al.", journal: "Behavioral Medicine", kind: "Observational cohort · n=3,548 · five-year follow-up", signal: "Developing",
    pathway: "Mind & body · sleep · recovery",
    finding: "Greater optimism was associated with better reported sleep, including persistently good sleep over five years. In a subset, it was not associated with objectively recorded sleep.",
    caution: "Published online in 2019 and in the 2020 journal issue. Associations depend on the measure and do not show that changing sleep causes optimism or that sleep quality reflects personal effort.",
    href: "https://pubmed.ncbi.nlm.nih.gov/31339814/",
  },
];

// Product direction, not an enabled integration or a new set of payment terms.
export const cadooConnection = {
  status: "Planned connection — not active",
  model: "Existing Slyk Naval/Decalog reward and payment model",
  trigger: "Cadoo confirms completion of the linked game",
  result: "The corresponding reward is credited in the Optimism game",
  steps: [
    { title: "Learn an idea", body: "Explore a sourced meme and a challenge that makes it useful." },
    { title: "Put it into practice", body: "Complete the linked Cadoo game, with a goal suited to your ability and circumstances." },
    { title: "Confirm completion", body: "Cadoo confirms that the game's completion requirements were met." },
    { title: "Earn in Optimism", body: "That confirmation triggers the corresponding Optimism reward under the existing Slyk model." },
  ],
  deferred: "Account linking, eligible games, completion verification, and the reward connection will be designed later. No Cadoo activity currently earns an Optimism reward.",
};
