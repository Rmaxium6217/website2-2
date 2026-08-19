"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

type Photo = { src: string; alt: string; caption: string }

const PHOTOS: Photo[] = [
  { src: "/images/personal.jpeg", alt: "Rubén taking a selfie", caption: "This is me." },
  { src: "/images/motorcycle.jpeg", alt: "Rubén on his red motorcycle", caption: "My motorcycle — one of my favorite passions." },
  { src: "/images/mother.jpeg", alt: "Rubén's mother", caption: "My mom — one of the most important people in my life." },
  { src: "/images/father-truck.jpeg", alt: "Rubén with his father", caption: "A special moment with my dad." },
  { src: "/images/old-family.png", alt: "Old family photo", caption: "A special family memory." },
  { src: "/images/food-ajiaco.jpeg", alt: "A bowl of ajiaco", caption: "One of my favorite foods." },
  { src: "/images/food-bandeja-paisa.png", alt: "A bandeja paisa plate", caption: "Another delicious favorite." },
  { src: "/images/food-hamburger.png", alt: "A hamburger", caption: "A meal I really enjoy." },
  { src: "/images/father-horse.png", alt: "Rubén's father on a horse", caption: "A special family memory with my dad." },
  { src: "/images/childhood-cake.png", alt: "Rubén as a child at his birthday", caption: "A memory from my childhood." },
  { src: "/images/father-child.png", alt: "Rubén as a child with his father", caption: "Another childhood memory." },
]

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)), [])
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length)), [])

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [index, close, prev, next])

  return (
    <section id="gallery" className="relative border-t border-border/60 bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="07 / Memories" title="My Photo Gallery" subtitle="Some memories and moments from my life." />

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {PHOTOS.map((photo, i) => (
            <Reveal key={photo.src + i} delay={(i % 3) * 60} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border/70 bg-surface-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                aria-label={`Open photo: ${photo.caption}`}
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={800}
                  height={1000}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="p-4 text-sm font-medium text-foreground">{photo.caption}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {index !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-2 text-foreground transition-colors hover:border-cyan/50"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-2 text-foreground transition-colors hover:border-cyan/50 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-2 text-foreground transition-colors hover:border-cyan/50 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <figure className="relative max-h-[85vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex max-h-[78vh] items-center justify-center">
              <Image
                src={PHOTOS[index].src || "/placeholder.svg"}
                alt={PHOTOS[index].alt}
                width={1200}
                height={1500}
                sizes="90vw"
                className="max-h-[78vh] w-auto rounded-xl border border-border object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-foreground">
              {PHOTOS[index].caption}
              <span className="ml-2 font-mono text-xs text-muted">
                {index + 1} / {PHOTOS.length}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  )
}
