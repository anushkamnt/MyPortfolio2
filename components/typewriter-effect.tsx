"use client"

import { motion } from "framer-motion"

interface TypewriterEffectProps {
  text: string
  className?: string
  delay?: number
}

export function TypewriterEffect({ text, className = "", delay = 0 }: TypewriterEffectProps) {
  const characters = text.split("")
  
  return (
    <span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.05,
            ease: "easeIn"
          }}
        >
          {char}
        </motion.span>
      ))}

    </span>
  )
}
