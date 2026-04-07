import type { ButtonHTMLAttributes } from "react";

export type TabsProps = {
  items: string[];
  activeIndex?: number;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

export function Tabs({ items, activeIndex = 0, buttonProps }: TabsProps) {
  return (
    <div style={{ display: "inline-flex", gap: 8 }}>
      {items.map((item, index) => {
        const active = index === activeIndex;
        return (
          <button
            key={item}
            {...buttonProps}
            style={{
              height: 44,
              padding: "0 18px",
              borderRadius: 8,
              border: active ? "1px solid var(--zds-line)" : "1px solid transparent",
              background: active ? "rgba(255,255,255,0.03)" : "transparent",
              color: active ? "var(--zds-text)" : "var(--zds-muted)",
              font: "inherit"
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
