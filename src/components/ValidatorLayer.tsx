export default function ValidatorLayer() {
  const validators = [
    "Lineage Verification",
    "Recovery Verification",
    "Epoch Verification",
    "Trust Verification",
  ];

  return (
    <section className="py-32 px-8">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-8">
          Continuity Validators
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">
          Validators do not verify ownership.
          Validators verify continuity.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {validators.map((validator) => (
            <div
              key={validator}
              className="rounded-2xl border border-cyan-900 p-8 text-center"
            >
              <h3 className="font-bold text-xl">
                {validator}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}