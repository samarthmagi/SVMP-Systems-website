import YuzzahPageShell from "@/components/YuzzahPageShell";

const researchThreads = [
  {
    id: "NOTE 01",
    title: "PlanCompiler",
    status: "Benchmarking",
    body: "A planning layer where the model proposes intent, but execution is compiled against a fixed node registry before anything runs.",
  },
  {
    id: "NOTE 02",
    title: "Governed memory",
    status: "Designing",
    body: "A memory system where private notes can exist, but shared memory only changes after validation, provenance, and review.",
  },
  {
    id: "NOTE 03",
    title: "Diagnostic engine",
    status: "Exploring",
    body: "A way to inspect why a workflow failed: missing source, weak confidence, policy conflict, bad input, or handoff required.",
  },
];

const operatingQuestions = [
  "What should an LLM be allowed to decide by itself?",
  "Which parts of a workflow need deterministic execution?",
  "How should memory be promoted, rejected, or corrected?",
  "When does automation become an operational risk?",
];

const Research = () => (
  <YuzzahPageShell
    eyebrow="Research"
    title="Notes from the system bench."
    subtitle="We publish from implementation work: planning, memory, validation, audit trails, and the places where language models need operating rules around them."
  >
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <aside className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-7 md:p-8">
        <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.24em] text-yuzzah-gold">
          Current questions
        </span>
        <div className="mt-8 divide-y divide-white/10">
          {operatingQuestions.map((question, index) => (
            <p key={question} className="flex gap-5 py-5 text-sm leading-relaxed text-white/62">
              <span className="font-yuzzah-mono text-[0.68rem] text-white/30">0{index + 1}</span>
              <span>{question}</span>
            </p>
          ))}
        </div>
      </aside>

      <section className="rounded-[1.25rem] border border-white/10 bg-yuzzah-dark-800/70 p-7 md:p-10">
        <div className="mb-10 max-w-2xl">
          <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.24em] text-yuzzah-gold">
            Research queue
          </span>
          <h2 className="mt-4 font-yuzzah-serif text-4xl italic tracking-[-0.035em] text-white md:text-5xl">
            Work becomes writing only after it survives use.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            The writing here is deliberately narrow. No generic AI essays, no trend chasing, no fake certainty.
            Just the primitives we are testing while building governed products.
          </p>
        </div>

        <div className="grid gap-4">
          {researchThreads.map((thread) => (
            <article
              key={thread.id}
              className="grid gap-5 rounded-[0.85rem] border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-yuzzah-gold/35 md:grid-cols-[120px_1fr_140px]"
            >
              <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/32">
                {thread.id}
              </span>
              <div>
                <h3 className="font-yuzzah-serif text-2xl tracking-[-0.02em] text-white">{thread.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">{thread.body}</p>
              </div>
              <span className="self-start justify-self-start rounded-full border border-yuzzah-gold/25 px-3 py-1.5 font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.18em] text-yuzzah-gold md:justify-self-end">
                {thread.status}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>

    <section className="mt-8 rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-7 md:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.24em] text-yuzzah-gold">
            Publishing rule
          </span>
          <h2 className="mt-4 font-yuzzah-serif text-4xl tracking-[-0.035em] text-white">
            If it cannot be audited, it is not ready.
          </h2>
        </div>
        <p className="max-w-3xl text-lg leading-relaxed text-white/58">
          Our research is tied to the product standard: every useful AI workflow needs source control, failure paths,
          review surfaces, and a record of what happened. That is the line between a demo and software.
        </p>
      </div>
    </section>
  </YuzzahPageShell>
);

export default Research;
