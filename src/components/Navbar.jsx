import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech', href: '#tech' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl backdrop-blur-xl bg-white/5 dark:bg-black/30 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-xl font-semibold tracking-tight text-white">
              <span className="text-cyan-400">//</span> Portfolio
            </a>
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,200,255,0.25)] hover:brightness-110 transition"
              >
                Hire Me
              </a>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg bg-white/5 text-white/90"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,200,255,0.25)]"
                >
                  Hire Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
