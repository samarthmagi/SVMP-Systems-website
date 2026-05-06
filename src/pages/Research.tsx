import YuzzahPageShell from "@/components/YuzzahPageShell";

const researchItems = [
  {
    label: "01",
    title: "Validation architectures",
    copy: "How governed AI systems can check confidence, policy fit, and source grounding before a response reaches a user.",
  },
  {
    label: "02",
    title: "Session control",
    copy: "Why production workflows need state, escalation paths, and reviewable decisions instead of isolated model calls.",
  },
  {
    label: "03",
    title: "Support operations",
    copy: "Notes on WhatsApp-first support, approved knowledge, and making automation visible enough for operators to trust.",
  },
];

const Research = () => (
  <YuzzahPageShell
    eyebrow="Research"
    title="Thinking through controlled AI systems."
    subtitle="Explorations in validation, session governance, escalation design, and the operational foundations behind trustworthy AI products."
  >
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
      <article className="glow-card p-8 md:p-10">
        <div className="glow-content">
          <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
            <span className="font-yuzzah-mono text-xs uppercase tracking-[0.24em] text-yuzzah-gold">Publications</span>
            <span className="rounded border border-white/10 px-3 py-1.5 font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.22em] text-white/42">
              Coming soon
            </span>
          </div>
          <h2 className="mb-5 font-yuzzah-serif text-4xl italic tracking-[-0.035em] text-white md:text-5xl">
            Research publications are being prepared.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-white/58">
            We are documenting the product and systems thinking behind SVMP: approved knowledge, validation gates,
            escalation logic, audit trails, and reliable AI workflows for real operations.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {["Governance", "Validation", "Support AI", "Auditability"].map((tag) => (
              <span
                key={tag}
                className="rounded border border-white/10 bg-white/[0.03] px-4 py-2 font-yuzzah-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/48"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <aside className="space-y-6">
        {researchItems.map((item) => (
          <article key={item.label} className="glow-card p-7">
            <div className="glow-content">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-yuzzah-mono text-xs text-white/34">{item.label}</span>
                <span className="h-2 w-2 rounded-full bg-yuzzah-gold" />
              </div>
              <h3 className="mb-3 font-yuzzah-serif text-2xl text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{item.copy}</p>
            </div>
          </article>
        ))}
      </aside>
    </div>
  </YuzzahPageShell>
);

export default Research;
