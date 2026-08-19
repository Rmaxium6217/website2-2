import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Rubén Dario Patiño Bello — Personal Website",
  description:
    "Personal website of Rubén Dario Patiño Bello, an Information Technology Education student from Montería, Córdoba, Colombia. Learn about my life, family, interests, daily routine, goals, and technology.",
  authors: [{ name: "Rubén Dario Patiño Bello" }],
  keywords: [
    "Rubén Dario Patiño Bello",
    "personal website",
    "portfolio",
    "University of Córdoba",
    "Information Technology Education",
    "Montería Colombia",
  ],
}

export const viewport: Viewport = {
  themeColor: "#07090d",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
