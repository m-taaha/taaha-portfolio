import { cn } from "@/lib/utils";


 type ButtonVariant =  "primary" | "secondary";
 
const buttonVariants = {
  primary: "bg-brand-primary text-brand-foreground hover:bg-brand-soft",
  secondary:
    "border border-border-default bg-transparent text-text-primary hover:border-border-strong hover:bg-surface-primary",
} as const;
 
 interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant
    className?: string;
    onClick?: () => void
}

export function Button({children, variant="primary", className, onClick}: ButtonProps) {
    return (
    <button
    type="button"
    className={
        cn(
            "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 disabled:opacity-50 disabled:pointer-events-none",
             buttonVariants[variant],
             className
        )
    }
    onClick={onClick}
    >
        {children}
    </button>);
}