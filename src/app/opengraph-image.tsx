import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          color: "#0a0a0a",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -160,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,87,34,0.35), rgba(255,87,34,0) 70%)",
            filter: "blur(40px)",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            fontFamily: "monospace",
            color: "#666",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#ff5722",
              }}
            />
            open for work · cebu, ph
          </span>
          <span>vol. 03 — 2026/27</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              fontFamily: "monospace",
              color: "#666",
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            i am a —
          </div>
          <div
            style={{
              fontSize: 168,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: -3,
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>full-stack</span>
            <span style={{ color: "#ff5722" }}>ai engineer</span>
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#3d3d3d",
              marginTop: 36,
              maxWidth: 880,
              lineHeight: 1.35,
            }}
          >
            marlon gacrama jr — building agentic systems, voice agents, and end-to-end web products from cebu, philippines.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            fontFamily: "monospace",
            color: "#888",
          }}
        >
          <span>marlongacrama.com</span>
          <span style={{ color: "#0a0a0a" }}>currently building · aeva.ai · cargo atlanta</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
