import { useId } from 'react';
import { Link } from 'react-router-dom';

/** CodzLabZim logo mark + wordmark. Gradient id is unique per instance. */
export default function Brand({ to = '/' }) {
  const gid = `lg-${useId().replace(/:/g, '')}`;

  return (
    <Link
      className="inline-flex items-center gap-2.5 text-[1.2rem] font-semibold tracking-[-0.025em] text-ink"
      to={to}
      aria-label="CodzLabZim home"
    >
      <svg className="h-8 w-8 shrink-0" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#C25E2F" />
            <stop offset=".55" stopColor="#D98A3B" />
            <stop offset="1" stopColor="#E3B23C" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill={`url(#${gid})`} />
        <path d="M24.5 22 14 32l10.5 10" fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M39.5 22 50 32l-10.5 10" fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35.5 19.5 28.5 44.5" fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" />
      </svg>
      <span>
        CodzLab<span className="text-brand">Zim</span>
      </span>
    </Link>
  );
}
