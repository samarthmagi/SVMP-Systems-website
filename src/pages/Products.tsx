import { Link } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";

const Products = () => (
  <PageShell
    title="Products"
    subtitle="Applied systems work coming out of the SVMP research and product lab."
  >
    <div className="grid gap-5 md:grid-cols-2">
      <Link to="/cs" className="link-card">
        <div className="mb-5 flex flex-wrap gap-3">
          <p className="meta-line">Product</p>
          <p className="nav-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground">April 2026</p>
        </div>
        <h3 className="mb-3 font-heading text-4xl font-semibold text-foreground">SVMP-CS</h3>
        <p className="text-muted-foreground">
          A control-session layer for structured LLM workflows: validate inputs, govern sessions, and enforce quality before outputs reach users.
        </p>
        <span className="text-link mt-5">
          Open SVMP-CS <span aria-hidden="true">-&gt;</span>
        </span>
      </Link>

      <section className="link-card">
        <div className="mb-5 flex flex-wrap gap-3">
          <p className="meta-line">Lab Pipeline</p>
          <p className="nav-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground">Ongoing</p>
        </div>
        <h3 className="mb-3 font-heading text-4xl font-semibold text-foreground">More systems work later.</h3>
        <p className="text-muted-foreground">
          Product surfaces will stay tied to research questions, operational constraints, and the control infrastructure SVMP Systems is building.
        </p>
      </section>
    </div>
  </PageShell>
);

export default Products;
