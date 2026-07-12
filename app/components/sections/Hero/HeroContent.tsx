import { person } from "@/app/config/person"
import { Heading, Text } from "@/app/components/ui/Typography";
import { RotatingText } from "./RotatingText";
import { HeroActions } from "./HeroActions";

export function HeroContent() {
  return (
    <div className="flex flex-col gap-6">
      <Heading>{person.name}</Heading>

      <RotatingText messages={person.heroMessages} />

      <Text className="max-w-2xl"
      >{person.shortBio}</Text>

      <HeroActions />
    </div>
  );
}

 