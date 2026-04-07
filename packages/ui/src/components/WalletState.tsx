import type { HTMLAttributes, ReactNode } from "react";

export type WalletStateProps = HTMLAttributes<HTMLDivElement> & {
  address: ReactNode;
  network: ReactNode;
  status?: ReactNode;
};

export function WalletState({
  address,
  network,
  status = "Connected",
  style,
  ...props
}: WalletStateProps) {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "10px 14px",
        borderRadius: 14,
        border: "1px solid var(--zds-line)",
        background: "rgba(255,255,255,0.02)",
        ...style
      }}
    >
      <div style={{ display: "grid", gap: 4 }}>
        <strong style={{ color: "var(--zds-text)", fontSize: 14 }}>{address}</strong>
        <span style={{ color: "rgba(245,245,240,0.7)", fontSize: 13 }}>{network}</span>
      </div>
      <em style={{ color: "var(--zds-mint)", fontStyle: "normal", fontSize: 13 }}>{status}</em>
    </div>
  );
}
