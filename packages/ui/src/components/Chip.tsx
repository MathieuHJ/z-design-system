import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ChipProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
  }
>;

export function Chip({ active = false, children, style, ...props }: ChipProps) {
  return (
    <button
      {...props}
      style={{
        height: 46,
        padding: "0 18px",
        borderRadius: 8,
        border: active ? "0" : "1px solid var(--zds-line)",
        background: active ? "rgba(171,226,182,0.95)" : "rgba(255,255,255,0.02)",
        color: active ? "#0b0b0b" : "var(--zds-muted)",
        font: "inherit",
        ...style
      }}
    >
      {children}
    </button>
  );
}
