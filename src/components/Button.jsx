import { Link } from 'react-router-dom';

const VARIANTS = {
  primary: [
    'bg-brand text-white',
    'shadow-xs hover:bg-brand-strong hover:shadow-sm',
  ].join(' '),
  secondary: [
    'bg-bg text-ink border border-line',
    'hover:bg-bg-subtle hover:border-line-strong hover:shadow-xs',
  ].join(' '),
  ghost: [
    'bg-transparent text-ink',
    'hover:bg-bg-muted',
  ].join(' '),
  light: [
    'bg-white text-ink border border-transparent',
    'hover:shadow-sm',
  ].join(' '),
  lightGhost: [
    'bg-white/10 text-white border border-white/20',
    'hover:bg-white/20',
  ].join(' '),
};

const SIZES = {
  sm: 'h-10 px-4 text-[0.875rem] gap-1.5',
  md: 'h-11 px-5 text-[0.9375rem] gap-2',
  lg: 'h-12 px-6 text-base gap-2',
};

/**
 * The one button for the whole app.
 * variant: primary | secondary | ghost | light | lightGhost (for dark bands)
 * Motion lives in .btn-press (index.css): hover lift −1px, press 0.98, icon nudge 3px.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'btn-press inline-flex items-center justify-center rounded-[10px]',
    'font-semibold tracking-[-0.01em] cursor-pointer whitespace-nowrap select-none',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    VARIANTS[variant] || VARIANTS.primary,
    SIZES[size] || SIZES.md,
    className,
  ].join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

/** Status pill - meaningful states only (product mockups, plan flags). */
export function Badge({ tone = 'green', className = '', children }) {
  const tones = {
    green: 'bg-success-soft text-success-text border-success/25',
    amber: 'bg-warning-soft text-warning-text border-warning/25',
    brand: 'bg-brand-soft text-brand border-brand/25',
  };
  return (
    <span className={`inline-flex w-fit items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium ${tones[tone] || tones.green} ${className}`}>
      {children}
    </span>
  );
}

/** Small uppercase section label. */
export function Eyebrow({ className = '', children }) {
  return (
    <span className={`text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-brand ${className}`}>
      {children}
    </span>
  );
}

/** Brand-coloured emphasis inside headings. */
export function Grad({ as: Tag = 'span', className = '', children }) {
  return <Tag className={`grad-text ${className}`}>{children}</Tag>;
}
