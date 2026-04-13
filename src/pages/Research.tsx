import PageShell from "@/components/layout/PageShell";

const papers = [
  {
    title: "Validation architectures for LLM pipelines",
    date: "April 2026",
    category: "Systems Research",
    description: "A technical framework for schema-enforced checkpoints in multi-model workflows.",
  },
  {
    title: "Session governance in enterprise AI",
    date: "April 2026",
    category: "Governance",
    description: "How stateful session management enables compliance, traceability, and intervention.",
  },
];

const Research = () => (
  <PageShell
    title="Research"
    subtitle="Explorations in validation architectures, session control, and the foundations of trustworthy AI systems."
  >
    <div className="grid gap-5 md:grid-cols-2">
      {papers.map((paper) => (
        <article className="link-card" key={paper.title}>
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="meta-line">{paper.category}</span>
            <span className="nav-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground">{paper.date}</span>
          </div>
          <h3 className="mb-3 font-heading text-4xl font-semibold text-foreground">{paper.title}</h3>
          <p className="text-muted-foreground">{paper.description}</p>
          <p className="text-link mt-5">Coming soon</p>
        </article>
      ))}
    </div>
  </PageShell>
);

export default Research;
