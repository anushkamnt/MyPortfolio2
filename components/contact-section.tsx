"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Mail, Phone, Linkedin, Copy, Check, Send, MapPin, ExternalLink, Loader2, MessageSquare, AlertCircle } from "lucide-react"
import resumeData from "@/data/resume.json"

export function ContactSection() {
  const { personal } = resumeData
  const formRef = useRef<HTMLFormElement>(null)

  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2500)
  }

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage(null)

    const serviceId = (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_p8bdqjc").replace(/^["']|["']$/g, "")
    const templateId = (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_g7bteep").replace(/^["']|["']$/g, "")
    const publicKey = (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Mbo9fVlxecRMxN9vI").replace(/^["']|["']$/g, "")

    if (!serviceId || serviceId === "your_service_id_here" || !templateId || templateId === "your_template_id_here" || !publicKey || publicKey === "your_public_key_here") {
      setStatusMessage({
        type: "error",
        text: "EmailJS keys are missing or invalid in .env.local. Please check your SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY.",
      })
      setLoading(false)
      return
    }

    try {
      if (formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, {
          publicKey: publicKey,
        })
        setStatusMessage({
          type: "success",
          text: "Thank you! Your message has been successfully sent to Anushka.",
        })
        formRef.current.reset()
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err)
      const errorDetail = err?.text || err?.message || JSON.stringify(err)
      setStatusMessage({
        type: "error",
        text: `EmailJS Error: ${errorDetail || "Failed to send message."}`,
      })
    } finally {
      setLoading(false)
    }
  }


  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/60">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Send className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
            Open for research collaborations, academic writing opportunities, literary consulting, and content strategy roles.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent rounded-full mt-4" />
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card glass-card-hover p-8 rounded-3xl text-center relative group flex flex-col items-center justify-between"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-slate-100 mb-1">Email Address</h3>
            <p className="text-cyan-300 text-xs sm:text-sm font-mono break-all mb-6">
              {personal.email}
            </p>

            <div className="flex gap-2 w-full">
              <button
                onClick={() => {
                  const formEl = document.querySelector("form")
                  if (formEl) {
                    formEl.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors cursor-pointer"
              >
                <span>Send Email</span>
                <Send className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => copyToClipboard(personal.email, "email")}
                aria-label="Copy email address"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors cursor-pointer"
              >
                {copiedField === "email" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card glass-card-hover p-8 rounded-3xl text-center relative group flex flex-col items-center justify-between"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-slate-100 mb-1">Phone Call</h3>
            <p className="text-purple-300 text-xs sm:text-sm font-mono mb-6">
              {personal.phone}
            </p>

            <div className="flex gap-2 w-full">
              <a
                href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-600 text-slate-100 font-bold text-xs hover:bg-purple-500 transition-colors cursor-pointer"
              >
                <span>Call Now</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(personal.phone, "phone")}
                aria-label="Copy phone number"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-300 hover:border-purple-500/40 transition-colors cursor-pointer"
              >
                {copiedField === "phone" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card glass-card-hover p-8 rounded-3xl text-center relative group flex flex-col items-center justify-between"
          >
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-slate-100 mb-1">LinkedIn Network</h3>
            <p className="text-pink-300 text-xs sm:text-sm font-mono mb-6">
              Anushka Mahanta
            </p>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-slate-950 font-bold text-xs hover:from-pink-400 hover:to-purple-500 transition-all cursor-pointer shadow-lg"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>

        {/* EmailJS Message Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">Send Direct Message</h3>
              <p className="text-slate-400 text-xs mt-0.5">Powered by EmailJS — messages deliver straight to Anushka's inbox</p>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSendEmail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-mono">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="e.g. Dr. John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-mono">Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="e.g. john@university.edu"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-mono">Subject / Inquiry</label>
              <input 
                type="text" 
                name="title"
                required
                placeholder="e.g. Research Collaboration Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all"
              />
            </div>


            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-mono">Message</label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="Write your message or inquiry here..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all resize-none"
              />
            </div>

            {statusMessage && (
              <div className={`p-4 rounded-xl text-xs font-medium flex items-center gap-2 ${
                statusMessage.type === "success" 
                  ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                  : "bg-rose-500/10 border border-rose-500/30 text-rose-300"
              }`}>
                {statusMessage.type === "success" ? <Check className="w-4 h-4 text-emerald-400 shrink-0" /> : <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-purple-500 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Footer info */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-light">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>Tezpur University, Assam, India</span>
          </div>
          <p>© {new Date().getFullYear()} Anushka Mahanta. Crafted with passion for literary scholarship & design.</p>
        </div>

      </div>
    </section>
  )
}


