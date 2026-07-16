import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SecionHeading";
import { SkillsGrid } from "./SkilllsGrid";
import { TechGraph } from "./TechGraph/TechGraph";



export function Skills() {
  return (
    <section id="skills" className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="How I Build Software"
          description="The engineering domains I work across—from polished user interfaces to distributed backend systems and AI-powered products."
        />

        <div className="mt-20">
          <SkillsGrid />
        </div>
        <div className="mt-24">
          <TechGraph />
        </div>
      </Container>
    </section>
  );
}
