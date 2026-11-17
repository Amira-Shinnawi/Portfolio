import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement> & { size?: number };
const base = (size = 18): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
});

export const IconDownload = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M12 3v12m0 0 5-5m-5 5-5-5M4 19h16" /></svg>
);
export const IconArrowRight = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M5 12h14m-5-5 5 5-5 5" /></svg>
);
export const IconExternal = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
);
export const IconMail = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const IconCopy = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a1 1 0 0 1 1-1h10" /></svg>
);
export const IconCheck = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="m5 12 5 5L20 7" /></svg>
);
export const IconPin = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const IconPhone = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M10.5 18.5h3" /></svg>
);
export const IconWhatsapp = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z" /></svg>
);
export const IconClose = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const IconMenu = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const IconBriefcase = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" /></svg>
);
export const IconCap = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="m2 9 10-5 10 5-10 5z" /><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6" /></svg>
);
export const IconAward = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></svg>
);
export const IconInfo = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
);
export const IconSend = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M21 3 10 14M21 3l-7 18-4-7-7-4z" /></svg>
);

// Brand marks (filled)
export const IconGithub = ({ size = 18, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);
export const IconLinkedin = ({ size = 18, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);
export const IconApple = ({ size = 16, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46a4.22 4.22 0 0 0-3.32-1.8c-1.4-.14-2.75.83-3.47.83-.72 0-1.82-.81-3-.79a4.43 4.43 0 0 0-3.74 2.28c-1.6 2.77-.41 6.86 1.15 9.11.76 1.1 1.67 2.33 2.86 2.29 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.24-.02 2.02-1.12 2.77-2.22a9.8 9.8 0 0 0 1.26-2.58 4 4 0 0 1-2.42-3.64ZM14.1 5.86A4.03 4.03 0 0 0 15.04 3a4.1 4.1 0 0 0-2.66 1.37 3.83 3.83 0 0 0-.96 2.78 3.4 3.4 0 0 0 2.68-1.29Z" />
  </svg>
);
export const IconPlay = ({ size = 16, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M3.6 2.2a1.2 1.2 0 0 0-.6 1.05v17.5a1.2 1.2 0 0 0 .6 1.05l9.9-9.8Zm11.1 8.6 2.9-2.88L5.25 1.06Zm0 2.4L5.25 22.94l12.35-6.86Zm4.5-4.3-2.5-1.38-3.1 3.08 3.1 3.08 2.53-1.4a1.24 1.24 0 0 0 0-3.38Z" />
  </svg>
);
export const IconLock = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
);

const groupIcons: Record<string, (p: P) => JSX.Element> = {
  phone: IconPhone,
  layers: ({ size, ...p }) => (
    <svg {...base(size)} {...p}><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></svg>
  ),
  bolt: ({ size, ...p }) => (
    <svg {...base(size)} {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>
  ),
  db: ({ size, ...p }) => (
    <svg {...base(size)} {...p}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>
  ),
  receipt: ({ size, ...p }) => (
    <svg {...base(size)} {...p}><path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2zM9 8h6M9 12h6M9 16h3" /></svg>
  ),
  spark: ({ size, ...p }) => (
    <svg {...base(size)} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>
  ),
  rocket: ({ size, ...p }) => (
    <svg {...base(size)} {...p}><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 11a12 12 0 0 1 11-8 12 12 0 0 1-8 11l-3 1-2-2z" /><circle cx="15" cy="9" r="1.5" /></svg>
  ),
  tool: ({ size, ...p }) => (
    <svg {...base(size)} {...p}><path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8M14.7 6.3 9 12l-3-3 5.7-5.7a4 4 0 0 0 3 3Z" /></svg>
  ),
};
export const GroupIcon = ({ name, ...p }: P & { name: string }) => {
  const C = groupIcons[name] ?? IconPhone;
  return <C {...p} />;
};
