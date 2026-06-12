import Navbar from "@/components/Navbar";
import ContinuityDiagram from "@/components/ContinuityDiagram";
import NetworkVisualization from "@/components/NetworkVisualization";
import IdentityIsNotCredential from "@/components/IdentityIsNotCredential";
import EvolutionTimeline from "@/components/EvolutionTimeline";
import IdentityEvolution from "@/components/IdentityEvolution";
import HowFluxlockWorks from "@/components/HowFluxlockWorks";
import IdentityEpochs from "@/components/IdentityEpochs";
import ValidatorLayer from "@/components/ValidatorLayer";
import ResearchAreas from "@/components/ResearchAreas";
import FinalCTA from "@/components/FinalCTA";
import ProtocolArchitecture from "@/components/ProtocolArchitecture";
import Roadmap from "@/components/Roadmap";
import GithubStats from "@/components/GithubStats";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import ValidatorDocs from "@/components/ValidatorDocs";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white overflow-x-hidden">

        {/* HERO */}

        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ffff22_0%,#000000_70%)]" />

          <div className="z-10 max-w-5xl text-center px-8">

            <p className="mb-4 text-cyan-400 tracking-[0.4em] uppercase">
              Fluxlock Protocol v1.0
            </p>

            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              Identity Is
              <span className="block text-cyan-400">
                Continuity
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              A continuity-based adaptive identity protocol
              designed to preserve trust through key rotation,
              cryptographic evolution, recovery, and long-term
              identity persistence.
            </p>

            <div className="flex flex-wrap justify-center gap-6">

  <a
    href="https://github.com/redirect-dev/Fluxlock-node"
    target="_blank"
    className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black hover:bg-cyan-300 transition"
  >
    View GitHub
  </a>

  <a
    href="/FLUXLOCK_WHITEPAPER_V2.pdf"
    target="_blank"
    className="rounded-xl border border-cyan-500 px-8 py-4 hover:bg-cyan-500/10 transition"
  >
    Whitepaper
  </a>

  <a
    href="https://github.com/redirect-dev/Fluxlock-node/releases/tag/v1.0-freeze"
    target="_blank"
    className="rounded-xl border border-cyan-500 px-8 py-4 hover:bg-cyan-500/10 transition"
  >
    Protocol Release
  </a>

</div>

          </div>

        </section>

        <IdentityIsNotCredential />

        {/* PROBLEM */}

        <section className="py-32 px-8">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-5xl font-bold text-center mb-20">
              Static Identity
              <span className="text-red-400">
                {" "}Is Fragile
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="rounded-2xl border border-red-900 p-8 bg-red-950/10">
                <h3 className="text-2xl font-bold mb-4">
                  Password Theft
                </h3>

                <p className="text-gray-400">
                  Once stolen, ownership often becomes
                  indistinguishable from identity.
                </p>
              </div>

              <div className="rounded-2xl border border-red-900 p-8 bg-red-950/10">
                <h3 className="text-2xl font-bold mb-4">
                  Key Compromise
                </h3>

                <p className="text-gray-400">
                  Traditional systems bind identity
                  directly to one credential.
                </p>
              </div>

              <div className="rounded-2xl border border-red-900 p-8 bg-red-950/10">
                <h3 className="text-2xl font-bold mb-4">
                  Quantum Risk
                </h3>

                <p className="text-gray-400">
                  Harvest-now decrypt-later attacks
                  threaten long-lived cryptographic trust.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* SOLUTION */}

        <section className="py-32 px-8 bg-cyan-950/10">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-5xl font-bold text-center mb-20">
              One Lock.
              <span className="text-cyan-400">
                {" "}Many Keys.
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="rounded-2xl border border-cyan-900 p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Key Rotation
                </h3>

                <p className="text-gray-400">
                  Credentials evolve without losing
                  identity continuity.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-900 p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Trust History
                </h3>

                <p className="text-gray-400">
                  Trust accumulates through time,
                  lineage, and behavior.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-900 p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Recovery
                </h3>

                <p className="text-gray-400">
                  Compromise becomes survivable
                  without destroying identity.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* DIAGRAM */}

        <ContinuityDiagram />

        <IdentityEvolution />

        {/* POST QUANTUM */}

        <section className="py-32 px-8">

          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-5xl font-bold mb-10">
              Post-Quantum Ready
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Fluxlock separates identity from any
              single cryptographic algorithm.
              If cryptography changes,
              identity continuity remains intact.
            </p>

          </div>

        </section>

        <EvolutionTimeline />

        {/* AI */}

        <section className="py-32 px-8 bg-cyan-950/10">

          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-5xl font-bold mb-10">
              AI Identity Continuity
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Future autonomous systems may require
              persistent identity across upgrades,
              migrations, retraining events, and
              evolving cryptographic foundations.
              Fluxlock introduces continuity as a
              protocol-level identity primitive.
            </p>

          </div>

        </section>

        <section className="py-32 px-8">

        <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-10">

          Continuity Network

        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">

      Identity exists at the center.
      Credentials evolve around it.

      Fluxlock separates ownership,
      trust, recovery, lineage,
      and cryptographic evolution
      into a continuity network.

    </p>

    <NetworkVisualization />
    <HowFluxlockWorks />

<IdentityEpochs />

<ValidatorLayer />

<ResearchAreas />

<ProtocolArchitecture />

<Roadmap />

<ArchitectureDiagram />

<GithubStats />

<ValidatorDocs />

<FinalCTA />

  </div>

</section>

        {/* COMPARISON */}

<section className="py-40 px-8">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-6xl font-bold text-center mb-6">
      Identity Has Been
      <span className="text-red-500"> Ownership</span>
    </h2>

    <p className="text-center text-gray-400 text-xl mb-24">
      Fluxlock proposes identity as continuity.
    </p>

    <div className="grid lg:grid-cols-2 gap-12">

      <div className="rounded-3xl border border-red-900 bg-red-950/10 p-10">

        <h3 className="text-4xl font-bold mb-12 text-red-400">
          Traditional Identity
        </h3>

        <div className="flex flex-col items-center gap-8">

          <div className="w-full rounded-xl border border-red-900 p-6 text-center">
            Password / Key
          </div>

          <div className="text-red-500 text-4xl">
            ↓
          </div>

          <div className="w-full rounded-xl border border-red-900 p-6 text-center">
            Identity
          </div>

        </div>

        <ul className="mt-12 space-y-4 text-gray-400">

          <li>• Single credential dependency</li>
          <li>• Key theft becomes identity theft</li>
          <li>• Algorithm replacement is disruptive</li>
          <li>• Recovery often destroys trust</li>

        </ul>

      </div>

      <div className="rounded-3xl border border-cyan-900 bg-cyan-950/10 p-10">

        <h3 className="text-4xl font-bold mb-12 text-cyan-400">
          Fluxlock Identity
        </h3>

        <div className="flex flex-col items-center gap-4">

          <div className="grid grid-cols-3 gap-4 w-full">

            <div className="rounded-xl border border-cyan-800 p-4 text-center">
              Key A
            </div>

            <div className="rounded-xl border border-cyan-800 p-4 text-center">
              Key B
            </div>

            <div className="rounded-xl border border-cyan-800 p-4 text-center">
              Key C
            </div>

          </div>

          <div className="text-cyan-400 text-4xl">
            ↓
          </div>

          <div className="w-full rounded-xl border border-cyan-800 p-6 text-center">
            Continuity
          </div>

          <div className="text-cyan-400 text-4xl">
            ↓
          </div>

          <div className="w-full rounded-xl border border-cyan-800 p-6 text-center">
            Identity
          </div>

        </div>

        <ul className="mt-12 space-y-4 text-gray-400">

          <li>• Multiple credentials</li>
          <li>• Trust survives key rotation</li>
          <li>• Cryptographic agility</li>
          <li>• Recovery preserves lineage</li>

        </ul>

      </div>

    </div>

  </div>

</section>

{/* TARGETS */}

<section className="py-40 px-8 bg-cyan-950/10">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-6xl font-bold text-center mb-20">
      Who Needs
      <span className="text-cyan-400">
        {" "}Continuity Identity?
      </span>
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="rounded-2xl border border-cyan-900 p-8">
        <h3 className="text-2xl font-bold mb-4">
          Enterprise
        </h3>

        <p className="text-gray-400">
          Survive credential compromise.
        </p>
      </div>

      <div className="rounded-2xl border border-cyan-900 p-8">
        <h3 className="text-2xl font-bold mb-4">
          AI Systems
        </h3>

        <p className="text-gray-400">
          Persistent agent identity.
        </p>
      </div>

      <div className="rounded-2xl border border-cyan-900 p-8">
        <h3 className="text-2xl font-bold mb-4">
          Post-Quantum
        </h3>

        <p className="text-gray-400">
          Migrate algorithms without losing trust.
        </p>
      </div>

      <div className="rounded-2xl border border-cyan-900 p-8">
        <h3 className="text-2xl font-bold mb-4">
          Critical Infrastructure
        </h3>

        <p className="text-gray-400">
          Long-lived operational identity.
        </p>
      </div>

    </div>

  </div>

</section>

        {/* FOOTER */}

        <footer className="border-t border-cyan-900/30 py-24 px-8">

          <div className="max-w-7xl mx-auto text-center">

  <h3 className="text-4xl font-bold mb-6">
    Fluxlock Protocol
  </h3>

  <p className="text-gray-400 max-w-3xl mx-auto mb-10">
    A continuity-based adaptive identity protocol
    designed to preserve trust through cryptographic
    evolution, recovery, governance, and long-term
    identity persistence.
  </p>

  <div className="flex flex-wrap justify-center gap-6 mb-12">

    <a
      href="https://github.com/redirect-dev/Fluxlock-node"
      target="_blank"
      className="text-cyan-400 hover:text-cyan-300"
    >
      GitHub
    </a>
    
    <a
  href="/FLUXLOCK_WHITEPAPER_V2.pdf"
  target="_blank"
  className="text-cyan-400 hover:text-cyan-300"
>
  Whitepaper
</a>

    <a
      href="https://github.com/redirect-dev/Fluxlock-node/releases/tag/v1.0-freeze"
      target="_blank"
      className="text-cyan-400 hover:text-cyan-300"
    >
      Release
    </a>

  </div>

  <p className="text-gray-600">
    Identity Through Continuity
  </p>

</div>

</footer>

</main>

</>
);
}