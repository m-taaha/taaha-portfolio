import { Section } from "@/app/components/ui/Section";
import { SectionHeading } from "../../ui/SecionHeading";
import { SystemsGrid } from "./SystemsGrid";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SystemsSection() {
  return (
    <Section id="systems">
      <SectionHeading
        eyebrow="Engineering Systems"
        title="Systems I've Designed"
        description="A closer look at the engineering behind my work, from scalable backend architecture to AI powered tools and interactive learning platforms."
      />

      <div className="mt-14 sm:mt-16 lg:mt-20">
        <SystemsGrid />
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/projects" className="group inline-flex items-center gap-2 rounded-full border border-border-default px-5 py-3 text-sm font-medium text-text-secondary transition hover:border-brand-primary/50 hover:text-text-primary">
          Browse all projects
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </Section>
  );
}
