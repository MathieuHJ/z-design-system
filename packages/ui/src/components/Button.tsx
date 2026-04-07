import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
  }
>;

export function Button({
  variant = "primary",
  children,
  style,
  ...props
}: ButtonProps) {
  const background =
    variant === "primary"
      ? "var(--zds-gold)"
      : variant === "secondary"
        ? "rgba(255,255,255,0.04)"
        : "transparent";

  const color = variant === "primary" ? "#0a0a0a" : "var(--zds-text)";
  const border =
    variant === "ghost"
      ? "1px solid var(--zds-line-soft)"
      : variant === "secondary"
        ? "1px solid var(--zds-line)"
        : "0";

  return (
    <button
      {...props}
      style={{
        height: 56,
        padding: "0 24px",
        borderRadius: 8,
        border,
        background,
        color,
        font: "inherit",
        letterSpacing: "0.01em",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        ...style
      }}
    >
      {children}
    </button>
  );
}
