# Francisco Sousa - Vercel showcase copy

This is a Vercel-deployable copy of the Francisco Sousa filmmaker portfolio,
visually identical to the live site at https://francisco-sousa.higgsfield.app.

It is a **static-prerender build** (Build Output API v3): every route
(`/`, `/robots.txt`, `/sitemap.xml`) is prerendered to plain HTML at build
time, and `/work/[slug]` pages are covered by the client router. There is no
serverless function and no database.

## What is real vs placeholder

- **Real, client-supplied media**: the About portrait photo, the five
  festival laurels (Sweden / Italy / USA / Portugal incl. LISBIFF) and the
  Católica University emblem.
- **Still placeholder frames**: film stills, photography and weddings -
  the client rule is that no photos or videos are generated or sourced
  from stock anywhere; the labeled frames get swapped for Francisco's real
  work under `public/`.
- **Content lives in one file:** `src/lib/site.ts` - films, accolades and
  testimonials carry the real client copy; the festive-to-film attribution
  on accolades was inferred by year (see the comment in that file). The
  contact links (email / Instagram / Vimeo / LinkedIn) are marked TO BE
  ADDED until Francisco's real channels arrive.

## Deploy

```bash
cd app            # this project root (the vercel.json lives here)
bun install
bun run build     # vite build + prerender into .vercel/output
npx vercel login
npx vercel deploy --prebuilt --yes   # or: bun run deploy:vercel
```

Requires Node 20.19+ / 22+ and the Vercel CLI (`npm i -g vercel`).