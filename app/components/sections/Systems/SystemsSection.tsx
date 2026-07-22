import { Section } from "@/app/components/ui/Section";
import { SectionHeading } from "../../ui/SecionHeading";
import { SystemsGrid } from "./SystemsGrid";

export function SystemsSection() {
  return (
    <Section id="systems">
      <SectionHeading
        eyebrow="Engineering Systems"
        title="Systems I've Designed"
        description="Each system represents a real engineering challenge—from scalable backend architecture to AI-powered developer tools and interactive learning platforms."
      />

      <div className="mt-20 lg:mt-24">
        <SystemsGrid />
      </div>
    </Section>
  );
}