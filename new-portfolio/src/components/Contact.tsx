import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import {
  IconCheck,
  IconCopy,
  IconDownload,
  IconGithub,
  IconLinkedin,
  IconMail,

  IconSend,
  IconWhatsapp,
} from './Icons';
import { Reveal, SectionHeader } from './Reveal';

/**
 * Optional: create a free form at https://formspree.io and paste its ID
 * here (e.g. 'xyzabcd') to receive messages directly. While empty, the
 * form opens the visitor's email app with the message pre-filled.
 */
const FORMSPREE_ID = '';

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const t = document.createElement('textarea');
      t.value = profile.email;
      document.body.appendChild(t);
      t.select();
      document.execCommand('copy');
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="glass flex items-center gap-3 p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-flutter/10 text-flutter">
        <IconMail size={18} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-slate-500">Email</p>
        <a href={`mailto:${profile.email}`} className="block truncate font-medium text-white hover:text-flutter">
          {profile.email}
        </a>
      </div>
      <button type="button" onClick={copy} className="chip-link shrink-0" aria-live="polite">
        {copied ? <IconCheck size={14} className="text-mint" /> : <IconCopy size={14} />}
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

function ContactRow({ href, icon, label, value }: { href: string; icon: JSX.Element; label: string; value: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="glass flex items-center gap-3 p-4 transition hover:border-flutter/30">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/[.06] text-slate-200">{icon}</span>
      <div className="min-w-0">
        <p className="text-xs text-slate-500">{label}</p>
        <p className="truncate font-medium text-white">{value}</p>
      </div>
    </a>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  const input =
    'w-full rounded-xl border border-white/10 bg-ink-900/70 px-4 py-3 text-[15px] text-white placeholder:text-slate-500 outline-none transition focus:border-flutter/60 focus:ring-2 focus:ring-flutter/20';

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="05 · Contact"
          title="Let’s build your next app"
          intro="Open to full-time remote roles and freelance Flutter projects — reach out through any channel below."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="flex min-w-0 flex-col gap-3">
            <CopyEmail />
            <ContactRow href={profile.linkedin} icon={<IconLinkedin />} label="LinkedIn" value={profile.linkedinHandle} />
            <ContactRow href={profile.github} icon={<IconGithub />} label="GitHub" value={profile.githubHandle} />
            <ContactRow href={profile.whatsapp} icon={<IconWhatsapp />} label="WhatsApp" value={profile.phone} />
            <a href={profile.cv} download className="btn-primary mt-2 w-full">
              <IconDownload size={16} /> Download CV (PDF)
            </a>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0">
            <form onSubmit={onSubmit} className="glass grid gap-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm text-slate-300">
                  Name
                  <input name="name" required autoComplete="name" placeholder="Your name" className={input} />
                </label>
                <label className="grid gap-1.5 text-sm text-slate-300">
                  Email
                  <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={input} />
                </label>
              </div>
              <label className="grid gap-1.5 text-sm text-slate-300">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role or the app you want to build…"
                  className={`${input} resize-y`}
                />
              </label>
              <button type="submit" disabled={status === 'sending'} className="btn-primary justify-self-start">
                <IconSend size={16} /> {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <AnimatePresence>
                {status === 'sent' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-mint">
                    {FORMSPREE_ID ? 'Thanks! Your message was sent.' : 'Your email app should open with the message ready to send.'}
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-rose-300">
                    Something went wrong — please email me directly at {profile.email}.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

