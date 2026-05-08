"use client";

import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    const fill = document.getElementById("alFill");
    const pct = document.getElementById("alPct");
    const sub = document.getElementById("alSub");
    const loader = document.getElementById("agentLoader");
    if (!fill || !pct || !sub || !loader) return;

    const steps = [
      "booting marlon.agent",
      "fetching projects.json",
      "indexing experience",
      "warming up the chat agent",
      "almost there",
    ];
    let p = 0;
    let i = 0;
    sub.textContent = steps[0] + " · please wait";
    const tick = setInterval(() => {
      p += 1.4 + Math.random() * 2.2;
      if (p >= 100) p = 100;
      fill.style.width = p + "%";
      pct.textContent = Math.floor(p) + "%";
      const next = Math.floor((p / 100) * steps.length);
      if (next !== i && next < steps.length) {
        i = next;
        sub.textContent = steps[i] + " · please wait";
      }
      if (p >= 100) {
        clearInterval(tick);
        sub.textContent = "agents online · welcome";
        setTimeout(() => {
          loader.classList.add("gone");
          setTimeout(() => loader.remove(), 700);
        }, 700);
      }
    }, 110);

    return () => clearInterval(tick);
  }, []);

  return (
    <div id="agentLoader" className="agent-loader" aria-hidden="true">
      <div className="al-inner">
        <div className="al-robot" aria-hidden="true">
          <div className="al-screen">
            <span className="al-bar al-bar-1" />
            <span className="al-bar al-bar-2" />
            <span className="al-bar al-bar-3" />
          </div>
          <div className="al-antenna" />
          <div className="al-body">
            <div className="al-eye al-eye-l" />
            <div className="al-eye al-eye-r" />
            <div className="al-mouth" />
          </div>
          <div className="al-arm al-arm-l" />
          <div className="al-arm al-arm-r" />
          <div className="al-desk">
            <span className="al-key" />
            <span className="al-key" />
            <span className="al-key" />
            <span className="al-key" />
            <span className="al-key" />
            <span className="al-key" />
          </div>
          <span className="al-dot al-dot-1" />
          <span className="al-dot al-dot-2" />
          <span className="al-dot al-dot-3" />
        </div>

        <div className="al-text">
          <div className="al-status">
            <span className="al-led w-[7px] h-[7px] rounded-full" /> agents.online
          </div>
          <div className="al-headline">
            agents working on my portfolio
            <span className="al-ellipsis">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </div>
          <div id="alSub" className="al-sub">
            booting marlon.agent · please wait
          </div>
          <div className="al-progress">
            <span id="alFill" />
          </div>
          <div className="al-meta">
            <span id="alPct">0%</span>
            <span className="al-blink">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
