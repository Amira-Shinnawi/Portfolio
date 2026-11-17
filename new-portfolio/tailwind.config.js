/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#05070d', 900: '#0a0e1a', 800: '#111729', 700: '#1a2238' },
        flutter: { DEFAULT: '#3fb6ff', deep: '#0468d7', sky: '#7dd3fc' },
        mint: '#5eead4',
        violet: { glow: '#8b5cf6' },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(63,182,255,.25), 0 10px 40px -10px rgba(63,182,255,.45)',
      },
    },
  },
  plugins: [],
};
