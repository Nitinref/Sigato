import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const highlights = [
  {
    title: "Browser agent",
    copy: "Shop, book, and navigate with approvals built in.",
  },
  {
    title: "Shared workspaces",
    copy: "Keep sessions, projects, and handoffs together.",
  },
  {
    title: "Voice commands",
    copy: "Turn a spoken task into an action plan.",
  },
];

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]">
      <section className="mx-auto mt-3 w-[calc(100%-24px)] overflow-hidden rounded-[44px] shadow-[0_28px_80px_rgba(0,0,0,0.08)]">
        <div
          className="relative overflow-hidden"
          style={{ background: "var(--hero-bg)" }}
        >
          <SiteHeader />

          <div className="relative mx-auto max-w-[1280px] px-5 pb-10 pt-[120px] md:px-8 md:pb-14 md:pt-[150px]">
            <div className="max-w-[980px]">
              <p className="text-[14px] uppercase tracking-[0.18em] text-[var(--muted-fg)]">
                Coming soon
              </p>
              <h1 className="mt-4 font-serif text-[clamp(5rem,16vw,12rem)] font-normal leading-[0.86] tracking-[-0.08em] text-[var(--page-fg)]">
                Coming
                <br />
                Soon
              </h1>
              <p className="mt-6 max-w-[760px] text-[clamp(1.1rem,2vw,1.55rem)] leading-[1.6] text-[var(--muted-fg)]">
                Sigato is being built into a terminal-first agent experience with
                approvals, browser actions, and orchestration tools. The full
                release is on the way.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-black/12 bg-[#111111] px-6 text-[13px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-black/90"
                >
                  Back to home
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-black/12 bg-white px-6 text-[13px] font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-black hover:text-white"
                >
                  Read docs
                </Link>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-black/10 bg-white/72 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
                >
                  <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-[#1a1a1a]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.6] text-black/65">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-[28px] border border-black/10 bg-white/70 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
              <p className="text-[13px] uppercase tracking-[0.18em] text-black/45">
                Launch status
              </p>
              <div className="mt-4 overflow-hidden rounded-[18px] bg-[#111111]">
                <pre className="m-0 whitespace-pre-wrap px-5 py-5 font-mono text-[15px] leading-[1.8] text-[#f5efe8] md:text-[16px]">
{`$ sigato launch
Status: coming soon
Release: in progress`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
