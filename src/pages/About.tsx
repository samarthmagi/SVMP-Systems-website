import PageShell from "@/components/layout/PageShell";

const About = () => (
  <PageShell
    title="About"
    subtitle="SVMP Systems builds control-layer infrastructure for the AI-native enterprise."
  >
    <div className="space-y-6 text-muted-foreground leading-relaxed">
      <p>
        We believe that as organizations integrate large language models into critical workflows, the missing layer is not the model itself—it's the control plane around it. Input validation, session governance, and structured output enforcement are foundational requirements, not afterthoughts.
      </p>
      <p>
        SVMP Systems is building that layer.
      </p>
    </div>
  </PageShell>
);

export default About;
