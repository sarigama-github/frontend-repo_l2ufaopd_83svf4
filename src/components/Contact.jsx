import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#05070b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-cyan-300/90">Contact</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Let’s build something extraordinary</h2>
          <p className="mt-3 text-white/70">Tell me about your project — I’ll get back within 24 hours.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_-30px_rgba(0,200,255,0.2)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50" placeholder="jane@domain.com" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-white/70">Project details</label>
              <textarea rows="5" className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50" placeholder="Briefly describe your vision..." />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-[0_20px_60px_rgba(0,200,255,0.25)] hover:brightness-110 transition">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
