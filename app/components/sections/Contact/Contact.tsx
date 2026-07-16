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

        <div className="mt-20 grid gap-20 lg:grid-cols-2 lg:items-start">
          <ContactContent />

          <ContactCard />
        </div>
      </Container>
    </section>
  );
}
