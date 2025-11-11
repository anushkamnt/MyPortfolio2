import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ResearchSection } from "@/components/research-section"
import { SkillsSection } from "@/components/skills-section"
import { VolunteeringSection } from "@/components/volunteering-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <ResearchSection />
      <SkillsSection />
      <VolunteeringSection />
      <ContactSection />
    </main>
  )
}
