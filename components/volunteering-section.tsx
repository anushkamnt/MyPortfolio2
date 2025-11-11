"use client"

import resumeData from "@/data/resume.json"

export function VolunteeringSection() {
  const { volunteering } = resumeData

  return (
    <section id="volunteering" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Volunteering & Extracurriculars</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
        </div>

        <div className="space-y-6">
          {volunteering.map((activity, index) => (
            <div
              key={index}
              className="glass glass-border p-8 hover:bg-white/10 transition-all duration-300 hover:neon-glow fade-in border-l-4 border-l-accent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-accent mb-3">{activity.title}</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
