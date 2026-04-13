import { Link } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";

const Products = () => (
  <PageShell
    title="Products"
    subtitle="Applied systems work coming out of the SVMP research and product lab."
  >
    <div className="max-w-3xl space-y-10">
      <section className="border-t border-[var(--line)] pt-6">
        <p className="meta-line mb-4">Available</p>
        <h3 className="mb-3 font-heading text-4xl font-semibold text-foreground">SVMP-CS</h3>
        <p className="text-muted-foreground">
          A control-session layer for structured LLM workflows: validate inputs, govern sessions, and enforce quality before outputs reach users.
        </p>
        <Link to="/cs" className="text-link mt-5">
          Open SVMP-CS <span aria-hidden="true">-&gt;</span>
        </Link>
      </section>

      <section className="border-t border-[var(--line)] pt-6">
        <p className="meta-line mb-4">Lab Pipeline</p>
        <h3 className="mb-3 font-heading text-4xl font-semibold text-foreground">More systems work later.</h3>
        <p className="text-muted-foreground">
          Product surfaces will stay tied to research questions, operational constraints, and the control infrastructure SVMP Systems is building.
        </p>
      </section>
    </div>
  </PageShell>
);

export default Products;
