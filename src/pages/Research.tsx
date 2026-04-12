import PageShell from "@/components/layout/PageShell";

const Research = () => (
  <PageShell
    title="Research"
    subtitle="Explorations in validation architectures, session control, and the foundations of trustworthy AI systems."
  >
    <article className="surface p-6 md:p-8">
      <span className="meta-line mb-4 block">Publications</span>
      <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">Research publications coming soon.</h3>
      <p className="max-w-2xl text-muted-foreground">
        Technical notes on schema enforcement, session buffers, and trustworthy AI operations will live here.
      </p>
    </article>
  </PageShell>
);

export default Research;
