import PageShell from "@/components/layout/PageShell";

const CS = () => (
  <PageShell
    title="SVMP-CS"
    subtitle="The control-layer for structured LLM workflows. Validate inputs, govern sessions, and enforce quality at every step of the pipeline."
  >
    <div className="grid gap-6 md:grid-cols-2">
      <article className="surface p-6 md:p-8">
        <span className="meta-line mb-4 block">Session Buffer</span>
        <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">Stateful control between users and models.</h3>
        <p className="text-muted-foreground">
          SVMP-CS introduces a session buffer that captures, structures, and sequences interactions before they reach LLM endpoints.
        </p>
      </article>
      <article className="surface p-6 md:p-8">
        <span className="meta-line mb-4 block">Validation Gate</span>
        <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">Every request structured. Every response governed.</h3>
        <p className="text-muted-foreground">
          Schema enforcement and quality checks sit at the operational edge, where ambiguity usually leaks into production.
        </p>
      </article>
      <article className="surface p-6 md:col-span-2 md:p-8">
        <span className="meta-line mb-4 block">Status</span>
        <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">Product details coming soon.</h3>
        <p className="max-w-3xl text-muted-foreground">
          The first public materials will focus on architecture, integration surfaces, and the governance primitives behind SVMP-CS.
        </p>
      </article>
    </div>
  </PageShell>
);

export default CS;
