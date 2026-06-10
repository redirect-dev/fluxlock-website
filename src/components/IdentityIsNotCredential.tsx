export default function IdentityIsNotCredential() {
  return (
    <section className="py-40 px-8 border-t border-cyan-900/20">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-6xl md:text-7xl font-bold text-center mb-24">
          Identity Is Not
          <span className="block text-cyan-400">
            A Credential
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Traditional */}

          <div className="rounded-3xl border border-red-900 bg-red-950/10 p-10">

            <p className="uppercase tracking-[0.3em] text-red-400 mb-8">
              Traditional Systems
            </p>

            <div className="flex flex-col items-center gap-6">

              <div className="w-56 h-24 rounded-xl border border-red-700 flex items-center justify-center text-2xl font-bold">
                Password
              </div>

              <div className="text-5xl text-red-400">
                ↓
              </div>

              <div className="w-56 h-24 rounded-xl border border-red-700 flex items-center justify-center text-2xl font-bold">
                Identity
              </div>

            </div>

            <p className="text-center text-gray-400 mt-10">
              Credential ownership becomes identity.
            </p>

          </div>

          {/* Fluxlock */}

          <div className="rounded-3xl border border-cyan-900 bg-cyan-950/10 p-10">

            <p className="uppercase tracking-[0.3em] text-cyan-400 mb-8">
              Fluxlock
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">

              <div className="border border-cyan-700 rounded-lg px-5 py-3">
                Key A
              </div>

              <div className="border border-cyan-700 rounded-lg px-5 py-3">
                Key B
              </div>

              <div className="border border-cyan-700 rounded-lg px-5 py-3">
                Key C
              </div>

              <div className="border border-cyan-700 rounded-lg px-5 py-3">
                Key D
              </div>

            </div>

            <div className="text-center text-5xl text-cyan-400 mb-6">
              ↓
            </div>

            <div className="mx-auto w-64 rounded-2xl border border-cyan-400 p-6 text-center text-2xl font-bold text-cyan-400">

              Continuity

            </div>

            <div className="text-center text-5xl text-cyan-400 mt-6 mb-6">
              ↓
            </div>

            <div className="mx-auto w-64 rounded-2xl border border-cyan-400 p-6 text-center text-2xl font-bold">

              Identity

            </div>

            <p className="text-center text-gray-400 mt-10">
              Credentials become evidence of identity.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}