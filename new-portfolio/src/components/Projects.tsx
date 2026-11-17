import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Project } from '../data/portfolio';
import { IconCheck, IconClose, IconInfo, IconLock } from './Icons';
import { LinkChip } from './LinkChip';
import { Reveal, SectionHeader } from './Reveal';

// Bento layout: 2+1 / 2+1 / 1+1+1 / 1+1+1
const spans: Record<number, string> = { 0: 'lg:col-span-2', 2: 'lg:col-span-2' };

function ProjectCard({ p, index, onOpen }: { p: Project; index: number; onOpen: () => void }) {
  const wide = !!spans[index];
  return (
    <Reveal delay={(index % 3) * 0.06} className={`${spans[index] ?? ''} h-full`}>
      <article
        className="glass group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-flutter/30 hover:shadow-glow"
      >
        <button
          type="button"
          onClick={onOpen}
          className={`relative block shrink-0 overflow-hidden bg-ink-800 ${wide ? 'aspect-video lg:aspect-[2.2/1]' : 'aspect-video'}`}
          aria-label={`Open ${p.name} case study`}
        >
          <img
            src={p.cover}
            alt={`${p.name} app screens`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          {p.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-ink-950/80 px-2.5 py-1 text-[11px] font-semibold text-flutter backdrop-blur">
              ★ Featured
            </span>
          )}
        </button>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
            <span className="shrink-0 font-mono text-[11.5px] text-slate-500">{p.company}</span>
          </div>
          <p className="mt-0.5 text-sm font-medium text-flutter">{p.tagline}</p>
          <p className="mt-3 text-[14.5px] leading-relaxed text-slate-400">{p.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.stack.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
            {p.links.map((l) => (
              <LinkChip key={l.url} link={l} />
            ))}
            <button type="button" onClick={onOpen} className="chip-link">
              <IconInfo size={14} /> Case study
            </button>
            {p.links.length === 0 && (
              <span className="inline-flex items-center gap-1 text-[11.5px] text-slate-500">
                <IconLock size={12} /> Private client app
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CaseStudy({ p, onClose }: { p: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] grid place-items-center bg-ink-950/80 p-3 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        className="glass max-h-[92vh] w-full max-w-3xl overflow-y-auto !bg-ink-900/95"
        initial={{ y: 30, scale: 0.97 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 20, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={p.cover} alt={`${p.name} app screens`} className="aspect-video w-full object-cover" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-ink-950/80 text-white backdrop-blur hover:bg-ink-950"
            aria-label="Close case study"
          >
            <IconClose />
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs text-slate-500">
            {p.company} · {p.date}
          </p>
          <h3 id="case-title" className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
            {p.name}
          </h3>
          <p className="mt-1 font-medium text-flutter">{p.tagline}</p>
          <p className="mt-4 leading-relaxed text-slate-300">{p.description}</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto]">
            <div>
              <h4 className="section-eyebrow">Key features</h4>
              <ul className="mt-3 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-[14.5px] text-slate-300">
                    <IconCheck size={16} className="mt-0.5 shrink-0 text-mint" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:w-56">
              <h4 className="section-eyebrow">My role</h4>
              <p className="mt-3 text-sm text-slate-300">{p.role}</p>
            </div>
          </div>

          <h4 className="section-eyebrow mt-6">Tech stack</h4>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.stack.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {p.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {p.links.map((l) => (
                <LinkChip key={l.url} link={l} />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="03 · Projects"
          title="Featured work"
          intro="Production apps for real businesses. Store links are on every card where the app is public; the rest are private client and internal ERP products."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>
      <AnimatePresence>{open && <CaseStudy p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
