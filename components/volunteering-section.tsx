"use client"

import { motion } from "framer-motion"
import { HeartHandshake, Users, Globe, ShieldCheck } from "lucide-react"
import resumeData from "@/data/resume.json"

const iconMap = [Users, Globe, ShieldCheck]

export function VolunteeringSection() {
  const { volunteering } = resumeData

  return (
    <section id="volunteering" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
            <HeartHandshake className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMMUNITY ENGAGEMENT & OUTREACH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">Volunteering</span> & Social Leadership
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent rounded-full mt-4" />
        </motion.div>

        {/* Community Cards */}
        <div className="grid gap-6">
          {volunteering.map((activity, index) => {
            const Icon = iconMap[index % iconMap.length]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl relative overflow-hidden border-l-4 border-l-cyan-400"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                      {activity.description}
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

