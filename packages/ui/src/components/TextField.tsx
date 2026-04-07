import type { InputHTMLAttributes } from "react";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function TextField({ label, style, ...props }: TextFieldProps) {
  return (
    <label style={{ display: "grid", gap: 10 }}>
      <span style={{ fontSize: 14, color: "rgba(245,245,240,0.7)" }}>{label}</span>
      <input
        {...props}
        style={{
          height: 62,
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "0 22px",
          background: "rgba(255,255,255,0.025)",
          color: "rgba(245,245,240,0.8)",
          font: "inherit",
          ...style
        }}
      />
    </label>
  );
}
