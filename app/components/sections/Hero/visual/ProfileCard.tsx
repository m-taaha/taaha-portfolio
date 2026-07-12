
import { person } from "@/app/config/person"
import Image from "next/image";
import { StatusBadge } from "./StatusBadge";
import { SkillChips } from "./SkillChips";

export function ProfileCard() {
  return (
    <div className="w-full max-w-sm rounded-3xl border border-border-subtle bg-surface-primary p-8 ">
      <div className="flex flex-col items-center text-center gap-6 ">
        <Image
          src={person.avatar!}
          alt={person.name}
          width={170}
          height={170}
          className="rounded-full object-cover ring ring-border-default"
        />

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{person.name}</h3>
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            SOFTWARE ENGINEER
          </p>

          <StatusBadge status={person.status} />

          <div className="my-4 w-full border-t border-border-default" />

          <SkillChips skills={person.skills} />
        </div>
      </div>
    </div>
  );
}

