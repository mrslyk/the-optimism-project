# Production setup

The public pages are ready to deploy. Payments, membership, donations, newsletter collection, and contact delivery are intentionally not live.

## Netlify deployment

Connect the GitHub repository's `main` branch to Netlify. The checked-in
`netlify.toml` runs `npm run build:netlify`, publishes `.next`, and enables
Netlify's Next.js adapter. This uses native Next.js for Netlify while
`npm run build` preserves the existing Sites build.

Netlify's `URL` environment variable supplies the public origin for metadata,
robots, and the sitemap. Set `NEXT_PUBLIC_SITE_URL` to override it for a custom
domain. `tsconfig.netlify.json` checks the Next.js application without including
the unused Cloudflare Worker starter files.

## Environment values

Copy `.env.example` to `.env.local` for local development. Set production values in the hosting provider rather than committing them.

## Stripe checkout

The donation page now mirrors the Cuba New pattern: preset amounts and “any amount” hand off to Stripe-hosted Payment Links. Add the five public `NEXT_PUBLIC_DONATE_*` URLs to activate those buttons. Do not reuse Cuba New’s links; they belong to a different project.

The current `/api/checkout` route is a safe placeholder that always returns `503 CHECKOUT_NOT_CONFIGURED`.

Before enabling it:

1. Create and verify the organization’s Stripe account.
2. Decide whether membership is recurring and whether donations are fixed, variable, or both.
3. Create Stripe Payment Links for flexible and preset donations, then set the public link variables. If a custom server flow is later required, use Checkout Sessions.
4. Install the official Stripe server SDK.
5. For a custom server flow, replace the placeholder with a server-side Checkout Session endpoint. Prefer a restricted key with minimum permissions; never expose it to browser code.
6. Allow only known Price IDs, validate amounts server-side, set success/cancel URLs from `NEXT_PUBLIC_SITE_URL`, and add idempotency protection.
7. Add a webhook endpoint and verify signatures with `STRIPE_WEBHOOK_SECRET`.
8. Store fulfillment state only after verified webhook events.
9. Publish refund, cancellation, tax, privacy, and recurring-payment terms.
10. Enable the UI only after test-mode and webhook tests pass.

## Contact form

The current `/api/contact` route is a safe placeholder that always returns `503 CONTACT_NOT_CONFIGURED`.

Before enabling it, select an email or form-delivery provider, verify the sending domain, validate all fields server-side, add rate limiting and bot protection, restrict message length, document consent and retention, and confirm the receiving inbox is monitored. Do not log message bodies or email addresses by default.

## Editorial systems

Research, expert, news, community, and funding areas contain explicit placeholders. Do not replace them with generated names, citations, findings, or headlines. Add material only after source, identity, date, conflict, and rights checks are complete.
