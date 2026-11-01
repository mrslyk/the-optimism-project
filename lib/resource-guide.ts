export type ResourceKind = "Book" | "Research hub" | "Data source";

export type OptimismResource = {
  id: string;
  title: string;
  authorOrOrganization: string;
  year?: number;
  kind: ResourceKind;
  focus: string;
  whyRead: string;
  limitation: string;
  href: string;
};

// Destination pages checked on this date. A site's retrieval date is not the
// observation year of its data or the publication date of its research.
export const resourceGuideReviewed = "2026-10-31";

export const resources: OptimismResource[] = [
  {
    id: "rational-optimist",
    title: "The Rational Optimist: How Prosperity Evolves",
    authorOrOrganization: "Matt Ridley",
    year: 2010,
    kind: "Book",
    focus: "Exchange, specialization, trust, and human progress",
    whyRead: "A central reference for the project’s exploration of rational optimism. Ridley argues that exchange and the combination of human capabilities help explain rising prosperity. It offers a strong starting point for a cooperative game about building a better future.",
    limitation: "An argument about societal progress, with historical examples and contestable predictions. It is not a psychological intervention study, and its forecasts should be checked against present evidence.",
    href: "https://www.mattridley.co.uk/books/the-rational-optimist-how-prosperity-evolves/",
  },
  {
    id: "how-innovation-works",
    title: "How Innovation Works: And Why It Flourishes in Freedom",
    authorOrOrganization: "Matt Ridley",
    year: 2020,
    kind: "Book",
    focus: "Experimentation, collaboration, and useful innovation",
    whyRead: "Ridley’s companion account of innovation emphasizes incremental change, trial and error, and turning inventions into affordable uses. It suggests game mechanics built around combining knowledge, testing ideas, and learning from failure.",
    limitation: "A historical interpretation built from selected cases. It does not establish a universal formula for innovation or prove that an innovation game improves optimism.",
    href: "https://www.mattridley.co.uk/books/how-innovation-works/",
  },
  {
    id: "learned-optimism",
    title: "Learned Optimism",
    authorOrOrganization: "Martin E. P. Seligman",
    year: 1991,
    kind: "Book",
    focus: "Explanatory style and responses to setbacks",
    whyRead: "An influential introduction to the psychological side of optimism: how people explain events and how those explanations can be examined. Read it alongside current research on definitions, measurement, and cultivation.",
    limitation: "A general-audience book with an older research base. The claims and exercises require their own evidence assessment; reading it does not validate the Optimism Protocol.",
    href: "https://www.authentichappiness.sas.upenn.edu/resources/learned-optimism-martin-e-p-seligman",
  },
  {
    id: "factfulness",
    title: "Factfulness",
    authorOrOrganization: "Hans Rosling, Ola Rosling & Anna Rosling Rönnlund",
    year: 2018,
    kind: "Book",
    focus: "Worldview, proportions, trends, and evidence",
    whyRead: "A practical companion for examining assumptions about the world. Gapminder provides detailed supporting notes and a corrections page, making the book useful for learning how to check a persuasive claim rather than merely repeat it.",
    limitation: "Its figures describe particular periods and populations. Consult the underlying sources and current data; an improving average does not establish that every person or place is improving.",
    href: "https://www.gapminder.org/factfulness-book/",
  },
  {
    id: "penn-positive-psychology",
    title: "Penn: positive psychology publications",
    authorOrOrganization: "University of Pennsylvania · Authentic Happiness",
    kind: "Research hub",
    focus: "Optimism, wellbeing, resilience, and related constructs",
    whyRead: "Follow scholarly publications connected with Penn’s positive psychology work. This provides a route from familiar ideas and popular books to the research papers behind them.",
    limitation: "The hub covers a broader field than optimism. A listing is not an endorsement of every application; inspect each paper’s participants, design, outcomes, and publication date.",
    href: "https://www.authentichappiness.sas.upenn.edu/resources?field_resources_category_tid_1=135&sort_by=created&sort_order=DESC",
  },
  {
    id: "affective-brain-lab",
    title: "Affective Brain Lab publications",
    authorOrOrganization: "Tali Sharot and the Affective Brain Lab",
    kind: "Research hub",
    focus: "Belief updating, emotion, information, and decision-making",
    whyRead: "Read the lab’s own publication list to follow work relevant to optimism bias and how expectations change. Paper links let readers move beyond descriptions of a single brain region or an ‘optimism chemical.’",
    limitation: "A laboratory task measures a particular process. Results about prediction or belief updating do not automatically describe enduring outlook or establish a treatment.",
    href: "https://affectivebrain.com/?page_id=1981",
  },
  {
    id: "harvard-health-happiness",
    title: "Health and happiness: current publications",
    authorOrOrganization: "Harvard T.H. Chan School of Public Health · Lee Kum Sheung Center",
    kind: "Research hub",
    focus: "Optimism, health, social connection, and wellbeing",
    whyRead: "A maintained publication list organized by topic and year, including a 2026 optimism section. It is a useful starting point for following new work on outlook and health rather than relying on one widely shared older study.",
    limitation: "Entries include different study designs and publication types. An association between optimism and health does not establish that increasing optimism causes that health outcome.",
    href: "https://hsph.harvard.edu/research/health-happiness/publications/",
  },
  {
    id: "pubmed",
    title: "PubMed literature search",
    authorOrOrganization: "U.S. National Library of Medicine",
    kind: "Research hub",
    focus: "Finding original studies and reviews",
    whyRead: "Search for optimism with a specific question, such as measurement, intervention, or longitudinal change. Use publication-date filters to follow new papers, then inspect abstracts and available full-text links.",
    limitation: "PubMed is a literature index, not a quality rating or a guarantee of free full text. Search results can include papers whose use of ‘optimism’ is unrelated to psychological outlook.",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    id: "our-world-in-data",
    title: "Our World in Data",
    authorOrOrganization: "Our World in Data",
    kind: "Data source",
    focus: "Long-run changes in health, poverty, education, and the environment",
    whyRead: "Explore charts with source trails and downloadable data. Compare a claim about progress with a longer time series, inspect differences between countries, and look for setbacks as well as improvements.",
    limitation: "Many datasets are compiled from other organizations. Follow the original source, units, definitions, and observation years; a recent chart update can contain older underlying observations.",
    href: "https://ourworldindata.org/",
  },
  {
    id: "gapminder-data",
    title: "Gapminder data and documentation",
    authorOrOrganization: "Gapminder Foundation",
    kind: "Data source",
    focus: "Comparing countries and checking assumptions about development",
    whyRead: "Download individual indicators and follow their documentation. Gapminder connects visual comparisons with data sources, making it useful for building questions where players first predict a trend and then examine the evidence.",
    limitation: "Indicators have different sources and update schedules, and some series contain estimates. Check the documentation and credit the originating provider as well as Gapminder.",
    href: "https://www.gapminder.org/data/",
  },
  {
    id: "world-bank-data",
    title: "World Bank Open Data",
    authorOrOrganization: "World Bank",
    kind: "Data source",
    focus: "Development indicators across economies and time",
    whyRead: "Use the official portal to examine measures such as income, education, poverty, and access to services. Country and indicator views help test broad claims against a defined place, measure, and period.",
    limitation: "Coverage and observation years differ across indicators and countries. National averages can conceal distributional differences; revisions can also change past estimates.",
    href: "https://data.worldbank.org/",
  },
  {
    id: "who-health-observatory",
    title: "Global Health Observatory",
    authorOrOrganization: "World Health Organization",
    kind: "Data source",
    focus: "Health indicators, trends, and inequalities",
    whyRead: "An official starting point for investigating claims about health progress. Follow indicator definitions and country data when exploring topics such as mortality, disease burden, or access to care.",
    limitation: "Some figures are modelled estimates, and reporting completeness varies. Health progress is not a direct measure of optimism, nor proof that outlook caused the change.",
    href: "https://www.who.int/data/gho",
  },
  {
    id: "oecd-wellbeing",
    title: "OECD Well-being Data Monitor",
    authorOrOrganization: "Organisation for Economic Co-operation and Development",
    kind: "Data source",
    focus: "Living conditions, inequalities, and resources for future wellbeing",
    whyRead: "Compare wellbeing across multiple dimensions rather than treating economic growth as the entire story. Its dashboards show differences between groups and distinguish current outcomes from resources that sustain future wellbeing.",
    limitation: "Coverage emphasizes OECD and partner countries. Indicator dates, definitions, and composite-index assumptions vary; a single rank cannot capture every aspect of a good life.",
    href: "https://www.oecd.org/en/data/tools/well-being-data-monitor.html",
  },
];

export type RationalOptimistNote = {
  thesis: string;
  gameIdeas: { title: string; idea: string; challenge: string }[];
  limits: string;
  sources: { label: string; href: string }[];
};

export const rationalOptimistNote: RationalOptimistNote = {
  thesis: "Matt Ridley’s The Rational Optimist argues that people expand what they can achieve through exchange, specialization, trust, and the combination of knowledge. That makes it a rich reference for an original game about creating progress together. The game can let players test these ideas, while the wider project studies optimism as a psychological capacity.",
  gameIdeas: [
    {
      title: "Build through exchange",
      idea: "Give players different capabilities and resources. Let them negotiate exchanges and combine contributions to improve a shared settlement, earning credit for useful cooperation.",
      challenge: "Show who benefits, who is excluded, and what happens when trust fails. The simulation should allow unsuccessful exchanges as well as gains.",
    },
    {
      title: "Combine and experiment",
      idea: "Let discoveries unlock new possibilities when combined with another player’s knowledge. Experiments spend limited resources and can reveal a useful method, a dead end, or a question worth testing next.",
      challenge: "Reward a well-documented failed experiment as learning. Make the rules visible so success is not confused with proof that the real-world idea will work.",
    },
    {
      title: "Predict, inspect, revise",
      idea: "Ask players to predict a real trend before revealing a sourced chart. Award progress for explaining the evidence and revising a prediction when warranted.",
      challenge: "Include improving, worsening, and mixed trends. Reward accuracy and justified revision, not the most cheerful answer.",
    },
    {
      title: "Make progress count for more people",
      idea: "Let teams choose how to improve health, access, time, and opportunity within a shared budget. Show several outcomes so players can compare what their choices achieve.",
      challenge: "Keep distribution, environmental costs, and future resilience visible. Different priorities should produce real trade-offs instead of one automatic route to maximum points.",
    },
  ],
  limits: "These are original design proposals inspired by ideas in the books, not an official Ridley adaptation or an established optimism intervention. A simulation demonstrates the consequences of its rules; psychological benefits require separate evaluation. The proposed game uses the existing Slyk Naval/Decalog launch model; this reading guide defines its subject matter, not new reward terms.",
  sources: [
    { label: "The Rational Optimist · official book page", href: "https://www.mattridley.co.uk/books/the-rational-optimist-how-prosperity-evolves/" },
    { label: "How Innovation Works · official book page", href: "https://www.mattridley.co.uk/books/how-innovation-works/" },
    { label: "Matt Ridley’s writing · author commentary and developments", href: "https://www.mattridley.co.uk/blog/" },
    { label: "Gapminder · evidence and detailed notes for Factfulness", href: "https://www.gapminder.org/factfulness-book/notes/" },
    { label: "OECD · dimensions of wellbeing and their measurement", href: "https://www.oecd.org/en/data/tools/well-being-data-monitor.html" },
  ],
};
