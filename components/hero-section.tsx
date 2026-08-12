"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import confetti from "canvas-confetti"
import { Download, Sparkles, MapPin, GraduationCap, ArrowRight, BookOpen, Feather } from "lucide-react"
import resumeData from "@/data/resume.json"

export function HeroSection() {
  const { personal, hero } = resumeData

  const handleDownloadResume = () => {
    // Trigger confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#00f0ff", "#8b5cf6", "#ec4899", "#38bdf8"]
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
      className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{personal.location}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Main Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="text-slate-100">Hi, I'm </span>
                <span className="gradient-text">{personal.name}</span>
              </h1>
              <p className="text-lg sm:text-2xl font-serif italic text-purple-300/90 flex items-center justify-center lg:justify-start gap-2">
                <Feather className="w-5 h-5 text-cyan-400" />
                <span>{personal.title}</span>
              </p>
            </div>

            {/* Hero Subheading */}
            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 leading-snug">
                {hero.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
                {hero.subheading}
              </p>
            </div>

            {/* Quick Expertise Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {["Literary Analysis", "Oral Traditions", "Said's 'Othering'", "Indigenous Knowledge", "Content Strategy"].map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-xs rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => handleScrollToSection("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-purple-500 transition-all shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:scale-105 cursor-pointer"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/40 text-cyan-300 font-semibold text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: Interactive Profile Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Ambient Background Glow ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-purple-600/30 to-pink-500/20 rounded-3xl blur-3xl transform rotate-6 scale-95 animate-pulse-glow" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
              {/* Outer Glowing Glass Border Container */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 blur-sm transition duration-500 group-hover:duration-200" />
              
              <div className="relative h-full w-full rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl bg-slate-950 flex items-center justify-center">
                <Image
                  src="/Anushka_Profile.jpg"
                  alt="Anushka Mahanta"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Floating Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 glass p-3 rounded-2xl border border-white/15 flex items-center gap-3 backdrop-blur-xl bg-slate-950/80 shadow-2xl">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold text-slate-100">Tezpur University</span>
                    <span className="text-[11px] text-cyan-300">Integrated MA in English</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

