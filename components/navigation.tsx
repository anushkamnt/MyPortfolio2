"use client"

import { useState,useEffect } from "react"

interface NavLink {
  id: string
  label: string
}

const navLinks: NavLink[] = [
  { id: "hero", label: "Home" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "volunteering", label: "Volunteering" },
  { id: "contact", label: "Contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => ({
        id: link.id,
        element: document.getElementById(link.id),
      }))

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
      
      let closestSection = sections[0]
      let closestDistance = Number.POSITIVE_INFINITY
      let currentActive = "hero"

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          const distance = Math.abs(rect.top)

          if (distance < closestDistance && rect.top < window.innerHeight) {
            closestDistance = distance
            closestSection = section
          }
        }
      }
      currentActive = closestSection.id

      if (isAtBottom) {
        currentActive = "contact"
      }
      setActiveSection(currentActive)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <span className="gradient-text text-xl font-bold">AM</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                  activeSection === link.id
                    ? "text-accent bg-accent/10 neon-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu links={navLinks} onSelect={handleNavClick} activeSection={activeSection} />
        </div>
      </div>
    </nav>
  )
}

function MobileMenu({
  links,
  onSelect,
  activeSection,
}: {
  links: NavLink[]
  onSelect: (id: string) => void
  activeSection: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-accent hover:bg-accent/10"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 w-48 glass border rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onSelect(link.id)
                  setIsOpen(false)
                }}
                className={`block w-full text-left px-3 py-2 text-sm rounded-md ${
                  activeSection === link.id ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
