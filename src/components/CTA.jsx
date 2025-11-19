export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold">Request our investment deck</h2>
        <p className="mt-3 text-blue-100/80">Share your details and we’ll reach out with materials and a time to connect.</p>
        <form className="mt-8 grid sm:grid-cols-3 gap-3">
          <input className="col-span-1 sm:col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Name" />
          <input type="email" className="col-span-1 sm:col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Work Email" />
          <button type="button" className="col-span-1 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-900 font-semibold px-4 py-3 shadow-[0_10px_30px_rgba(56,189,248,0.35)]">Request Deck</button>
        </form>
        <p className="mt-3 text-xs text-blue-300/60">By submitting, you agree to be contacted by our team.</p>
      </div>
    </section>
  )
}
