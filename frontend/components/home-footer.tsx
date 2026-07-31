import { SigatoMark } from "./sigato-mark";

export function HomeFooter() {
  return (
    <footer
      id="feedback"
      className="mx-auto mb-5 mt-4 grid w-[calc(100%-24px)] gap-8 rounded-[38px] border border-white/80 bg-white/48 px-5 pb-5 pt-10 shadow-[0_28px_80px_rgba(0,0,0,0.08)] md:px-10 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div>
        <div className="inline-flex items-center gap-4 rounded-full bg-transparent px-0 py-0 text-[24px] font-bold text-[#111]">
          <span className="flex h-10 w-10 items-center justify-center text-[#ff8a3d]" aria-hidden="true">
            <SigatoMark className="h-10 w-10" />
          </span>
          <span>Sigato</span>
        </div>
        <p className="mt-6 max-w-[500px] text-[18px] leading-[1.45] text-[#41291b]/72 md:text-[20px]">
          The terminal coding agent for autonomous development workflows.
          Open source, scriptable, and built to keep coding fast inside your terminal.
        </p>
        <span className="mb-6 mt-4 inline-block text-[16px] uppercase tracking-[0.12em] text-black/40">
          Coming soon - built with care
        </span>
      </div>

      <div className="grid grid-cols-2 gap-6 pt-3">
        <div>
          <h4 className="mb-5 text-[16px] uppercase tracking-[0.12em] text-black/40">Product</h4>
          <a className="mb-3 block text-[18px] text-[#41291b]/72" href="/#install">Install</a>
          <a className="mb-3 block text-[18px] text-[#41291b]/72" href="/#features">Features</a>
          <a className="mb-3 block text-[18px] text-[#41291b]/72" href="/#coming-soon">Coming soon</a>
          <a className="mb-3 block text-[18px] text-[#41291b]/72" href="/#overview">Overview</a>
        </div>
        <div>
          <h4 className="mb-5 text-[16px] uppercase tracking-[0.12em] text-black/40">Community</h4>
          <a className="mb-3 block text-[18px] text-[#41291b]/72" href="/#github">Github</a>
          <a className="mb-3 block text-[18px] text-[#41291b]/72" href="/#npm">NPM</a>
          <a className="mb-3 block text-[18px] text-[#41291b]/72" href="/#feedback">Feedback</a>
        </div>
      </div>
    </footer>
  );
}
