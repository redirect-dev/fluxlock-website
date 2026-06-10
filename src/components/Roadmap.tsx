export default function Roadmap() {
  const items = [
    { title: "Protocol Design", done: true },
    { title: "Continuity Model", done: true },
    { title: "Validator Framework", done: true },
    { title: "Rust Workspace", done: true },
    { title: "Version 1.0 Release", done: true },

    { title: "Network Testbed", done: false },
    { title: "Validator Expansion", done: false },
    { title: "Identity Epochs", done: false },
    { title: "Governance Layer", done: false },
    { title: "Mainnet", done: false },
  ];

  return (
    <section className="py-40 px-8 bg-cyan-950/10">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-6xl font-bold text-center mb-6">
          Fluxlock
          <span className="text-cyan-400">
            {" "}Roadmap
          </span>
        </h2>

        <p className="text-center text-gray-400 text-xl mb-24">
          From protocol concept to continuity network.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">

          {items.map((item) => (
            <div
              key={item.title}
              className="
                flex
                items-center
                gap-6
                rounded-2xl
                border
                border-cyan-900
                p-6
              "
            >
              <div
                className={`
                  h-8
                  w-8
                  rounded-full
                  flex
                  items-center
                  justify-center
                  font-bold

                  ${
                    item.done
                      ? "bg-cyan-400 text-black"
                      : "border border-cyan-700 text-cyan-400"
                  }
                `}
              >
                {item.done ? "✓" : "→"}
              </div>

              <div className="text-xl">
                {item.title}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}