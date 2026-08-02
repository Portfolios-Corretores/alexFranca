import { About } from './components/About'
import { Diferenciais } from './components/Diferenciais'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Processo } from './components/Processo'
import { Reveal } from './components/Reveal'
import { SmoothScroll } from './components/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal delayMs={80}>
          <Diferenciais />
        </Reveal>
        <Reveal delayMs={80}>
          <Processo />
        </Reveal>
        <Reveal delayMs={80}>
          <Footer />
        </Reveal>
      </main>
    </SmoothScroll>
  )
}

export default App
