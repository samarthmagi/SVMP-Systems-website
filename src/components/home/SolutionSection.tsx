const SolutionSection = () => (
  <section className="py-20 border-t border-border">
    <div className="container max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">The Solution</p>
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-8">
        Session buffer. Validation gate.
      </h2>
      <div className="space-y-10">
        <div className="p-8 rounded-lg bg-card border border-border">
          <h3 className="font-heading text-xl text-foreground mb-3">Session Buffer</h3>
          <p className="text-muted-foreground leading-relaxed">
            A stateful intermediary that captures, structures, and sequences all interactions within a controlled session. Every exchange is logged, governed, and reversible.
          </p>
        </div>
        <div className="p-8 rounded-lg bg-card border border-border">
          <h3 className="font-heading text-xl text-foreground mb-3">Validation Gate</h3>
          <p className="text-muted-foreground leading-relaxed">
            A schema-enforced checkpoint that inspects inputs before they reach the model and validates outputs before they reach the user. Nothing passes without meeting your organization's quality standard.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
