import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../site-chrome";

type PageData = { eyebrow: string; title: string; dek: string; tone: string; next: { label: string; href: string }; sections: { title: string; body: string; items?: string[]; links?: { label: string; href: string }[] }[] };

const pages: Record<string, PageData> = {
  "what-optimism-is": {
    "eyebrow": "Understanding optimism",
    "title": "What is optimism?",
    "dek": "An expectation that good things are possible in the future. A way of interpreting experience. A subject we can study, question, and practice.",
    "tone": "coral-page",
    "sections": [
      {
        "title": "Expectations about the future",
        "body": "In psychology, dispositional optimism means a general tendency to expect favorable outcomes. It describes a pattern across situations. Someone can feel upset today and still believe that things can improve.",
        "links": [
          {
            "label": "Read the research overview",
            "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4161121/"
          }
        ]
      },
      {
        "title": "Different meanings, different questions",
        "body": "Researchers examine optimism from several angles. Keeping those meanings distinct helps us understand what a study actually measured.",
        "items": [
          "Dispositional optimism: general expectations about the future.",
          "Explanatory style: the ways people account for events, including how lasting or widespread a setback seems.",
          "Optimism bias: a prediction that is more favorable than the evidence or a comparison would justify."
        ]
      },
      {
        "title": "Optimism and everyday judgment",
        "body": "You can expect a worthwhile outcome and still plan for difficulties. A useful outlook leaves room for uncertainty, feedback, and a change of course. For example, you might believe a project can succeed while checking the costs and preparing for something to go wrong."
      },
      {
        "title": "Explore the whole subject",
        "body": "Where does optimism come from? What is it associated with? Can people develop it? Those questions lead into research on personality, learning, health, relationships, and practical exercises.",
        "links": [
          {
            "label": "Where optimism comes from",
            "href": "/causes-of-optimism"
          },
          {
            "label": "Explore the benefits",
            "href": "/benefits"
          },
          {
            "label": "Browse practices and tools",
            "href": "/practices-tools"
          }
        ]
      }
    ],
    "next": {
      "label": "Where does optimism come from?",
      "href": "/causes-of-optimism"
    }
  },
  "causes-of-optimism": {
    "eyebrow": "Origins & influences",
    "title": "Where does optimism come from?",
    "dek": "Biology, experience, and the circumstances we live in all belong in the picture. There is no single explanation for how someone comes to see the future.",
    "tone": "green-page",
    "sections": [
      {
        "title": "Temperament and inherited differences",
        "body": "Twin research suggests that inherited differences contribute to variation in optimism. One study of older twins estimated a genetic contribution of 36% in that sample. That estimate describes variation in a population; it does not determine an individual’s future or mean their outlook is fixed.",
        "links": [
          {
            "label": "Read the twin study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/19618259/"
          }
        ]
      },
      {
        "title": "Experience and circumstances",
        "body": "Our expectations develop in a real world of opportunities, constraints, and relationships. Research on childhood adversity and pessimistic interpretations shows why social conditions matter. A difficult outlook cannot always be understood by looking only at the individual.",
        "links": [
          {
            "label": "Read the childhood study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/36997593/"
          }
        ]
      },
      {
        "title": "How we learn from information",
        "body": "Experiments examine how people revise expectations after good or bad news. In some tasks, participants give favorable information more weight. This offers one account of how optimistic beliefs can persist, while leaving open how well a laboratory task describes everyday life.",
        "links": [
          {
            "label": "Read the belief-updating study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/21983684/"
          }
        ]
      },
      {
        "title": "The capacity to change",
        "body": "Outlook can vary over time, and researchers test whether structured exercises can influence it. Studies of Best Possible Self invite people to imagine a future shaped by working toward important goals. Average improvements in optimism have been small, with questions remaining about how long they last.",
        "links": [
          {
            "label": "Read the exercise review",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31545815/"
          },
          {
            "label": "Explore practical exercises",
            "href": "/practices-tools"
          }
        ]
      }
    ],
    "next": {
      "label": "What are the benefits of optimism?",
      "href": "/benefits"
    }
  },
  "benefits": {
    "eyebrow": "Benefits & evidence",
    "title": "Why does optimism matter?",
    "dek": "Explore the connections between optimism, coping, motivation, wellbeing, and health—and what the evidence can tell us about each.",
    "tone": "yellow-page",
    "sections": [
      {
        "title": "Coping and wellbeing",
        "body": "A broad research review links optimism with more active engagement in coping and better reported wellbeing during difficult periods. The useful question is how outlook relates to the choices people make when facing a problem.",
        "links": [
          {
            "label": "Read the review",
            "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4161121/"
          }
        ]
      },
      {
        "title": "Effort and persistence",
        "body": "Expecting that effort can lead somewhere worthwhile is part of the connection between optimism and motivation. Research describes links with pursuing goals and persisting through obstacles. Good judgment also includes recognizing when a goal or approach needs to change.",
        "links": [
          {
            "label": "Read Carver and Scheier on dispositional optimism",
            "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4061570/"
          }
        ]
      },
      {
        "title": "Cardiovascular health",
        "body": "A 2019 review of 15 studies, covering more than 229,000 people, found an association between greater optimism and lower cardiovascular risk. The studies varied considerably. The result does not establish that changing someone’s outlook will prevent heart disease.",
        "links": [
          {
            "label": "Read the systematic review",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31560385/"
          }
        ]
      },
      {
        "title": "Longevity",
        "body": "A study following two groups of older adults found that higher optimism was associated with longer life and a greater likelihood of reaching age 85. It was observational: the association gives researchers a question to investigate, rather than a promise about anyone’s lifespan.",
        "links": [
          {
            "label": "Read the longevity study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31451635/"
          }
        ]
      },
      {
        "title": "What this means in practice",
        "body": "The evidence gives us reasons to take optimism seriously. It also asks us to be precise: association, personal experience, and a demonstrated effect of an intervention are different kinds of evidence. The science library makes those distinctions visible for each paper.",
        "links": [
          {
            "label": "Explore the research library",
            "href": "/science-evidence"
          },
          {
            "label": "Try a reflection exercise",
            "href": "/practices-tools"
          }
        ]
      }
    ],
    "next": {
      "label": "Explore practices for optimism.",
      "href": "/practices-tools"
    }
  },
  "practices-tools": {
    "eyebrow": "Practices & tools",
    "title": "Put optimism into practice.",
    "dek": "Exercises for imagining a future you want, examining your expectations, and choosing a useful next step.",
    "tone": "yellow-page",
    "sections": [
      {
        "title": "Imagine your best possible self",
        "body": "Choose an area of life that matters to you. Spend a few minutes writing about a future in which you have worked toward your goals and things have gone well. Include the effort, choices, and support that helped you get there. This is an introduction to the Best Possible Self approach; research studies use specific schedules and instructions.",
        "links": [
          {
            "label": "Read the review of Best Possible Self",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31545815/"
          }
        ]
      },
      {
        "title": "The possibility scan",
        "body": "Choose one situation that feels stuck. Write three plausible ways it could improve. For each one, identify what would need to happen. Choose one small action within your control. This is an informal reflection you can use to give yourself more possibilities to consider."
      },
      {
        "title": "Check your forecast",
        "body": "Write down what you expect from an upcoming event and the evidence behind that expectation. Add a favorable outcome you consider possible. After the event, return to your notes: what did you predict well, what surprised you, and what would you estimate differently next time?"
      },
      {
        "title": "Turn a possibility into a plan",
        "body": "Choose a goal that matters to you. Name the next step, a likely obstacle, and what you could do if that obstacle appears. Make the step specific enough to act on: send the message, set aside the time, or ask someone for help."
      },
      {
        "title": "Know what the evidence supports",
        "body": "A review of 29 studies found small average improvements in measured optimism and wellbeing from Best Possible Self exercises. Longer-term effects are less clear. The other reflections on this page are prompts for personal use, not tested treatment protocols.",
        "links": [
          {
            "label": "Read the evidence",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31545815/"
          },
          {
            "label": "Explore the science",
            "href": "/science-evidence"
          }
        ]
      }
    ],
    "next": {
      "label": "Meet the researchers behind the ideas.",
      "href": "/experts"
    }
  },
  "experts": {
    "eyebrow": "Experts & thinkers",
    "title": "The people studying optimism.",
    "dek": "A guide to foundational work and current research across psychology, neuroscience, and health. Names are linked to their published work; inclusion does not imply affiliation with this project.",
    "tone": "blue-page",
    "sections": [
      {
        "title": "Charles Carver, Michael Scheier & Suzanne Segerstrom",
        "body": "Their work offers a foundation for understanding optimism as expectations about the future and its relationships with coping, motivation, and health.",
        "links": [
          {
            "label": "Read their overview of optimism",
            "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4161121/"
          },
          {
            "label": "Read about dispositional optimism",
            "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4061570/"
          }
        ]
      },
      {
        "title": "Tali Sharot and colleagues",
        "body": "Research on optimism bias, future imagination, and belief updating examines how people form expectations and respond to new information.",
        "links": [
          {
            "label": "Read the belief-updating study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/21983684/"
          }
        ]
      },
      {
        "title": "Laura Kubzansky, Lewina Lee and colleagues",
        "body": "Studies of optimism and population health investigate connections with longevity and other outcomes. Their work helps separate promising associations from questions that require further testing.",
        "links": [
          {
            "label": "Read the longevity study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31451635/"
          },
          {
            "label": "Read the cardiovascular review",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31560385/"
          }
        ]
      },
      {
        "title": "Alba Carrillo and colleagues",
        "body": "Their review of Best Possible Self studies examines a practical question: can imagining a desired future improve optimism and wellbeing?",
        "links": [
          {
            "label": "Read the review of 29 studies",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31545815/"
          }
        ]
      },
      {
        "title": "Ying Chen and colleagues",
        "body": "Their 2025 study examines changes in optimism and later health and wellbeing in a large group of older adults, extending the question from differences between people to changes over time.",
        "links": [
          {
            "label": "Read the longitudinal study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/39742439/"
          }
        ]
      }
    ],
    "next": {
      "label": "Catch up on optimism research.",
      "href": "/news-research"
    }
  },
  "news-research": {
    "eyebrow": "News & research",
    "title": "Optimism research, explained.",
    "dek": "Recent studies and foundational findings, with publication dates and direct links to the papers.",
    "tone": "coral-page",
    "sections": [
      {
        "title": "February 2026 · Trying optimism exercises in virtual reality",
        "body": "A pilot trial assigned 28 undergraduates with low optimism to a positive cognitive behavioral VR program or a task-based VR comparison. The intervention group improved in measured optimism in the short term. The small sample and similar longer-term trajectories make this an early finding to follow.",
        "links": [
          {
            "label": "Read the pilot study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/41822426/"
          }
        ]
      },
      {
        "title": "April 2025 · When optimism changes in later life",
        "body": "A study of 12,998 older adults linked increases in optimism with several later wellbeing measures and better self-rated health. It did not find associations with specific disease outcomes or health behaviors. The observational design leaves cause and effect unresolved.",
        "links": [
          {
            "label": "Read the study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/39742439/"
          }
        ]
      },
      {
        "title": "2019 · What do optimism exercises achieve?",
        "body": "A review of 29 Best Possible Self studies found small average improvements in optimism and wellbeing. It remains a useful starting point for understanding what a widely studied exercise can offer.",
        "links": [
          {
            "label": "Read the review",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31545815/"
          },
          {
            "label": "Explore the practice guide",
            "href": "/practices-tools"
          }
        ]
      },
      {
        "title": "2019 · The health connection",
        "body": "Two useful starting points: a review of optimism and cardiovascular outcomes, and a study of optimism and longevity. Both concern associations; neither establishes that an optimism exercise will produce the same health outcomes.",
        "links": [
          {
            "label": "Read the cardiovascular review",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31560385/"
          },
          {
            "label": "Read the longevity study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31451635/"
          }
        ]
      },
      {
        "title": "Go deeper into a finding",
        "body": "The science library brings together definitions, origins, brain studies, health research, and interventions. Follow the source links to examine the methods and results for yourself.",
        "links": [
          {
            "label": "Open the research library",
            "href": "/science-evidence"
          }
        ]
      }
    ],
    "next": {
      "label": "Explore the source library.",
      "href": "/science-evidence"
    }
  },
  "community": {
    "eyebrow": "Community",
    "title": "Optimism in everyday life.",
    "dek": "A place for the experiences, questions, and ideas that connect the research to how people live.",
    "tone": "green-page",
    "sections": [
      {
        "title": "What helps you look forward?",
        "body": "A person, a place, a habit, or a project can change what seems possible. The experiences worth sharing include the details: what happened, what you tried, and how your expectations changed."
      },
      {
        "title": "Practices worth comparing",
        "body": "Which exercises are useful in an ordinary week? What makes a practice easy to keep up, and when does it feel unhelpful? These are useful questions to take into a conversation with a friend, a reading group, or your own reflection.",
        "links": [
          {
            "label": "Explore the practices",
            "href": "/practices-tools"
          }
        ]
      },
      {
        "title": "Read and discuss the research",
        "body": "Choose a paper, identify its main finding, and ask what it would mean in a different setting. Who took part? What changed? How long were people followed? A discussion becomes more useful when everyone can inspect the same source.",
        "links": [
          {
            "label": "Find a paper to discuss",
            "href": "/science-evidence"
          }
        ]
      },
      {
        "title": "Building the community",
        "body": "Public discussions and story submissions are not open yet. The aim is to bring together readers, researchers, practitioners, and people curious about optimism. This section will grow around useful conversations and first-hand experiences, with clear consent for anything shared publicly."
      }
    ],
    "next": {
      "label": "Learn more about The Optimism Project.",
      "href": "/about"
    }
  },
  "projects-funding": {
    "eyebrow": "Projects & funding",
    "title": "Build a home for optimism.",
    "dek": "Clear explanations, useful tools, a connected community, and a growing record of what the research tells us.",
    "tone": "yellow-page",
    "sections": [
      {
        "title": "Expand the knowledge library",
        "body": "Develop guides to the origins, benefits, and practice of optimism. Add studies, explain their methods, and keep a direct trail from each claim to its source."
      },
      {
        "title": "Make the knowledge useful",
        "body": "Create practical guides, reading lists, and tools that help people explore the subject. Explain which exercises have been studied and what those studies actually found."
      },
      {
        "title": "Connect people and ideas",
        "body": "Develop the expert directory and community features. Bring different perspectives into the subject, from laboratory research to everyday experience."
      },
      {
        "title": "Explore new research",
        "body": "Follow unanswered questions about how optimism develops and whether it can be strengthened. Biological interventions are one area within that wider agenda.",
        "links": [
          {
            "label": "Explore the research frontiers",
            "href": "/research-program"
          }
        ]
      },
      {
        "title": "Support the work",
        "body": "Donations are not open yet. The support page describes the work future funding could help make available.",
        "links": [
          {
            "label": "About supporting the project",
            "href": "/donate"
          }
        ]
      }
    ],
    "next": {
      "label": "Explore the project’s purpose.",
      "href": "/about"
    }
  },
  "about": {
    "eyebrow": "About the project",
    "title": "A home for everything optimism.",
    "dek": "The Optimism Project brings together the science, benefits, practices, people, and ideas that help us understand optimism.",
    "tone": "blue-page",
    "sections": [
      {
        "title": "The whole subject, in one place",
        "body": "Start with what optimism means. Explore where it comes from and why it matters. Read the research, try a practice, find a thinker, or follow a new question. The project is built to make those paths easier to find and connect."
      },
      {
        "title": "Knowledge you can follow to its source",
        "body": "Research summaries link to published papers. We distinguish evidence from interpretation and describe the limits alongside the findings. Educational pages aim to make the subject understandable without flattening its complexity."
      },
      {
        "title": "Room for ambitious questions",
        "body": "Can optimism be learned? What makes a change last? Could new biological approaches eventually help? Those questions belong alongside established research and practical tools. The proposed search for an “Ozempic for pessimism” is one research idea within this broader project.",
        "links": [
          {
            "label": "Explore the research frontiers",
            "href": "/research-program"
          }
        ]
      },
      {
        "title": "What is available now",
        "body": "The guides, source library, practice pages, and researcher reading guide are available to explore. Community submissions, contact submissions, and donations are not open yet.",
        "links": [
          {
            "label": "Start with optimism",
            "href": "/what-optimism-is"
          },
          {
            "label": "Browse the science",
            "href": "/science-evidence"
          },
          {
            "label": "See projects and funding",
            "href": "/projects-funding"
          }
        ]
      }
    ],
    "next": {
      "label": "Start exploring optimism.",
      "href": "/what-optimism-is"
    }
  }
};

export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = pages[slug]; return page ? { title: page.title, description: page.dek } : {};
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = pages[slug]; if (!page) notFound();
  return <><Header/><main className={`inner-page ${page.tone}`}>
    <section className="page-hero"><div className="wrap"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.dek}</p></div></section>
    <section className="wrap content-layout">
      <aside><span>ON THIS PAGE</span>{page.sections.map((s,i)=><a href={`#section-${i+1}`} key={s.title}>{String(i+1).padStart(2,"0")} {s.title}</a>)}</aside>
      <div className="article-sections">{page.sections.map((s,i)=><article id={`section-${i+1}`} key={s.title}><span className="section-number">{String(i+1).padStart(2,"0")}</span><h2>{s.title}</h2><p>{s.body}</p>{s.items && <ul>{s.items.map(x=><li key={x}>{x}</li>)}</ul>}{s.links && <div className="article-source-links">{s.links.map(link=><a href={link.href} key={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}</div>}</article>)}
        <div className="next-card"><p>KEEP EXPLORING</p><h3>{page.next.label}</h3><Link href={page.next.href}>Explore <span>→</span></Link></div>
      </div>
    </section>
  </main><Footer/></>;
}
