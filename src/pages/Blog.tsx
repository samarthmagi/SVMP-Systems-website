import PageShell from "@/components/layout/PageShell";

const posts = [
  {
    title: "Systems design for probabilistic outputs",
    date: "April 2026",
    description: "Why deterministic expectations and probabilistic systems require a different kind of middleware.",
  },
  {
    title: "Control planes for model-dependent software",
    date: "April 2026",
    description: "Notes on the infrastructure between an organization and the models it depends on.",
  },
];

const Blog = () => (
  <PageShell
    title="Blog"
    subtitle="Thinking on systems design, AI governance, and the architecture of reliable software."
  >
    <div className="grid gap-5 md:grid-cols-2">
      {posts.map((post) => (
        <article className="link-card" key={post.title}>
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="meta-line">Blog</span>
            <span className="nav-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground">{post.date}</span>
          </div>
          <h3 className="mb-3 font-heading text-4xl font-semibold text-foreground">{post.title}</h3>
          <p className="text-muted-foreground">{post.description}</p>
          <p className="text-link mt-5">Coming soon</p>
        </article>
      ))}
    </div>
  </PageShell>
);

export default Blog;
