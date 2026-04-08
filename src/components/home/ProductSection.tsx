import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", label: "Capture", desc: "Intercept raw input" },
  { num: "02", label: "Structure", desc: "Apply schema enforcement" },
  { num: "03", label: "Validate", desc: "Run policy checks" },
  { num: "04", label: "Deliver", desc: "Return governed output" },
];

const ProductSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-28 md:py-36 relative overflow-hidden">
      {/* Full-width separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p
              className={`text-xs font-medium uppercase tracking-[0.3em] text-primary mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Product
            </p>
            <h2
              className={`text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6 tracking-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              SVMP-CS
            </h2>
            <p
              className={`text-lg text-muted-foreground leading-relaxed mb-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Our first product wedge: a control-session layer that validates, structures, and governs every interaction between users and LLM endpoints. Built for teams that cannot afford ambiguity.
            </p>
            <Link
              to="/cs"
              className={`group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Learn more <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          {/* Right: Interactive flow diagram */}
          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative bg-card rounded-xl border border-border p-8 md:p-10 shadow-sm">
              {/* Subtle corner decoration */}
              <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-primary/20 rounded-tl-sm" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-primary/20 rounded-br-sm" />

              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div key={step.num}>
                    <div className="group flex items-center gap-5 py-4 cursor-default">
                      {/* Number node */}
                      <div className="relative flex-shrink-0">
                        <div className="w-11 h-11 rounded-full border-2 border-primary/20 bg-background flex items-center justify-center transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:scale-110">
                          <span className="text-xs font-semibold text-primary">{step.num}</span>
                        </div>
                      </div>

                      {/* Label + description */}
                      <div className="flex-1">
                        <p className="text-base font-heading font-semibold text-foreground mb-0.5 transition-colors group-hover:text-primary">
                          {step.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>

                      {/* Arrow indicator */}
                      <ArrowRight size={14} className="text-border transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                    </div>

                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div className="ml-[21px] w-px h-4 bg-primary/15" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
