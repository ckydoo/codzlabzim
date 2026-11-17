import { Link } from 'react-router-dom';

/** CodzLabZim supplied bracketed wordmark. */
export default function Brand({ to = '/' }) {
  return (
    <Link to={to} aria-label="CodzLabZim home" className="inline-flex items-center">
      <img
        src="/images/codzlabzim-wordmark-transparent.png"
        alt="CodzLabZim — Think it. Code it. Live it."
        className="h-auto w-[min(270px,48vw)] object-contain"
      />
    </Link>
  );
}
