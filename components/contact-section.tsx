"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, ArrowRight } from "lucide-react"
import resumeData from "@/data/resume.json"

export function ContactSection() {
  const { personal } = resumeData
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const contactMethods = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: Linkedin, label: "LinkedIn", value: "Anushka Mahanta", href: personal.linkedin },
    { icon: MapPin, label: "Location", value: personal.location, href: null },
  ]

  return (
    <section id="contact" className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative lg:min-h-screen flex items-center bg-background/50">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Split Header & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-serif mb-6">
                <Send className="w-3.5 h-3.5 text-primary" />
                <span>LET'S CONNECT</span>
              </div>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold tracking-tighter leading-[0.9] mb-8">
                Get in <br/><span className="text-gradient-elegant">Touch.</span>
              </h2>
              <p className="text-muted-foreground font-light text-lg sm:text-xl leading-relaxed max-w-md">
                Interested in academic collaboration, content strategy, or exploring literary discourse? I would love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full glass border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
                    <method.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="block text-xs font-serif uppercase tracking-widest text-muted-foreground mb-1">
                      {method.label}
                    </span>
                    {method.href ? (
                      <a href={method.href} target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl font-serif font-medium text-foreground hover:text-primary transition-colors">
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-lg sm:text-xl font-serif font-medium text-foreground">
                        {method.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="glass-card p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-serif uppercase tracking-widest text-muted-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-3 text-foreground font-serif focus:ring-0 focus:border-primary transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-serif uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-3 text-foreground font-serif focus:ring-0 focus:border-primary transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-serif uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-3 text-foreground font-serif focus:ring-0 focus:border-primary transition-colors resize-none"
                    placeholder="Hello Anushka, I would like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full h-14 rounded-2xl bg-foreground text-background font-serif font-bold hover:bg-primary transition-all disabled:opacity-70 flex items-center justify-center gap-2 group"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin"
                      />
                    ) : isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message Sent</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
