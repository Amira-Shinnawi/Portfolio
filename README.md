# Amira Shinnawi — Portfolio

Live: https://amira-shinnawi.github.io/Portfolio/

The site source lives in [`new-portfolio/`](new-portfolio/) (Vite · React · TypeScript · Tailwind · Framer Motion · React Three Fiber).
The files at the repo root (`index.html`, `assets/index-*.js`, `covers/`, …) are the **built output** served by GitHub Pages.

## Update the site
```bash
cd new-portfolio
npm install          # first time only
# edit src/data/portfolio.ts
npm run deploy       # builds and copies the output to the repo root
cd ..
git add -A && git commit -m "Update portfolio" && git push
```

See [`new-portfolio/README.md`](new-portfolio/README.md) for details. The previous HTML/CSS/JS site is in git history (commit f308840).
