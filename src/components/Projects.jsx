import { motion } from 'framer-motion'

const projects = [
  { title: 'Neon UI Kit', tag: 'Design System', description: 'A glassmorphic UI kit with motion primitives', link: '#' },
  { title: 'Orbit 3D', tag: 'WebGL/Three.js', description: 'Interactive orbital visualization with shaders', link: '#' },
  { title: 'Holo Dashboard', tag: 'Product', description: 'Futuristic analytics with realtime charts', link: '#' },
  { title: 'XR Landing', tag: 'Experience', description: 'Immersive 3D landing page', link: '#' },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(0,200,255,0.08),transparent_30%),radial-gradient(circle_at_20%_90%,rgba(99,102,241,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-300/90">Projects</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Selected work</h2>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10">Get a quote</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_-30px_rgba(0,200,255,0.2)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.12), transparent 40%)' }} />
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800/70 border border-white/10 mb-4 relative">
                <div className="absolute inset-0" style={{ perspective: 800 }}>
                  <div className="w-full h-full transition-transform duration-500 group-hover:-rotate-x-3 group-hover:rotate-y-6" />
                </div>
                <div className="absolute -inset-8 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.15),transparent_60%)]" />
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-300/90">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {p.tag}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-white/70 text-sm">{p.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
