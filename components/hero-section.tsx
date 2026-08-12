"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import confetti from "canvas-confetti"
import { Download, MapPin, GraduationCap, ArrowDown, Feather } from "lucide-react"
import { TypewriterEffect } from "./typewriter-effect"
import resumeData from "@/data/resume.json"

export function HeroSection() {
  const { personal, hero } = resumeData

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#D6A4A4", "#A69CB7", "#D4C3A3", "#EAD7D7"]
    })

    const link = document.createElement("a")
    link.href = "/Anushka_Resume.pdf"
    link.download = "Anushka_Mahanta_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Floating Ambient Image behind text */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] bg-gradient-to-tr from-[#D6A4A4]/40 via-[#A69CB7]/40 to-[#D4C3A3]/40 pointer-events-none"
      />

      {/* Main Content Container */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center z-10 text-center relative mt-16 sm:mt-0">
        
        {/* Floating Top Elements */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary text-xs sm:text-sm font-serif tracking-wide shadow-lg">
            <MapPin className="w-4 h-4 text-primary animate-pulse-soft" />
            <span>{personal.location}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 text-secondary text-xs sm:text-sm font-serif tracking-wide shadow-lg">
            <GraduationCap className="w-4 h-4 text-secondary" />
            <span>Tezpur University</span>
          </div>
        </motion.div>

        {/* Photo and Title Flex Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8">
          
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-[2rem] overflow-hidden glass border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 shrink-0"
          >
            <Image
              src="/Anushka_Profile.jpg"
              alt={personal.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay pointer-events-none" />
          </motion.div>

          {/* Cinematic Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="space-y-4 text-center md:text-left"
          >
            <h1 className="text-[3.5rem] leading-[0.9] sm:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold tracking-tighter relative">
              <span className="text-foreground">{personal.name.split(" ")[0]}</span>
              <br />
              <span className="text-gradient-elegant">{personal.name.split(" ")[1]}</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-muted-foreground flex items-center justify-center md:justify-start gap-3">
              <Feather className="w-6 h-6 text-accent shrink-0" />
              <TypewriterEffect text={personal.title} delay={1.5} />
              <Feather className="w-6 h-6 text-accent rotate-180 shrink-0" />
            </p>
          </motion.div>

        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl mx-auto space-y-6 mb-12"
        >
          <h2 className="text-lg sm:text-xl font-serif font-medium text-foreground/90 leading-snug">
            {hero.heading}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light px-4">
            {hero.subheading}
          </p>
        </motion.div>

        {/* Call to Action Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 font-serif"
        >
          <button
            onClick={() => handleScrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-105 transition-all ethereal-glow shadow-xl"
          >
            Connect With Me
          </button>
          <button
            onClick={handleDownloadResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border border-primary/30 text-foreground font-semibold text-sm hover:bg-primary/10 transition-all hover:scale-105 shadow-xl"
          >
            <Download className="w-4 h-4 text-primary" />
            <span>Resume</span>
          </button>
        </motion.div>
      </div>



    </section>
  )
}
