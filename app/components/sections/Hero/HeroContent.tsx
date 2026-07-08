import { person } from "@/app/config/person"
import { Heading, Text } from "@/app/components/ui/Typography";
import { RotatingText } from "./RotatingText";

export function HeroContent() {
  return (
    <div>
      <Heading>{person.name}</Heading>

      <RotatingText />

      <Text>
        {person.shortBio}
      </Text>
    </div>
  );
}

 