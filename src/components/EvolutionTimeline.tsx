export default function EvolutionTimeline() {
  const algorithms = [
    "RSA",
    "ECC",
    "Dilithium",
    "Future"
  ];

  return (
    <section className="py-40 px-8 bg-cyan-950/10">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-8">
          Algorithms Change.
          <span className="block text-cyan-400">
            Identity Survives.
          </span>
        </h2>

        <p className="text-gray-400 mb-20">
          Cryptography evolves. Trust continuity remains.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8">

          {algorithms.map((algo) => (
            <div
              key={algo}
              className="w-40 h-24 rounded-xl border border-cyan-800 flex items-center justify-center font-bold"
            >
              {algo}
            </div>
          ))}

        </div>

        <div className="text-cyan-400 text-5xl mt-12 mb-12">
          ↓
        </div>

        <div className="mx-auto w-72 rounded-2xl border border-cyan-400 p-6 text-2xl font-bold text-cyan-400">
          Continuity
        </div>

        <div className="text-cyan-400 text-5xl mt-12 mb-12">
          ↓
        </div>

        <div className="mx-auto w-72 rounded-2xl border border-cyan-400 p-6 text-2xl font-bold">
          Identity
        </div>

      </div>

    </section>
  );
}