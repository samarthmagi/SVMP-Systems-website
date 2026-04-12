import PageShell from "@/components/layout/PageShell";

const Contact = () => (
  <PageShell
    title="Contact"
    subtitle="Reach out to discuss partnerships, research collaborations, or product inquiries."
  >
    <div className="grid gap-6 md:grid-cols-2">
      <article className="surface p-6 md:p-7">
        <span className="meta-line mb-4 block">Primary</span>
        <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">Email</h3>
        <p className="text-muted-foreground">
          The best place for partnerships, product questions, and research-heavy conversations.
        </p>
        <a className="text-link mt-5" href="mailto:hello@svmpsystems.com">
          hello@svmpsystems.com <span aria-hidden="true">-&gt;</span>
        </a>
      </article>

      <article className="surface p-6 md:p-7">
        <span className="meta-line mb-4 block">Availability</span>
        <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">Two business days</h3>
        <p className="text-muted-foreground">
          We typically respond within two business days for relevant collaborations and product inquiries.
        </p>
      </article>

      <article className="surface p-6 md:col-span-2 md:p-7">
        <span className="meta-line mb-4 block">Good Reasons To Reach Out</span>
        <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">
          AI systems, governed memory, workflow tooling, and reliability questions.
        </h3>
        <p className="max-w-3xl text-muted-foreground">
          If the work lives somewhere between architecture, operational control, and hard reliability edges, this is the right conversation.
        </p>
      </article>
    </div>
  </PageShell>
);

export default Contact;
