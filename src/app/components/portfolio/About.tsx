export default function About() {
  return (
    <section id="about" className="wrap py-[clamp(64px,9vw,160px)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-6 mb-[clamp(36px,5vw,72px)]">
        <span className="font-mono text-xs text-ink-3 tracking-wider">
          01 / about
        </span>
        <span className="font-mono text-xs text-ink-3 tracking-wider">
          vol. 03 — 2026/27
        </span>
      </div>
      <h2 className="reveal-h font-block text-[clamp(40px,8vw,160px)] leading-[0.95] tracking-[-0.02em] uppercase text-center mb-[clamp(36px,5vw,72px)] text-ink">
        about <span className="text-accent">the dev</span>
      </h2>
      <div className="grid grid-cols-1 max-[900px]:gap-12 min-[901px]:grid-cols-[1fr_1.2fr] min-[901px]:gap-[clamp(40px,6vw,96px)] items-center">
        <div className="about-photo relative aspect-[4/5] bg-bg-2 rounded-lg overflow-hidden max-[900px]:max-w-[360px] max-[900px]:justify-self-center min-[901px]:justify-self-stretch">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about.jpg"
            alt="marlon at work"
            className="w-full h-[110%] object-cover will-change-transform"
          />
          <span className="absolute bottom-4 left-4 font-mono text-[11px] text-white tracking-wider uppercase bg-black/55 px-2.5 py-1.5 rounded-full backdrop-blur-sm">
            cebu · 2025
          </span>
        </div>
        <div className="space-y-6 [&_p]:max-w-[56ch] [&_p]:text-[clamp(16px,calc(0.5vw+13px),22px)] [&_p]:leading-relaxed [&_p]:text-ink-2 [&_strong]:font-medium [&_strong]:text-ink [&_em]:font-display [&_em]:italic [&_em]:text-accent [&_em]:text-[1.1em]">
          <p className="fade-up">
            Hey — i&apos;m <strong>marlon gacrama jr.</strong>, a full-stack
            &amp; ai engineer from the philippines. i&apos;ve been writing code
            since my third year of college, taking on capstone projects for
            classmates and slowly turning a one-man freelance habit into a full
            career.
          </p>
          <p className="fade-up">
            my path went{" "}
            <strong>
              freelance → accenture (automation intern) → staff outsourcing
              solutions → kreativ kat (technical head)
            </strong>
            . along the way i picked up the full web stack, then mobile, then
            the agency-scale chaos of shipping products under deadline pressure.
          </p>
          <p className="fade-up">
            in 2025 i went deep on <em>agentic ai</em> — voice receptionists,
            chat agents, retrieval, and the orchestration glue that ties them to
            real backends. my bread &amp; butter is still{" "}
            <strong>next.js, node, postgres</strong>, but most of my time now
            goes to designing systems that don&apos;t just demo well — they{" "}
            <em>ship</em>.
          </p>
        </div>
      </div>
    </section>
  );
}
