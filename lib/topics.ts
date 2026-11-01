export type PageData = { eyebrow: string; title: string; dek: string; tone: string; next: { label: string; href: string }; sections: { title: string; body: string; items?: string[]; links?: { label: string; href: string }[] }[] };

export const pages: Record<string, PageData> = {
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
        ],
        "links": [
          {
            "label": "Explore the different forms",
            "href": "/types-of-optimism"
          },
          {
            "label": "How optimism is measured",
            "href": "/measurement"
          }
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
        "title": "Make a plan you can return to",
        "body": "The interactive workbook guides you through an expectation, the evidence around it, a plausible possibility, an obstacle, and a next step. Save privately in this browser or download your reflection.",
        "links": [
          {
            "label": "Open the workbook",
            "href": "/practice-workbook"
          }
        ]
      },
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
      },
      {
        "title": "How these practices connect to the protocol",
        "body": "The new protocol will examine which components belong together, for whom, and in what sequence. The public development draft shows the candidate practices and how we propose to evaluate them.",
        "links": [
          {
            "label": "Read development draft 0.2",
            "href": "/protocol"
          }
        ]
      }
    ],
    "next": {
      "label": "Meet the researchers behind the ideas.",
      "href": "/experts"
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
        "title": "Contribute a question or idea",
        "body": "Suggest a discussion topic, a useful practice, or a source that deserves attention. Contributions go privately to the project for review. This is not a public forum, and nothing is published automatically.",
        "links": [
          {
            "label": "Send a contribution",
            "href": "/contact"
          },
          {
            "label": "Get project updates",
            "href": "/contact"
          }
        ]
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
        "title": "Contribute to the next stage",
        "body": "Contribute research expertise, suggest sources, help test the clarity of materials, or start a conversation about funding. The support page explains these routes.",
        "links": [
          {
            "label": "Support the project",
            "href": "/donate"
          },
          {
            "label": "Discuss a contribution",
            "href": "/contact"
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
        "title": "Develop the Optimism Protocol",
        "body": "The project combines an accessible body of knowledge with a new program of development. We want to turn evidence about cultivating optimism into a defined, testable protocol. Practical training and biological research are distinct tracks within that effort.",
        "links": [
          {
            "label": "Read the development draft",
            "href": "/protocol"
          }
        ]
      },
      {
        "title": "Explore, practice, or contribute",
        "body": "Read the guides and research library, save a reading list, use the private workbook, or follow the developing protocol. You can suggest a source, report a correction, or offer expertise through the contribution form.",
        "links": [
          {
            "label": "Explore the full site",
            "href": "/explore"
          },
          {
            "label": "The Optimism Protocol",
            "href": "/protocol"
          },
          {
            "label": "Contact & contribute",
            "href": "/contact"
          }
        ]
      }
    ],
    "next": {
      "label": "Start exploring optimism.",
      "href": "/what-optimism-is"
    }
  },
  "types-of-optimism": {
    "eyebrow": "Forms of optimism",
    "title": "One word. Several useful distinctions.",
    "dek": "Understand what researchers mean by trait optimism, current outlook, explanatory style, and optimism bias.",
    "tone": "blue-page",
    "sections": [
      {
        "title": "Trait optimism",
        "body": "Dispositional optimism describes generalized expectations about future outcomes. It is usually assessed across several questions and situations. A trait can show stability without being fixed for life.",
        "links": [
          {
            "label": "LOT-R research",
            "href": "https://www.cmu.edu/dietrich/psychology/pdf/scales/LOTR_article.pdf"
          }
        ]
      },
      {
        "title": "State optimism",
        "body": "State optimism concerns expectations at a particular time. Someone may feel more hopeful about the coming week after a useful conversation while their broader outlook changes more gradually. State and trait measures answer different questions.",
        "links": [
          {
            "label": "State Optimism Measure",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31026732/"
          }
        ]
      },
      {
        "title": "Explanatory style",
        "body": "This concerns the causes people assign to events. Do you see a setback as lasting or temporary, specific to one situation or relevant across your life? Researchers also examine internal and external explanations. These dimensions concern interpretation; they are not the same thing as a general expectation of good outcomes.",
        "links": [
          {
            "label": "Attributional Style Questionnaire",
            "href": "https://doi.org/10.1007/BF01173577"
          }
        ]
      },
      {
        "title": "Optimism bias",
        "body": "A favorable prediction becomes an unrealistic one only in relation to a relevant benchmark. Absolute bias concerns an expectation compared with evidence about the outcome. Comparative bias concerns an unjustifiably favorable comparison with others. A positive expectation alone does not establish either.",
        "links": [
          {
            "label": "A primer on unrealistic optimism",
            "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4467896/"
          }
        ]
      },
      {
        "title": "Related ideas",
        "body": "Hope, confidence, happiness, and optimism overlap in everyday language. Here, optimism refers primarily to expectations. Confidence can concern an ability; happiness can describe a present feeling. When reading a study, use the authors’ definition and measure rather than assuming these terms are interchangeable.",
        "links": [
          {
            "label": "How optimism is measured",
            "href": "/measurement"
          }
        ]
      }
    ],
    "next": {
      "label": "See how researchers measure optimism.",
      "href": "/measurement"
    }
  },
  "measurement": {
    "eyebrow": "Measurement",
    "title": "How do we study an outlook?",
    "dek": "Questionnaires, experiments, and everyday outcomes offer different views of optimism. The measure should fit the question.",
    "tone": "blue-page",
    "sections": [
      {
        "title": "General expectations: LOT-R",
        "body": "The Life Orientation Test–Revised is a widely used measure of dispositional optimism. It has ten items, including six scored items and four fillers. Research scores are not a diagnosis or a prediction of an individual’s future.",
        "links": [
          {
            "label": "Instrument documentation",
            "href": "https://www.cmu.edu/common-cold-project/measures-by-study/psychological-and-social-constructs/personality-measures/optimism.html"
          }
        ]
      },
      {
        "title": "Current expectations: state measures",
        "body": "The seven-item State Optimism Measure was developed to assess current outlook in several samples. Initial reliability findings were encouraging; suitability still depends on the population and research question.",
        "links": [
          {
            "label": "Read the validation study",
            "href": "https://pubmed.ncbi.nlm.nih.gov/31026732/"
          }
        ]
      },
      {
        "title": "Explanations and experimental tasks",
        "body": "Attributional questionnaires examine how people explain events. Belief-updating tasks examine responses to new information. Neither is automatically interchangeable with a general optimism score.",
        "links": [
          {
            "label": "Attributional Style Questionnaire",
            "href": "https://doi.org/10.1007/BF01173577"
          },
          {
            "label": "Belief-updating experiment",
            "href": "https://pubmed.ncbi.nlm.nih.gov/21983684/"
          }
        ]
      },
      {
        "title": "Measure what matters beyond a score",
        "body": "A developing program should consider lasting change, follow-through, everyday functioning, judgment, and unwanted effects. Improving an immediate questionnaire result would not by itself demonstrate a health benefit.",
        "links": [
          {
            "label": "Experiments on induced optimism",
            "href": "https://pubmed.ncbi.nlm.nih.gov/37378047/"
          },
          {
            "label": "Proposed protocol measures",
            "href": "/protocol#measures"
          }
        ]
      },
      {
        "title": "A personal reflection is different",
        "body": "The workbook helps you describe an expectation and decide what to do next. It deliberately produces no personality label, clinical interpretation, or invented optimism score.",
        "links": [
          {
            "label": "Open the private workbook",
            "href": "/practice-workbook"
          }
        ]
      }
    ],
    "next": {
      "label": "Read the protocol development draft.",
      "href": "/protocol"
    }
  },
  "editorial-standards": {
    "eyebrow": "Evidence & editorial method",
    "title": "Know where a claim comes from.",
    "dek": "A transparent source trail, clear distinctions between kinds of evidence, and a route to correct the record.",
    "tone": "blue-page",
    "sections": [
      {
        "title": "Start with the original work",
        "body": "Research entries identify a paper, its authors, publication year, method, finding, and important limits. Where possible, links lead to an original paper or its indexed abstract. A source’s age is visible; an older paper is not presented as breaking news."
      },
      {
        "title": "Separate association from intervention",
        "body": "An observational study can identify a relationship. A controlled intervention asks whether a specific change affects an outcome under particular conditions. A review combines evidence across studies, but inherits their limitations. These designs should not be treated as equivalent."
      },
      {
        "title": "Keep adjacent findings in context",
        "body": "Reward, mood, motivation, optimism, and pessimism are related research subjects. A result about one does not automatically establish an effect on another. Biological hypotheses are presented in the research area with those boundaries visible."
      },
      {
        "title": "Be clear about authorship and status",
        "body": "Project guides are editorial explanations. Listed researchers are cited for their work and are not presented as members or endorsers. The Optimism Protocol has a versioned development draft; it is not described as a registered study or a validated treatment."
      },
      {
        "title": "Correct and improve the resource",
        "body": "Send the page URL, the passage you think needs attention, and supporting evidence. Corrections and source suggestions are reviewed before publication. Publication dates and protocol versions make substantive changes traceable.",
        "links": [
          {
            "label": "Suggest a correction",
            "href": "/contact"
          },
          {
            "label": "Browse sources",
            "href": "/science-evidence"
          }
        ]
      }
    ],
    "next": {
      "label": "Explore the evidence for yourself.",
      "href": "/science-evidence"
    }
  },
  "privacy": {
    "eyebrow": "Privacy & data",
    "title": "Choose what you share.",
    "dek": "How the site handles reading lists, personal reflections, and contributions.",
    "tone": "blue-page",
    "sections": [
      {
        "title": "Reading lists and the workbook",
        "body": "Saved source IDs and reflections are stored in this browser’s local storage only when you use the relevant save control. They are not sent to the project. Browser profiles may be shared, so avoid saving private writing on a shared device. The workbook provides controls to remove the saved copy and download your own file."
      },
      {
        "title": "Contact and update requests",
        "body": "The contact form sends the fields you enter and your consent choice to Netlify Forms, which stores submissions for the project. Update requests store your email address and permission to receive project news. These submissions are private to project administrators; they are not automatically published. There is currently no fixed mailing schedule.",
        "links": [
          {
            "label": "Netlify privacy information",
            "href": "https://www.netlify.com/privacy/"
          }
        ]
      },
      {
        "title": "What to keep out of a submission",
        "body": "Use general questions and public research links. Do not send medical records, sensitive personal histories, or private information about another person. The public workbook is available for reflections you prefer to keep on your device."
      },
      {
        "title": "Removal and updates",
        "body": "To withdraw an update request or ask about a submission, use the contact form and select “Privacy or removal request.” Include the email address used for the original request. Submissions remain in the project’s form dashboard until removed; there is no automatic deletion schedule currently configured.",
        "links": [
          {
            "label": "Make a privacy request",
            "href": "/contact"
          }
        ]
      },
      {
        "title": "Hosting and external links",
        "body": "Netlify serves the website and processes form requests; hosting providers may process request information for delivery and abuse prevention. The site adds no advertising trackers or third-party analytics scripts. External research and payment links follow the policies of their destination."
      }
    ],
    "next": {
      "label": "Return to the project.",
      "href": "/about"
    }
  },
  "glossary": {
    "eyebrow": "Glossary",
    "title": "The language of optimism research.",
    "dek": "A concise reference for terms used across the guides and source library.",
    "tone": "blue-page",
    "sections": [
      {
        "title": "Dispositional optimism",
        "body": "General expectations that future outcomes will be favorable. Often called trait optimism."
      },
      {
        "title": "State optimism",
        "body": "Expectations at a particular time, rather than an overall tendency across situations."
      },
      {
        "title": "Explanatory style",
        "body": "Patterns in how a person explains events, including whether causes seem lasting or temporary and specific or widespread."
      },
      {
        "title": "Optimism bias",
        "body": "An expectation that is more favorable than a relevant evidence-based or comparative benchmark warrants."
      },
      {
        "title": "Best Possible Self",
        "body": "A family of structured exercises in which people imagine a desired future shaped by working toward important goals."
      },
      {
        "title": "Mental contrasting and if–then planning",
        "body": "Considering a desired outcome alongside an obstacle, then linking a situation to a specific intended action. Research here concerns goal pursuit, which is distinct from optimism."
      },
      {
        "title": "Association and causation",
        "body": "An association means variables vary together. Causation means a change in one produces a change in another; establishing it requires additional evidence."
      },
      {
        "title": "Randomized trial",
        "body": "A study that assigns participants to conditions by chance to help compare an intervention with an alternative."
      },
      {
        "title": "Meta-analysis",
        "body": "A statistical synthesis of results across studies. Its interpretation depends on the included methods, populations, biases, and variation."
      },
      {
        "title": "Feasibility and effectiveness",
        "body": "Feasibility asks whether a program and its evaluation can be carried out. Effectiveness asks whether it achieves useful outcomes."
      },
      {
        "title": "Preregistration",
        "body": "Recording a study’s questions, methods, outcomes, and analysis plan before observing its results."
      },
      {
        "title": "Protocol",
        "body": "A specified plan for an intervention or study. A development draft sets out proposals; validation requires evidence from an appropriate evaluation.",
        "links": [
          {
            "label": "Measurement guide",
            "href": "/measurement"
          },
          {
            "label": "Editorial method",
            "href": "/editorial-standards"
          }
        ]
      }
    ],
    "next": {
      "label": "Explore the different forms of optimism.",
      "href": "/types-of-optimism"
    }
  },
  "pessimism": {
  "eyebrow": "Pessimism & negative expectations",
  "title": "Understanding pessimism.",
  "dek": "Why we anticipate unfavorable outcomes, how those expectations differ from optimism, and when caution helps us prepare.",
  "tone": "blue-page",
  "sections": [
    {
      "title": "Two questions, not always one slider",
      "body": "Optimism concerns favorable expectations; pessimism concerns unfavorable ones. Researchers often combine them in one measure, but large studies also support examining the two separately. A reanalysis of 61 samples found different associations with physical-health outcomes. The distinction depends on the measure and question; it does not divide people into two fixed types.",
      "links": [
        {
          "label": "Measurement study",
          "href": "/science-evidence#herzberg-2006"
        },
        {
          "label": "61-sample reanalysis",
          "href": "/science-evidence#scheier-2021"
        }
      ]
    },
    {
      "title": "An outlook develops in a real situation",
      "body": "Expectations are shaped by experience, learning, temperament, and circumstances. Repeated setbacks, unreliable support, or a genuinely difficult environment can make unfavorable outcomes seem likely. Understanding the context is part of understanding the expectation; a cautious forecast is not automatically a thinking error.",
      "links": [
        {
          "label": "Origins and influences",
          "href": "/causes-of-optimism"
        },
        {
          "label": "Definitions and forms",
          "href": "/types-of-optimism"
        }
      ]
    },
    {
      "title": "How explanations can spread a setback",
      "body": "Explanatory-style research asks whether people describe a bad event as lasting or temporary, widespread or specific, and related to themselves or circumstances. A conclusion such as “this will always happen everywhere” reaches further than a description of one event. Theory and prospective studies motivate examining that leap; they do not prove that a new slogan changes someone’s life.",
      "links": [
        {
          "label": "Foundational explanatory-style paper",
          "href": "/science-evidence#abramson-1978"
        },
        {
          "label": "Prospective cognitive-style study",
          "href": "/science-evidence#alloy-2006"
        }
      ]
    },
    {
      "title": "Helplessness and the experience of control",
      "body": "The original learned-helplessness account has changed with later neuroscience. A major 2016 synthesis emphasizes learning that a stressor can be controlled. Human laboratory research also finds effects of controllability on later fear responses. These findings concern particular tasks and mechanisms, not a claim that every situation can be controlled through belief.",
      "links": [
        {
          "label": "Learned helplessness at fifty",
          "href": "/science-evidence#maier-2016"
        },
        {
          "label": "Human controllability experiment",
          "href": "/science-evidence#hartley-2014"
        }
      ]
    },
    {
      "title": "When pessimism becomes preparation",
      "body": "Defensive pessimism describes a strategy in which some people anticipate difficulties to manage anxiety and prepare for a performance. In experiments, disrupting that strategy could impair performance. It differs from expecting failure across all of life. A useful game should teach people to distinguish planning from overgeneralization, while allowing more than one effective strategy.",
      "links": [
        {
          "label": "Defensive pessimism experiments",
          "href": "/science-evidence#norem-1986"
        },
        {
          "label": "Obstacle-to-action planning",
          "href": "/science-evidence#wang-2021"
        }
      ]
    },
    {
      "title": "A darker forecast is not automatically more accurate",
      "body": "The accuracy of a prediction depends on evidence and outcomes. A preregistered replication did not find that depressive symptoms produced more accurate judgments of control in its tasks. That finding does not settle every question about mood and judgment. Depression, pessimism, caution, and realism remain different concepts.",
      "links": [
        {
          "label": "Depressive-realism replication",
          "href": "/science-evidence#dev-2022"
        },
        {
          "label": "Unrealistic optimism and comparison standards",
          "href": "/science-evidence#shepperd-2015"
        }
      ]
    },
    {
      "title": "Increasing optimism and reducing pessimism may differ",
      "body": "Some future-imagery experiments assess positive and negative expectations separately. Recent Best Possible Self studies found immediate changes in both; a 2025 trial retained a smaller positive-expectation effect at one week. Another adolescent study changed positive affect without significantly reducing negative affect. A feeling, an expectation, and a durable change in outlook need different measurements.",
      "links": [
        {
          "label": "2023 online experiment",
          "href": "/science-evidence#boselie-2023"
        },
        {
          "label": "2025 expectation trial",
          "href": "/science-evidence#booth-2025"
        },
        {
          "label": "2025 adolescent affect trial",
          "href": "/science-evidence#bartha-2025"
        }
      ]
    },
    {
      "title": "What this means for Mind Memome",
      "body": "The curriculum can help players recognize an unsupported generalization, find an available action, imagine a plausible future, and prepare for obstacles. Each idea needs its own source and challenge. Game completion can demonstrate learning; whether the game changes optimism or pessimism is a separate research question for the protocol.",
      "links": [
        {
          "label": "Explore the candidate ideas",
          "href": "/mind-memome"
        },
        {
          "label": "Protocol evaluation",
          "href": "/protocol#measures"
        }
      ]
    }
  ],
  "next": {
    "label": "Explore the ideas that could become game challenges.",
    "href": "/mind-memome"
  }
}
};
