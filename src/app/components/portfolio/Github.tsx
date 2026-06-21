"use client";

import { cloneElement, useEffect, useState } from "react";
import { ActivityCalendar, type Activity } from "react-activity-calendar";

const USERNAME = "mgacrama211176";
const PROFILE_URL = `https://github.com/${USERNAME}`;
// token-free public contributions source (the same endpoint react-github-calendar uses);
// `y=last` returns the trailing 12 months. Fetched client-side, so it never blocks SSR.
const API_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;

// zero → max activity colors per scheme; the lib interpolates the middle levels.
// hexes mirror --color-rule / --color-accent in globals.css (SVG fills can't read CSS vars).
const THEME = {
  light: ["#ececec", "#ff5722"],
  dark: ["#1f1f1f", "#ff6b3d"],
};

const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

type State =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; data: Activity[]; total: number };

export default function Github() {
  const [state, setState] = useState<State>({ status: "loading" });
  const [scheme, setScheme] = useState<"light" | "dark">("light");

  // the calendar's skeleton depends on client-only signals (matchMedia, injected
  // animation CSS, today's date), so it must not render until after hydration — the
  // page is statically prerendered, so SSR output would otherwise diverge and throw.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // mirror the site's manual theme toggle (data-theme on <html>) instead of the OS scheme
  useEffect(() => {
    const read = () =>
      setScheme(
        document.documentElement.dataset.theme === "dark" ? "dark" : "light",
      );
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let active = true;
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json() as Promise<{
          total: Record<string, number>;
          contributions: Activity[];
        }>;
      })
      .then(({ total, contributions }) => {
        if (active)
          setState({
            status: "ready",
            data: contributions,
            total: total.lastYear ?? 0,
          });
      })
      .catch(() => {
        if (active) setState({ status: "error" });
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="github" className="wrap py-[clamp(64px,9vw,160px)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-6 mb-[clamp(36px,5vw,72px)]">
        <span className="font-mono text-xs text-ink-3 tracking-wider">
          07 / github
        </span>
        <span className="font-mono text-xs text-ink-3 tracking-wider">
          last 12 months
        </span>
      </div>
      <h2 className="reveal-h font-block text-[clamp(40px,8vw,160px)] leading-[0.95] tracking-[-0.02em] uppercase text-center mb-[clamp(36px,5vw,72px)] text-ink">
        github <span className="text-accent">contributions</span>
      </h2>

      <div className="fade-up rounded-lg border border-rule bg-bg-2 p-[clamp(20px,3vw,40px)]">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-[clamp(24px,3vw,40px)]">
          <div className="text-[clamp(18px,calc(0.6vw+15px),30px)] font-medium tracking-tight text-ink [&_em]:font-display [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
            {state.status === "ready" ? (
              <>
                <em>{state.total.toLocaleString()}</em> contributions in the
                last year
              </>
            ) : state.status === "error" ? (
              "couldn’t reach github"
            ) : (
              <span className="font-normal text-ink-3">
                syncing github activity…
              </span>
            )}
          </div>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-ink-3 tracking-wider transition-colors hover:text-accent"
          >
            @{USERNAME} ↗
          </a>
        </div>

        {state.status === "error" ? (
          <p className="font-mono text-[13px] leading-relaxed text-ink-2 m-0">
            the live graph is taking a break — you can still see it{" "}
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              on github ↗
            </a>
            .
          </p>
        ) : !mounted ? (
          <div className="min-h-[150px]" aria-hidden />
        ) : (
          <ActivityCalendar
            data={state.status === "ready" ? state.data : []}
            loading={state.status === "loading"}
            colorScheme={scheme}
            theme={THEME}
            blockSize={18}
            blockMargin={4}
            blockRadius={2}
            fontSize={12}
            showTotalCount={true}
            labels={{ months: MONTHS, legend: { less: "less", more: "more" } }}
            style={{
              color: "var(--color-ink-3)",
              fontFamily: "var(--font-mono)",
            }}
            renderBlock={(block, activity) =>
              cloneElement(
                block,
                {},
                <title>
                  {`${activity.count} contribution${
                    activity.count === 1 ? "" : "s"
                  } on ${activity.date}`}
                </title>,
              )
            }
          />
        )}
      </div>
    </section>
  );
}
