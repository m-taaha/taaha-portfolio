import { Container } from "@/app/components/ui/Container";
import { Section } from "@/app/components/ui/Section";
import { SectionHeading } from "@/app/components/ui/SecionHeading";

import { ExperienceTimeline } from "./ExperienceTimeline";

export function Experience() {
  return (
    <Section id="journey" className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="How My Thinking Changed"
          description="
            Every stage represents a shift in how I approach software -
            from writing code to designing complete systems.
          "
        />

        <div className="mt-14 sm:mt-16 lg:mt-20">
          <ExperienceTimeline />
        </div>
      </Container>
    </Section>
  );
}
