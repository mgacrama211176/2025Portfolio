import { STACK } from "../portfolioData";

export default function Stack() {
  return (
    <section id="stack" className="wrap py-[clamp(64px,9vw,160px)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-6 mb-[clamp(36px,5vw,72px)]">
        <span className="font-mono text-xs text-ink-3 tracking-wider">05 / stack</span>
        <span className="font-mono text-xs text-ink-3 tracking-wider">tools i reach for</span>
      </div>
      <h2 className="reveal-h font-block text-[clamp(40px,8vw,160px)] leading-[0.95] tracking-[-0.02em] uppercase text-center mb-[clamp(36px,5vw,72px)] text-ink">
        my <span className="text-accent">tech stack</span>
      </h2>

      <div>
        {STACK.map((row, i) => (
          <div
            key={row.label}
            className={`stack-row fade-up grid grid-cols-[clamp(160px,18vw,240px)_1fr] max-[800px]:grid-cols-1 gap-[clamp(24px,4vw,72px)] max-[800px]:gap-3 py-[clamp(20px,2.5vw,32px)] border-b border-rule items-baseline ${i === 0 ? "border-t" : ""}`}
          >
            <h4 className="font-display italic text-[clamp(20px,calc(0.5vw+17px),30px)] font-normal m-0 tracking-tight text-ink">
              {row.label}
            </h4>
            <ul className="list-none p-0 m-0 flex flex-wrap gap-y-1">
              {row.items.map((item) => (
                <li
                  key={item}
                  className="text-[clamp(14px,calc(0.3vw+12px),18px)] text-ink transition-colors hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
