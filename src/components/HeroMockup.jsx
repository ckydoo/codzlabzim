import { Sparkles, TrendingUp, Shield, Clock } from './Icons.jsx';

function MetricChip({ icon, children }) {
  return (
    <div className="flex items-center gap-2 rounded-[8px] border border-line bg-white px-3 py-2 text-[0.8125rem] font-medium text-ink-2">
      <span className="text-brand">{icon}</span>
      {children}
    </div>
  );
}

/** Hero product visual: clean browser frame + live metrics strip. */
export default function HeroMockup() {
  return (
    <div className="relative">
      {/* Browser frame */}
      <div
        className="overflow-hidden rounded-card border border-line bg-white shadow-md"
        role="img"
        aria-label="Illustration of a CodzLabZim-built analytics dashboard"
      >
        <div className="flex items-center gap-3 border-b border-line bg-bg-subtle px-4 py-2.5">
          <div className="flex gap-1.5">
            <i className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <i className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <i className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </div>
          <div className="mx-auto max-w-[240px] flex-1 rounded-md border border-line bg-white px-4 py-1 text-center text-[0.72rem] text-muted-2">
            app.codzlabzim.co.zw
          </div>
        </div>

        <div className="grid min-h-[300px] grid-cols-[52px_1fr] max-sm:grid-cols-1">
          <div className="grid content-start justify-items-center gap-3 border-r border-line py-4 max-sm:hidden">
            <i className="h-[26px] w-[26px] rounded-[7px] bg-brand" />
            <i className="h-[26px] w-[26px] rounded-[7px] bg-bg-muted" />
            <i className="h-[26px] w-[26px] rounded-[7px] bg-bg-muted" />
            <i className="h-[26px] w-[26px] rounded-[7px] bg-bg-muted" />
          </div>

          <div className="grid content-start gap-4 p-5">
            <div className="grid gap-1">
              <strong className="font-display text-[1rem] tracking-tight text-ink">Good morning, Tendai 👋</strong>
              <span className="text-[0.78rem] text-muted-2">Here's what your business did this week</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {[
                ['Revenue', '$48.2k', '▲ 23.4%'],
                ['Orders', '1,924', '▲ 11.8%'],
                ['Automated', '87%', '▲ 6.2%'],
              ].map(([k, v, up]) => (
                <div key={k} className="grid gap-1 rounded-[10px] border border-line bg-white p-3">
                  <span className="text-[0.68rem] uppercase tracking-[0.05em] text-muted-2">{k}</span>
                  <b className="font-display text-[1.05rem] tracking-tight text-ink">{v}</b>
                  <span className="text-[0.7rem] font-medium text-success-text">{up}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-3 rounded-[10px] border border-line bg-white p-3.5">
              <div className="flex items-center justify-between text-[0.76rem] text-muted">
                <span>Performance overview</span>
                <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-medium text-success-text">
                  <i className="h-[6px] w-[6px] rounded-full bg-success animate-pulse-dot" />
                  Live
                </span>
              </div>
              <div className="chart-bars flex h-20 items-end gap-2">
                <i /><i /><i /><i /><i /><i /><i />
              </div>
            </div>

            {/* AI assistant row - product content inside the product visual */}
            <div className="flex items-start gap-2.5 rounded-[10px] border border-brand/20 bg-brand-soft px-3.5 py-3">
              <Sparkles size={15} className="mt-0.5 shrink-0 text-brand" />
              <div className="grid gap-1">
                <b className="text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-brand">
                  CodzLabZim AI
                </b>
                <p className="text-[0.78rem] leading-snug text-ink-2">
                  3 follow-ups drafted, 2 reports generated - your team just saved 6 hours.
                </p>
                <div className="typing flex h-2.5 items-center gap-1"><i /><i /><i /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof metrics strip */}
      <div className="mt-4 flex flex-wrap gap-3">
        <MetricChip icon={<TrendingUp size={15} />}>+230% growth</MetricChip>
        <MetricChip icon={<Shield size={15} />}>99.9% uptime</MetricChip>
        <MetricChip icon={<Clock size={15} />}>Shipped in 6 weeks</MetricChip>
      </div>
    </div>
  );
}
