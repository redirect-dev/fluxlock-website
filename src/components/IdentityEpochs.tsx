export default function IdentityEpochs() {
  return (
    <section className="py-32 px-8 bg-cyan-950/10">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-8">
          Identity Epochs
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">
          Fluxlock allows identity to evolve through
          scheduled continuity epochs without losing trust.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">

          <div>RSA</div>

          <div className="text-cyan-400">→</div>

          <div>ECC</div>

          <div className="text-cyan-400">→</div>

          <div>Dilithium</div>

          <div className="text-cyan-400">→</div>

          <div>Future</div>

          <div className="text-cyan-400">→</div>

          <div className="font-bold text-cyan-400">
            Same Identity
          </div>

        </div>

      </div>

    </section>
  );
}