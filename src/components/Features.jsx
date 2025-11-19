export default function Features() {
  const items = [
    {
      title: 'Agile Portfolio Construction',
      desc: 'Dynamic risk budgeting and factor tilts adapt to market regimes while preserving core exposure to quality compounding businesses.',
    },
    {
      title: 'Systematic + Discretionary',
      desc: 'Quantitative signals drive idea surfacing and sizing; experienced judgment manages exogenous risks and catalysts.',
    },
    {
      title: 'Global, Benchmark-Aware',
      desc: 'Opportunity set spans developed markets with a pragmatic, benchmark-aware approach to tracking error and capacity.',
    },
  ]

  return (
    <section id="strategy" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 mb-4 opacity-90 group-hover:opacity-100" />
              <h3 className="text-white font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm leading-6">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
