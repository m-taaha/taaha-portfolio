import {cn} from "@/lib/utils";

interface HeadingProps {
    children: React.ReactNode;
    className?: string;
}

export function Heading ({
    children,
    className
}: HeadingProps) {
    return (
      <h1
        className={cn(
          "text-5xl font-bold tracking-tight text-text-primary lg:text-7xl",
          className,
        )}
      >
        {children}
      </h1>
    );
}



interface TextProps {
    children: React.ReactNode;
    className?: string;
}

export function Text({
    children,
    className
}: TextProps) {
    return (
        <p className={cn (
            "text-lg leading-8 text-text-secondary",
            className
        )}>
            {children}
        </p>
    )
}