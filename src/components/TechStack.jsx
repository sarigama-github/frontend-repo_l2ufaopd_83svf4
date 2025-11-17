import { motion } from 'framer-motion'

const techs = ['React', 'Three.js', 'Node', 'TS', 'Next', 'GSAP']

export default function TechStack() {
  return (
    <section id="tech" className="relative py-24 bg-gradient-to-b from-black to-[#05070b] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-cyan-300/90">Tech Stack</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Tools I build with</h2>
          <p className="mt-3 text-white/70">3D + Motion + Performance</p>
        </div>

        <div className="relative mt-12 h-72">
          <div className="absolute inset-0 rounded-full border border-cyan-400/20" />
          <div className="absolute inset-0">
            {techs.map((t, i) => (
              <motion.div
                key={t}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ rotate: `${(i / techs.length) * 360}deg` }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
                  className="origin-[0_140px]"
                >
                  <div className="w-28 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-center text-white/90 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                    {t}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
    </section>
  )
}
