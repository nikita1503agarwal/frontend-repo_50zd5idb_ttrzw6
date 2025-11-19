import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-30">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.35)]" />
          <div>
            <p className="text-white text-lg font-semibold tracking-tight">Aquila Capital</p>
            <p className="text-xs text-blue-200/70 -mt-1">Agile Global Equities</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#strategy" className="text-blue-100/80 hover:text-white transition">Strategy</a>
          <a href="#edge" className="text-blue-100/80 hover:text-white transition">Edge</a>
          <a href="#contact" className="text-blue-100/80 hover:text-white transition">Contact</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-blue-100/80">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
