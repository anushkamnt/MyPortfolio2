import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anushka Mahanta | English Literature & Research",
  description:
    "Portfolio of Anushka Mahanta - Integrated MA in English Literature from Tezpur University. Showcasing research papers, academic work, and expertise in literary analysis, content writing, and scholarly research.",
  keywords: "English Literature, Research, Academic Writing, Literary Analysis, Tezpur University",
  authors: [{ name: "Anushka Mahanta", url: "https://linkedin.com/in/anushka-mahanta-702a8524a/" }],
  openGraph: {
    title: "Anushka Mahanta | English Literature & Research",
    description: "Portfolio showcasing research papers and academic excellence",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/Anushka_Logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Anushka_Logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Anushka_Logo",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
