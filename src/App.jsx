import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Reviews from "./components/Reviews"
import Skills from "./components/Skills"
import Work from "./components/Work"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Reviews />
      </main>
    </>
  )
}

export default App