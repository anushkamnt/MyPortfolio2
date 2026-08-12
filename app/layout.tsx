import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { BackgroundEffects } from "@/components/background-effects"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Anushka Mahanta | Literary Scholar & Academic Researcher",
  description:
    "Official Academic Portfolio of Anushka Mahanta - Integrated MA in English Literature from Tezpur University. Specializing in oral traditions, patriarchal construct analysis, literary theory, and cultural storytelling.",
  keywords: "Anushka Mahanta, English Literature, Tezpur University, Indigenous Knowledge, Oral Traditions, Said's Othering, Literary Analysis, Academic Writing, Content Strategy",
  authors: [{ name: "Anushka Mahanta", url: "https://linkedin.com/in/anushka-mahanta-702a8524a/" }],
  openGraph: {
    title: "Anushka Mahanta | English Literature & Research Portfolio",
    description: "Exploring the intersection of language, culture, storytelling, and academic research.",
    type: "website",
    locale: "en_US",
    siteName: "Anushka Mahanta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anushka Mahanta | Literary Scholar & Researcher",
    description: "Academic research papers, critical analysis, and scholarly works in English Literature.",
  },
  icons: {
    icon: "/Anushka_Logo.png",
    apple: "/Anushka_Logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable} overflow-x-hidden`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen relative overflow-x-hidden w-full max-w-[100vw]">
        <BackgroundEffects />
        <div className="relative z-10 w-full overflow-x-hidden">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}

