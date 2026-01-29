import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Work from "./components/Work"
import Contact from "./components/Contact"
import ScaleSection from "./components/ScaleSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ScaleSection />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}
