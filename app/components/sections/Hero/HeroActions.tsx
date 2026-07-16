import React from 'react'
import { Button } from '../../ui/Button'

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

      <Button variant="secondary">Download Resume</Button>
    </div>
  );
}
