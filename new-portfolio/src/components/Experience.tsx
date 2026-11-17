import { certifications, education, experience, type TimelineItem } from '../data/portfolio';
import { IconAward, IconBriefcase, IconCap, IconExternal } from './Icons';
import { LinkChip } from './LinkChip';
import { Reveal, SectionHeader } from './Reveal';

function Entry({ item, index }: { item: TimelineItem; index: number }) {
  const Icon = item.kind === 'work' ? IconBriefcase : IconCap;
  return (
    <li className="relative pl-12 sm:pl-16">
      {/* node */}
      <span
        className={`absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-xl border sm:left-2 ${
          item.current
            ? 'border-flutter/50 bg-flutter/15 text-flutter shadow-glow'
            : 'border-white/10 bg-ink-800 text-slate-400'
        }`}
      >
        <Icon size={17} />
      </span>

      <Reveal delay={index * 0.04} className="glass p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
          <div>
            <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{item.role}</h3>
            <p className="mt-0.5 text-[15px] text-slate-300">
              <span className="font-semibold text-flutter">{item.org}</span>
              <span className="text-slate-500"> — {item.orgNote}</span>
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="inline-flex items-center gap-2 font-mono text-[13px] text-slate-200">
              {item.current && <span className="rounded bg-mint/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-mint">Now</span>}
              {item.date}
            </p>
            <p className="text-xs text-slate-500">{item.location}</p>
          </div>
        </div>
        {item.dateNote && <p className="mt-1 text-xs text-slate-500">{item.dateNote}</p>}

        <ul className="mt-4 space-y-2 text-[14.5px] leading-relaxed text-slate-300">
          {item.points.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-flutter/70" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {(item.tags?.length || item.links?.length) && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {item.tags?.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
            {item.links?.map((l) => (
              <LinkChip key={l.url} link={l} />
            ))}
          </div>
        )}
      </Reveal>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="02 · Experience"
          title="Experience & Education"
          intro="Three years shipping Flutter apps across ERP, POS, e-commerce, education and sports products."
        />

        <ol className="relative space-y-6 before:absolute before:bottom-4 before:left-[17px] before:top-4 before:w-px before:bg-gradient-to-b before:from-flutter/60 before:via-white/10 before:to-transparent sm:before:left-[25px]">
          {experience.map((e, i) => (
            <Entry key={e.org + e.date} item={e} index={i} />
          ))}
        </ol>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <IconCap size={18} className="text-flutter" /> Education
            </h3>
            <ol className="relative space-y-6">
              {education.map((e, i) => (
                <Entry key={e.org} item={e} index={i} />
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <IconAward size={18} className="text-flutter" /> Certifications & Training
            </h3>
            <ul className="space-y-3">
              {certifications.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.05}>
                  <li className="glass flex items-center justify-between gap-4 p-4">
                    <div>
                      <p className="font-semibold text-white">{c.title}</p>
                      <p className="text-sm text-slate-400">
                        {c.issuer} · <span className="font-mono text-[12.5px]">{c.date}</span>
                      </p>
                      {c.detail && <p className="mt-0.5 text-xs text-slate-500">{c.detail}</p>}
                    </div>
                    <a href={c.url} target="_blank" rel="noreferrer" className="chip-link shrink-0">
                      Certificate <IconExternal size={13} />
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
