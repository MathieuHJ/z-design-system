import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type IconButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function IconButton({ children, style, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      style={{
        width: 42,
        height: 42,
        display: "inline-grid",
        placeItems: "center",
        borderRadius: 999,
        border: "1px solid var(--zds-line)",
        background: "rgba(255,255,255,0.03)",
        color: "var(--zds-text)",
        ...style
      }}
    >
      {children}
    </button>
  );
}
