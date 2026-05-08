type Card = {
  shot: string;
  v: string;
  yr: string;
  title: string;
  desc: React.ReactNode;
  tools: string[];
  visit: React.ReactNode;
  current?: boolean;
};

const CARDS: Card[] = [
  {
    shot: "/images/v1-screenshot.png",
    v: "v.01",
    yr: "2022",
    title: "the splash era",
    desc: "a single screen with my name big and orange. straight html/css, a static portrait, and zero scrolling.",
    tools: ["html", "css", "vanilla js"],
    visit: <span>offline · archived</span>,
  },
  {
    shot: "/images/v2-screenshot.png",
    v: "v.02",
    yr: "2023 — marlong.vercel.app",
    title: "the framework era",
    desc: "next.js, dark theme, geometric mark, animated sections. the one i shipped to land freelance work.",
    tools: ["next.js", "tailwind", "framer motion"],
    visit: (
      <a href="https://marlong.vercel.app/" target="_blank" rel="noopener" className="hover:text-accent">
        visit live ↗
      </a>
    ),
  },
  {
    shot: "/images/v3-screenshot.png",
    v: "v.03",
    yr: "2026 — this site",
    title: "the ai-native era",
    desc: (
      <>
        built with claude as a co-pilot. simple, modern, white &amp; orange — and it ships with its own agent that knows my work.
      </>
    ),
    tools: ["claude", "gsap", "ai agent"],
    visit: <span>you&apos;re here ●</span>,
    current: true,
  },
];

export default function Evolution() {
  return (
    <section id="evo" className="wrap py-[clamp(64px,9vw,160px)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-6 mb-[clamp(36px,5vw,72px)]">
        <span className="font-mono text-xs text-ink-3 tracking-wider">06 / evolution</span>
        <span className="font-mono text-xs text-ink-3 tracking-wider">three portfolios</span>
      </div>
      <h2 className="reveal-h font-block text-[clamp(40px,8vw,160px)] leading-[0.95] tracking-[-0.02em] uppercase text-center mb-[clamp(36px,5vw,72px)] text-ink">
        three <span className="text-accent">versions</span>, four years
      </h2>

      <div className="grid grid-cols-3 max-[1024px]:grid-cols-2 max-[800px]:grid-cols-1 gap-[clamp(20px,2.5vw,40px)]">
        {CARDS.map((c) => {
          const dark = c.current;
          return (
            <article
              key={c.v}
              className={`fade-up rounded-lg overflow-hidden flex flex-col transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] ${dark ? "bg-ink text-bg" : "bg-bg-2"}`}
            >
              <div
                className={`aspect-[16/10] bg-cover bg-top border-b ${dark ? "border-white/10" : "border-rule"}`}
                style={{ backgroundImage: `url('${c.shot}')` }}
              />
              <div className="p-6 pb-7 flex flex-col flex-1">
                <div className="font-display italic text-4xl leading-none text-accent mb-1">{c.v}</div>
                <div className="font-mono text-[11px] text-ink-3 mb-6">{c.yr}</div>
                <h3 className="text-[clamp(17px,calc(0.4vw+14px),22px)] font-medium tracking-tight m-0 mb-2.5">{c.title}</h3>
                <p className={`text-[clamp(13px,calc(0.2vw+12px),16px)] leading-relaxed m-0 mb-4 ${dark ? "text-[#c8c8c8]" : "text-ink-2"}`}>
                  {c.desc}
                </p>
                <ul className="list-none p-0 m-0 flex flex-wrap gap-x-2 gap-y-1">
                  {c.tools.map((t) => (
                    <li key={t} className={`font-mono text-[11px] ${dark ? "text-[#888]" : "text-ink-3"}`}>
                      {t}
                    </li>
                  ))}
                </ul>
                <div
                  className={`inline-flex items-center gap-1.5 mt-auto pt-4 font-mono text-[11px] tracking-wider lowercase ${dark ? "text-[#888]" : "text-ink-3"}`}
                >
                  {c.visit}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
