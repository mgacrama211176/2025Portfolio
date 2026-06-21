"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("n") ?? ""),
      email: String(data.get("e") ?? ""),
      message: String(data.get("m") ?? ""),
    };

    setStatus("sending");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error || "send failed");
      }
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 2400);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "send failed");
      setTimeout(() => setStatus("idle"), 3200);
    }
  }

  const inputCls =
    "bg-bg border border-rule rounded-md px-4 py-3 text-[clamp(14px,calc(0.2vw+13px),17px)] font-sans text-ink outline-none focus:border-ink";
  const labelCls = "font-mono text-[11px] text-ink-3";

  return (
    <section id="contact" className="bg-bg-2 py-[clamp(64px,9vw,160px)]">
      <div className="wrap">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-6 mb-[clamp(36px,5vw,72px)]">
          <span className="font-mono text-xs text-ink-3 tracking-wider">
            08 / contact
          </span>
          <span className="font-mono text-xs text-ink-3 tracking-wider">
            replies in &lt;24h
          </span>
        </div>
        <div className="grid grid-cols-2 max-[800px]:grid-cols-1 gap-[clamp(40px,6vw,96px)] max-[800px]:gap-12 items-start">
          <div>
            <h2 className="reveal-h font-medium tracking-[-0.03em] leading-[1.05] text-[clamp(36px,5vw,76px)] max-w-[18ch] mb-8 [&_em]:font-display [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
              have an <em>ai idea</em>? let&apos;s ship it.
            </h2>
            <p className="fade-up text-[clamp(16px,calc(0.5vw+13px),22px)] text-ink-2 leading-relaxed max-w-[50ch] mb-[clamp(28px,4vw,56px)]">
              agentic systems, voice agents, rag, or a straight-up web build —
              my inbox is open for freelance and full-time.
            </p>

            <div className="fade-up grid gap-4">
              {[
                {
                  k: "email",
                  v: "maruronu@gmail.com",
                  href: "mailto:maruronu@gmail.com",
                },
                {
                  k: "phone",
                  v: "+63 939 681 0206",
                  href: "tel:+639396810206",
                },
                { k: "based", v: "cebu city, ph" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="grid grid-cols-[80px_1fr] gap-4 py-4 border-b border-rule items-center"
                >
                  <span className="font-mono text-[11px] text-ink-3 lowercase">
                    {row.k}
                  </span>
                  {row.href ? (
                    <a
                      className="text-[clamp(15px,calc(0.3vw+13px),19px)] font-medium transition-colors hover:text-accent"
                      href={row.href}
                    >
                      {row.v}
                    </a>
                  ) : (
                    <span className="text-[clamp(15px,calc(0.3vw+13px),19px)] font-medium">
                      {row.v}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <a
              className="contact-cv fade-up flex items-center justify-between px-6 py-5 mt-6 bg-ink text-bg rounded-xl transition-colors hover:bg-accent"
              href="/Marlon_Gacrama_CV.pdf"
              download
            >
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-70 mb-1">
                  for recruiters
                </span>
                <span className="text-[clamp(16px,calc(0.4vw+14px),22px)] font-medium">
                  download cv ↓
                </span>
              </div>
              <span className="font-mono text-[11px] opacity-70">
                pdf · 2026
              </span>
            </a>
          </div>

          <form className="fade-up grid gap-3.5" onSubmit={handleSubmit}>
            <div className="grid gap-1.5">
              <label htmlFor="n" className={labelCls}>
                name
              </label>
              <input
                id="n"
                name="n"
                type="text"
                placeholder="your name"
                required
                maxLength={200}
                className={inputCls}
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="e" className={labelCls}>
                email
              </label>
              <input
                id="e"
                name="e"
                type="email"
                placeholder="you@domain.com"
                required
                maxLength={200}
                className={inputCls}
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="m" className={labelCls}>
                message
              </label>
              <textarea
                id="m"
                name="m"
                placeholder="what are you building?"
                required
                maxLength={5000}
                className={`${inputCls} min-h-[120px] resize-y`}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className={`mt-1 px-5 py-3.5 text-bg border-none rounded-full text-sm font-medium font-sans cursor-pointer disabled:opacity-60 disabled:cursor-wait ${
                status === "sent"
                  ? "bg-[#29c46f]"
                  : status === "error"
                  ? "bg-[#c4392f]"
                  : "bg-ink"
              }`}
            >
              {status === "sending"
                ? "sending…"
                : status === "sent"
                ? "sent ✓"
                : status === "error"
                ? "try again"
                : "send →"}
            </button>
            {status === "error" && errorMsg && (
              <p className="font-mono text-[11px] text-[#c4392f] m-0">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
