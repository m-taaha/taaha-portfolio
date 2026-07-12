import React from 'react'
import { Button } from '../../ui/Button'

export function HeroActions() {
  return (
    <div className='flex gap-4'>
      <Button >
        View Projects
      </Button>

      <Button variant="secondary">
        Download Resume
      </Button>

    </div>
  )
}
