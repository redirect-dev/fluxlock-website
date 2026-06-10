"use client";

import { useEffect, useState } from "react";

const NODES = [
  "RSA",
  "ECC",
  "Dilithium",
  "Recovery",
  "Validator",
  "Governance",
  "AI Continuity",
  "Future",
];

export default function IdentityEvolution() {
  const [rotation, setRotation] = useState(0);
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const spin = setInterval(() => {
      setRotation((prev) => prev + 1);
    }, 30);

    return () => clearInterval(spin);
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % NODES.length);
    }, 2000);

    return () => clearInterval(cycle);
  }, []);

  return (
    <section className="py-40 px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl md:text-7xl font-bold text-center mb-6">
          Identity Through
          <span className="block text-cyan-400">
            Continuity
          </span>
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">
          Identity remains stable while credentials,
          governance, validators, recovery mechanisms,
          and cryptography evolve around it.
        </p>

        <div className="relative h-[700px] flex items-center justify-center">

          {/* OUTER RING */}

          <div
            className="absolute w-[520px] h-[520px] rounded-full border border-cyan-900"
            style={{
              transform: `rotate(${rotation}deg)`
            }}
          >
            {NODES.map((node, index) => {
              const angle =
                (index / NODES.length) * (Math.PI * 2);

              const radius = 260;

              const x =
                Math.cos(angle) * radius;

              const y =
                Math.sin(angle) * radius;

              const active =
                index === activeNode;

              return (
                <div
                  key={node}
                  className={`
                    absolute
                    px-5
                    py-3
                    rounded-xl
                    border
                    text-sm
                    font-semibold
                    whitespace-nowrap
                    transition-all
                    duration-700

                    ${
                      active
                        ? `
                          border-cyan-400
                          text-cyan-300
                          bg-cyan-400/10
                          shadow-[0_0_35px_#00ffff]
                          scale-125
                        `
                        : `
                          border-cyan-900
                          text-gray-500
                        `
                    }
                  `}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform:
                      "translate(-50%, -50%)",
                  }}
                >
                  {node}
                </div>
              );
            })}
          </div>

          {/* ROTATING PULSE */}

          <div
            className="absolute w-[560px] h-[560px]"
            style={{
              transform: `rotate(${rotation * 2}deg)`
            }}
          >
            <div
              className="
                absolute
                left-1/2
                top-0
                -translate-x-1/2
                w-5
                h-5
                rounded-full
                bg-cyan-300
                shadow-[0_0_40px_#00ffff]
              "
            />
          </div>

          {/* IDENTITY CORE */}

          <div
            className="
              absolute
              w-72
              h-72
              rounded-full
              border-2
              border-cyan-400
              bg-cyan-400/5
              flex
              flex-col
              items-center
              justify-center
              shadow-[0_0_120px_#00ffff]
              animate-pulse
            "
          >
            <h3 className="text-6xl font-bold text-cyan-300">
              Identity
            </h3>

            <p className="mt-4 uppercase tracking-[0.5em] text-cyan-700 text-xs">
              Persistent Core
            </p>
          </div>
        </div>

        {/* ACTIVE EVENT */}

        <div className="text-center mt-10">
          <p className="uppercase tracking-[0.5em] text-gray-500 mb-4">
            Active Continuity Event
          </p>

          <h3 className="text-5xl font-bold text-cyan-400">
            {NODES[activeNode]}
          </h3>
        </div>

      </div>
    </section>
  );
}