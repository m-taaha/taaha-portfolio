import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SecionHeading";
import { SkillsGrid } from "./SkilllsGrid";



export function Skills() {
  return (
    <section id="skills" className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Technical Expertise"
          title="Technologies I Build With"
          description="A collection of technologies I use to build scalable web applications, backend systems, and AI-powered products."
        />

        <div className="mt-20">
          <SkillsGrid />
        </div>
      </Container>
    </section>
  );
}
