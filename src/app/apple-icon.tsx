import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial Black, sans-serif",
          fontSize: 130,
          fontWeight: 900,
          letterSpacing: -3,
          position: "relative",
        }}
      >
        m
        <span
          style={{
            position: "absolute",
            right: 30,
            top: 96,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#ff5722",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
