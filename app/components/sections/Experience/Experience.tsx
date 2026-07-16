import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SecionHeading";

import { ExperienceTimeline } from "./ExperienceTimeline";

export function Experience() {
  return (
    <section id="journey" className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="How My Thinking Changed"
          description="
            Every stage represents a shift in how I approach software—
            from writing code to designing complete systems.
          "
        />

        <div className="mt-24">
          <ExperienceTimeline />
        </div>
      </Container>
    </section>
  );
}
