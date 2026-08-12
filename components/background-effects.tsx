"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  // Create subtle parallax offsets based on scroll depth
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic ambient gradient blurs with parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#D6A4A4]/20 rounded-full blur-[160px] animate-pulse-soft" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[30%] right-[-10%] w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#A69CB7]/20 rounded-full blur-[180px] animate-float-slow" 
      />
      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-[-15%] left-[25%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#D4C3A3]/15 rounded-full blur-[150px] animate-pulse-soft" 
      />

      {/* Elegant Noise Pattern Overlay */}
      <div className="absolute inset-0 bg-noise-pattern" />

      {/* Radial vignette mask - warm sunset tone */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(214,164,164,0.08),rgba(21,19,26,0))]" />
    </div>
  )
}
