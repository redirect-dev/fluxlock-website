export default function ContinuityDiagram() {
  return (
    <div className="relative py-24">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Identity Through
          <span className="text-cyan-400">
            {" "}Continuity
          </span>
        </h2>

        <div className="grid md:grid-cols-5 gap-6 items-center">

          <div className="rounded-xl border border-cyan-900 p-6 text-center">
            Key A
          </div>

          <div className="rounded-xl border border-cyan-900 p-6 text-center">
            Key B
          </div>

          <div className="rounded-xl border border-cyan-900 p-6 text-center">
            Key C
          </div>

          <div className="rounded-xl border border-cyan-900 p-6 text-center">
            Key D
          </div>

          <div className="rounded-xl border border-cyan-400 p-6 text-center text-cyan-400 font-bold">
            Identity
          </div>

        </div>

        <div className="text-center mt-12 text-gray-400 max-w-3xl mx-auto">
          Fluxlock separates identity from any single
          credential. Keys may rotate, evolve, recover,
          or migrate to future cryptographic systems
          while continuity remains intact.
        </div>

      </div>

    </div>
  );
}