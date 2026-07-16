import { HeroDesktop } from "./HeroDesktop";
import { HeroMobile } from "./HeroMobile";

export function Hero() {
  return (
    <>
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>

      <div className="lg:hidden">
        <HeroMobile />
      </div>
    </>
  );
}
