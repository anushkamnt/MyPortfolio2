"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Sparkles, Building2, CheckCircle2 } from "lucide-react"

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
    <section id="work-experience" className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24">
          
          {/* Right Column: Sticky Header (Reversed layout for visual variety) */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 lg:pl-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-serif mb-6">
                  <Briefcase className="w-3.5 h-3.5 text-secondary" />
                  <span>CAREER PATH & EXPERTISE</span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight mb-6">
                  Work <span className="text-gradient-elegant">Experience</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-secondary via-primary to-transparent rounded-full mb-8" />
                <p className="text-muted-foreground font-light text-lg leading-relaxed">
                  Professional roles where I applied critical analysis, refined communication, and language model evaluation skills in real-world environments.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Left Column: Scrolling Cards */}
          <div className="lg:w-2/3 space-y-12">
            {workExperienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:bg-white/[0.02] transition-colors"
              >
                <div className="absolute top-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/10 transition-colors duration-700" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 relative z-10">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-3">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-lg font-serif mb-2">
                      <span className="text-secondary font-medium">{item.company}</span>
                      {item.client && (
                        <>
                          <span className="text-border">|</span>
                          <span className="text-secondary/80 italic">{item.client}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm font-serif font-medium shrink-0 self-start">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="relative z-10 mb-8">
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {item.skills && (
                  <div className="space-y-4 relative z-10 border-t border-border pt-6">
                    <h4 className="text-sm tracking-widest text-muted-foreground font-serif uppercase">Applied Skills</h4>
                    <div className="flex flex-wrap gap-3">
                      {item.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border text-foreground text-sm font-serif group-hover:border-secondary/40 transition-colors shadow-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
