import { Badge } from './Button.jsx';

export function Spark() {
  return <div className="spark" />;
}

export function UiTile({ label, value }) {
  return (
    <div className="grid gap-1 rounded-[10px] border border-line bg-bg-subtle p-3">
      <span className="text-[0.7rem] uppercase tracking-[0.05em] text-muted-2">{label}</span>
      <b className="font-display text-[1.15rem] tracking-tight text-ink">{value}</b>
      <Spark />
    </div>
  );
}

export function UiTable({ head, rows }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-line">
      <div className="grid grid-cols-[1.4fr_1fr_0.8fr] gap-3 border-b border-line bg-bg-subtle px-4 py-2.5 text-[0.7rem] uppercase tracking-[0.06em] text-muted-2">
        {head.map((h) => <span key={h}>{h}</span>)}
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className={`grid grid-cols-[1.4fr_1fr_0.8fr] items-center gap-3 px-4 py-2.5 text-[0.8125rem] text-ink-2 ${
            i < rows.length - 1 ? 'border-b border-line' : ''
          }`}
        >
          {row.map((cell, j) => <span key={j}>{cell}</span>)}
        </div>
      ))}
    </div>
  );
}

export function UiDash({ tiles, table }) {
  return (
    <div className="grid gap-3.5" aria-hidden="true">
      {tiles && (
        <div className="grid grid-cols-3 gap-3">
          {tiles.map((t) => <UiTile key={t.label} {...t} />)}
        </div>
      )}
      {table && <UiTable {...table} />}
    </div>
  );
}

export function UiPhone({ messages }) {
  return (
    <div className="mx-auto w-[212px] rounded-[26px] border border-line bg-white p-3 shadow-sm" aria-hidden="true">
      <div className="grid min-h-[290px] content-start gap-3 rounded-[20px] bg-bg-subtle px-3.5 pb-5 pt-4">
        <div className="mx-auto mb-2 h-1.5 w-[64px] rounded-full bg-line-strong" />
        {messages.map((m, i) => (
          <div className={`ui-msg ${m.from === 'out' ? 'out' : 'in'}`} key={i}>{m.text}</div>
        ))}
      </div>
    </div>
  );
}

export function UiFlow({ children }) {
  return <div className="grid gap-3" aria-hidden="true">{children}</div>;
}

export function UiFlowNode({ icon, title, meta, badge }) {
  return (
    <div className="flex items-center gap-3 rounded-[10px] border border-line bg-white px-4 py-3.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px] bg-brand-soft text-brand">
        {icon}
      </span>
      <div className="grid gap-0.5">
        <b className="text-[0.875rem] font-semibold tracking-tight text-ink">{title}</b>
        <span className="text-xs text-muted-2">{meta}</span>
      </div>
      {badge && <span className="ml-auto">{badge}</span>}
    </div>
  );
}

export function FlowConnector() {
  return <div className="flow-connector" />;
}

export { Badge };
