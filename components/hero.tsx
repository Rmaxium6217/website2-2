import Image from "next/image"
import { MapPin, ArrowRight, Quote } from "lucide-react"
import { Reveal } from "./reveal"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Ambient background */}
      <div className="absolute inset-0 grid-bg grid-drift" aria-hidden />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 55% at 78% 30%, rgba(34,211,238,0.14), transparent 60%), radial-gradient(50% 50% at 15% 80%, rgba(142,27,58,0.22), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-surface-2/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              <MapPin className="h-3.5 w-3.5" /> Montería, Colombia
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Hi, I&apos;m <span className="text-cyan text-glow-cyan">Rubén Dario</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl">
              Information Technology Education Student
            </p>
            <p className="mt-1 text-sm text-muted">Montería, Córdoba, Colombia</p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted">
              Welcome to my personal website! Here you can learn more about who I am, my family, my interests, my daily
              life, my goals, and the role technology plays in my life.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <figure className="mt-8 max-w-xl rounded-2xl border border-border/70 bg-surface/50 p-5">
              <Quote className="h-5 w-5 text-burgundy-soft" aria-hidden />
              <blockquote className="mt-2 text-pretty text-base italic leading-relaxed text-foreground/90">
                &ldquo;I walk slowly because I am going far. I am not in a hurry, but I never stop.&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02] glow-cyan"
              >
                Explore My Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-cyan/40"
              >
                About Me
              </a>
            </div>
          </Reveal>
        </div>

        {/* Photo */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-burgundy/30 via-transparent to-cyan/30 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan/20 glass p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/images/personal.jpeg"
                  alt="Portrait of Rubén Dario Patiño Bello"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" aria-hidden />
              </div>
              {/* dashboard-style badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-lg border border-cyan/30 bg-background/80 px-3 py-1.5 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-foreground/90">Online</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
