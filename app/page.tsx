import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VideoSection } from "@/components/video-section"
import { Favorites } from "@/components/favorites"
import { Routine } from "@/components/routine"
import { Goals } from "@/components/goals"
import { Technology } from "@/components/technology"
import { Gallery } from "@/components/gallery"
import { FinalPresentation } from "@/components/presentation"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Favorites />
        <Routine />
        <Goals />
        <Technology />
        <Gallery />
        <FinalPresentation />
      </main>
      <Footer />
    </>
  )
}
