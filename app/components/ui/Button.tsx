import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

const buttonVariants = {
  primary: `
    bg-brand-primary
    text-brand-foreground

    hover:bg-brand-soft
    hover:shadow-[0_12px_30px_rgba(209,139,53,.22)]
  `,

  secondary: `
    border
    border-border-default
    bg-transparent
    text-text-primary

    hover:border-brand-primary/40
    hover:bg-surface-primary
  `,
} as const;

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;

  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  className,
  onClick,
  href,
  target,
  rel,
}: ButtonProps) {
  const styles = cn(
    `
  inline-flex
  items-center
  justify-center
  rounded-xl
  px-5
  py-3
  text-sm
  font-medium

  transition-all
  duration-300

  hover:-translate-y-0.5
  hover:shadow-[0_12px_30px_rgba(209,139,53,.15)]

  active:translate-y-0
  active:scale-[0.98]

  focus:outline-none
  focus:ring-2
  focus:ring-brand-primary/30

  disabled:pointer-events-none
  disabled:opacity-50
  `,
    buttonVariants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
