# K Delish Coffee & Sweets — Website

A cinematic, single-page site for K Delish Coffee & Sweets (Dubai). Built with
React, Vite, Tailwind CSS v4, and Motion — no third-party build platform
dependencies, ready to deploy anywhere that runs a static site.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a fully static site to the `dist/` folder — plain HTML, CSS, and
JS. No server required.

To check the production build locally before deploying:

```bash
npm run preview
```

## Deploy to Netlify

**Option A — drag and drop (fastest):**
1. Run `npm run build`.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag the generated `dist/` folder onto the page. Done — you'll get a live URL immediately.

**Option B — connect a Git repo (recommended for ongoing edits):**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Netlify: **Add new site → Import an existing project**, and pick the repo.
3. Netlify will read `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**. Every future push redeploys automatically.

**Option C — Netlify CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## Project structure

```
src/
  App.tsx                 – assembles the page
  components/site/        – all page sections (Hero, Menu, Reviews, etc.)
  assets/                 – photography used across the site
  styles.css              – design tokens + global styles (Tailwind v4)
public/
  favicon.ico
index.html                 – page shell, SEO/meta tags, fonts
netlify.toml               – Netlify build + redirect config
```

## Notes

- Smooth scrolling is handled by [Lenis](https://github.com/darkroomengineering/lenis); animations use [Motion](https://motion.dev/).
- A custom cursor and intro loader are automatically disabled for touch
  devices and for visitors with "reduce motion" enabled at the OS level.
- Update contact info, phone number, and social links in
  `src/components/site/Visit.tsx` and `src/components/site/FooterCta.tsx`
  before going live — a couple of fields are still placeholders
  (`+971 · · ·`, `hello@kdelish.ae`).
