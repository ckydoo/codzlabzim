/** Static trust strip (no motion) - clients & sectors we serve. */
export default function Marquee({ label, items, ariaLabel }) {
  return (
    <section
      className="border-y border-line bg-bg-subtle py-[clamp(2.5rem,4.5vw,3.5rem)]"
      aria-label={ariaLabel || label}
    >
      <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
        {label && (
          <p className="mb-6 text-center text-[0.8125rem] font-medium uppercase tracking-[0.08em] text-muted-2">
            {label}
          </p>
        )}
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 whitespace-nowrap text-[0.9375rem] font-medium text-muted"
            >
              {item.icon && <span className="text-muted-2">{item.icon}</span>}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
