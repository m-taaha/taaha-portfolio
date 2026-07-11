"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react"


interface RotatingTextProps {
  messages: readonly string[];
}


export function RotatingText({
  messages,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) => {
        return (previousIndex + 1) % messages.length;
      })
    }, 2000);

    return () => clearInterval(interval)
  }, [messages]);

  return (
    <div className="h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          {messages[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

