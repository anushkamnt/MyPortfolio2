"use client"

import { motion } from "framer-motion"
import { Presentation, Calendar, MapPin, Sparkles, BookOpen, Quote } from "lucide-react"
import resumeData from "@/data/resume.json"

export function ExperienceSection() {
  const { experience } = resumeData

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Presentation className="w-3.5 h-3.5 text-purple-400" />
            <span>CONFERENCE PRESENTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">Conference</span> & Scholarly Presentations
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent rounded-full mt-4" />
        </motion.div>

        <div className="grid gap-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card glass-card-hover p-6 sm:p-10 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-3">
                    <Sparkles className="w-3 h-3" />
                    <span>INTERNATIONAL CONFERENCE PRESENTATION</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-purple-300 mt-1">
                    {exp.institution}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-mono font-semibold self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.date}</span>
                </div>
              </div>

              {/* Conference Topic Quote Box */}
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 to-slate-900/60 border border-purple-500/30 mb-6 relative">
                <Quote className="w-8 h-8 text-purple-400/20 absolute top-3 right-3 pointer-events-none" />
                <p className="text-sm sm:text-base font-serif italic text-purple-200 leading-relaxed">
                  "{exp.details}"
                </p>
              </div>

              {/* Key Contributions List */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono">Key Scholarly Findings & Insights</h4>
                <div className="space-y-2.5">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                      <span className="leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

