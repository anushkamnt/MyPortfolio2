"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Wrench, BookOpen, PenTool, Search, MessageSquare, Laptop, Sparkles, Heart } from "lucide-react"
import resumeData from "@/data/resume.json"

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  writing: PenTool,
  research: Search,
  communication: MessageSquare,
  digital: Laptop,
}

export function SkillsSection() {
  const { skills, interests } = resumeData
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = Object.keys(skills)

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>CORE COMPETENCIES & TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent rounded-full mt-4" />
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/40"
            }`}
          >
            All Competencies
          </button>
          {categories.map((cat) => {
            const Icon = categoryIcons[cat] || Sparkles
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide capitalize transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/40"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {Object.entries(skills).map(([category, skillList], index) => {
            if (activeCategory !== "all" && activeCategory !== category) return null
            const Icon = categoryIcons[category] || Sparkles

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 capitalize">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {(skillList as string[]).map((skill, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-cyan-300 text-xs font-medium hover:border-cyan-400 hover:bg-cyan-500/10 transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Areas of Interest & Research Focus */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">Areas of Passion & Research Focus</h3>
              <p className="text-slate-400 text-xs mt-0.5">Key literary genres, publishing disciplines, and creative outlets</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {interests.map((interest, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 border border-purple-500/30 text-slate-200 text-xs font-semibold hover:scale-105 hover:border-purple-400 transition-all cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

