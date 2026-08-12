"use client"

import { motion } from "framer-motion"
import { BookOpen, Calendar, FileText, CheckCircle, PenTool, Library } from "lucide-react"
import resumeData from "@/data/resume.json"

export function ResearchSection() {
  const { papers } = resumeData

  return (
    <section id="research" className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-background/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-serif mb-6">
            <BookOpen className="w-3.5 h-3.5 text-secondary" />
            <span>SCHOLARLY PUBLICATIONS & DISSERTATIONS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight mb-6">
            <span className="text-gradient-elegant">Research</span> Papers & Monographs
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Exploration of post-colonial theory, patriarchy in indigenous lit, socio-linguistics, and children's literature texts.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary via-primary to-transparent rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {papers.map((paper, index) => {
            // Determine Bento sizing based on index
            let bentoClass = ""
            if (index === 0) {
              bentoClass = "md:col-span-2 md:row-span-2"
            } else if (index === 1) {
              bentoClass = "md:col-span-1 md:row-span-1"
            } else if (index === 2) {
              bentoClass = "md:col-span-1 md:row-span-1"
            } else {
              bentoClass = "md:col-span-1 md:row-span-1" // Fallback
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`glass-card p-8 rounded-3xl relative overflow-hidden group hover:bg-white/[0.03] transition-all duration-500 flex flex-col justify-between ${bentoClass}`}
              >
                {/* Background Ambient Glow */}
                <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100 ${index === 0 ? 'bg-primary/20' : index === 1 ? 'bg-secondary/20' : 'bg-accent/20'}`} />
                
                {/* Header Section */}
                <div className="relative z-10 mb-8">
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0 shadow-lg border border-white/5">
                      {index === 0 ? <Library className="w-6 h-6 text-primary" /> : index === 1 ? <FileText className="w-6 h-6 text-secondary" /> : <PenTool className="w-6 h-6 text-accent" />}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass border border-border text-muted-foreground text-xs font-serif shrink-0">
                      <Calendar className={`w-3.5 h-3.5 ${index === 0 ? 'text-primary' : index === 1 ? 'text-secondary' : 'text-accent'}`} />
                      <span>{paper.date}</span>
                    </div>
                  </div>
                  
                  <span className="text-xs font-serif uppercase tracking-widest text-muted-foreground mb-2 block">
                    {paper.institution}
                  </span>
                  <h3 className={`font-serif font-bold text-foreground leading-tight ${index === 0 ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
                    {paper.title}
                  </h3>
                </div>

                {/* Content Section */}
                <div className="relative z-10 mt-auto">
                  {/* Highlights (Only show all on large card, limit on small cards) */}
                  <div className="space-y-3 mb-6">
                    {paper.highlights.slice(0, index === 0 ? 3 : 2).map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                        <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${index === 0 ? 'text-primary' : index === 1 ? 'text-secondary' : 'text-accent'}`} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Theoretical Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-border">
                    {index === 0 && (
                      <>
                        <span className="px-3 py-1.5 rounded-lg glass border border-primary/30 text-primary text-xs font-serif shadow-sm hover:scale-105 transition-transform cursor-default">Edward Said's 'Othering'</span>
                        <span className="px-3 py-1.5 rounded-lg glass border border-secondary/30 text-secondary text-xs font-serif shadow-sm hover:scale-105 transition-transform cursor-default">Patriarchal Critique</span>
                        <span className="px-3 py-1.5 rounded-lg glass border border-accent/30 text-accent text-xs font-serif shadow-sm hover:scale-105 transition-transform cursor-default">Northeast Tribal Literature</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span className="px-3 py-1.5 rounded-lg glass border border-primary/30 text-primary text-xs font-serif shadow-sm hover:scale-105 transition-transform cursor-default">Socio-Linguistics</span>
                        <span className="px-3 py-1.5 rounded-lg glass border border-secondary/30 text-secondary text-xs font-serif shadow-sm hover:scale-105 transition-transform cursor-default">Field Case Study</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span className="px-3 py-1.5 rounded-lg glass border border-pink-500/30 text-pink-400 text-xs font-serif shadow-sm hover:scale-105 transition-transform cursor-default">Children's Literature Theory</span>
                        <span className="px-3 py-1.5 rounded-lg glass border border-cyan-500/30 text-cyan-400 text-xs font-serif shadow-sm hover:scale-105 transition-transform cursor-default">Canonical Textual Criticism</span>
                      </>
                    )}
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
