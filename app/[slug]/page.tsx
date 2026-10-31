import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../site-chrome";

type PageData = { eyebrow: string; title: string; dek: string; tone: string; sections: { title: string; body: string; items?: string[]; links?: { label: string; href: string }[] }[] };

const pages: Record<string, PageData> = {
  "what-optimism-is": {
    "eyebrow": "The mission",
    "title": "An Ozempic for pessimism. What would that mean?",
    "dek": "A reliable way to change a persistently negative outlook. That is the ambition at the center of The Optimism Project.",
    "tone": "coral-page",
    "sections": [
      {
        "title": "The starting idea",
        "body": "Some people find themselves expecting disappointment before anything has happened. An opportunity looks like a mistake waiting to happen; a setback looks permanent. The project starts with a question: can we understand that pattern well enough to develop better ways to change it?"
      },
      {
        "title": "Why the Ozempic comparison",
        "body": "The comparison is about the scale of the ambition. Understanding the biology of appetite opened a path to interventions that change the experience of hunger. We want to ask similarly concrete questions about the mechanisms behind outlook. GLP-1 is one research lead; the answer may involve other biological pathways, learning, or changes in people’s circumstances."
      },
      {
        "title": "What success would look like",
        "body": "We would want to see a lasting improvement in how people assess possibilities and act on them. Someone could recognize a real opportunity, begin a project, or recover from a setback without automatically expecting failure. Better judgment, everyday functioning, and safety would matter as much as a score on an optimism questionnaire."
      },
      {
        "title": "Building the place to pursue it",
        "body": "The Optimism Project aims to bring the subject together: the science of optimism and pessimism, the researchers studying it, practical exercises, new findings, and research worth supporting. The current work is a public evidence library and a proposed research agenda. There is no project treatment or clinical trial available.",
        "links": [
          {
            "label": "Read the research agenda",
            "href": "/research-program"
          },
          {
            "label": "Explore the science",
            "href": "/science-evidence"
          }
        ]
      }
    ]
  },
  "practices-tools": {
    "eyebrow": "Practices & tools",
    "title": "Give your expectations a closer look.",
    "dek": "A few short exercises for examining what you expect and finding a next step you can actually take.",
    "tone": "yellow-page",
    "sections": [
      {
        "title": "Start with one situation",
        "body": "Choose something specific: a conversation you are avoiding, a project you have put off, or a decision that feels stuck. Write down what you expect to happen and why. Keep what you know separate from what you are predicting."
      },
      {
        "title": "The possibility scan",
        "body": "Write three plausible ways the situation could improve. For each one, name something that would need to happen. Choose one action within your control and make it small enough to begin today. The aim is to give yourself more possibilities to evaluate."
      },
      {
        "title": "The balanced forecast",
        "body": "Write the outcome you fear, the one you hope for, and the one you currently think is most likely. Add the evidence for each. Decide what new information would change your estimate. Return to the page after the event and compare your forecast with what happened."
      },
      {
        "title": "What research adds",
        "body": "Studies of a related exercise, Best Possible Self, ask people to imagine a future in which they have worked toward important goals. A 2019 review found small average improvements in measured optimism and wellbeing. The exercises above are informal reflections, not the tested protocol or a treatment.",
        "links": [
          {
            "label": "Read the 2019 review",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31545815/"
          },
          {
            "label": "See the wider evidence",
            "href": "/science-evidence"
          }
        ]
      }
    ]
  },
  "experts": {
    "eyebrow": "People & research",
    "title": "Start with the people asking the questions.",
    "dek": "A reading guide to researchers whose published work informs the project. Listing their work does not imply affiliation or endorsement.",
    "tone": "blue-page",
    "sections": [
      {
        "title": "Tali Sharot and colleagues",
        "body": "Their work examines how people imagine future events and update beliefs when they encounter good or bad news. It is a starting point for understanding why expectations can be resistant to change.",
        "links": [
          {
            "label": "Read the belief-updating study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/21983684/"
          },
          {
            "label": "Read the dopamine study",
            "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3424419/"
          }
        ]
      },
      {
        "title": "Alba Carrillo and colleagues",
        "body": "Their review brings together studies of the Best Possible Self exercise. It helps frame a practical question: how much can outlook change through a repeatable exercise, and how long might that change last?",
        "links": [
          {
            "label": "Read the review of 29 studies",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31545815/"
          }
        ]
      },
      {
        "title": "Sebastian Badulescu and colleagues",
        "body": "Their review examines GLP-1 medicines and reward-related behavior in human studies. It provides context for the project’s interest in the connections between metabolism, motivation, and outlook.",
        "links": [
          {
            "label": "Read the GLP-1 and reward review",
            "href": "https://pubmed.ncbi.nlm.nih.gov/38945189/"
          }
        ]
      },
      {
        "title": "The expertise this will take",
        "body": "Moving from a question to an intervention would require researchers in neuroscience, psychology, psychiatry, endocrinology, and clinical trial design, alongside people with lived experience of persistent pessimism. Establishing those collaborations is part of the work ahead."
      }
    ]
  },
  "news-research": {
    "eyebrow": "Research reading",
    "title": "Follow the questions as the evidence develops.",
    "dek": "Selected papers on beliefs, behavior, and biological change. Publication dates appear with each item so older findings remain in context.",
    "tone": "coral-page",
    "sections": [
      {
        "title": "2025 · GLP-1 medicines and depression",
        "body": "A systematic review examined animal, observational, and clinical research. Human trial findings remained preliminary: only one of three clinical studies reported a statistically significant antidepressant effect. The question for this project is narrower: whether an intervention can change persistent negative expectations.",
        "links": [
          {
            "label": "Read the review",
            "href": "https://pubmed.ncbi.nlm.nih.gov/40925272/"
          }
        ]
      },
      {
        "title": "2024 · Metabolism and reward",
        "body": "A review of human studies examined how GLP-1 medicines affect reward-related behavior, especially responses to food. These results help define what to investigate next; they do not establish an effect on pessimism.",
        "links": [
          {
            "label": "Read the review",
            "href": "https://pubmed.ncbi.nlm.nih.gov/38945189/"
          }
        ]
      },
      {
        "title": "2019 · Can an exercise shift outlook?",
        "body": "A review of 29 studies found small average improvements in optimism and wellbeing after Best Possible Self exercises. The durability and practical importance of those changes remain useful questions for future work.",
        "links": [
          {
            "label": "Read the review",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31545815/"
          }
        ]
      },
      {
        "title": "Explore the full library",
        "body": "The science library connects these findings with work on future imagination, belief updating, stress, and experience. Each entry includes a summary, limitations, and a link to the paper.",
        "links": [
          {
            "label": "Open the science library",
            "href": "/science-evidence"
          }
        ]
      }
    ]
  },
  "community": {
    "eyebrow": "Community",
    "title": "Help decide which questions matter.",
    "dek": "A useful research agenda needs the experience of people who live with the problem, alongside the expertise of people who study it.",
    "tone": "green-page",
    "sections": [
      {
        "title": "What does pessimism feel like?",
        "body": "The project needs better descriptions of the experience it wants to understand. Is it expecting bad outcomes, struggling to imagine a good one, or feeling that your actions will make no difference? Those experiences may call for different questions and different approaches."
      },
      {
        "title": "What would meaningful change be?",
        "body": "Consider what you would notice in ordinary life. Beginning something you have been avoiding? Responding differently to a setback? Seeing a choice where you previously saw none? These are the kinds of outcomes a research program should learn to measure."
      },
      {
        "title": "A community in development",
        "body": "Public discussions and submissions are not open yet. The plan is to create a place for research questions, accounts of lived experience, and discussion of new findings. For now, the mission and research agenda describe the work we want people to help shape.",
        "links": [
          {
            "label": "Read the mission",
            "href": "/what-optimism-is"
          },
          {
            "label": "Explore the research questions",
            "href": "/research-program"
          }
        ]
      }
    ]
  },
  "projects-funding": {
    "eyebrow": "Projects & funding",
    "title": "What we want to make possible.",
    "dek": "An accessible body of knowledge, a focused research agenda, and eventually well-designed studies of ways to change persistent pessimism.",
    "tone": "yellow-page",
    "sections": [
      {
        "title": "Make the science accessible",
        "body": "Build a useful library of studies, explain what each one contributes, and connect findings across fields. Readers should be able to follow a claim back to its source and understand what remains uncertain."
      },
      {
        "title": "Turn the ambition into testable questions",
        "body": "Define which aspects of pessimism to study, identify promising mechanisms, and work out how to measure meaningful change. This is the foundation for deciding whether an intervention is worth testing."
      },
      {
        "title": "Build research collaborations",
        "body": "Future studies would need qualified institutional partners, ethical review, and a clear plan for reporting results. Securing those relationships and resources is part of the proposed program; no project trials are currently underway."
      },
      {
        "title": "Support the next stage",
        "body": "We are not accepting donations yet. The support page describes the work we would seek to fund as the project develops.",
        "links": [
          {
            "label": "Read about supporting the project",
            "href": "/donate"
          },
          {
            "label": "See the research agenda",
            "href": "/research-program"
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "About the project",
    "title": "The science of changing outlook.",
    "dek": "The Optimism Project began with an ambition: find an “Ozempic for pessimism.” Understand the mechanisms behind a persistently negative outlook, then explore how to change them.",
    "tone": "blue-page",
    "sections": [
      {
        "title": "Why this project exists",
        "body": "Expectations shape the choices people consider worth making. We want to understand why the future can feel closed off, what makes that experience persist, and whether better interventions could help. That question is the reason for this project."
      },
      {
        "title": "A home for the subject",
        "body": "The aim is to bring together the causes, benefits, and science of optimism; the researchers working on it; practical tools; new findings; and projects worth pursuing. The website begins that work with a source library and an openly stated research agenda."
      },
      {
        "title": "Where we are today",
        "body": "This is an early initiative. The evidence library is available to read, and the research agenda describes proposed work. There is no project medicine, clinical trial, or treatment service. The Ozempic comparison expresses the ambition; it is not a claim that Ozempic treats pessimism."
      },
      {
        "title": "Contact & participation",
        "body": "Contact submissions and community participation are not open yet. The research and mission pages are the starting point for understanding the project’s direction.",
        "links": [
          {
            "label": "Read the mission",
            "href": "/what-optimism-is"
          },
          {
            "label": "Explore the science",
            "href": "/science-evidence"
          }
        ]
      }
    ]
  }
};

export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = pages[slug]; return page ? { title: page.title } : {};
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = pages[slug]; if (!page) notFound();
  return <><Header/><main className={`inner-page ${page.tone}`}>
    <section className="page-hero"><div className="wrap"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.dek}</p></div></section>
    <section className="wrap content-layout">
      <aside><span>ON THIS PAGE</span>{page.sections.map((s,i)=><a href={`#section-${i+1}`} key={s.title}>{String(i+1).padStart(2,"0")} {s.title}</a>)}</aside>
      <div className="article-sections">{page.sections.map((s,i)=><article id={`section-${i+1}`} key={s.title}><span className="section-number">{String(i+1).padStart(2,"0")}</span><h2>{s.title}</h2><p>{s.body}</p>{s.items && <ul>{s.items.map(x=><li key={x}>{x}</li>)}</ul>}{s.links && <div className="article-source-links">{s.links.map(link=><a href={link.href} key={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}</div>}</article>)}
        <div className="next-card"><p>THE NEXT QUESTION</p><h3>{slug === "about" ? "Read the founding idea." : "What would it take to change pessimism?"}</h3><Link href={slug === "about" ? "/what-optimism-is" : "/research-program"}>Explore <span>→</span></Link></div>
      </div>
    </section>
  </main><Footer/></>;
}
