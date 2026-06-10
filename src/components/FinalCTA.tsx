export default function FinalCTA() {
  return (
    <section className="py-40 px-8">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-6xl font-bold mb-8">
          The Future of Identity
          <span className="block text-cyan-400">
            Is Continuity
          </span>
        </h2>

        <p className="text-xl text-gray-400 mb-12">
          Fluxlock separates identity from credentials
          and preserves trust through change.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="https://github.com/redirect-dev/Fluxlock-node"
            target="_blank"
            className="rounded-xl bg-cyan-500 px-8 py-4 text-black font-bold"
          >
            View Source
          </a>

          <a
            href="https://github.com/redirect-dev/Fluxlock-node/releases/tag/v1.0-freeze"
            target="_blank"
            className="rounded-xl border border-cyan-500 px-8 py-4"
          >
            Read Protocol
          </a>

        </div>

      </div>

    </section>
  );
}