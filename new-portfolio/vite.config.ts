import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps every asset path relative, so the built `dist/` folder
// works on GitHub Pages, Netlify, Vercel or any static host / sub-folder.
// Three.js is split out automatically via the lazy import in Hero.tsx.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1100 },
});
