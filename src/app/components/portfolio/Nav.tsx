"use client";

import { useEffect, useRef, useState } from "react";

const SUN_PATH =
  '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>';
const MOON_PATH = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#strengths", label: "strengths" },
  { href: "#work", label: "work" },
  { href: "#exp", label: "journey" },
  { href: "#stack", label: "stack" },
];

export default function Nav() {
  const iconRef = useRef<SVGSVGElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    syncIcon();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function syncIcon() {
    const t = document.documentElement.getAttribute("data-theme") as
      | "light"
      | "dark"
      | null;
    if (iconRef.current)
      iconRef.current.innerHTML = t === "dark" ? SUN_PATH : MOON_PATH;
  }

  function toggleTheme() {
    const c = document.documentElement.getAttribute("data-theme") as
      | "light"
      | "dark"
      | null;
    const next = c === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    syncIcon();
  }

  return (
    <>
      <nav
        id="nav"
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-md backdrop-saturate-150 bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)] border-b border-transparent transition-colors"
      >
        <div className="flex items-center justify-between gap-4 mx-auto w-full max-w-[1440px] px-[clamp(20px,3vw,48px)] py-[clamp(14px,1.4vw,22px)]">
          <a
            href="#top"
            aria-label="marlon gacrama"
            className="inline-flex items-center gap-2.5"
            onClick={() => setMenuOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo2.png"
              alt="marlon gacrama"
              className="logo-light h-[clamp(26px,2.2vw,36px)] w-auto transition-opacity"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="marlon gacrama"
              className="logo-dark h-[clamp(26px,2.2vw,36px)] w-auto transition-opacity"
            />
          </a>
          <div className="hidden min-[761px]:flex gap-[clamp(20px,2vw,36px)] text-[clamp(13px,calc(0.2vw+12px),16px)] text-ink-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full border border-rule bg-transparent text-ink cursor-pointer flex items-center justify-center transition-colors hover:border-ink"
            >
              <svg
                ref={iconRef}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
            <a
              href="#contact"
              className="nav-cta px-[18px] py-2 rounded-full bg-ink text-bg text-[clamp(13px,calc(0.2vw+12px),16px)] font-medium whitespace-nowrap transition-colors hover:bg-accent hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              say hi
            </a>
            <button
              type="button"
              className="nav-menu-btn w-9 h-9 rounded-full border border-rule bg-transparent text-ink cursor-pointer items-center justify-center transition-colors hover:border-ink"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="nav-mobile"
              aria-label="Toggle menu"
            >
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="nav-mobile"
        className={`nav-mobile fixed top-0 inset-x-0 bg-bg pt-[88px] px-6 pb-8 flex flex-col gap-1 border-b border-rule z-[49] ${menuOpen ? "open" : ""}`}
      >
        {[...LINKS, { href: "#contact", label: "contact" }].map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="font-block uppercase text-[clamp(28px,7vw,44px)] py-3.5 text-ink border-b border-rule tracking-tight transition-[color,padding-left] last:border-0 hover:text-accent hover:pl-2 focus-visible:text-accent focus-visible:pl-2"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
