import { Container } from "../ui/Container";

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
        backdrop-blur-md
      "
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavBrand />

          <NavLinks />

          <ResumeButton />
        </div>
      </Container>
    </header>
  );
}
