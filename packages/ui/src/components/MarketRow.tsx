import type { HTMLAttributes, ReactNode } from "react";

export type MarketRowProps = HTMLAttributes<HTMLDivElement> & {
  asset: ReactNode;
  assetMeta?: ReactNode;
  primaryValue: ReactNode;
  primaryLabel: ReactNode;
  secondaryValue: ReactNode;
  secondaryLabel: ReactNode;
  status?: ReactNode;
};

export function MarketRow({
  asset,
  assetMeta,
  primaryValue,
  primaryLabel,
  secondaryValue,
  secondaryLabel,
  status,
  style,
  ...props
}: MarketRowProps) {
  return (
    <div
      {...props}
      style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr auto",
        alignItems: "center",
        columnGap: 24,
        padding: "28px 0",
        borderTop: "1px solid var(--zds-line-soft)",
        ...style
      }}
    >
      <div style={{ display: "grid", gap: 8 }}>
        <strong
          style={{
            color: "var(--zds-text)",
            fontFamily: '"Space Grotesk", "Instrument Sans", sans-serif',
            fontSize: "1.28rem",
            lineHeight: 1,
            letterSpacing: "-0.03em"
          }}
        >
          {asset}
        </strong>
        {assetMeta ? <span style={{ color: "rgba(245,245,240,0.7)" }}>{assetMeta}</span> : null}
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        <strong
          style={{
            color: "var(--zds-text)",
            fontFamily: '"Space Grotesk", "Instrument Sans", sans-serif',
            fontSize: "1.28rem",
            lineHeight: 1,
            letterSpacing: "-0.03em"
          }}
        >
          {primaryValue}
        </strong>
        <span style={{ color: "rgba(245,245,240,0.7)" }}>{primaryLabel}</span>
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        <strong
          style={{
            color: "var(--zds-text)",
            fontFamily: '"Space Grotesk", "Instrument Sans", sans-serif',
            fontSize: "1.28rem",
            lineHeight: 1,
            letterSpacing: "-0.03em"
          }}
        >
          {secondaryValue}
        </strong>
        <span style={{ color: "rgba(245,245,240,0.7)" }}>{secondaryLabel}</span>
      </div>
      {status ? (
        <em style={{ justifySelf: "end", fontStyle: "normal", color: "rgba(245,245,240,0.82)" }}>
          {status}
        </em>
      ) : null}
    </div>
  );
}
