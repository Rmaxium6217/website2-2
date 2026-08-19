import { Play, Clock, Film } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function VideoSection() {
  return (
    <section id="video" className="relative border-y border-border/60 bg-surface/30 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="02 / Intro" title="My Video" subtitle="A short introduction to who I am." />

        <Reveal className="mt-12">
          <div className="glass overflow-hidden rounded-2xl">
            {/* Player top bar */}
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-burgundy-soft/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
                <Film className="h-3.5 w-3.5" /> intro.mp4
              </div>
            </div>

            {/* Player body */}
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 grid-bg" aria-hidden />
              <div
                className="absolute inset-0"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(50% 60% at 50% 45%, rgba(34,211,238,0.14), transparent 65%)",
                }}
              />
              <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                <button
                  type="button"
                  disabled
                  aria-label="Video not available yet"
                  className="relative flex h-20 w-20 cursor-not-allowed items-center justify-center rounded-full border border-cyan/40 bg-background/70 text-cyan opacity-90"
                >
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full" aria-hidden />
                  <Play className="ml-1 h-8 w-8" fill="currentColor" />
                </button>
                <p className="mt-6 font-mono text-2xl font-semibold uppercase tracking-[0.3em] text-foreground sm:text-3xl">
                  Coming Soon
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  My personal introduction video will be available here soon.
                </p>
              </div>
            </div>

            {/* Player bottom bar */}
            <div className="flex items-center justify-between border-t border-border/60 px-4 py-3">
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-2 px-2 py-1 font-mono">
                  <Clock className="h-3.5 w-3.5" /> 1–2 minutes
                </span>
                <span className="hidden sm:inline">Personal Introduction</span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-cyan">Not available yet</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
