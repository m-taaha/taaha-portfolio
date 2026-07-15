
import { SystemsGrid } from "../SystemsGrid";
import { SectionHeading } from "@/app/components/ui/SecionHeading";


export function SystemsSection() {
  return (
    <section id="systems" className="mx-auto max-w-7xl px-6 py-36">
      <SectionHeading
        eyebrow="Engineering Systems"
        title="Systems I've Designed"
        description="Every project here represents solving a real engineering problem—from AI-powered developer tools to scalable backend systems and interactive learning platforms."
      />

      <div className="mt-24">
        <SystemsGrid />
      </div>
    </section>
  );
}
