import { Smile, ShieldCheck, Laugh, Brain, Compass, Sparkles, GraduationCap, Users, Gamepad2 } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const TRAITS = [
  { icon: Smile, label: "Friendly", desc: "I connect easily with people." },
  { icon: ShieldCheck, label: "Responsible", desc: "I take my commitments seriously." },
  { icon: Laugh, label: "Funny", desc: "I like to make people laugh." },
  { icon: Brain, label: "Intelligent", desc: "I love solving problems." },
  { icon: Compass, label: "Curious", desc: "I always want to learn more." },
  { icon: Sparkles, label: "Creative", desc: "I enjoy building new ideas." },
]

const QUICK_FACTS = [
  { icon: GraduationCap, label: "Studies", value: "IT Education — University of Córdoba" },
  { icon: Users, label: "Family", value: "Mother, brother & grandmother" },
  { icon: Gamepad2, label: "Free time", value: "Games, series, movies & riding" },
]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="01 / Profile" title="About Me" subtitle="Getting to know the person behind the screen." />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="glass hover-lift rounded-2xl p-6 sm:p-8">
          <div className="space-y-4 text-pretty leading-relaxed text-muted">
            <p>
              My name is <span className="text-foreground">Rubén Dario Patiño Bello</span>. I am 18 years old and I am
              from Montería, Córdoba, Colombia. I am currently studying{" "}
              <span className="text-cyan">Information Technology Education</span> at the University of Córdoba.
            </p>
            <p>
              I consider myself a friendly, responsible, funny, intelligent, curious, and creative person. I enjoy
              learning new things and discovering how technology can be used to solve problems and create new
              experiences.
            </p>
            <p>
              I live with my mother, my brother, and my grandmother. My father lives in Medellín with my two sisters. My
              family is very important to me because they have always supported me in my studies and motivated me to
              keep working toward my dreams.
            </p>
            <p>
              In my free time, I enjoy playing video games on my laptop and smartphone, watching movies and Turkish
              series, riding my motorcycle, and spending time with my family and my girlfriend. I am also passionate
              about motorcycles and cars.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {QUICK_FACTS.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 90} className="glass hover-lift flex items-start gap-4 rounded-2xl p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan/25 bg-surface-2 text-cyan">
                <fact.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{fact.label}</p>
                <p className="mt-1 text-sm text-foreground">{fact.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Personality */}
      <Reveal className="mt-16">
        <h3 className="text-center text-xl font-semibold sm:text-2xl">Personality</h3>
        <p className="mt-2 text-center text-sm text-muted">Six traits that describe me best.</p>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {TRAITS.map((trait, i) => (
          <Reveal key={trait.label} delay={i * 70} className="group glass hover-lift rounded-2xl p-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-2 text-cyan transition-colors group-hover:border-cyan/50">
              <trait.icon className="h-6 w-6" />
            </span>
            <p className="mt-4 font-semibold">{trait.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{trait.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
