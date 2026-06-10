export default function GithubStats() {
  return (
    <section className="py-40 px-8">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-6xl font-bold text-center mb-6">
          Development
          <span className="text-cyan-400">
            {" "}Activity
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-20">
          Public protocol development.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="rounded-2xl border border-cyan-900 p-8 text-center">
            <div className="text-4xl font-bold text-cyan-400">
              v1.0
            </div>
            <p className="text-gray-500 mt-2">
              Current Release
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-900 p-8 text-center">
            <div className="text-4xl font-bold text-cyan-400">
              Rust
            </div>
            <p className="text-gray-500 mt-2">
              Core Protocol
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-900 p-8 text-center">
            <div className="text-4xl font-bold text-cyan-400">
              Open
            </div>
            <p className="text-gray-500 mt-2">
              Source
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-900 p-8 text-center">
            <div className="text-4xl font-bold text-cyan-400">
              Live
            </div>
            <p className="text-gray-500 mt-2">
              Development
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}