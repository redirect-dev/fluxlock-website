export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-900/30 backdrop-blur-md bg-black/40">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <div className="text-xl font-bold tracking-widest text-cyan-400">
          FLUXLOCK
        </div>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">

          <a
            href="https://github.com/redirect-dev/Fluxlock-node"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://github.com/redirect-dev/Fluxlock-node/releases/tag/v1.0-freeze"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            Release
          </a>

          <a
            href="https://github.com/redirect-dev/Fluxlock-node/blob/master/docs/whitepaper/FLUXLOCK_WHITEPAPER_V2.md"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            Whitepaper
          </a>

        </nav>

      </div>
    </header>
  );
}