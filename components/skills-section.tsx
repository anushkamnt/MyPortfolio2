"use client"

import { motion } from "framer-motion"
import { Feather, Lightbulb, MessageSquare, Laptop, CheckCircle2, Award } from "lucide-react"
import resumeData from "@/data/resume.json"

// Map categories to visually distinct bento classes and icons
const categoryConfig: Record<string, { span: string, icon: any, color: string, title: string }> = {
  writing: {
    span: "md:col-span-7",
    icon: Feather,
    color: "text-primary",
    title: "Writing & Editing"
  },
  research: {
    span: "md:col-span-5",
    icon: Lightbulb,
    color: "text-secondary",
    title: "Scholarly Research"
  },
  communication: {
    span: "md:col-span-5",
    icon: MessageSquare,
    color: "text-accent",
    title: "Communication"
  },
  digital: {
    span: "md:col-span-7",
    icon: Laptop,
    color: "text-blue-400",
    title: "Digital & Tools"
  }
}

export function SkillsSection() {
  const { skills } = resumeData

  return (
    <section id="skills" className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-serif mb-6">
            <Award className="w-3.5 h-3.5 text-primary" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight mb-6">
            <span className="text-gradient-elegant">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A diverse toolkit combining classical literary analysis, precise editorial skills, and modern digital proficiencies.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-transparent rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Bento Box Grid for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {Object.entries(skills).map(([category, skillList], index) => {
            const config = categoryConfig[category] || { 
              span: "md:col-span-6", 
              icon: CheckCircle2, 
              color: "text-primary", 
              title: category 
            }
            const Icon = config.icon

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`glass-card p-8 rounded-3xl relative overflow-hidden group hover:bg-white/[0.03] transition-all duration-500 flex flex-col justify-start ${config.span}`}
              >
                {/* Background Ambient Glow */}
                <div className={`absolute -top-24 -left-24 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100 ${index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'}`} />
                
                {/* Category Header */}
                <div className="relative z-10 flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0 shadow-lg border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    <Icon className={`w-6 h-6 ${config.color}`} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-foreground capitalize">
                      {config.title}
                    </h3>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="relative z-10 flex flex-wrap gap-3">
                  {skillList.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-full glass border border-border text-muted-foreground text-sm font-serif hover:border-primary/40 hover:text-foreground transition-colors shadow-sm cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
