import Image from "next/image"
import { Utensils, Clapperboard, Tv, Music, Bike, Smartphone, MapPin, Gamepad2, BookOpen } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const FOODS = [
  { name: "Ajiaco", img: "/images/food-ajiaco.jpeg" },
  { name: "Bandeja Paisa", img: "/images/food-bandeja-paisa.png" },
  { name: "Frijoles con Chicharrón", img: "/images/food-pizza-tacos.png" },
  { name: "Suizo", img: "/images/food-pizza-tacos.png" },
  { name: "Hamburger", img: "/images/food-hamburger.png" },
]

const GAMES = ["Grand Theft Auto V", "Roblox", "RIDE 6", "Forza Horizon 6"]

const SONGS = [
  { title: "Hasta Aquí Llegué", artist: "Nanpa Básico" },
  { title: "Quiéreme Así", artist: "Nanpa Básico" },
  { title: "El Beneficio de la Duda", artist: "Grupo Firme" },
]

function CardShell({
  icon: Icon,
  title,
  className = "",
  children,
}: {
  icon: React.ElementType
  title: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={`glass hover-lift flex flex-col overflow-hidden rounded-2xl ${className}`}>
      <div className="flex items-center gap-3 border-b border-border/60 px-5 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan/25 bg-surface-2 text-cyan">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <div className="flex flex-1 flex-col p-5">{children}</div>
    </div>
  )
}

export function Favorites() {
  return (
    <section id="favorites" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="03 / Interests" title="My Favorites" subtitle="The things I enjoy the most." />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Favorite Food — spans wide */}
        <Reveal className="md:col-span-2 lg:col-span-3">
          <CardShell icon={Utensils} title="My Favorite Food">
            <p className="text-sm leading-relaxed text-muted">
              I have several favorite foods, including ajiaco, bandeja paisa, frijoles con chicharrón, suizo, and
              hamburgers. I enjoy both traditional Colombian food and fast food.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {FOODS.map((food) => (
                <div key={food.name} className="group overflow-hidden rounded-xl border border-border/60 bg-surface-2">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={food.img || "/placeholder.svg"}
                      alt={`${food.name} dish`}
                      fill
                      sizes="(max-width: 640px) 45vw, 18vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="px-3 py-2.5 text-center text-xs font-medium text-foreground">{food.name}</p>
                </div>
              ))}
            </div>
          </CardShell>
        </Reveal>

        {/* Favorite Movie */}
        <Reveal delay={60}>
          <CardShell icon={Clapperboard} title="My Favorite Movie">
            <div className="relative mb-4 aspect-[2/3] max-h-64 overflow-hidden rounded-xl border border-border/60">
              <Image
                src="/images/movie-3msc.png"
                alt="Three Steps Above Heaven movie poster"
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
                className="object-cover"
              />
            </div>
            <p className="text-base font-semibold text-foreground">Three Steps Above Heaven</p>
            <p className="font-mono text-xs text-muted">Tres metros sobre el cielo</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              One of my favorite movies is Three Steps Above Heaven. I enjoy its romantic story, emotions, and memorable
              characters.
            </p>
          </CardShell>
        </Reveal>

        {/* Favorite Series */}
        <Reveal delay={120}>
          <CardShell icon={Tv} title="My Favorite Series">
            <div className="relative mb-4 aspect-video overflow-hidden rounded-xl border border-border/60">
              <Image
                src="/images/series-amor.png"
                alt="Ask Me Love Turkish series poster"
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
                className="object-cover"
              />
            </div>
            <p className="text-base font-semibold text-foreground">Ask Me Love</p>
            <p className="font-mono text-xs text-muted">Turkish series</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              I enjoy watching Turkish series, and one of my favorites is Ask Me Love.
            </p>
          </CardShell>
        </Reveal>

        {/* Favorite Music */}
        <Reveal delay={180}>
          <CardShell icon={Music} title="My Favorite Music">
            <p className="text-base font-semibold text-foreground">Silvestre Dangond</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              I also enjoy songs by Nanpa Básico and Grupo Firme.
            </p>
            <ul className="mt-4 space-y-2">
              {SONGS.map((song) => (
                <li
                  key={song.title}
                  className="flex items-center gap-3 rounded-lg border border-border/60 bg-surface-2 px-3 py-2"
                >
                  <Music className="h-4 w-4 shrink-0 text-cyan" />
                  <span className="text-sm text-foreground">{song.title}</span>
                  <span className="ml-auto font-mono text-[11px] text-muted">{song.artist}</span>
                </li>
              ))}
            </ul>
          </CardShell>
        </Reveal>

        {/* Favorite Sport */}
        <Reveal delay={60}>
          <CardShell icon={Bike} title="My Favorite Sport">
            <div className="relative mb-4 aspect-video overflow-hidden rounded-xl border border-border/60">
              <Image
                src="/images/sport-motogp.png"
                alt="MotoGP racing motorcycle leaning through a corner"
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
                className="object-cover"
              />
            </div>
            <p className="text-base font-semibold text-foreground">MotoGP</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              One of my favorite sports is MotoGP. I love the adrenaline, speed, technology, and excitement of
              high-performance motorcycles. I am passionate about motorcycles and cars, and I enjoy the feeling of speed
              and precision involved in motorcycle racing.
            </p>
          </CardShell>
        </Reveal>

        {/* Favorite App */}
        <Reveal delay={120}>
          <CardShell icon={Smartphone} title="My Favorite App">
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-2xl font-semibold text-foreground">TikTok</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                TikTok is probably the app I spend the most time on. I use it mainly for entertainment, especially when
                I have nothing else to do.
              </p>
            </div>
          </CardShell>
        </Reveal>

        {/* Favorite Place */}
        <Reveal delay={180}>
          <CardShell icon={MapPin} title="My Favorite Place">
            <div className="relative mb-4 aspect-video overflow-hidden rounded-xl border border-border/60">
              <Image
                src="/images/place-guatape.png"
                alt="Landscape near Medellín, Antioquia, Colombia"
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
                className="object-cover"
              />
            </div>
            <p className="text-base font-semibold text-foreground">Medellín, Antioquia, Colombia</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Medellín is my favorite place. I love its climate, its landscapes, and all the activities available in the
              city and its surroundings. I recently visited Cocorná, a beautiful town near Medellín, where I had several
              ATV adventures and visited natural swimming holes.
            </p>
          </CardShell>
        </Reveal>

        {/* Favorite Video Games */}
        <Reveal delay={60} className="md:col-span-2">
          <CardShell icon={Gamepad2} title="My Favorite Video Games">
            <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative aspect-[3/4] max-h-72 overflow-hidden rounded-xl border border-border/60">
                <Image
                  src="/images/game-ride6.png"
                  alt="RIDE 6 video game cover"
                  fill
                  sizes="(max-width: 768px) 90vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm leading-relaxed text-muted">
                  I really enjoy games that offer realistic experiences, especially driving and racing simulators. I
                  like exploring virtual worlds, driving different vehicles, and experiencing realistic gameplay.
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {GAMES.map((game) => (
                    <li
                      key={game}
                      className="flex items-center gap-2 rounded-lg border border-border/60 bg-surface-2 px-3 py-2.5 text-sm text-foreground"
                    >
                      <Gamepad2 className="h-4 w-4 shrink-0 text-cyan" />
                      {game}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardShell>
        </Reveal>

        {/* Favorite Book */}
        <Reveal delay={120}>
          <CardShell icon={BookOpen} title="My Favorite Book">
            <div className="flex flex-1 flex-col items-center justify-center py-4 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-2 text-muted">
                <BookOpen className="h-6 w-6" />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                I don&apos;t have a favorite book because I don&apos;t usually read books.
              </p>
            </div>
          </CardShell>
        </Reveal>
      </div>
    </section>
  )
}
