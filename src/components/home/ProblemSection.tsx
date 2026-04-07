const ProblemSection = () => (
  <section className="py-20 border-t border-border">
    <div className="container max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">The Problem</p>
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-8">
        Fragmented input. No validation. Ungoverned output.
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-heading text-xl text-foreground">Unstructured inputs</h3>
          <p className="text-muted-foreground leading-relaxed">
            Most LLM integrations accept raw, unvalidated prompts. There is no schema, no guardrail, and no structured expectation of what goes in—or what comes out.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-heading text-xl text-foreground">No session governance</h3>
          <p className="text-muted-foreground leading-relaxed">
            Conversations with models are stateless and unaudited. Organizations have no control over session continuity, escalation, or compliance traceability.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
