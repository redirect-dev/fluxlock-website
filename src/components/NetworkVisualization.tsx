export default function NetworkVisualization() {
  const nodes = Array.from({ length: 16 });

  return (
    <div className="relative h-[700px] w-full overflow-hidden rounded-3xl border border-cyan-900 bg-black">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ffff22_0%,#000000_80%)]" />

      {/* Center Identity */}

      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400 bg-cyan-400/10 flex items-center justify-center">

        <span className="text-cyan-300 font-bold">
          Identity
        </span>

      </div>

      {nodes.map((_, i) => {

        const angle =
          (i / nodes.length) * Math.PI * 2;

        const radius = 260;

        const x =
          Math.cos(angle) * radius;

        const y =
          Math.sin(angle) * radius;

        return (

          <div
            key={i}
            className="absolute h-12 w-12 rounded-full bg-cyan-400 shadow-[0_0_30px_#00ffff]"
            style={{
              left: `calc(50% + ${x}px - 24px)`,
              top: `calc(50% + ${y}px - 24px)`
            }}
          />

        );

      })}

    </div>
  );
}