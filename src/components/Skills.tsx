import { skillGroups } from '../data/portfolio';
import { GroupIcon } from './Icons';
import { Reveal, SectionHeader } from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader eyebrow="04 · Skills" title="Technical skills" intro="Grouped the way I use them on real projects." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 4) * 0.05} className="glass p-5 transition hover:border-flutter/25">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-flutter/10 text-flutter">
                  <GroupIcon name={g.icon} size={18} />
                </span>
                <h3 className="font-display text-[15px] font-semibold leading-tight text-white">{g.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <li key={s} className="rounded-md border border-white/[.08] bg-white/[.04] px-2.5 py-1 text-[12.5px] text-slate-200">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
