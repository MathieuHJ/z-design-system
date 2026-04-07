import type { HTMLAttributes, PropsWithChildren } from "react";

type MicroBadgeTone = "default" | "mint" | "gold";

export type MicroBadgeProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    tone?: MicroBadgeTone;
  }
>;

export function MicroBadge({
  tone = "default",
  children,
  style,
  ...props
}: MicroBadgeProps) {
  const dot =
    tone === "mint"
      ? "var(--zds-mint)"
      : tone === "gold"
        ? "var(--zds-gold)"
        : "rgba(255,255,255,0.4)";

  return (
    <span
      {...props}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 12px",
        borderRadius: 999,
        border: "1px solid var(--zds-line)",
        background: "rgba(255,255,255,0.02)",
        color: "rgba(245,245,240,0.78)",
        ...style
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 7,
          height: 7,
          borderRadius: 999,
          background: dot,
          flex: "0 0 auto"
        }}
      />
      {children}
    </span>
  );
}
