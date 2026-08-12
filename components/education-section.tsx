"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award } from "lucide-react"
import resumeData from "@/data/resume.json"

export function EducationSection() {
  const { education } = resumeData

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">Education</span> & Qualifications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent rounded-full mt-4" />
        </motion.div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Connector Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#080914] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-115 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 font-medium text-base sm:text-lg mt-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium self-start md:self-auto shadow-inner">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono">Core Focus & Competencies</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {edu.highlights.map((highlight, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-medium group-hover:border-cyan-500/30 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{highlight}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

