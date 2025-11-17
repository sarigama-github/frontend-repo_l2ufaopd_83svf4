import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white selection:bg-cyan-400/30">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <footer className="border-t border-white/10 bg-[#05070b]">
        <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-white/50 text-sm">Built with love • Motion-first • 3D-ready</div>
        </div>
      </footer>
    </div>
  )
}

export default App
