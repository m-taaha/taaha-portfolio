import Link from "next/link";
import type { ReactNode } from "react";

interface SystemLinkProps {
  href?: string;
  icon: ReactNode;
  children: ReactNode;
}

export function SystemLink({ href, icon, children }: SystemLinkProps) {
  if (!href) return null;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        rounded-lg
        border
        border-border-subtle
        px-3
        py-2
        text-sm
        text-text-secondary
        transition-colors
        hover:border-brand-primary/30
        hover:text-text-primary
      "
    >
      {icon}

      <span>{children}</span>
    </Link>
  );
}
