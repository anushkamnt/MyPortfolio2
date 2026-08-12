"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Calendar, ChevronRight, Layers, Sparkles, FileText, CheckCircle } from "lucide-react"
import resumeData from "@/data/resume.json"

export function ResearchSection() {
  const { papers } = resumeData
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>SCHOLARLY PUBLICATIONS & DISSERTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">Research</span> Papers & Monographs
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Exploration of post-colonial theory, patriarchy in indigenous lit, socio-linguistics, and children's literature texts.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent rounded-full mt-4" />
        </motion.div>

        {/* Papers Grid */}
        <div className="grid gap-6">
          {papers.map((paper, index) => {
            const isExpanded = expandedIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-1 shadow-lg">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                        {paper.institution}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mt-1 leading-snug">
                        {paper.title}
                      </h3>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono shrink-0 self-start">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{paper.date}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 mt-4 pt-4 border-t border-slate-800/80">
                  {paper.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Theoretical Badges based on paper content */}
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {index === 0 && (
                    <>
                      <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-mono">
                        Edward Said's 'Othering'
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-pink-500/10 border border-pink-500/30 text-pink-300 text-[11px] font-mono">
                        Patriarchal Critique
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
                        Northeast Tribal Literature
                      </span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
                        Socio-Linguistics
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-mono">
                        Field Case Study
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
                        Oral Fluency Analysis
                      </span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="px-2.5 py-1 rounded-md bg-pink-500/10 border border-pink-500/30 text-pink-300 text-[11px] font-mono">
                        Children's Literature Theory
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
                        Canonical Textual Criticism
                      </span>
                    </>
                  )}
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

