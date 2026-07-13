# Murugesan & Co. — Corporate Website

Production Next.js 15 site for Murugesan & Co., a Chennai/Tiruvallur
hydraulic hose and fitting manufacturer. No database, no admin — a public
marketing/catalogue site with a working contact form that emails you.

## What's implemented

- **9 pages** — Home, About, Products (listing + 9 dynamic product detail
  pages), Manufacturing, Quality, Industries, Clients, Contact.
- **Working contact form** — React Hook Form + Zod validation (client and
  server), honeypot bot-trap field, origin check, 5-requests/IP/hour rate
  limit. Sends the enquiry as an email via Resend — no database.
- **Security headers** — CSP, HSTS, X-Frame-Options via `next.config.js`.
- **SEO** — per-page metadata, OpenGraph/Twitter cards, JSON-LD
  (`Manufacturer` + `Product` schema), dynamic `sitemap.xml` and
  `robots.txt`, canonical URLs.
- **Design system** — industrial palette (ink/gunmetal/brass), Barlow
  Condensed + Inter + IBM Plex Mono, hand-built SVG hose cross-section hero.

## Removed from the earlier version

Admin dashboard, login, Prisma, Postgres, and session/cookie auth are gone.
The contact route no longer writes to a database — it sends email instead.
If you ever want submissions tracked/searchable again, the clean options
are: re-add a DB, or point the form at a spreadsheet/CRM webhook.

## What's intentionally left as a next step

- Product photography (gallery sections show numbered placeholders)
- Real PDF catalogues behind the "Download Catalogue" buttons
- Google Maps embed on the Contact page (placeholder div)
- Certification logos on the Quality page

## Getting started

```bash
npm install
cp .env.example .env
# edit .env: set RESEND_API_KEY (from resend.com) and CONTACT_TO_EMAIL

npm run dev                # http://localhost:3000
```

> Note on this delivery environment: the sandbox this was built in blocks
> outbound access to `fonts.googleapis.com`, so the Google Fonts fetch
> couldn't complete here. That's an ordinary build step that succeeds on a
> normal machine or on Vercel — `tsc --noEmit` passes clean.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Yes | Sends contact-form enquiries as email |
| `CONTACT_TO_EMAIL` | Yes | Where enquiries land |
| `CONTACT_FROM_EMAIL` | No | Verified sender (defaults to Resend's shared address) |
| `NEXT_PUBLIC_SITE_URL` | Yes | Metadata, sitemap, canonical URLs |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | No | Floating WhatsApp button |

No `DATABASE_URL`, no `SESSION_SECRET` — nothing here touches a database.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add the environment variables above in Project Settings → Environment
   Variables.
4. Verify a sender domain in Resend (or use their shared `onboarding@`
   address for testing) so `CONTACT_FROM_EMAIL` delivers reliably.
5. Deploy — `npm run build` is the default build command, no extra steps.

## Rate limiting note

The contact-form limiter (`src/lib/rate-limit.ts`) is in-memory — correct
for a single server process. On Vercel's serverless functions each
invocation can be a fresh process, so the limit resets more often than
"true" 5/hour under real traffic. Fine for a low-traffic company site; swap
in Upstash Redis (`@upstash/ratelimit`) if you need it enforced strictly
across instances.
