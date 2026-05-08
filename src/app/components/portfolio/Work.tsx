import { PROJECTS } from "../portfolioData";

export default function Work() {
  return (
    <section id="work" className="wrap py-[clamp(64px,9vw,160px)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-6 mb-[clamp(36px,5vw,72px)]">
        <span className="font-mono text-xs text-ink-3 tracking-wider">03 / selected work</span>
        <span className="font-mono text-xs text-ink-3 tracking-wider">{PROJECTS.length} projects</span>
      </div>
      <h2 className="reveal-h font-block text-[clamp(40px,8vw,160px)] leading-[0.95] tracking-[-0.02em] uppercase text-center mb-[clamp(36px,5vw,72px)] text-ink">
        selected <span className="text-accent">work</span>
      </h2>
      <div className="grid grid-cols-2 max-[760px]:grid-cols-1 max-[760px]:gap-10 gap-x-[clamp(24px,3vw,40px)] gap-y-[clamp(36px,4vw,56px)]">
        {PROJECTS.map((p, idx) => (
          <article key={idx} className="fade-up cursor-pointer group">
            <div className="aspect-[16/10] bg-bg-2 rounded-md overflow-hidden mb-5">
              <div
                className={`w-full h-full bg-cover bg-top transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04]${p.image ? "" : " flex items-center justify-center text-ink-3 font-mono text-xs"}`}
                style={
                  p.image
                    ? { backgroundImage: `url('${p.image}')` }
                    : {
                        background:
                          "linear-gradient(45deg, var(--color-bg-2) 49%, var(--color-rule) 49%, var(--color-rule) 51%, var(--color-bg-2) 51%)",
                        backgroundSize: "14px 14px",
                      }
                }
              >
                {p.image ? "" : "— preview —"}
              </div>
            </div>
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h3
                className="text-[clamp(18px,calc(0.5vw+15px),24px)] font-medium tracking-tight m-0 [&_em]:font-display [&_em]:italic [&_em]:font-normal [&_em]:text-accent"
                dangerouslySetInnerHTML={{ __html: p.title }}
              />
              <div className="font-mono text-xs text-ink-3 whitespace-nowrap">{p.yr}</div>
            </div>
            <p className="text-[clamp(13px,calc(0.3vw+11px),17px)] leading-relaxed text-ink-2 mb-3 max-w-[50ch]">
              {p.desc}
            </p>
            <div className="work-stack flex flex-wrap gap-1.5">
              {p.stack.map((s, i) => (
                <span key={i} className="font-mono text-[11px] text-ink-3">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
