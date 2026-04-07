import type { HTMLAttributes, ReactNode } from "react";

export type StepState = "default" | "complete" | "current";

export type TransactionStep = {
  index: string;
  title: ReactNode;
  description?: ReactNode;
  state?: StepState;
};

export type TransactionStepperProps = HTMLAttributes<HTMLDivElement> & {
  steps: TransactionStep[];
};

export function TransactionStepper({
  steps,
  style,
  ...props
}: TransactionStepperProps) {
  return (
    <div {...props} style={{ display: "grid", gap: 22, marginTop: 20, ...style }}>
      {steps.map((step, idx) => {
        const complete = step.state === "complete";
        const current = step.state === "current";

        return (
          <div
            key={idx}
            style={{
              display: "grid",
              gridTemplateColumns: "72px minmax(0, 1fr)",
              gap: 24,
              alignItems: "start",
              paddingTop: idx === 0 ? 0 : 22,
              borderTop: idx === 0 ? "0" : "1px solid var(--zds-line-soft)"
            }}
          >
            <span
              style={{
                width: 56,
                height: 56,
                display: "grid",
                placeItems: "center",
                borderRadius: 999,
                border: complete ? "0" : "1px solid var(--zds-line)",
                background: complete ? "var(--zds-gold)" : "transparent",
                color: complete ? "#090909" : current ? "var(--zds-mint)" : "var(--zds-muted)",
                fontSize: "1.05rem"
              }}
            >
              {step.index}
            </span>
            <div style={{ display: "grid", gap: 10, paddingTop: 2 }}>
              <strong
                style={{
                  color: "var(--zds-text)",
                  fontFamily: '"Space Grotesk", "Instrument Sans", sans-serif',
                  fontSize: "2rem",
                  lineHeight: 0.98,
                  letterSpacing: "-0.04em"
                }}
              >
                {step.title}
              </strong>
              {step.description ? (
                <p
                  style={{
                    margin: 0,
                    maxWidth: "32rem",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "rgba(245,245,240,0.7)"
                  }}
                >
                  {step.description}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
