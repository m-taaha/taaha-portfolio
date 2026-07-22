import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

export function Section({children, className}: SectionProps) {

    return (
      <section className={cn("py-20 sm:py-24 lg:py-36", className)}>
        <Container>{children}</Container>
      </section>
    );
}