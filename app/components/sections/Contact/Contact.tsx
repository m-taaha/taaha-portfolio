
import { FadeUp } from "@/app/components/motion";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "../../ui/SecionHeading";
import { contact } from "@/app/config/contact";

import { ContactContent } from "./ContactContent";
import { ContactCard } from "./ContactCard";

export function Contact() {
  return (
    <section id="contact" className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title={contact.title}
          description={contact.description}
        />

        <FadeUp>
          <div className="mt-14 grid gap-12 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <ContactContent />
            <ContactCard />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
