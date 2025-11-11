"use client"

import resumeData from "@/data/resume.json"

export function EducationSection() {
  const { education } = resumeData

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
        </div>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass glass-border p-8 hover:bg-white/10 transition-all duration-300 hover:neon-glow fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent">{edu.degree}</h3>
                  <p className="text-foreground/80 text-lg">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.location}</p>
                </div>
                <p className="text-sm text-accent font-medium whitespace-nowrap">{edu.duration}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {edu.highlights.map((highlight, i) => (
                  <div key={i} className="bg-accent/10 px-3 py-2 rounded text-sm text-foreground/80">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
