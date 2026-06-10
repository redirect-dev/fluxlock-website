export default function ArchitectureDiagram() {
  return (
    <section className="py-40 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl font-bold text-center mb-20">
          Architecture
        </h2>

        <div className="flex flex-col items-center gap-8">

          <div className="w-96 rounded-2xl border border-cyan-500 p-8 text-center">
            Applications
          </div>

          <div className="text-cyan-400 text-4xl">
            ↓
          </div>

          <div className="w-96 rounded-2xl border border-cyan-500 p-8 text-center">
            Continuity Layer
          </div>

          <div className="text-cyan-400 text-4xl">
            ↓
          </div>

          <div className="w-96 rounded-2xl border border-cyan-500 p-8 text-center">
            Validator Network
          </div>

          <div className="text-cyan-400 text-4xl">
            ↓
          </div>

          <div className="w-96 rounded-2xl border border-cyan-500 p-8 text-center">
            Cryptographic Layer
          </div>

        </div>

      </div>

    </section>
  );
}