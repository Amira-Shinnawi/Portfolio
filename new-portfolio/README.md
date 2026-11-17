# Amira Shinnawi — Portfolio v2

Dark-mode, single-page developer portfolio with an interactive 3D hero.

**Stack:** Vite · React 18 · TypeScript · Tailwind CSS · Framer Motion · React Three Fiber (Three.js)

## Edit content
All text, links, projects and skills live in **`src/data/portfolio.ts`**.
- Add a project → add an object to `projects` (cover image in `public/covers/`).
- Add a link → `links: [{ type: 'GitHub' | 'App Store' | 'Google Play' | 'Live Demo' | 'pub.dev', url }]`.
- Replace the CV → overwrite `public/Amira_Shinnawi_CV.pdf`.
- Contact form → paste a Formspree form ID into `FORMSPREE_ID` in `src/components/Contact.tsx`
  (without it the form opens the visitor's email app pre-filled).

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for hosting
```bash
npm run build      # outputs static files to dist/
npm run preview    # check the production build
```
Upload the **`dist/`** folder to any static host. Paths are relative (`base: './'`), so it works
at a domain root or in a sub-folder (e.g. GitHub Pages `/<repo>/`).

- **Netlify / Vercel:** root directory `new-portfolio`, build command `npm run build`, output `dist`.
- **GitHub Pages:** publish the contents of `dist/` (e.g. via a Pages GitHub Action or a `gh-pages` branch).

## Images
New cover images: drop originals in `../assets/covers/`, then run
`node scripts/optimize-images.mjs` to regenerate compressed WebP files in `public/`.

## Performance notes
- The 3D scene is lazy-loaded after the page is idle; text and buttons render first.
- Phones / low-core devices get a lighter scene (fewer nodes, lower pixel ratio, no antialiasing).
- Rendering pauses when the hero is scrolled out of view.
- `prefers-reduced-motion` or no WebGL → a static CSS phone is shown instead.
