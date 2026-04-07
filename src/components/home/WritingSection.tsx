import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WritingSection = () => (
  <section className="py-20 border-t border-border">
    <div className="container max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Writing &amp; Research</p>
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
        Thinking in public
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
        We publish our thinking on systems design, validation architectures, and the governance challenges that emerge when organizations depend on probabilistic models for deterministic outcomes.
      </p>
      <div className="flex gap-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
        >
          Blog <ArrowRight size={14} />
        </Link>
        <Link
          to="/research"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
        >
          Research <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </section>
);

export default WritingSection;
