import type { ProjectLink } from '../data/portfolio';
import { IconApple, IconExternal, IconGithub, IconPlay } from './Icons';

const icon = (type: ProjectLink['type']) => {
  switch (type) {
    case 'App Store':
      return <IconApple size={14} />;
    case 'Google Play':
      return <IconPlay size={13} />;
    case 'GitHub':
      return <IconGithub size={14} />;
    default:
      return <IconExternal size={13} />;
  }
};

export function LinkChip({ link }: { link: ProjectLink }) {
  return (
    <a href={link.url} target="_blank" rel="noreferrer" className="chip-link" aria-label={`${link.type} (opens in new tab)`}>
      {icon(link.type)}
      {link.type}
    </a>
  );
}
