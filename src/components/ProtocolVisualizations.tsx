export default function ProtocolVisualizations() {
  return (
    <section className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-6">
          Protocol Visualizations
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">
          Fluxlock is more than authentication.
          It is a living continuity network where trust,
          lineage, authority, governance, and validator
          consensus evolve together across time.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="rounded-3xl border border-cyan-900 p-6 bg-cyan-950/10">
            <img
              src="/visualizations/continuity-mesh.png"
              alt="Continuity Mesh"
              className="rounded-xl mb-6"
            />

            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Continuity Mesh
            </h3>

            <p className="text-gray-400">
              Identity exists within a continuity mesh where
              validators preserve trust through lineage,
              memory, recovery, and cryptographic evolution.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-900 p-6 bg-cyan-950/10">
            <img
              src="/visualizations/authority-network.png"
              alt="Authority Network"
              className="rounded-xl mb-6"
            />

            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Authority Network
            </h3>

            <p className="text-gray-400">
              Authority emerges through continuity,
              legitimacy, governance participation,
              and validator consensus.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-900 p-6 bg-cyan-950/10">
            <img
              src="/visualizations/validator-topology.png"
              alt="Validator Topology"
              className="rounded-xl mb-6"
            />

            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Validator Topology
            </h3>

            <p className="text-gray-400">
              Validators form a distributed topology
              that evaluates trust, reputation,
              recovery performance, and continuity.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-900 p-6 bg-cyan-950/10">
            <img
              src="/visualizations/identity-lineage.png"
              alt="Identity Lineage"
              className="rounded-xl mb-6"
            />

            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Identity Lineage
            </h3>

            <p className="text-gray-400">
              Identity survives evolution through
              lineage preservation, allowing trust
              to persist across key rotation,
              recovery, and cryptographic change.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}