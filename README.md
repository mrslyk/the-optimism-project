# The Optimism Project

A public resource about the causes, importance, science, and cultivation of optimism, and the development of a new Optimism Protocol.

Production: https://optimism-project.netlify.app/

The visitor journey connects definitions and types, origins, benefits, measurement, a searchable evidence library, practices, a private reflection workbook, researchers, sourced articles, and a versioned protocol development draft. Site search, FAQs, editorial standards, privacy information, contribution forms, and update requests support that journey.

The protocol is an editorial development draft. No trial is active and the combined program has not been validated. Research summaries distinguish findings from limits and link to originals. The people directory describes published work without claiming affiliation or endorsement.

## Development

Node.js 22.13 or newer. Install dependencies with `npm install`.

- `npm run build:netlify`: native Next.js production build used by Netlify.
- `npx next start --hostname 127.0.0.1 --port 3187`: serve that build locally.
- `npm run dev`: original vinext development server.
- `npm test`: original Sites build and rendered-page smoke tests.

## Content and tools

- `lib/topics.ts`: educational pages and related reading.
- `lib/research.ts` and `lib/research-additions.ts`: attributed studies and evidence limits.
- `lib/protocol.ts`: candidate components, roadmap, measures, open decisions, version history.
- `lib/blog.ts`: dated, sourced articles.
- `components/`: search, evidence filters and reading list, people directory, workbook, forms, and reading utilities.
- `public/__forms.html`: Netlify form definitions. Contribution and update forms submit to this endpoint.

Workbook text and saved reading lists use browser storage only. Contact and update submissions are stored by Netlify Forms with explicit consent. Nothing is automatically published or emailed. Online payments await project-specific payment links and recipient terms; funding enquiries already use the contribution form.

See `SETUP.md` for deployment and form administration. The original Sites configuration is retained separately from the native Netlify build.
