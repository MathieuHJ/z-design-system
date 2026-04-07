import type { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

export type StatTileProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    label: ReactNode;
    value: ReactNode;
  }
>;

export function StatTile({ label, value, children, style, ...props }: StatTileProps) {
  return (
    <div
      {...props}
      style={{
        display: "grid",
        gap: 8,
        padding: 22,
        borderRadius: 18,
        border: "1px solid var(--zds-line-soft)",
        background: "rgba(255,255,255,0.02)",
        ...style
      }}
    >
      <span style={{ color: "rgba(245,245,240,0.7)", fontSize: 14 }}>{label}</span>
      <strong
        style={{
          color: "var(--zds-text)",
          fontFamily: '"Space Grotesk", "Instrument Sans", sans-serif',
          fontSize: "1.28rem",
          lineHeight: 1,
          letterSpacing: "-0.03em"
        }}
      >
        {value}
      </strong>
      {children}
    </div>
  );
}
