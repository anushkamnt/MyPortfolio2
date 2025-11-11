"use client"

import resumeData from "@/data/resume.json"

export function ExperienceSection() {
  const { experience } = resumeData

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-500/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Experience & Conferences</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
        </div>

        <div className="grid gap-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="glass glass-border p-8 hover:bg-white/10 transition-all duration-300 hover:neon-glow fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent">{exp.title}</h3>
                  <p className="text-foreground/80">{exp.institution}</p>
                  <p className="text-muted-foreground text-sm">{exp.location}</p>
                </div>
                <p className="text-sm text-accent font-medium whitespace-nowrap">{exp.date}</p>
              </div>

              <p className="text-foreground/80 mb-4 italic">{exp.details}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-foreground/80">
                    <span className="text-accent mt-1">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
