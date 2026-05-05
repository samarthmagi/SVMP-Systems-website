import PageShell from "@/components/layout/PageShell";

const About = () => (
  <PageShell
    title="About"
    subtitle="SVMP Systems builds practical AI products and systems for real operational workflows."
  >
    <article className="tacet-panel space-y-6 p-6 text-muted-foreground md:p-8">
      <span className="meta-line block">Operating Thesis</span>
      <p>
        We believe useful AI products need more than automation. They need knowledge control, human fallback, reviewable sessions, and practical tools that fit how teams already operate.
      </p>
      <p>
        SVMP Systems is building toward that kind of operating layer, beginning with SVMP-CS.
      </p>
    </article>
  </PageShell>
);

export default About;
