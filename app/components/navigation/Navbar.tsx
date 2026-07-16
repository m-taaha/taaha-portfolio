import { Container } from "../ui/Container";

import { MobileMenu } from "./MobileMenu";
import { NavBrand } from "./NavBrand";
import { NavLinks } from "./NavLinks";
import { ResumeButton } from "./ResumeButton";

export function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-border-subtle
        bg-background/80
        backdrop-blur-xl
      "
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavBrand />

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <div className="hidden md:block">
            <ResumeButton />
          </div>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
