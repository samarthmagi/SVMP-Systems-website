import PageShell from "@/components/layout/PageShell";

const Blog = () => (
  <PageShell
    title="Blog"
    subtitle="Thinking on systems design, AI governance, and the architecture of reliable software."
  >
    <article className="surface p-6 md:p-8">
      <span className="meta-line mb-4 block">Archive</span>
      <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">Posts coming soon.</h3>
      <p className="max-w-2xl text-muted-foreground">
        Notes on systems design, validation architecture, and AI workflow control will live here.
      </p>
    </article>
  </PageShell>
);

export default Blog;
