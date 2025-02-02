import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Reviews from "./components/Reviews"
import Skills from "./components/Skills"
import Work from "./components/Work"
import { ReactLenis, useLenis } from 'lenis/react'


const App = () => {
  return (
        <ReactLenis root>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App