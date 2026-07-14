import { Container } from "@/app/components/ui/Container";

import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterCopyright } from "./FooterCopyright";


export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-16">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start">
          <FooterBrand />

          <FooterLinks />
        </div>

        <div className="mt-12">
          <FooterCopyright />
        </div>
      </Container>
    </footer>
  );
}
