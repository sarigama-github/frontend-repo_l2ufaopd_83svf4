import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#070a0f] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            Available for freelance
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Your Name</span>, a Tech Developer
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl">
            I craft immersive, high-performance digital experiences blending modern engineering with cinematic UX.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-[0_20px_60px_rgba(0,200,255,0.25)] hover:brightness-110 transition"
            >
              <span>View Projects</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* Neon lines and glow accents */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-40 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
    </section>
  )
}
