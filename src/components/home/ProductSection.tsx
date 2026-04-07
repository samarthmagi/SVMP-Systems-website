import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProductSection = () => (
  <section className="py-20 border-t border-border">
    <div className="container max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Product</p>
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">SVMP-CS</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
        Our first product wedge: a control-session layer that validates, structures, and governs every interaction between users and LLM endpoints. Built for teams that cannot afford ambiguity.
      </p>
      <Link
        to="/cs"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
      >
        Learn more <ArrowRight size={14} />
      </Link>
    </div>
  </section>
);

export default ProductSection;
