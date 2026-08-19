import { Laptop, GraduationCap, Bot, Gamepad2, ShieldCheck, Code2, FileText, Table, Palette } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const TOOLS = [
  { icon: FileText, label: "Word" },
  { icon: Table, label: "Excel" },
  { icon: Palette, label: "Canva" },
  { icon: Bot, label: "ChatGPT" },
  { icon: Bot, label: "Gemini" },
]

const LEARN = [
  {
    icon: Gamepad2,
    title: "Video Game Development",
    text: "Learning how to build the interactive worlds and games I love to play.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    text: "Understanding how to protect systems, data, and people online.",
  },
  {
    icon: Code2,
    title: "Programming",
    text: "Writing code to turn my ideas into real digital projects.",
  },
]

export function Technology() {
  return (
    <section id="technology" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="06 / Tech"
        title="Technology in My Life"
        subtitle="How technology helps me learn, create, and have fun."
      />

      <Reveal className="mx-auto mt-6 max-w-2xl text-center">
        <p className="text-pretty leading-relaxed text-muted">
          Technology is an important part of my everyday life. I use it for university, entertainment, communication,
          research, and personal projects.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Favorite device */}
        <Reveal className="glass hover-lift rounded-2xl p-6 sm:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/25 bg-surface-2 text-cyan">
            <Laptop className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-semibold">My Favorite Device</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            My favorite technological device is my laptop. I use it for my university assignments, projects, research,
            and video games.
          </p>
        </Reveal>

        {/* Study + tools */}
        <Reveal delay={80} className="glass hover-lift rounded-2xl p-6 sm:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/25 bg-surface-2 text-cyan">
            <GraduationCap className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-semibold">How Technology Helps Me Study</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Technology makes it easier for me to find the information I need for my studies. I also use tools such as
            Microsoft Word, Excel, Canva, and other digital resources to create assignments and projects.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span
                key={tool.label}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface-2 px-3 py-1.5 text-xs text-foreground"
              >
                <tool.icon className="h-3.5 w-3.5 text-cyan" />
                {tool.label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* AI tools */}
        <Reveal delay={120} className="glass hover-lift rounded-2xl p-6 sm:p-8 lg:col-span-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-burgundy-soft/30 bg-surface-2 text-burgundy-soft">
              <Bot className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">AI Tools</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                My favorite AI tools are ChatGPT and Gemini. I use AI tools to learn, understand difficult topics, find
                ideas, and improve my work.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Want to learn */}
      <Reveal className="mt-14">
        <h3 className="text-center text-xl font-semibold sm:text-2xl">Technology I Want to Learn</h3>
        <p className="mt-2 text-center text-sm text-muted">
          In the future, I would like to learn more about these fields.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {LEARN.map((item, i) => (
          <Reveal key={item.title} delay={i * 80} className="group relative">
            <div className="glass hover-lift relative h-full overflow-hidden rounded-2xl p-6 text-center">
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan/25 bg-surface-2 text-cyan">
                <item.icon className="h-6 w-6" />
              </span>
              <h4 className="mt-4 font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
