import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(600px_circle_at_90%_10%,rgba(59,130,246,0.07),transparent_40%)]" />

      <div className="relative">
        <Navbar />
        <Hero />

        <div className="relative z-20">
          <Features />
          <CTA />
          <footer className="py-10 text-center text-blue-300/60 text-sm">© {new Date().getFullYear()} Aquila Capital. All rights reserved.</footer>
        </div>
      </div>
    </div>
  )
}

export default App
