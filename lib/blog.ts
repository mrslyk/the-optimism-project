export type BlogLink = { label: string; href: string };
export type BlogSource = BlogLink & { id: string; note: string };

export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  author: string;
  published: string;
  readMinutes: number;
  category: "Founder's note" | "Research" | "Practice" | "Field note" | "Guide";
  body: { heading?: string; paragraphs: string[]; sourceIds?: string[] }[];
  sources: BlogSource[];
  related: BlogLink[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "the-different-meanings-of-optimism",
    title: "The different meanings of optimism",
    dek: "A general outlook, a feeling about tomorrow, an explanation for a setback, and a mistaken prediction can all be called optimism. The distinctions matter.",
    author: "The Optimism Project",
    published: "2026-10-31",
    readMinutes: 3,
    category: "Guide",
    body: [
      {
        paragraphs: [
          "Someone can feel discouraged about an interview and still expect life to go well. Someone else can confidently predict success while overlooking clear obstacles. Calling both people optimistic tells us too little. The first question to ask about any optimism claim is what, exactly, is being described or measured.",
        ],
      },
      {
        heading: "An outlook and a moment",
        paragraphs: [
          "Dispositional optimism means a general tendency to expect favorable future outcomes. It is the broad outlook examined in much of the research on coping and health. It does not mean anticipating success in every situation. A person can be broadly optimistic and still expect a difficult week.",
          "State optimism concerns expectations at a particular time. Millstein and colleagues developed a separate measure because outlook can vary with circumstances. A lift after an encouraging conversation is worth noticing; it does not, by itself, show that a person’s enduring outlook has changed. A study needs to specify the time frame it is measuring.",
        ],
        sourceIds: ["carver", "millstein"],
      },
      {
        heading: "The story we tell about a setback",
        paragraphs: [
          "Explanatory style concerns the causes we assign to events. After a rejected application, one explanation might be that the role required experience we have yet to acquire. Another might be that we always fail at everything. These explanations differ in how permanent and widespread they make the setback seem.",
          "This gives us another way to examine optimism: look at the account of what happened, then ask what that account implies about what could happen next. An explanation still needs to fit the facts. Inventing a flattering reason for a rejection is no better investigation than inventing a condemning one.",
        ],
        sourceIds: ["carver"],
      },
      {
        heading: "When a prediction outruns the evidence",
        paragraphs: [
          "Unrealistic optimism is a judgment that is more favorable than an appropriate comparison supports. Researchers may compare a prediction with an objective risk estimate or examine judgments about oneself relative to others. This is distinct from having a generally positive outlook. Measuring confidence alone cannot tell us whether a prediction is accurate.",
        ],
        sourceIds: ["shepperd"],
      },
      {
        heading: "Use the distinction",
        paragraphs: [
          "When reading a study, ask three questions: Did it measure general outlook, current expectations, explanations, or prediction accuracy? What changed, and for how long? Did the change help people do something that mattered to them?",
          "These questions guide The Optimism Project. We want a useful account of optimism that makes room for uncertainty, disappointment, realistic planning, and the possibility of a better future. The vocabulary is a starting point for understanding that possibility more precisely.",
        ],
      },
    ],
    sources: [
      { id: "carver", label: "Carver, Scheier & Segerstrom · Optimism (2010)", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4161121/", note: "Definitions of dispositional optimism and its relationship to explanatory style." },
      { id: "millstein", label: "Millstein et al. · Development of the State Optimism Measure (2019)", href: "https://pubmed.ncbi.nlm.nih.gov/31026732/", note: "Development and initial psychometric evaluation of a measure of current optimistic expectations." },
      { id: "shepperd", label: "Shepperd et al. · A Primer on Unrealistic Optimism (2015)", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4467896/", note: "Distinguishes unrealistic predictions from dispositional optimism and explains comparison standards." },
    ],
    related: [
      { label: "Explore the types of optimism", href: "/types-of-optimism" },
      { label: "How optimism is measured", href: "/measurement" },
      { label: "Turn a possibility into a next step", href: "/blog/from-possibility-to-next-step" },
    ],
  },
  {
    slug: "from-possibility-to-next-step",
    title: "From a better possibility to a useful next step",
    dek: "An everyday reflection for connecting a future you would welcome with one action you can take. Includes the evidence behind the ideas and its limits.",
    author: "The Optimism Project",
    published: "2026-10-31",
    readMinutes: 3,
    category: "Guide",
    body: [
      {
        paragraphs: [
          "A useful reflection can begin with an ordinary wish: reconnecting with a friend, learning a skill, or finding a less rushed way to start the day. Choose something that matters to you and is small enough to examine. You do not need to feel upbeat before putting it on paper.",
          "The prompts below are The Optimism Project’s educational adaptation of ideas from future imagery and goal planning. This exact combination has not been tested as an intervention. Use it to clarify a possibility and an action, without treating completion as a test of character or mental health.",
        ],
      },
      {
        heading: "Picture something specific",
        paragraphs: [
          "Describe one modest improvement in a few sentences. What would you be doing? What would be different about an ordinary afternoon? Keep the scene close enough to life that you can name the people, resources, or conditions it would require.",
          "For example: ‘I would like to have a relaxed conversation with a friend this month.’ That gives you something clearer to work with than ‘my social life should be better.’ It also leaves room for the other person’s availability and choices.",
        ],
      },
      {
        heading: "Give the obstacle a place in the plan",
        paragraphs: [
          "Name one obstacle, then decide what you can influence. Perhaps you keep postponing an invitation because you cannot find the perfect time. A possible next step is to offer two times and let your friend suggest another. Some obstacles need outside support, more resources, or a different goal.",
          "Make the action observable: ‘After lunch tomorrow, I will send the invitation.’ Decide when to revisit it. If the conversation does not happen, record what you learned and whether another attempt makes sense. A plan can be revised without declaring the whole future closed.",
        ],
      },
      {
        heading: "What the research actually tests",
        paragraphs: [
          "Best Possible Self studies ask people to imagine a favorable future after working toward it. A 2019 meta-analysis found small average improvements in measured optimism and wellbeing compared with controls. That supports studying future imagery; it does not establish lasting benefits from this short reflection.",
          "A separate 2021 meta-analysis examined mental contrasting combined with implementation intentions: considering a desired future alongside obstacles and specifying a response. It found a small-to-moderate average effect on goal attainment, with publication bias suggesting the true effect could be smaller. Goal attainment and optimism are different outcomes.",
        ],
        sourceIds: ["carrillo", "wang"],
      },
      {
        heading: "Notice what was useful",
        paragraphs: [
          "At your chosen review point, ask whether the reflection made the next step clearer and whether the action helped. Keep the useful part, change the unhelpful part, or set it aside. The point is to learn what makes a worthwhile possibility easier to pursue in your actual circumstances.",
        ],
      },
    ],
    sources: [
      { id: "carrillo", label: "Carrillo et al. · Best Possible Self meta-analysis (2019)", href: "https://pubmed.ncbi.nlm.nih.gov/31545815/", note: "Research on positive-future imagery, including measured optimism and wellbeing outcomes." },
      { id: "wang", label: "Wang, Wang & Gai · Mental contrasting and goal attainment (2021)", href: "https://pubmed.ncbi.nlm.nih.gov/34054628/", note: "Research on mental contrasting with implementation intentions; the outcome is goal attainment." },
    ],
    related: [
      { label: "Explore the practice library", href: "/practices-tools" },
      { label: "Open the practice workbook", href: "/practice-workbook" },
      { label: "Read about the protocol in development", href: "/blog/developing-the-optimism-protocol" },
    ],
  },
  {
    slug: "developing-the-optimism-protocol",
    title: "How we’re developing the Optimism Protocol",
    dek: "The project brings the whole subject together. Its protocol will turn that knowledge into a clear, testable approach to cultivating optimism.",
    author: "The Optimism Project",
    published: "2026-10-31",
    readMinutes: 3,
    category: "Research",
    body: [
      {
        paragraphs: [
          "The Optimism Project has two connected jobs. The first is to become a definitive resource on optimism: what it is, where it comes from, why it matters, how people cultivate it, and what the science can establish. The second is to develop a protocol that makes that knowledge practical and testable.",
          "The Optimism Protocol is at development draft 0.1. It is an outline for refinement, not a validated intervention or a claim that a particular sequence produces lasting change. Publishing the draft lets readers see the questions and design choices while the work is taking shape.",
        ],
      },
      {
        heading: "Start with the change we want to understand",
        paragraphs: [
          "A useful protocol needs a precise purpose. Our proposed aim is to help people recognize worthwhile possibilities, make grounded plans, and respond more flexibly when circumstances change. A higher optimism score could be informative, but the evaluation should also ask whether people can act, adapt, and judge risks sensibly.",
          "That means distinguishing a temporary change in outlook from a sustained one. It also means choosing measures that match the question. Research on state optimism gives one example of how current expectations can be assessed separately from broader outlook.",
        ],
        sourceIds: ["millstein"],
      },
      {
        heading: "Build from components we can explain",
        paragraphs: [
          "The practical draft brings together understanding one’s expectations, considering a constructive future, examining obstacles, choosing an action, and reviewing what happened. The order, duration, accessibility, and usefulness of those components are design questions. Evidence for an individual exercise does not automatically validate a combined program.",
          "Best Possible Self research offers a reason to investigate future imagery as one candidate component. The next task is to make the proposed experience clear enough that people can assess it: what each step asks, why it is included, and which uncertainty it is intended to address.",
        ],
        sourceIds: ["carrillo"],
      },
      {
        heading: "Test the framework, including its limits",
        paragraphs: [
          "Our development plan is to gather critical feedback, refine the draft, examine feasibility, and design a comparison that can test useful outcomes over time. The MRC framework for complex interventions emphasizes context, stakeholder involvement, uncertainty, and revision throughout development and evaluation. Progress may mean changing or removing a component.",
          "A separate biological frontier asks how neural, physiological, and pharmacological mechanisms relate to expectations. It belongs within the wider science of optimism. It does not supply a medication recommendation or a shortcut around evaluating the practical protocol.",
        ],
        sourceIds: ["skivington"],
      },
      {
        heading: "Keep the work visible",
        paragraphs: [
          "The protocol page will record the current version, its rationale, and the questions still open. As the framework develops, changes should remain traceable to evidence or feedback. The wider atlas remains useful throughout: readers can explore the science and practices without waiting for a finished protocol.",
        ],
      },
    ],
    sources: [
      { id: "millstein", label: "Millstein et al. · Development of the State Optimism Measure (2019)", href: "https://pubmed.ncbi.nlm.nih.gov/31026732/", note: "One example of matching a measure to current, rather than general, expectations." },
      { id: "carrillo", label: "Carrillo et al. · Best Possible Self meta-analysis (2019)", href: "https://pubmed.ncbi.nlm.nih.gov/31545815/", note: "Evidence for a candidate exercise, not for the combined Optimism Protocol." },
      { id: "skivington", label: "Skivington et al. · MRC complex-intervention framework (2021)", href: "https://www.bmj.com/content/374/bmj.n2061", note: "A development and evaluation framework that informs the proposed process; no affiliation or endorsement is implied." },
    ],
    related: [
      { label: "Explore the Optimism Protocol", href: "/protocol" },
      { label: "Read the wider research agenda", href: "/research-program" },
      { label: "Try a reflection and next-step guide", href: "/blog/from-possibility-to-next-step" },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}
