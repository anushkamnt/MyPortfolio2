"use client"

import resumeData from "@/data/resume.json"

export function ResearchSection() {
  const { papers } = resumeData

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Academic & Research Papers</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
        </div>

        <div className="grid gap-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="glass glass-border p-8 hover:bg-white/10 transition-all duration-300 hover:neon-glow fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{paper.title}</h3>
                  <p className="text-muted-foreground mt-1">{paper.institution}</p>
                </div>
                <p className="text-sm text-accent font-medium whitespace-nowrap">{paper.date}</p>
              </div>

              <ul className="space-y-2">
                {paper.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-foreground/80">
                    <span className="text-accent">•</span>
                    <span>{highlight}</span>
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
