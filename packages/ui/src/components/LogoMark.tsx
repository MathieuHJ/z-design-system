import type { CSSProperties } from "react";

export type LogoMarkProps = {
  src?: string;
  mode?: "hero" | "shell";
  style?: CSSProperties;
};

export function LogoMark({
  src = "/assets/logo-v2.svg",
  mode = "hero",
  style
}: LogoMarkProps) {
  const size = mode === "hero" ? 72 : 36;
  const height = mode === "hero" ? 72 : 52;
  const imgWidth = mode === "hero" ? 42 : 28;
  const imgHeight = mode === "hero" ? 58 : 40;

  return (
    <div
      style={{
        width: size,
        height,
        display: "grid",
        placeItems: "center",
        padding: mode === "hero" ? 14 : 0,
        borderRadius: mode === "hero" ? 22 : 0,
        background: mode === "hero" ? "rgba(255,255,255,0.025)" : "transparent",
        border: mode === "hero" ? "1px solid var(--zds-line)" : "0",
        ...style
      }}
    >
      <img src={src} alt="Z logo" style={{ width: imgWidth, height: imgHeight, objectFit: "contain" }} />
    </div>
  );
}
