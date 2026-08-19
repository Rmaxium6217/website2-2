"use client"

import { useEffect, useState } from "react"
import { User, Users, Heart, Clock, Target, Cpu, Presentation, X } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const TOPICS = [
  { icon: User, label: "Who I am" },
  { icon: Users, label: "My family and my life" },
  { icon: Heart, label: "My favorite things" },
  { icon: Clock, label: "My daily routine" },
  { icon: Target, label: "My goals" },
  { icon: Cpu, label: "Technology in my life" },
]

const SCRIPT: { heading: string; body: string }[] = [
  {
    heading: "Introduction",
    body: "Hello everyone! Welcome to my personal website. My name is Rubén Dario Patiño Bello. I am 18 years old and I am from Montería, Córdoba, Colombia.",
  },
  {
    heading: "What I study",
    body: "I am currently studying Information Technology Education at the University of Córdoba. I really enjoy learning about technology and how it can be used to solve problems.",
  },
  {
    heading: "My family",
    body: "I live with my mother, my brother, and my grandmother. My father lives in Medellín with my two sisters. My family is very important to me because they always support me and motivate me to follow my dreams.",
  },
  {
    heading: "My hobbies",
    body: "In my free time, I like to play video games on my laptop and smartphone, watch movies and Turkish series, ride my motorcycle, and spend time with my family and my girlfriend.",
  },
  {
    heading: "My favorite things",
    body: "I love Colombian food like ajiaco, bandeja paisa, and frijoles con chicharrón, and also fast food like hamburgers. My favorite movie is Three Steps Above Heaven, my favorite sport is MotoGP, and my favorite place is Medellín.",
  },
  {
    heading: "My daily routine",
    body: "On a normal day, I wake up at five in the morning, take a shower, and have breakfast. I start university at six. In the afternoon I ride my motorcycle or spend time with my girlfriend. In the evening I study, and sometimes I play video games before I go to bed.",
  },
  {
    heading: "My goals",
    body: "In the future, I want to graduate from my degree and also study Systems Engineering. I want to travel around Colombia and the world, have my own house with a garage full of motorcycles and cars, and create my own business.",
  },
  {
    heading: "Technology in my life",
    body: "Technology is a big part of my life. My favorite device is my laptop, and I use AI tools like ChatGPT and Gemini to learn and improve my work. In the future, I want to learn video game development, cybersecurity, and programming.",
  },
  {
    heading: "Closing",
    body: "Thank you for visiting my website!",
  },
]

export function FinalPresentation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <section id="presentation" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="08 / Class" title="Final Presentation" subtitle="Welcome to my personal website." />

      <Reveal className="mt-12">
        <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
          <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
            aria-hidden
            style={{ background: "radial-gradient(circle, rgba(34,211,238,0.4), transparent 70%)" }}
          />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/30 bg-surface-2 text-cyan">
                <Presentation className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Presentation Overview</h3>
                <p className="text-sm text-muted">The main topics I can talk about in class.</p>
              </div>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {TOPICS.map((topic, i) => (
                <li
                  key={topic.label}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface-2 px-4 py-3"
                >
                  <span className="font-mono text-xs text-cyan">{String(i + 1).padStart(2, "0")}</span>
                  <topic.icon className="h-4 w-4 text-cyan" />
                  <span className="text-sm text-foreground">{topic.label}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02] glow-cyan"
            >
              <Presentation className="h-4 w-4" />
              Presentation Overview
            </button>
          </div>
        </div>
      </Reveal>

      {/* Script modal */}
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Presentation script"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="glass relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan">Script • 3–5 minutes</p>
                <h3 className="mt-1 text-lg font-semibold">My Presentation</h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close presentation script"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-2 text-foreground transition-colors hover:border-cyan/50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6">
              <ol className="space-y-5">
                {SCRIPT.map((part, i) => (
                  <li key={part.heading} className="relative pl-8">
                    <span className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-cyan/30 bg-surface-2 font-mono text-[11px] text-cyan">
                      {i + 1}
                    </span>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{part.heading}</p>
                    <p className="mt-1 text-pretty leading-relaxed text-foreground/90">{part.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
