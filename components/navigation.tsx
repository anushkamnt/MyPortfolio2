"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Menu, X, GraduationCap, Briefcase, FileText, Wrench, HeartHandshake, Mail } from "lucide-react"

interface NavLink {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navLinks: NavLink[] = [
  { id: "hero", label: "Home", icon: Sparkles },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "work-experience", label: "Work Experience", icon: Briefcase },
  { id: "experience", label: "Conference", icon: Briefcase },
  { id: "research", label: "Research", icon: FileText },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "volunteering", label: "Community", icon: HeartHandshake },
  { id: "contact", label: "Contact", icon: Mail },
]


export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => ({
        id: link.id,
        element: document.getElementById(link.id),
      }))

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
      
      if (isAtBottom) {
        setActiveSection("contact")
        return
      }

      let closestSection = sections[0]
      let minDistance = Number.POSITIVE_INFINITY

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          const distance = Math.abs(rect.top - 100)

          if (distance < minDistance) {
            minDistance = distance
            closestSection = section
          }
        }
      }
      if (closestSection) {
        setActiveSection(closestSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="h-[3px] bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-150 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`w-full transition-all duration-300 font-serif ${scrolled ? "glass border-b border-primary/20 py-2.5 shadow-xl backdrop-blur-2xl" : "bg-transparent py-3 sm:py-4"}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-2">
            
            {/* Logo / Brand Header */}
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}
              className="group flex items-center gap-2 cursor-pointer shrink-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary p-[1px] shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300">
                <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center">
                  <span className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-xs sm:text-sm tracking-wider">
                    AM
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xs sm:text-base tracking-tight text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                  Anushka Mahanta
                </span>
                <span className="text-[9px] sm:text-[10px] text-primary/80 tracking-wider uppercase font-serif hidden xl:inline-block">
                  Literary Scholar
                </span>
              </div>
            </a>

            {/* Desktop Navigation (xl screens and above) */}
            <div className="hidden xl:flex items-center gap-1 bg-background/60 p-1.5 rounded-full border border-border backdrop-blur-xl shadow-2xl">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = activeSection === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-3.5 py-1.5 text-xs font-serif font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 rounded-full shadow-[0_0_15px_rgba(214,164,164,0.2)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="relative z-10">{link.label}</span>
                  </button>
                )
              })}
            </div>

            {/* iPad Mini / iPad Air Navigation (lg to xl) */}
            <div className="hidden lg:flex xl:hidden items-center gap-1 bg-background/80 p-1 rounded-full border border-border backdrop-blur-xl">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = activeSection === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    title={link.label}
                    className={`relative px-2.5 py-1 text-xs font-serif font-medium rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                      isActive
                        ? "text-primary bg-primary/20 border border-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-[11px] tracking-tight">{link.label}</span>
                  </button>
                )
              })}
            </div>

            {/* iPad / Tablet Icon-Only Nav (md to lg) */}
            <div className="hidden md:flex lg:hidden items-center gap-1 bg-background/80 p-1 rounded-full border border-border backdrop-blur-xl">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = activeSection === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    title={link.label}
                    className={`relative p-2 text-xs font-medium rounded-full transition-all flex items-center cursor-pointer ${
                      isActive
                        ? "text-primary bg-primary/20 border border-primary/30 shadow-[0_0_10px_rgba(214,164,164,0.2)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  </button>
                )
              })}
            </div>

            {/* Mobile Drawer Toggle (screens under md) */}
            <MobileMenu links={navLinks} onSelect={handleNavClick} activeSection={activeSection} />
          </div>
        </div>
      </nav>
    </header>
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
        aria-label="Toggle menu"
        className="p-2 rounded-xl bg-background/80 border border-primary/30 text-primary hover:text-primary/80 focus:outline-none cursor-pointer"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-4 left-4 glass border border-primary/30 rounded-2xl shadow-2xl p-3 overflow-hidden backdrop-blur-3xl bg-background/95 z-50 font-serif"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const Icon = link.icon
                const isActive = activeSection === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      onSelect(link.id)
                      setIsOpen(false)
                    }}
                    className={`flex items-center gap-3 w-full px-3.5 py-2.5 text-sm rounded-xl font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30 shadow-[0_0_12px_rgba(214,164,164,0.15)]"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                    <span>{link.label}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}




