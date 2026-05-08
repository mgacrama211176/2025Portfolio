import { STRENGTHS } from "../portfolioData";

export default function Strengths() {
  return (
    <section id="strengths" className="wrap py-[clamp(64px,9vw,160px)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-6 mb-[clamp(36px,5vw,72px)]">
        <span className="font-mono text-xs text-ink-3 tracking-wider">02 / strengths</span>
        <span className="font-mono text-xs text-ink-3 tracking-wider">what i bring</span>
      </div>
      <h2 className="reveal-h font-block text-[clamp(40px,8vw,160px)] leading-[0.95] tracking-[-0.02em] uppercase text-center mb-[clamp(36px,5vw,72px)] text-ink">
        what i&apos;m <span className="text-accent">good at</span>
      </h2>

      <div className="grid grid-cols-3 max-[1024px]:grid-cols-2 max-[540px]:grid-cols-1 gap-px bg-rule border border-rule rounded-lg overflow-hidden">
        {STRENGTHS.map((s) => (
          <div
            key={s.n}
            className="fade-up bg-bg px-[clamp(20px,2.5vw,36px)] py-[clamp(24px,3vw,44px)] transition-colors hover:bg-bg-2"
          >
            <div className="font-mono text-[11px] text-accent tracking-wider mb-7">{s.n}</div>
            <h4 className="font-block text-[clamp(20px,calc(0.5vw+17px),28px)] uppercase tracking-tight leading-[1.05] mb-3.5 text-ink">
              {s.title}
            </h4>
            <p className="text-[clamp(13px,calc(0.3vw+11px),17px)] leading-relaxed text-ink-2">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
