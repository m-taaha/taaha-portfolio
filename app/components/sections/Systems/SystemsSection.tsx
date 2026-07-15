import { SystemsGrid } from "./SystemsGrid";
import { SectionHeading } from "../../ui/SecionHeading";

export function SystemsSection() {
  return (
    <section id="systems" className="mx-auto max-w-7xl px-6 py-32">
      <SectionHeading
        eyebrow="Engineering Systems"
        title="Systems I've Designed"
        description="
Each system represents a real engineering challenge—from scalable backend architecture to AI-powered developer tools and interactive learning platforms.
"
      />

      <div className="mt-24">
        <SystemsGrid />
      </div>
    </section>
  );
}
