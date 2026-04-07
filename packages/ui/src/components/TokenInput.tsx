import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { AssetPill } from "./AssetPill";

export type TokenInputProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  meta?: ReactNode;
  value: ReactNode;
  asset: ReactNode;
  assetButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

export function TokenInput({
  label,
  meta,
  value,
  asset,
  assetButtonProps,
  style,
  ...props
}: TokenInputProps) {
  return (
    <div
      {...props}
      style={{
        padding: "22px 0",
        borderTop: "1px solid var(--zds-line-soft)",
        ...style
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 20,
          alignItems: "center",
          marginBottom: 16
        }}
      >
        <span style={{ color: "rgba(245,245,240,0.7)", fontSize: 14 }}>{label}</span>
        {meta ? <span style={{ color: "rgba(245,245,240,0.7)", fontSize: 14 }}>{meta}</span> : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 20,
          alignItems: "center"
        }}
      >
        <strong
          style={{
            color: "var(--zds-text)",
            fontFamily: '"Space Grotesk", "Instrument Sans", sans-serif',
            fontSize: "2rem",
            letterSpacing: "-0.04em"
          }}
        >
          {value}
        </strong>
        <AssetPill {...assetButtonProps}>{asset}</AssetPill>
      </div>
    </div>
  );
}
