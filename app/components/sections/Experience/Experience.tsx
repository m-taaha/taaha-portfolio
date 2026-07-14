import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SecionHeading";

import { ExperienceTimeline } from "./ExperienceTimeline";

export function Experience() {
  return (
    <section id="experience" className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Building Through Real Projects"
          description="Every milestone represents a step in my journey—from learning web development to building AI-powered developer tools and leading technical initiatives."
        />

        <div className="mt-20">
          <ExperienceTimeline />
        </div>
      </Container>
    </section>
  );
}
