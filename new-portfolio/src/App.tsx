import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { profile } from './data/portfolio';
import { IconGithub, IconLinkedin, IconMail } from './components/Icons';

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-flutter focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/[.06] py-8">
        <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name} · Built with React, Three.js & Framer Motion</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white"><IconMail /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white"><IconLinkedin /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white"><IconGithub /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
