import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type AssetPillProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function AssetPill({ children, style, ...props }: AssetPillProps) {
  return (
    <button
      {...props}
      style={{
        height: 48,
        padding: "0 20px",
        borderRadius: 999,
        border: "1px solid var(--zds-line)",
        background: "rgba(255,255,255,0.04)",
        color: "var(--zds-text)",
        font: "inherit",
        letterSpacing: "0.01em",
        ...style
      }}
    >
      {children}
    </button>
  );
}
