"use client"

import resumeData from "@/data/resume.json"

export function SkillsSection() {
  const { skills, interests } = resumeData

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-500/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Skills & Interests</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="glass glass-border p-6 hover:bg-white/10 transition-all duration-300 hover:neon-glow fade-in"
            >
              <h3 className="text-lg font-bold text-accent mb-4 capitalize">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(skillList as string[]).map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="glass glass-border p-8">
          <h3 className="text-2xl font-bold text-accent mb-6">Interests</h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gradient-to-r from-accent/20 to-purple-500/20 text-foreground rounded-full border border-accent/30 hover:border-accent/60 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
