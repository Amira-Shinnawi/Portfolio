import { profile, stats } from '../data/portfolio';
import { Reveal, SectionHeader } from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader eyebrow="01 · About" title="Mobile apps that run real businesses" />

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <Reveal className="glass relative overflow-hidden p-2">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full rounded-xl object-cover"
              loading="lazy"
              width={320}
              height={400}
            />
            <div className="absolute inset-x-2 bottom-2 rounded-b-xl bg-gradient-to-t from-ink-950/90 to-transparent p-4 pt-16">
              <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
              <p className="text-sm text-slate-300">Flutter Developer · {profile.location}</p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.05} className="glass space-y-4 p-6 text-[15.5px] leading-relaxed text-slate-300 sm:p-8">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {profile.languages.map((l) => (
                  <span key={l.name} className="rounded-lg border border-white/10 bg-white/[.04] px-3 py-1 text-xs text-slate-300">
                    <span className="font-semibold text-white">{l.name}</span> · {l.level}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.08 + i * 0.05} className="glass p-5">
                  <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-slate-400 sm:text-sm">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
