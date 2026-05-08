import { ReactNode } from "react";

type RowProps = { year: string; role: ReactNode; company: string; tags: string[] };

function ExpRow({ year, role, company, tags }: RowProps) {
  return (
    <div className="fade-up grid grid-cols-[clamp(160px,18vw,240px)_1fr_auto] max-[800px]:grid-cols-[100px_1fr] gap-[clamp(20px,2.5vw,40px)] py-[clamp(20px,2.5vw,32px)] border-b border-rule items-center transition-[background-color,padding-left,padding-right] duration-300 hover:bg-bg-2 hover:px-3 max-[800px]:hover:px-0">
      <div className="font-mono text-xs text-ink-3">{year}</div>
      <div>
        <div className="text-[clamp(16px,calc(0.4vw+14px),22px)] font-medium tracking-tight [&_em]:font-display [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
          {role}
        </div>
        <div className="text-[clamp(13px,calc(0.2vw+12px),17px)] text-ink-2 mt-1">{company}</div>
      </div>
      <div className="flex flex-wrap gap-1.5 justify-end max-w-[360px] max-[800px]:col-span-full max-[800px]:justify-start max-[800px]:max-w-none">
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="exp" className="wrap py-[clamp(64px,9vw,160px)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-6 mb-[clamp(36px,5vw,72px)]">
        <span className="font-mono text-xs text-ink-3 tracking-wider">04 / experience</span>
        <span className="font-mono text-xs text-ink-3 tracking-wider">~4 years</span>
      </div>
      <h2 className="reveal-h font-block text-[clamp(40px,8vw,160px)] leading-[0.95] tracking-[-0.02em] uppercase text-center mb-[clamp(36px,5vw,72px)] text-ink">
        my <span className="text-accent">journey</span>
      </h2>

      <div className="border-t border-rule">
        <ExpRow
          year="jan 2025 — present"
          role={
            <>
              full stack web &amp; <em>ai developer</em>
            </>
          }
          company="aeva.ai · contract"
          tags={["ai voice", "react / node", "make.com"]}
        />
        <ExpRow
          year="2025 — present"
          role={
            <>
              full stack web &amp; <em>ai developer</em>
            </>
          }
          company="cargo atlanta · contract"
          tags={["ai integrations", "n8n", "replit → next.js"]}
        />

        <article className="fade-up grid grid-cols-[1.05fr_1fr] max-[800px]:grid-cols-1 gap-[clamp(32px,5vw,72px)] py-[clamp(36px,5vw,72px)] border-b border-rule items-center group">
          <div className="parallax-photo aspect-[4/3] rounded-xl overflow-hidden bg-bg-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/kk-team.jpg"
              alt="Kreativ Kat team"
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04] will-change-transform"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="self-start font-mono text-[11px] tracking-wider px-3 py-1.5 rounded-full text-accent bg-[color-mix(in_srgb,var(--color-accent)_14%,transparent)]">
              dec 2024 — 2025
            </span>
            <h3 className="text-[clamp(28px,3.2vw,56px)] leading-[1.05] tracking-[-0.02em] font-medium m-0">
              <em className="font-display italic font-normal text-accent">technical head</em>
            </h3>
            <div className="font-mono text-[13px] text-ink-3">( kreativ kat digital marketing )</div>
            <p className="text-[clamp(15px,calc(0.4vw+13px),20px)] leading-relaxed text-ink-2 m-0 max-w-[52ch]">
              led the technical side of a digital marketing agency in cebu — scoping client builds, architecting the stack, reviewing code, mentoring the team, and unblocking everyone so we could ship faster.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["team lead", "next.js", "node", "api integration", "seo"].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>

        <ExpRow
          year="2022 — now"
          role={
            <>
              <em>freelance</em> developer
            </>
          }
          company="independent · global"
          tags={["frontend", "backend", "ui/ux"]}
        />

        <article className="fade-up grid grid-cols-[1.05fr_1fr] max-[800px]:grid-cols-1 gap-[clamp(32px,5vw,72px)] py-[clamp(36px,5vw,72px)] border-b border-rule items-center group">
          <div className="flex flex-col gap-4 max-[800px]:order-2">
            <span className="self-start font-mono text-[11px] tracking-wider px-3 py-1.5 rounded-full text-accent bg-[color-mix(in_srgb,var(--color-accent)_14%,transparent)]">
              2023 — 2024
            </span>
            <h3 className="text-[clamp(28px,3.2vw,56px)] leading-[1.05] tracking-[-0.02em] font-medium m-0">
              <em className="font-display italic font-normal text-accent">full stack web developer</em>
            </h3>
            <div className="font-mono text-[13px] text-ink-3">( staff outsourcing solutions )</div>
            <p className="text-[clamp(15px,calc(0.4vw+13px),20px)] leading-relaxed text-ink-2 m-0 max-w-[52ch]">
              worked as a full stack developer at staff outsourcing solutions for a year. built and maintained client websites and applications across react, node, and mongodb stacks.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["react", "node", "express", "mongodb", "azure"].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="parallax-photo aspect-[4/3] rounded-xl overflow-hidden bg-bg-2 max-[800px]:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sos-team.jpg"
              alt="Staff Outsourcing Solutions team"
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04] will-change-transform"
            />
          </div>
        </article>

        <ExpRow
          year="2023"
          role={
            <>
              <em>intern</em> · automation
            </>
          }
          company="accenture inc."
          tags={["selenium", "salesforce", "agile"]}
        />
      </div>
    </section>
  );
}
