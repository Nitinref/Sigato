const comingSoonCards = [
  {
    title: "Browser agent",
    copy: "Shop, book, and navigate with guarded approvals built in.",
  },
  {
    title: "Shared workspaces",
    copy: "Keep projects, sessions, and handoffs in one place.",
  },
  {
    title: "Voice commands",
    copy: "Speak a task and let Sigato turn it into an action plan.",
  },
];

export function HomeComingSoon() {
  return (
    <section
      id="coming-soon"
      className="mx-auto mt-7 overflow-hidden rounded-[40px] bg-[#101010] px-5 py-6 text-white shadow-[0_28px_80px_rgba(0,0,0,0.12)] md:px-8 lg:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.08fr] lg:items-center">
        <div className="max-w-[620px]">
          <p className="mb-4 text-[14px] uppercase tracking-[0.16em] text-white/45">
            Coming soon
          </p>
          <h3 className="font-serif text-[clamp(3.2rem,4.5vw,6rem)] font-normal leading-[0.92] tracking-[-0.05em] text-[#fff2ea]">
            Sigato is almost here.
          </h3>
          <p className="mt-6 max-w-[560px] text-[18px] leading-[1.55] text-white/68 md:text-[20px]">
            A terminal-first agent experience with approvals, browser actions,
            and workflow orchestration, wrapped in a cleaner, calmer interface.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {comingSoonCards.map((card) => (
              <article key={card.title} className="rounded-[24px] border border-white/12 bg-white/5 p-5">
                <h4 className="mb-3 text-[18px] font-semibold text-[#ffd8bd]">{card.title}</h4>
                <p className="m-0 text-[15px] leading-[1.55] text-white/66">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_50%_20%,rgba(255,138,61,0.24),transparent_35%),radial-gradient(circle_at_50%_70%,rgba(255,177,95,0.12),transparent_30%)]" />
          <div className="grid aspect-[16/10] grid-cols-2 gap-4 rounded-[32px] border border-[#ff8a3d]/80 p-4 sm:grid-cols-3">
            <div className="rounded-[32px] border-[5px] border-[#ff8a3d] border-opacity-90" />
            <div className="rounded-[32px] border-[5px] border-[#ff8a3d] border-opacity-90" />
            <div className="rounded-[32px] border-[5px] border-[#ff8a3d] border-opacity-90 sm:col-span-1" />
            <div className="rounded-[32px] border-[5px] border-[#ff8a3d] border-opacity-90" />
            <div className="rounded-[32px] border-[5px] border-[#ff8a3d] border-opacity-90 sm:col-span-1" />
            <div className="rounded-[32px] border-[5px] border-[#ff8a3d] border-opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
