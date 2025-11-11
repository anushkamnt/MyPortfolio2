"use client";

import { Button } from "@/components/ui/button";
import resumeData from "@/data/resume.json";

export function HeroSection() {
  const { personal, hero } = resumeData;

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

      <div className="max-w-4xl mx-auto text-center fade-in">
        <div className="mb-6">
          <div className="inline-block glass px-4 py-2 mb-4 neon-glow">
            <p className="text-sm text-accent font-medium">
              {personal.location}
            </p>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">{personal.name}</span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {hero.heading}
        </h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          {hero.subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </section>
  );
}
