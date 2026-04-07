const TrustSection = () => (
  <section className="py-20 border-t border-border">
    <div className="container max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Trust &amp; Governance</p>
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-8">
        Built for auditability
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <h3 className="font-heading text-lg text-foreground">Full traceability</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every session, input, and output is logged with immutable audit trails.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-lg text-foreground">Policy enforcement</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Organizational rules are encoded as validation schemas, not guidelines.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-lg text-foreground">Compliance-ready</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Designed for environments where regulatory oversight of AI is not optional.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TrustSection;
