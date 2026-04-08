import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProductSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 border-t border-border">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-[1fr,auto] gap-12 items-center">
          {/* Text */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Product</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">SVMP-CS</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Our first product wedge: a control-session layer that validates, structures, and governs every interaction between users and LLM endpoints. Built for teams that cannot afford ambiguity.
            </p>
            <Link
              to="/cs"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              Learn more <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Visual: Flow diagram */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative w-56 md:w-64">
              {/* Nodes */}
              {["Input", "Validate", "Session", "Output"].map((label, i) => (
                <div key={label} className="relative flex items-center gap-3 mb-4 last:mb-0">
                  <div
                    className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-xs font-medium text-primary shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md cursor-default"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {(i + 1).toString().padStart(2, "0")}
                  </div>
                  <span className="text-sm text-foreground font-medium">{label}</span>
                  {i < 3 && (
                    <div className="absolute left-5 top-10 w-px h-4 bg-border" />
                  )}
                </div>
              ))}
              {/* Glow accent */}
              <div className="absolute -inset-8 bg-primary/[0.03] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
