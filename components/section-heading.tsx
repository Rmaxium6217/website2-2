import { Reveal } from "./reveal"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow ? (
        <div
          className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}
        >
          <span className="h-px w-8 bg-cyan/60" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-cyan">{eyebrow}</span>
          <span className="h-px w-8 bg-cyan/60" />
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-pretty text-base leading-relaxed text-muted md:text-lg">{subtitle}</p> : null}
    </Reveal>
  )
}
