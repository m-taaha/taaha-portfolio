

import { FadeUp, Stagger } from "@/app/components/motion";

import { person } from "@/app/config/person";

import { Heading, Text } from "@/app/components/ui/Typography";

import { HeroActions } from "./HeroActions";
import { HeroOverview } from "./HeroOverview";
import { HeroStatus } from "./HeroStatus";




export function HeroContent() {
  return (
    <Stagger
      className="
    flex
    flex-col
    gap-8
    text-center
    lg:text-left
    items-center
    lg:items-start
  "
    >
      <FadeUp>
        <HeroStatus />
      </FadeUp>

      <FadeUp>
        <Heading
          className="
    max-w-xl
    text-5xl
    leading-none
    sm:text-6xl
    lg:max-w-2xl
  "
        >
          {person.heroHeadline}
        </Heading>
      </FadeUp>

      <FadeUp>
        <Text
          className="
    max-w-md
    text-center
    lg:max-w-2xl
    lg:text-left
  "
        >
          {person.shortBio}
        </Text>
      </FadeUp>

      <FadeUp>
        <HeroActions />
      </FadeUp>

      <FadeUp className="hidden lg:block">
        <HeroOverview />
      </FadeUp>
    </Stagger>
  );
}
