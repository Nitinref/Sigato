const steps = [
  {
    no: "01",
    title: "Install",
    copy: "Add Sigato to your machine and open a project folder.",
  },
  {
    no: "02",
    title: "Configure",
    copy: "Set a provider key and customize your approval rules.",
  },
  {
    no: "03",
    title: "Launch",
    copy: "Run Sigato in the terminal and start delegating work.",
  },
];

export function HomeQuickStart() {
  return (
    <section className="mx-auto mt-7 grid w-[calc(100%-24px)] overflow-hidden rounded-[40px] bg-[#f0d8c2] shadow-[0_28px_80px_rgba(0,0,0,0.08)] lg:grid-cols-[0.98fr_1.02fr]">
      <div className="px-6 pb-6 pt-16 md:px-12 lg:px-14 lg:pb-14">
        <p className="mb-4 text-[14px] uppercase tracking-[0.12em] text-black/50">
          Get started
        </p>
        <h3 className="font-serif text-[clamp(3rem,4vw,5.4rem)] font-normal leading-[0.95] tracking-[-0.05em]">
          Quick start
        </h3>
        <p className="mt-7 max-w-[560px] text-[18px] leading-[1.5] text-[#41291b]/72 lg:text-[20px]">
          Join the waitlist, set your preferences, and be first to try Sigato
          when the full build ships.
        </p>

        <div className="mt-8 grid gap-5">
          {steps.map((step) => (
            <article key={step.no} className="grid grid-cols-[40px_1fr] gap-4">
              <span className="text-[18px] text-black/45">{step.no}</span>
              <div>
                <strong className="mb-2 block text-[20px]">{step.title}</strong>
                <p className="m-0 text-[20px] leading-[1.42] text-[#41291b]/72">
                  {step.copy}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 inline-flex min-h-[54px] max-w-full scale-[0.98] origin-left items-center overflow-hidden rounded-[16px] border border-black/20 bg-[#1d1816] text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
          <span className="px-4 text-[18px]">$</span>
          <code className="px-6 text-[13px] md:text-[16px]">sigato --waitlist</code>
          <button
            className="min-h-[54px] border-l border-white/10 bg-[#2d2521] px-5 text-[14px] font-bold uppercase tracking-[0.08em]"
            type="button"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="grid gap-5 px-5 pb-9 pt-6 md:px-10 lg:pl-0 lg:pr-10 lg:pt-14">
        <article className="rounded-[28px] border border-white/85 bg-[#fff6ee] p-7">
          <header className="mb-6 flex items-start justify-between gap-4">
            <div>
              <strong className="mb-1 block text-[22px]">Preview build</strong>
              <span className="block text-[16px] text-black/55">Waitlist only</span>
            </div>
            <small className="text-[15px] uppercase tracking-[0.12em] text-black/40">
              From source
            </small>
          </header>
          <div className="overflow-hidden rounded-[24px] bg-[#111111]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-[12px] uppercase tracking-[0.06em] text-white/28">
              <span>Terminal</span>
              <span>Copy</span>
            </div>
            <pre className="m-0 whitespace-pre-wrap px-5 pb-6 pt-4 font-mono text-[16px] leading-[1.6] text-[#f4f0ea]">
{`$ sigato
$ preview --coming-soon`}
            </pre>
          </div>
        </article>

        <article className="rounded-[28px] border border-white/85 bg-[#fff6ee] p-7">
          <header className="mb-6 flex items-start justify-between gap-4">
            <div>
              <strong className="mb-1 block text-[22px]">Early access</strong>
              <span className="block text-[16px] text-black/55">Add your email later</span>
            </div>
            <small className="text-[15px] uppercase tracking-[0.12em] text-black/40">
              Step 02
            </small>
          </header>
          <div className="overflow-hidden rounded-[24px] bg-[#111111]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-[12px] uppercase tracking-[0.06em] text-white/28">
              <span>Environment</span>
              <span>Copy</span>
            </div>
            <pre className="m-0 whitespace-pre-wrap px-5 pb-6 pt-4 font-mono text-[15px] leading-[1.7] text-[#f4f0ea]">
{`export SIGATO_WAITLIST=true
export SIGATO_THEME=orange
export SIGATO_LAUNCH=soon`}
            </pre>
          </div>
        </article>
      </div>
    </section>
  );
}
