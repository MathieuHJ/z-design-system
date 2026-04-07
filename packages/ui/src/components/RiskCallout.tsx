import type { HTMLAttributes, ReactNode } from "react";

export type RiskCalloutProps = HTMLAttributes<HTMLElement> & {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export function RiskCallout({
  eyebrow,
  title,
  description,
  style,
  ...props
}: RiskCalloutProps) {
  return (
    <article
      {...props}
      style={{
        display: "grid",
        gap: 22,
        alignContent: "start",
        padding: "42px 30px 36px",
        borderRadius: 24,
        border: "1px solid var(--zds-line)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.018), rgba(255,255,255,0)), rgba(12,12,12,0.38)",
        ...style
      }}
    >
      <span
        style={{
          display: "inline-flex",
          width: "fit-content",
          padding: "10px 16px",
          borderRadius: 999,
          border: "1px solid var(--zds-line)",
          color: "var(--zds-gold)"
        }}
      >
        {eyebrow}
      </span>
      <h3
        style={{
          margin: 0,
          maxWidth: "12ch",
          color: "var(--zds-text)",
          fontFamily: '"Space Grotesk", "Instrument Sans", sans-serif',
          fontSize: "clamp(2.25rem, 3vw, 3.2rem)",
          lineHeight: 0.98,
          letterSpacing: "-0.055em",
          textWrap: "balance"
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          maxWidth: "24ch",
          fontSize: "1.15rem",
          lineHeight: 1.52,
          color: "rgba(245,245,240,0.66)"
        }}
      >
        {description}
      </p>
    </article>
  );
}
