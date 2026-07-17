import React from 'react'
import { Button } from '../../ui/Button'
import { person } from "@/app/config/person";

export function HeroActions() {
  return (
    <div
      className="
    flex
    w-full
    max-w-sm
    flex-col
    gap-3
    sm:max-w-none
    sm:flex-row
  "
    >
      <Button>View Projects</Button>

      <Button
        variant="secondary"
        href={person.resumeUrl!}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </Button>
    </div>
  );
}
