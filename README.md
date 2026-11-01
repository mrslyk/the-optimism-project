# The Optimism Project

A public resource about the causes, importance, science, and cultivation of optimism, and the development of a new Optimism Protocol.

Production: https://optimism-project.netlify.app/

The visitor journey connects definitions and types, origins, benefits, measurement, a searchable evidence library, practices, a private reflection workbook, researchers, sourced articles, and a versioned protocol development draft. Site search, FAQs, editorial standards, privacy information, contribution forms, and update requests support that journey.

The research collection includes 39 annotated sources on optimism, pessimism, cultivation, and methods; a separate pessimism guide; and a reading room of 13 books, research hubs, and data sources. A guide to Matt Ridley’s *The Rational Optimist* connects societal progress with the broader curriculum. The Mind Memome contains thirteen candidate ideas, memorable original phrases, attributed brief excerpts, evidence limits, original challenge concepts, and ways to demonstrate understanding. It is a downloadable curriculum draft for the existing Slyk Naval/Decalog game model, not a deployed earning service or a validated intervention.

The protocol is an editorial development draft. No trial is active and the combined program has not been validated. Research summaries distinguish findings from limits and link to originals. The people directory describes published work without claiming affiliation or endorsement.

The mind-and-body guide records the planned Cadoo connection: verified completion of a linked Cadoo game triggers its Optimism reward under the existing Slyk model. Account linking, eligible challenges, completion verification, and reward delivery remain deferred; no connector or reward endpoint is enabled in this release. Protocol and curriculum drafts are version 0.2.

## Development

Node.js 22.13 or newer. Install dependencies with `npm install`.

- `npm run build:netlify`: native Next.js production build used by Netlify.
- `npx next start --hostname 127.0.0.1 --port 3187`: serve that build locally.
- `npm run dev`: original vinext development server.
- `npm test`: original Sites build and rendered-page smoke tests.

## Content and tools

- `lib/topics.ts`: educational pages and related reading.
- `lib/research.ts`, `lib/research-additions.ts`, and `lib/pessimism-research.ts`: attributed studies and evidence limits.
- `lib/resource-guide.ts`: books, research institutions, datasets, and the Ridley reading guide.
- `lib/mind-body.ts`: movement and sleep research plus the explicitly planned Cadoo connection.
- `lib/memome.ts`: draft game curriculum, source links, challenges, and proof of understanding. Exported at `/mind-memome/curriculum.json`.
- `lib/protocol.ts`: candidate components, roadmap, measures, open decisions, version history.
- `lib/blog.ts`: dated, sourced articles.
- `components/`: search, evidence filters and reading list, people directory, workbook, forms, and reading utilities.
- `public/__forms.html`: Netlify form definitions. Contribution and update forms submit to this endpoint.

Workbook text and saved reading lists use browser storage only. Contact and update submissions are stored by Netlify Forms with explicit consent. Nothing is automatically published or emailed. Online payments await project-specific payment links and recipient terms; funding enquiries already use the contribution form.

See `SETUP.md` for deployment and form administration. The original Sites configuration is retained separately from the native Netlify build.
