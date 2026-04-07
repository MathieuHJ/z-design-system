import type { HTMLAttributes, ReactNode } from "react";

export type PositionStat = {
  label: ReactNode;
  value: ReactNode;
};

export type PositionCardProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  statusIndicator?: ReactNode;
  stats: PositionStat[];
  footer?: ReactNode;
};

export function PositionCard({
  eyebrow,
  title,
  statusIndicator,
  stats,
  footer,
  style,
  ...props
}: PositionCardProps) {
  return (
    <article
      {...props}
      style={{
        display: "grid",
        gap: 28,
        padding: "34px 30px",
        borderRadius: 24,
        border: "1px solid var(--zds-line)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0)), rgba(14,14,14,0.52)",
        ...style
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 20, alignItems: "start" }}>
        <div style={{ display: "grid", gap: 10 }}>
          {eyebrow ? <span style={{ color: "var(--zds-mint)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>{eyebrow}</span> : null}
          <h3
            style={{
              margin: 0,
              color: "var(--zds-text)",
              fontFamily: '"Space Grotesk", "Instrument Sans", sans-serif',
              fontSize: "1.45rem",
              lineHeight: 1.12,
              letterSpacing: "-0.03em"
            }}
          >
            {title}
          </h3>
        </div>
        {statusIndicator}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "22px 28px"
        }}
      >
        {stats.map((stat, index) => (
          <div key={index} style={{ display: "grid", gap: 8 }}>
            <strong
              style={{
                color: "var(--zds-text)",
                fontFamily: '"Space Grotesk", "Instrument Sans", sans-serif',
                fontSize: "1.28rem",
                lineHeight: 1,
                letterSpacing: "-0.03em"
              }}
            >
              {stat.value}
            </strong>
            <span style={{ color: "rgba(245,245,240,0.7)" }}>{stat.label}</span>
          </div>
        ))}
      </div>
      {footer ? (
        <div style={{ paddingTop: 22, borderTop: "1px solid var(--zds-line-soft)" }}>{footer}</div>
      ) : null}
    </article>
  );
}
