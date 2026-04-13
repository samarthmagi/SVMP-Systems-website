import PageShell from "@/components/layout/PageShell";

const CS = () => (
  <PageShell
    title="SVMP-CS"
    subtitle="The control-layer for structured LLM workflows. Validate inputs, govern sessions, and enforce quality at every step of the pipeline."
  >
    <div className="max-w-4xl space-y-10 text-muted-foreground">
      <div className="space-y-6 leading-relaxed">
        <p>
          SVMP-CS introduces a session buffer and validation gate architecture that sits between your users and LLM endpoints. Every request is structured, every response is governed.
        </p>
        <p>
          The product is built around a simple operational premise: LLM systems need a control layer that can carry state, enforce policy, and make the full session auditable.
        </p>
      </div>

      <section className="border-t border-[var(--line)] pt-6">
        <p className="meta-line mb-4">Architecture</p>
        <div className="space-y-5">
          <div>
            <h3 className="font-heading text-3xl font-semibold text-foreground">Session Buffer</h3>
            <p>Captures, structures, and sequences interactions inside a controlled session.</p>
          </div>
          <div>
            <h3 className="font-heading text-3xl font-semibold text-foreground">Validation Gate</h3>
            <p>Inspects inputs before they reach the model and checks outputs before they reach the user.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] pt-6">
        <p className="meta-line mb-4">Status</p>
        <p>Product details coming soon.</p>
      </section>
    </div>
  </PageShell>
);

export default CS;
