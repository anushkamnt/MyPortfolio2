"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, Globe2 } from "lucide-react"
import resumeData from "@/data/resume.json"
import { useRef } from "react"

export function VolunteeringSection() {
  const { volunteering } = resumeData
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const globeY = useTransform(scrollYProgress, [0, 1], ["-150px", "150px"])

  return (
    <section id="volunteering" ref={containerRef} className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-background/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-serif mb-6">
            <Heart className="w-3.5 h-3.5 text-accent" />
            <span>COMMUNITY ENGAGEMENT</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight mb-6">
            Volunteering & <span className="text-gradient-elegant">Social Impact</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent via-secondary to-transparent rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Staggered Cards Layout */}
        <div className="space-y-16 lg:space-y-24">
          {volunteering.map((item, index) => {
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Anchor / Abstract Graphic */}
                <div className="w-full lg:w-5/12 flex justify-center perspective-1000">
                  <motion.div 
                    style={{ y: globeY }}
                    className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-[2.5rem] rotate-3 glass border border-white/5 flex items-center justify-center group overflow-hidden shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    <Globe2 className="w-16 h-16 sm:w-24 sm:h-24 text-primary/40 group-hover:text-primary/70 transition-colors duration-500 relative z-10" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="w-full lg:w-7/12">
                  <div className="glass-card p-8 sm:p-12 rounded-3xl relative overflow-hidden group hover:bg-white/[0.03] transition-colors shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/20 transition-colors duration-700" />
                    
                    <h3 className="text-2xl sm:text-4xl font-serif font-bold text-foreground mb-6 relative z-10 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-light relative z-10">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
