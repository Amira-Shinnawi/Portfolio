import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { IconArrowRight, IconGithub, IconLinkedin, IconMail, IconPin } from './Icons';

const PhoneScene = lazy(() => import('./PhoneScene'));

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch {
    return false;
  }
}

/** Static CSS phone — shown while the 3D chunk loads, and as the
 *  permanent fallback for no-WebGL / reduced-motion visitors. */
function StaticPhone() {
  return (
    <div className="grid h-full place-items-center" aria-hidden>
      <div className="relative h-[78%] max-h-[440px] aspect-[9/19] -rotate-6 rounded-[2.4rem] border border-white/10 bg-gradient-to-b from-[#1b2236] to-[#0b1020] p-2 shadow-[0_30px_80px_-20px_rgba(63,182,255,.45)]">
        <div className="h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#0b1224] to-[#060a14] p-4">
          <div className="mx-auto h-4 w-20 rounded-full bg-black" />
          <div className="mt-6 h-3 w-24 rounded bg-slate-500/40" />
          <div className="mt-2 h-5 w-36 rounded bg-white/80" />
          <div className="mt-4 h-24 rounded-2xl bg-gradient-to-br from-flutter to-flutter-deep" />
          <div className="mt-3 flex h-20 items-end gap-2 rounded-2xl bg-white/[.04] p-3">
            {[45, 70, 55, 90, 62, 80].map((h, i) => (
              <div key={i} className="flex-1 rounded bg-flutter/70" style={{ height: `${h}%` }} />
            ))}
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="mt-2 h-10 rounded-xl bg-white/[.045]" />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  const wrap = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<'static' | 'full' | 'lite'>('static');
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !hasWebGL()) return;
    const small = window.matchMedia('(max-width: 767px)').matches;
    const weak = (navigator.hardwareConcurrency ?? 8) <= 4;
    // Defer the 3D chunk until the page is idle so text & CTAs paint first.
    const start = () => setMode(small || weak ? 'lite' : 'full');
    const ric = (window as any).requestIdleCallback as ((cb: () => void) => number) | undefined;
    const id = ric ? ric(start) : window.setTimeout(start, 300);
    return () => {
      if (ric) (window as any).cancelIdleCallback?.(id);
      else clearTimeout(id);
    };
  }, []);

  // Pause rendering when the hero scrolls out of view.
  useEffect(() => {
    if (!wrap.current) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.05 });
    io.observe(wrap.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="relative h-[360px] sm:h-[440px] lg:h-[560px]">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 m-auto h-3/4 w-3/4 rounded-full bg-flutter/20 blur-[90px]" />
      {mode === 'static' ? (
        <StaticPhone />
      ) : (
        <Suspense fallback={<StaticPhone />}>
          <PhoneScene lite={mode === 'lite'} active={inView} />
        </Suspense>
      )}

      {/* floating stack chips (DOM, not 3D — crisp and cheap) */}
      {[
        { t: 'BLoC / Cubit', c: 'left-[2%] top-[14%]', d: 0 },
        { t: 'Supabase sync', c: 'right-[0%] top-[24%]', d: 0.6 },
        { t: 'SignalR · live', c: 'left-[6%] bottom-[18%]', d: 1.2 },
        { t: 'Clean Architecture', c: 'right-[4%] bottom-[8%]', d: 1.8 },
      ].map((chip) => (
        <motion.span
          key={chip.t}
          className={`glass pointer-events-none absolute ${chip.c} hidden !rounded-full px-3 py-1.5 font-mono text-[11px] text-sky-100 sm:block`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 0.6 + chip.d * 0.3 },
            scale: { delay: 0.6 + chip.d * 0.3 },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: chip.d },
          }}
        >
          {chip.t}
        </motion.span>
      ))}
    </div>
  );
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-20">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="container-x grid items-center gap-6 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.1fr_1fr] lg:gap-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="relative z-10"
        >
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/[.07] px-3 py-1 text-xs font-medium text-mint">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            {profile.availability}
          </motion.p>

          <motion.h1 variants={item} className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-display text-xl font-semibold sm:text-2xl">
            <span className="text-slate-200">{profile.title}</span>
            <span className="mx-2 text-slate-600">|</span>
            <span className="bg-gradient-to-r from-flutter to-mint bg-clip-text text-transparent">{profile.specialty}</span>
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.valueProp}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects <IconArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <IconMail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <IconPin size={15} /> {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
              <IconGithub size={15} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
              <IconLinkedin size={15} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}
