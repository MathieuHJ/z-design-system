import type { AnchorHTMLAttributes } from "react";

export type SideNavItem = {
  label: string;
  href?: string;
  active?: boolean;
};

export type SideNavProps = {
  items: SideNavItem[];
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
};

export function SideNav({ items, linkProps }: SideNavProps) {
  return (
    <nav
      style={{
        display: "grid",
        gap: 10,
        padding: 24,
        borderRight: "1px solid var(--zds-line)"
      }}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          {...linkProps}
          style={{
            padding: "14px 16px",
            borderRadius: 12,
            textDecoration: "none",
            color: item.active ? "var(--zds-text)" : "var(--zds-muted)",
            background: item.active ? "rgba(255,255,255,0.03)" : "transparent"
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
