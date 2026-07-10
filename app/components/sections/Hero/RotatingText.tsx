"use client"
import { person } from "@/app/config/person"
import { useEffect, useState } from "react"

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    
  })

  return (
    <div>
      {person.heroMessages[currentIndex]}
    </div>
  )
}

