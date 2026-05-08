import { useEffect } from "react";
import { Link } from "react-router-dom";

const notes = [
  ["01", "Inputs are not trusted until structured."],
  ["02", "Model output is not final until checked."],
  ["03", "Memory is private before it becomes shared."],
  ["04", "Escalation is a feature, not a failure."],
];

const primitives = [
  {
    name: "PlanCompiler",
    state: "Research",
    detail: "LLM proposes the plan. The system executes only known nodes.",
  },
  {
    name: "Governed Memory Layer",
    state: "Designing",
    detail: "Private notes, promotion rules, validation, and audit before shared memory.",
  },
  {
    name: "Diagnostic Engine",
    state: "Early",
    detail: "A way to explain failure: missing context, low confidence, wrong route, policy risk.",
  },
];

const receiptRows = [
  ["input", "captured"],
  ["schema", "applied"],
  ["source", "checked"],
  ["policy", "passed"],
  ["handoff", "available"],
  ["audit", "written"],
];

const YuzzahExactLanding = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "SVMP Systems | Governed AI Systems";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="svmp-authored min-h-screen overflow-x-hidden bg-yuzzah-dark text-[#f4f3ee] antialiased">
      <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-yuzzah-dark/88 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="text-[15px] font-semibold tracking-[-0.03em] text-white">SVMP</span>
            <span className="font-yuzzah-mono text-[10px] uppercase tracking-[0.22em] text-white/34">Systems</span>
          </Link>
          <div className="hidden items-center gap-8 font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/42 md:flex">
            <Link to="/cs" className="hover:text-yuzzah-gold">Systems</Link>
            <Link to="/research" className="hover:text-yuzzah-gold">Research</Link>
            <Link to="/contact" className="hover:text-yuzzah-gold">Contact</Link>
          </div>
          <Link to="/contact" className="justify-self-end font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.2em] text-yuzzah-gold hover:text-white">
            Talk to us
          </Link>
        </div>
      </nav>

      <main>
        <section className="relative min-h-[92vh] border-b border-white/[0.06] pt-16">
          <div className="absolute inset-0 bg-grid-pattern opacity-70" />
          <div className="relative mx-auto grid min-h-[calc(92vh-4rem)] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.06fr_0.94fr]">
            <div>
              <p className="mb-7 font-yuzzah-mono text-xs uppercase tracking-[0.22em] text-yuzzah-gold">
                Bangalore / governed AI systems
              </p>
              <h1 className="max-w-[780px] text-[4.2rem] font-semibold leading-[0.96] tracking-[-0.07em] text-white md:text-[6.4rem]">
                AI should leave receipts.
              </h1>
              <div className="mt-9 grid max-w-3xl gap-6 border-t border-white/10 pt-8 md:grid-cols-[0.9fr_1.1fr]">
                <p className="font-yuzzah-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.16em] text-white/34">
                  Not a wrapper. Not a demo toy. A small systems company building control surfaces around language models.
                </p>
                <p className="text-lg leading-relaxed text-white/62">
                  We build products where AI has to follow a workflow: structured inputs, governed memory, validation,
                  escalation, and an audit trail someone can actually read.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/cs"
                  className="inline-flex min-h-[52px] items-center border border-yuzzah-gold/40 bg-yuzzah-gold px-7 text-sm font-semibold text-yuzzah-dark transition-colors hover:bg-yuzzah-gold-light"
                >
                  View systems
                </Link>
                <Link
                  to="/research"
                  className="inline-flex min-h-[52px] items-center border border-white/12 px-7 text-sm font-semibold text-white/72 transition-colors hover:border-yuzzah-gold/40 hover:text-white"
                >
                  Read research notes
                </Link>
              </div>
            </div>

            <aside className="border border-white/10 bg-[#1a1a1a] p-5">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/42">receipt / sample</span>
                <span className="h-2 w-2 bg-yuzzah-gold" />
              </div>
              <div className="grid gap-2">
                {receiptRows.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[120px_1fr] border-b border-white/[0.06] py-3 font-yuzzah-mono text-xs">
                    <span className="uppercase tracking-[0.18em] text-white/28">{label}</span>
                    <span className="text-white/70">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 border border-yuzzah-gold/25 bg-yuzzah-gold/[0.04] p-4">
                <p className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.18em] text-yuzzah-gold">
                  handoff rule
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/58">
                  When confidence drops or the source is not approved, the system stops pretending and asks for a human.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-b border-white/[0.06] py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-5 font-yuzzah-mono text-xs uppercase tracking-[0.22em] text-yuzzah-gold">What we are building</p>
                <h2 className="max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white md:text-6xl">
                  The boring layer AI products keep missing.
                </h2>
              </div>
              <div className="grid gap-4">
                {notes.map(([number, copy]) => (
                  <div key={number} className="grid grid-cols-[72px_1fr] border-t border-white/10 py-5">
                    <span className="font-yuzzah-mono text-xs text-yuzzah-gold">{number}</span>
                    <p className="m-0 text-xl leading-snug text-white/72">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.06] py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
              <div>
                <p className="mb-5 font-yuzzah-mono text-xs uppercase tracking-[0.22em] text-yuzzah-gold">Operating model</p>
                <h2 className="text-5xl font-semibold tracking-[-0.055em] text-white md:text-6xl">Built around control points.</h2>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-white/58">
                We care less about making AI look impressive in a demo and more about what happens before, during,
                and after a model call. Inputs, memory, validation, escalation, and audit all need owners.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <article className="border border-white/10 bg-white/[0.025] p-7 md:p-9">
                <p className="font-yuzzah-mono text-xs uppercase tracking-[0.2em] text-white/34">What stays explicit</p>
                <div className="mt-8 grid gap-4">
                  {["The input shape", "The allowed source", "The fallback path"].map((item) => (
                    <div key={item} className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                      <span className="text-lg text-white/76">{item}</span>
                      <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.18em] text-yuzzah-gold">named</span>
                    </div>
                  ))}
                </div>
                <Link to="/research" className="mt-9 inline-flex font-yuzzah-mono text-xs uppercase tracking-[0.2em] text-yuzzah-gold hover:text-white">
                  Read research notes
                </Link>
              </article>

              <article className="border border-white/10 bg-[#1a1a1a] p-7 md:p-9">
                <p className="font-yuzzah-mono text-xs uppercase tracking-[0.2em] text-white/34">System trace</p>
                <div className="mt-8 space-y-3 font-yuzzah-mono text-xs">
                  <div className="border border-white/[0.08] p-4 text-white/56">request enters with context</div>
                  <div className="ml-8 border border-white/[0.08] p-4 text-white/56">rules decide the route</div>
                  <div className="ml-16 border border-yuzzah-gold/25 bg-yuzzah-gold/[0.035] p-4 text-yuzzah-gold">outcome recorded for review</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.06] py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="mb-5 font-yuzzah-mono text-xs uppercase tracking-[0.22em] text-yuzzah-gold">Research bench</p>
                <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white md:text-6xl">
                  Infrastructure first. Interface second.
                </h2>
              </div>
              <div className="border-t border-white/10">
                {primitives.map((item) => (
                  <div key={item.name} className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[0.8fr_120px_1.2fr]">
                    <h3 className="m-0 text-2xl font-semibold tracking-[-0.035em] text-white">{item.name}</h3>
                    <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.16em] text-yuzzah-gold">{item.state}</span>
                    <p className="m-0 text-sm leading-relaxed text-white/56">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.06] py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 md:grid-cols-3">
              {[
                ["Not a chatbot", "The chat window is not the product. The workflow and its controls are."],
                ["Not a wrapper", "The model is one part of the stack. The important work happens around it."],
                ["Not theatre", "If a system cannot explain what happened, we do not call it reliable."],
              ].map(([title, body]) => (
                <article key={title} className="border-t border-white/14 pt-6">
                  <h3 className="font-yuzzah-mono text-xs uppercase tracking-[0.22em] text-yuzzah-gold">{title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-white/58">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-5 font-yuzzah-mono text-xs uppercase tracking-[0.22em] text-yuzzah-gold">The team</p>
              <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white md:text-6xl">
                Small by design.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/58">
                Samarth handles product, customers, and GTM. Pranav handles systems architecture. The company is still
                close enough to the work that every pilot changes the product.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                ["Samarth", "Product / GTM / customer conversations"],
                ["Pranav", "Systems architecture / execution layer"],
              ].map(([name, role]) => (
                <div key={name} className="grid grid-cols-[120px_1fr] border-t border-white/10 py-6">
                  <h3 className="m-0 text-xl font-semibold text-white">{name}</h3>
                  <p className="m-0 font-yuzzah-mono text-xs uppercase tracking-[0.14em] text-white/42">{role}</p>
                </div>
              ))}
              <Link
                to="/contact"
                className="mt-6 inline-flex w-fit min-h-[52px] items-center border border-yuzzah-gold/40 bg-yuzzah-gold px-7 text-sm font-semibold text-yuzzah-dark transition-colors hover:bg-yuzzah-gold-light"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.08] bg-[#1a1a1a] py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row">
          <div>
            <p className="m-0 text-lg font-semibold text-white">SVMP Systems</p>
            <p className="mt-2 text-sm text-white/44">Governed AI systems from Bangalore.</p>
          </div>
          <div className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/34">
            Systems / Research / Contact
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YuzzahExactLanding;
