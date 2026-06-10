export default function ResearchAreas() {
  const areas = [
    "Identity Continuity",
    "Cryptographic Agility",
    "Post-Quantum Migration",
    "AI Agent Identity",
    "Long-Lived Trust",
    "Adaptive Governance",
  ];

  return (
    <section className="py-32 px-8 bg-cyan-950/10">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Research Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {areas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-cyan-900 p-8"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {area}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}