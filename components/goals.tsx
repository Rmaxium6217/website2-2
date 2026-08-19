import { GraduationCap, Bike, Globe2, Home, Rocket } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const GOALS = [
  {
    icon: GraduationCap,
    tag: "Education",
    title: "Two Degrees",
    text: "Graduate from my current degree in Information Technology Education and also study Systems Engineering. I would like to have both degrees.",
  },
  {
    icon: Bike,
    tag: "Adventure",
    title: "Travel by Motorcycle",
    text: "Travel around Colombia and explore beautiful natural places on a touring motorcycle with my girlfriend.",
  },
  {
    icon: Globe2,
    tag: "Exploration",
    title: "Travel the World",
    text: "Visit several countries while I am still young and experience different cultures, places, and landscapes.",
  },
  {
    icon: Home,
    tag: "Lifestyle",
    title: "My Dream Home",
    text: "Have my own house or country house with everything I dream of, including a garage full of my favorite motorcycles and cars.",
  },
  {
    icon: Rocket,
    tag: "Ambition",
    title: "My Own Business",
    text: "Create my own businesses or company and become successful through my own projects and ideas.",
  },
]

export function Goals() {
  return (
    <section id="goals" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="05 / Future" title="My Goals" subtitle="Dream big, keep moving forward." />

      <Reveal className="mx-auto mt-6 max-w-2xl text-center">
        <p className="text-pretty leading-relaxed text-muted">
          I have many dreams for my future. I know that achieving them will take time, effort, and dedication, but I
          believe that every step brings me closer to my goals.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {GOALS.map((goal, i) => (
          <Reveal key={goal.title} delay={i * 80} className="group relative">
            <div className="glass hover-lift relative h-full overflow-hidden rounded-2xl p-6">
              <span
                className="absolute right-4 top-4 font-mono text-5xl font-bold text-border/70 transition-colors group-hover:text-cyan/20"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/25 bg-surface-2 text-cyan">
                <goal.icon className="h-6 w-6" />
              </span>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-burgundy-soft">{goal.tag}</p>
              <h3 className="mt-1 text-lg font-semibold">{goal.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{goal.text}</p>
              {/* roadmap progress bar */}
              <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan to-burgundy-soft transition-all duration-700 group-hover:w-full"
                  style={{ width: "35%" }}
                />
              </div>
            </div>
          </Reveal>
        ))}

        {/* Journey card */}
        <Reveal delay={GOALS.length * 80} className="relative">
          <div className="relative flex h-full flex-col items-start justify-center overflow-hidden rounded-2xl border border-cyan/20 bg-gradient-to-br from-surface-2 to-background p-6">
            <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
            <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-cyan">The journey</p>
            <p className="relative mt-3 text-pretty text-lg font-medium leading-relaxed">
              Step by step, I am building the future I imagine — with patience and consistency.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
