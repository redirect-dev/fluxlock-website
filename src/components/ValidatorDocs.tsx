export default function ValidatorDocs() {
  return (
    <section className="py-40 px-8 bg-cyan-950/10">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-6xl font-bold text-center mb-20">
          Validator
          <span className="text-cyan-400">
            {" "}Documentation
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-2xl border border-cyan-900 p-8">
            <h3 className="text-2xl font-bold mb-4">
              Verify
            </h3>

            <p className="text-gray-400">
              Validate continuity events.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-900 p-8">
            <h3 className="text-2xl font-bold mb-4">
              Consensus
            </h3>

            <p className="text-gray-400">
              Participate in trust decisions.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-900 p-8">
            <h3 className="text-2xl font-bold mb-4">
              Governance
            </h3>

            <p className="text-gray-400">
              Support future protocol evolution.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}