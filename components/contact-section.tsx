"use client"
import resumeData from "@/data/resume.json"
import { Mail, Phone, Linkedin } from "lucide-react"

export function ContactSection() {
  const { personal } = resumeData

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-500/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            className="glass glass-border p-8 hover:bg-white/10 transition-all duration-300 hover:neon-glow group text-center"
          >
            <Mail className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
            <p className="text-accent hover:underline break-all">{personal.email}</p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
            className="glass glass-border p-8 hover:bg-white/10 transition-all duration-300 hover:neon-glow group text-center"
          >
            <Phone className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2 text-foreground">Phone</h3>
            <p className="text-accent">{personal.phone}</p>
          </a>

          {/* LinkedIn */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-border p-8 hover:bg-white/10 transition-all duration-300 hover:neon-glow group text-center"
          >
            <Linkedin className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2 text-foreground">LinkedIn</h3>
            <p className="text-accent hover:underline">Connect with me</p>
          </a>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-accent/20">
          <p className="text-muted-foreground">
            © 2025 Anushka Mahanta. Crafted with passion for literature and design.
          </p>
        </div>
      </div>
    </section>
  )
}
