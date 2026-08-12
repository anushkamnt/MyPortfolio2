import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EducationSection } from "@/components/education-section"
import { WorkExperienceSection } from "@/components/work-experience-section"
import { ExperienceSection } from "@/components/experience-section"
import { ResearchSection } from "@/components/research-section"
import { SkillsSection } from "@/components/skills-section"
import { VolunteeringSection } from "@/components/volunteering-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Navigation />
      <HeroSection />
      <EducationSection />
      <WorkExperienceSection />
      <ExperienceSection />
      <ResearchSection />
      <SkillsSection />
      <VolunteeringSection />
      <ContactSection />
    </main>
  )
}


