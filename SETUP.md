# Production setup

## Netlify

The GitHub repository `mrslyk/the-optimism-project` deploys its `main` branch to the Netlify site `optimism-project`. `netlify.toml` runs `npm run build:netlify`, publishes `.next`, and uses the Netlify Next.js adapter. The original `npm run build` retains the Sites build.

Netlify's `URL` supplies the public origin through `next.config.ts`. `NEXT_PUBLIC_SITE_URL` can override it for a custom domain. `tsconfig.netlify.json` checks the native application separately from unused Cloudflare starter files.

## Contribution and update requests

Enable Netlify form detection and deploy. The adapter detects `optimism-contact` and `optimism-updates` from `public/__forms.html`; the visible forms post matching URL-encoded fields to `/__forms.html`.

Submissions are available to authorized site administrators in Netlify Forms. Review both verified and spam submissions. No email notification, mailing-list sync, automated reply, or scheduled newsletter is configured. The page confirms only that a submission was recorded. Administrators must monitor the dashboard and honor consent, correction, and removal requests. See `/privacy` for visitor-facing data information.

Browser validation, length limits, a honeypot, and Netlify spam filtering apply. Treat submitted text and links as untrusted. Do not automatically publish submissions. Do not request medical records. The legacy `/api/contact` is not used by the new forms.

## Personal tools

The workbook uses `optimism-workbook-v1` in local storage only when Save is selected. It supports local text-file download and deletion. The reading list uses `optimism-saved-sources-v1`. No accounts or server storage are involved. Test saving, reloading, removing, and storage failure when changing these tools.

## Financial contributions

The Support page provides working contribution and funding-enquiry routes. To enable financial checkout, obtain project-specific public Stripe Payment Links, identify the receiving organization, and publish use-of-funds and applicable tax/refund terms. Set the relevant `NEXT_PUBLIC_DONATE_*` variables and redeploy. Do not reuse another project's links.

Hosted Payment Links do not require a Stripe server SDK or an application webhook unless the project later adds its own fulfillment. The legacy `/api/checkout` remains unused. Never put secret Stripe keys in public variables.

## Editorial maintenance

Add original-source citations, publication dates, limitations, and related reading with each new entry. Keep the protocol's development status and version record current. Research and directory entries do not imply a project partnership. Verify internal routes and source anchors, desktop/mobile layouts, and functional tools before publishing.
