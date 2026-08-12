"use client"

import { useEffect, useState } from "react"

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic ambient gradient blurs */}
      <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-glow" />
      <div 
        className="absolute top-[35%] right-[-5%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] animate-pulse-glow" 
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[550px] h-[550px] bg-pink-500/10 rounded-full blur-[150px] animate-pulse-glow" 
        style={{ animationDelay: "4s" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Radial vignette mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
    </div>
  )
}
