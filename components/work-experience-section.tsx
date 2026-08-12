"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Sparkles, Building2 } from "lucide-react"

interface WorkItem {
  role: string
  company: string
  client?: string
  period: string
  description: string
  skills?: string[]
}

const workExperienceData: WorkItem[] = [
  {
    role: "Data Annotator",
    company: "Mindtel Noida",
    client: "Client: Innodata Inc.",
    period: "Nov 2025 - Jan 2026",
    description: "Worked on behalf of enterprise client Innodata Inc. Responsible for reviewing, creating, and refining high-quality dataset annotations to train, fine-tune, and evaluate advanced AI systems and Large Language Models (LLMs).",
    skills: ["Data Annotation", "LLM Training & Tuning", "AI Evaluation", "Quality Assurance", "Text Refining"]
  }
]


export function WorkExperienceSection() {
  return (
    <section id="work-experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>CAREER PATH & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 via-cyan-400 to-transparent rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Central Alternating Timeline */}
        <div className="relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-400 to-pink-500 -translate-x-1/2 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

          <div className="space-y-16">
            {workExperienceData.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Glowing Node Dot on Timeline */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#080914] border-2 border-purple-400 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.9)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                  </div>

                  {/* Left Column (Card for Even on Desktop, empty space for Odd) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl relative overflow-hidden text-left border border-slate-800 shadow-2xl"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                      <h3 className="text-2xl font-extrabold text-slate-100 mb-1">
                        {item.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold mb-4">
                        <span className="text-purple-400 font-bold">{item.company}</span>
                        {item.client && (
                          <span className="text-purple-300/80 font-medium text-xs">
                            ({item.client})
                          </span>
                        )}
                        <span className="text-slate-600">|</span>
                        <span className="text-slate-400 text-xs font-mono font-normal">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                        {item.description}
                      </p>

                      {item.skills && (
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx}
                              className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for layout symmetry */}
                  <div className={`hidden md:block w-1/2 ${isEven ? "order-2" : "order-1"}`} />

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
