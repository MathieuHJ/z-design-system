import type { HTMLAttributes, ReactNode } from "react";

export type QuoteRow = {
  label: ReactNode;
  value: ReactNode;
  tone?: "default" | "mint" | "warning";
};

export type QuoteCardProps = HTMLAttributes<HTMLDivElement> & {
  rows: QuoteRow[];
};

export function QuoteCard({ rows, style, ...props }: QuoteCardProps) {
  return (
    <div {...props} style={{ display: "grid", gap: 16, ...style }}>
      {rows.map((row, index) => {
        const color =
          row.tone === "mint"
            ? "var(--zds-mint)"
            : row.tone === "warning"
              ? "var(--zds-warning)"
              : "var(--zds-text)";

        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              alignItems: "center",
              paddingTop: index === 0 ? 0 : 14,
              borderTop: index === 0 ? "0" : "1px solid var(--zds-line-soft)"
            }}
          >
            <span style={{ color: "rgba(245,245,240,0.7)", fontSize: 14 }}>{row.label}</span>
            <strong style={{ color }}>{row.value}</strong>
          </div>
        );
      })}
    </div>
  );
}
