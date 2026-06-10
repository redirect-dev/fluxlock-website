export default function ProtocolArchitecture() {
  const layers = [
    {
      title: "Identity Core",
      description:
        "Persistent identity independent of credentials.",
    },
    {
      title: "Continuity Layer",
      description:
        "Maintains lineage across key rotation and recovery.",
    },
    {
      title: "Validator Network",
      description:
        "Verifies continuity events and trust transitions.",
    },
    {
      title: "Governance Layer",
      description:
        "Coordinates protocol evolution and future epochs.",
    },
    {
      title: "Cryptographic Layer",
      description:
        "Supports current and future algorithms.",
    },
  ];

  return (
    <section className="py-40 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl font-bold text-center mb-6">
          Protocol
          <span className="text-cyan-400">
            {" "}Architecture
          </span>
        </h2>

        <p className="text-center text-gray-400 text-xl max-w-3xl mx-auto mb-24">
          Fluxlock separates identity into distinct layers
          that evolve independently while preserving trust.
        </p>

        <div className="space-y-6 max-w-4xl mx-auto">

          {layers.map((layer) => (
            <div
              key={layer.title}
              className="
                rounded-2xl
                border
                border-cyan-900
                bg-cyan-950/10
                p-8
              "
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                {layer.title}
              </h3>

              <p className="text-gray-400">
                {layer.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}