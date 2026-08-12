"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award } from "lucide-react"
import resumeData from "@/data/resume.json"

export function EducationSection() {
  const { education } = resumeData

  return (
    <section id="education" className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-serif mb-6">
                  <Award className="w-3.5 h-3.5 text-primary" />
                  <span>ACADEMIC FOUNDATION</span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight mb-6">
                  <span className="text-gradient-elegant">Education</span> & Qualifications
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-transparent rounded-full mb-8" />
                <p className="text-muted-foreground font-light text-lg leading-relaxed">
                  My academic journey has been dedicated to exploring the intersection of culture, linguistics, and literature, culminating in specialized research in Northeast tribal literatures and post-colonial studies.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Scrolling Cards */}
          <div className="lg:w-2/3 space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:bg-white/[0.02] transition-colors"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-700" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 relative z-10">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-3">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium text-lg sm:text-xl">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 font-serif">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/10 border border-secondary/30 text-secondary text-sm font-serif font-medium shrink-0 self-start">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="space-y-4 relative z-10 border-t border-border pt-6 mt-6">
                  <h4 className="text-sm tracking-widest text-muted-foreground font-serif uppercase">Core Focus & Competencies</h4>
                  <div className="flex flex-wrap gap-3">
                    {edu.highlights.map((highlight, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border text-foreground text-sm font-serif group-hover:border-primary/40 transition-colors shadow-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>{highlight}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
