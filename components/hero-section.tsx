"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import resumeData from "@/data/resume.json"

export function HeroSection() {
  const { personal, hero } = resumeData

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6 mb-8">
          {/* Left side - Name and description */}
          <div className="flex-1 text-center lg:text-left fade-in">
            <div className="mb-6 lg:mb-8 mt-8 sm:mt-10 lg:mt-0">
              <div className="inline-block glass px-4 py-2 mb-4 neon-glow">
                <p className="text-sm text-accent font-medium">{personal.location}</p>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="gradient-text">{personal.name}</span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 lg:mb-8">{hero.heading}</h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">{hero.subheading}</p>
          </div>

          {/* Right side - Profile picture */}
          <div className="flex-1 flex justify-center lg:justify-end fade-in">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-linear-to-br from-accent to-purple-500 rounded-2xl blur-2xl opacity-50 -z-10" />
              <Image
                src="/Anushka_Profile.jpg"
                alt="Anushka Mahanta"
                fill
                objectFit="contain"
                className="object-cover rounded-2xl glass border border-accent/20 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg hover:scale-105 transition-transform cursor-pointer"
            >
              Get In Touch
            </Button>
            <Button
              onClick={() => {
                // Create a link element
                const link = document.createElement("a");
                link.href = "/Anushka_Resume.pdf";
                link.download = "Anushka_Resume.pdf";
                // Trigger download without navigation
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              variant="outline"
              className="glass border border-accent hover:bg-accent/10 hover:text-accent text-accent font-medium px-8 py-6 text-lg neon-glow hover:scale-105 transition-transform cursor-pointer"
            >
              Download Resume
            </Button>
          </div>
      </div>
    </section>
  )
}
