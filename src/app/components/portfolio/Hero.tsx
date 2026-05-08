export default function Hero() {
  return (
    <section
      id="top"
      className="hero wrap relative min-h-screen flex flex-col justify-between pt-[clamp(110px,13vw,120px)] pb-[clamp(48px,7vw,96px)]"
    >
      <span
        className="hero-blob pointer-events-none absolute -left-[120px] top-[80px] w-[320px] h-[320px] rounded-full -z-10"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--color-accent) 30%, transparent), transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div>
        <div className="hero-status inline-flex items-center gap-2.5 font-mono text-[clamp(12px,calc(0.2vw+11px),15px)] text-ink-2 mb-[clamp(28px,4vw,60px)]">
          <span className="dot-live w-2 h-2 rounded-full" />
          open for work · cebu, ph · gmt+8
        </div>

        <div className="grid grid-cols-1 max-[900px]:gap-10 min-[901px]:grid-cols-[1.4fr_1fr] min-[901px]:gap-14 items-center">
          <div>
            <div className="font-mono text-[13px] tracking-[0.18em] uppercase text-ink-2">
              i am a —
            </div>
            <h1 className="font-block text-[clamp(48px,6vw,160px)] leading-[0.9] tracking-[-0.02em] uppercase mt-3.5 text-ink">
              <span className="wm">
                <span>full-stack</span>
              </span>
              <br />
              <span className="wm">
                <span className="text-accent">ai engineer</span>
              </span>
            </h1>
            <p className="hero-tag mt-[clamp(28px,4vw,48px)] max-w-[56ch] text-[clamp(16px,calc(0.5vw+13px),22px)] leading-relaxed text-ink-2">
              i&apos;m{" "}
              <strong className="font-medium text-ink">
                marlon gacrama jr.
              </strong>{" "}
              — building{" "}
              <em className="font-display italic text-accent text-[1.15em]">
                agentic systems
              </em>
              , voice agents, and end-to-end web products from cebu,
              philippines.
            </p>
          </div>

          <div className="hero-portrait relative aspect-square w-full max-w-[420px] rounded-full overflow-hidden bg-bg-2 justify-self-center min-[901px]:justify-self-end shadow-[0_30px_80px_-30px_color-mix(in_srgb,var(--color-accent)_35%,transparent)] after:content-[''] after:absolute after:inset-0 after:border after:border-rule after:rounded-full after:pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dev.jpg"
              alt="marlon gacrama jr — full-stack and ai engineer based in cebu, philippines"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              width={840}
              height={840}
              className="w-full h-[110%] object-cover object-[center_30%] will-change-transform"
            />
          </div>
        </div>
      </div>

      <div className="hero-foot mt-[clamp(40px,6vw,80px)] flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
        <div className="flex flex-wrap gap-3">
          <a href="#work" className="btn btn-primary">
            see the work <span className="arrow">↗</span>
          </a>
          <a href="/Marlon_Gacrama_CV.pdf" download className="btn btn-ghost">
            download cv
          </a>
        </div>
        <div className="font-mono text-xs text-ink-3 leading-relaxed text-right max-[600px]:text-left">
          <strong className="font-medium text-ink">currently building</strong>
          <br />
          aeva.ai · cargo atlanta
        </div>
      </div>
    </section>
  );
}
