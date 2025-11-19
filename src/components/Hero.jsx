import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-20 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-blue-100/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Real-time, Adaptive Portfolio Construction
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
              Agile Global Equity Investing
            </h1>
            <p className="mt-4 text-blue-100/80 text-base sm:text-lg max-w-prose">
              We partner with clients to compound capital in public equity markets using a nimble, research-driven approach. Our process blends systematic signals with discretionary oversight to navigate regimes.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-900 font-semibold px-4 py-2 shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                Request Deck
              </a>
              <a href="#strategy" className="inline-flex items-center justify-center rounded-lg border border-white/15 text-blue-100/90 px-4 py-2 hover:bg-white/5">
                Our Strategy
              </a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
    </section>
  )
}
