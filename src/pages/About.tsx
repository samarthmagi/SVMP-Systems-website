import PageShell from "@/components/layout/PageShell";

const About = () => (
  <PageShell
    title="About"
    subtitle="SVMP Systems builds control-layer infrastructure for the AI-native enterprise."
  >
    <article className="surface space-y-6 p-6 text-muted-foreground md:p-8">
      <span className="meta-line block">Operating Thesis</span>
      <p>
        We believe that as organizations integrate large language models into critical workflows, the missing layer is not the model itself. It is the control plane around it. Input validation, session governance, and structured output enforcement are foundational requirements, not afterthoughts.
      </p>
      <p>
        SVMP Systems is building that layer.
      </p>
    </article>
  </PageShell>
);

export default About;
