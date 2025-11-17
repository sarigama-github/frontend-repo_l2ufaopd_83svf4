import { motion } from 'framer-motion'
import { Cpu, Code2, Zap, Sparkles } from 'lucide-react'

const skills = [
  { icon: <Code2 size={18} />, label: 'TypeScript' },
  { icon: <Code2 size={18} />, label: 'React' },
  { icon: <Code2 size={18} />, label: 'Next.js' },
  { icon: <Code2 size={18} />, label: 'Node.js' },
  { icon: <Code2 size={18} />, label: 'Three.js' },
  { icon: <Code2 size={18} />, label: 'GSAP' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#070a0f] to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 text-cyan-300/90">
              <Sparkles size={16} />
              <span className="text-xs uppercase tracking-widest">About Me</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Designing futuristic, human-centered interfaces</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              I’m a developer focused on building immersive, performant web experiences. I blend engineering with visual craft — delivering smooth animations, rich 3D, and clean, maintainable code.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-white/5 px-3 py-2 text-sm text-white/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur hover:border-cyan-400/40"
                >
                  <span className="text-cyan-300">{s.icon}</span>
                  {s.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_100px_-20px_rgba(0,200,255,0.25)]">
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800/80 border border-white/10 shadow-inner flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -inset-3 rounded-2xl bg-cyan-500/10 blur-xl" />
                      <Cpu className="text-cyan-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
