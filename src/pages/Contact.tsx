import PageShell from "@/components/layout/PageShell";

const Contact = () => (
  <PageShell
    title="Contact"
    subtitle="Reach out to discuss partnerships, research collaborations, or product inquiries."
  >
    <div className="space-y-4 text-muted-foreground">
      <p>Email: <span className="text-foreground">hello@svmpsystems.com</span></p>
      <p className="text-sm">We typically respond within two business days.</p>
    </div>
  </PageShell>
);

export default Contact;
