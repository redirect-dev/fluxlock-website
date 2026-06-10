export default function HowFluxlockWorks() {
  const steps = [
    {
      title: "Create Identity",
      text: "Identity begins with an initial credential and continuity record.",
    },
    {
      title: "Build Trust",
      text: "Validators, history, and behavior accumulate continuity evidence.",
    },
    {
      title: "Rotate Credentials",
      text: "Keys may evolve without breaking identity.",
    },
    {
      title: "Recover",
      text: "Compromise becomes survivable through continuity verification.",
    },
    {
      title: "Evolve",
      text: "Identity survives future cryptographic migration.",
    },
  ];

  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-6">
          How Fluxlock Works
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">
          Identity is not stored in a credential.
          Identity emerges through continuity across time.
        </p>

        <div className="grid md:grid-cols-5 gap-6">

          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-cyan-900 p-6"
            >
              <h3 className="font-bold text-xl mb-4 text-cyan-400">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}