import { SystemsGrid } from "./SystemsGrid";
import { SectionHeading } from "../../ui/SecionHeading";

export function SystemsSection() {
  return (
    <section id="systems" className="mx-auto max-w-7xl px-6 py-32">
      <SectionHeading
        eyebrow="Engineering Systems"
        title="Systems I've Built"
        description="
A collection of production-focused software systems designed with scalability, clean architecture, and long-term maintainability in mind.
"
      />

      <div className="mt-20">
        <SystemsGrid />
      </div>
    </section>
  );
}
