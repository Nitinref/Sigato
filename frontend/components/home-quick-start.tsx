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
    <section
      className="mx-auto mt-7 grid w-[calc(100%-24px)] overflow-hidden rounded-[40px] shadow-[0_28px_80px_rgba(0,0,0,0.08)] lg:grid-cols-[0.98fr_1.02fr]"
      style={{ background: "var(--quickstart-bg)" }}
    >
      <div className="px-6 pb-6 pt-16 md:px-12 lg:px-14 lg:pb-14">
        <p className="mb-4 text-[14px] uppercase tracking-[0.12em] text-[var(--muted-fg)]">
          Get started
        </p>
        <h3 className="font-serif text-[clamp(3rem,4vw,5.4rem)] font-normal leading-[0.95] tracking-[-0.05em] text-[var(--page-fg)]">
          Quick start
        </h3>
        <p className="mt-7 max-w-[560px] text-[18px] leading-[1.5] text-[var(--muted-fg)] lg:text-[20px]">
          Join the waitlist, set your preferences, and be first to try Sigato
          when the full build ships.
        </p>

        <div className="mt-8 grid gap-5">
          {steps.map((step) => (
            <article key={step.no} className="grid grid-cols-[40px_1fr] gap-4">
              <span className="text-[18px] text-[var(--muted-fg)]">{step.no}</span>
              <div>
                <strong className="mb-2 block text-[20px] text-[var(--page-fg)]">{step.title}</strong>
                <p className="m-0 text-[20px] leading-[1.42] text-[var(--muted-fg)]">
                  {step.copy}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 inline-flex min-h-[54px] max-w-full scale-[0.98] origin-left items-center overflow-hidden rounded-[16px] border border-[var(--border-soft)] bg-[var(--surface-4)] text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
          <span className="px-4 text-[18px] text-white/90">$</span>
          <code className="px-6 text-[13px] text-white/85 md:text-[16px]">sigato --waitlist</code>
          <button
            className="min-h-[54px] border-l border-white/10 bg-[var(--surface-5)] px-5 text-[14px] font-bold uppercase tracking-[0.08em] text-white/90"
            type="button"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="grid gap-5 px-5 pb-9 pt-6 md:px-10 lg:pl-0 lg:pr-10 lg:pt-14">
        <article className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--panel-bg)] p-7">
          <header className="mb-6 flex items-start justify-between gap-4">
            <div>
              <strong className="mb-1 block text-[22px] text-[var(--page-fg)]">Preview build</strong>
              <span className="block text-[16px] text-[var(--panel-muted)]">Waitlist only</span>
            </div>
            <small className="text-[15px] uppercase tracking-[0.12em] text-[var(--muted-fg)]">
              From source
            </small>
          </header>
          <div className="overflow-hidden rounded-[24px] bg-[var(--surface-3)]">
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-4 py-3 text-[12px] uppercase tracking-[0.06em] text-[var(--muted-fg)]">
              <span>Terminal</span>
              <span>Copy</span>
            </div>
            <pre className="m-0 whitespace-pre-wrap px-5 pb-6 pt-4 font-mono text-[16px] leading-[1.6] text-[#f6efe7]">
{`$ sigato
$ preview --coming-soon`}
            </pre>
          </div>
        </article>

        <article className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--panel-bg)] p-7">
          <header className="mb-6 flex items-start justify-between gap-4">
            <div>
              <strong className="mb-1 block text-[22px] text-[var(--page-fg)]">Early access</strong>
              <span className="block text-[16px] text-[var(--panel-muted)]">Add your email later</span>
            </div>
            <small className="text-[15px] uppercase tracking-[0.12em] text-[var(--muted-fg)]">
              Step 02
            </small>
          </header>
          <div className="overflow-hidden rounded-[24px] bg-[var(--surface-3)]">
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-4 py-3 text-[12px] uppercase tracking-[0.06em] text-[var(--muted-fg)]">
              <span>Environment</span>
              <span>Copy</span>
            </div>
            <pre className="m-0 whitespace-pre-wrap px-5 pb-6 pt-4 font-mono text-[15px] leading-[1.7] text-[#f6efe7]">
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
