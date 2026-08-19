import { Sunrise, ShowerHead, Coffee, Bike, BookOpen, UtensilsCrossed, Heart, PenLine, Gamepad2, Moon } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const ROUTINE = [
  {
    time: "5:00 AM",
    icon: Sunrise,
    title: "Wake up",
    text: "I usually get up at 5:00 a.m. I take a shower, get dressed, and have breakfast.",
  },
  {
    time: "5:15 AM",
    icon: ShowerHead,
    title: "Take a shower",
    text: "I take a shower and get dressed to start my day feeling fresh and ready.",
  },
  {
    time: "5:30 AM",
    icon: Coffee,
    title: "Have breakfast",
    text: "For breakfast, I usually have cereal with yogurt, or plantain slices with cheese or butifarra.",
  },
  {
    time: "5:45 AM",
    icon: Bike,
    title: "Warm up my motorcycle",
    text: "I take my motorcycle outside and start it so it can warm up before I leave for university.",
  },
  {
    time: "6:00 AM",
    icon: BookOpen,
    title: "Attend classes",
    text: "I usually start university at 6:00 a.m. I attend my classes and study different subjects related to my degree.",
  },
  {
    time: "12:00 PM",
    icon: UtensilsCrossed,
    title: "Have lunch",
    text: "I usually have lunch between 12:00 p.m. and 2:00 p.m., depending on my university schedule.",
  },
  {
    time: "Afternoon",
    icon: Heart,
    title: "Ride & spend time with my girlfriend",
    text: "When I have free time, I sometimes go for a ride on my motorcycle. Sometimes I visit my girlfriend, or I pick her up and we go out for ice cream or something to eat.",
  },
  {
    time: "Evening",
    icon: PenLine,
    title: "Study",
    text: "In the evening, I usually study and work on my university assignments and projects.",
  },
  {
    time: "Night",
    icon: Gamepad2,
    title: "Play video games",
    text: "If I don't have homework or assignments, I play some of my favorite games, either alone or with my friends.",
  },
  {
    time: "9–11 PM",
    icon: Moon,
    title: "Go to bed",
    text: "I usually go to bed between 9:00 p.m. and 11:00 p.m.",
  },
]

export function Routine() {
  return (
    <section id="routine" className="relative border-y border-border/60 bg-surface/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="04 / A Day" title="My Daily Routine" subtitle="A typical day in my life." />

        <div className="relative mt-14">
          {/* central road line */}
          <div className="road-line absolute left-[26px] top-2 hidden h-[calc(100%-1rem)] w-[3px] opacity-30 sm:block md:left-1/2 md:-translate-x-1/2" aria-hidden />

          <ol className="space-y-6">
            {ROUTINE.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 2) * 60}
                className={`relative md:flex md:items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* node */}
                <span className="absolute left-[14px] top-6 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-cyan/40 bg-background md:left-1/2 md:-translate-x-1/2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                </span>

                <div className={`pl-14 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass hover-lift rounded-2xl p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/25 bg-surface-2 text-cyan">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-cyan">{item.time}</span>
                        <h3 className="text-base font-semibold leading-tight">{item.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" aria-hidden />
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
