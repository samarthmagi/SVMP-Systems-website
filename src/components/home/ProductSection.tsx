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
    <section ref={ref} className="section-rule px-0 py-16 md:py-20 relative overflow-hidden">
      <div className="container max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
          <div>
            <p
              className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Product
            </p>
            <h2
              className={`display-title text-5xl text-foreground md:text-6xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              SVMP-CS
            </h2>
            <p
              className={`mt-5 text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Our first product wedge: a control-session layer that validates, structures, and governs every interaction between users and LLM endpoints. Built for teams that cannot afford ambiguity.
            </p>
            <Link
              to="/cs"
              className={`text-link group mt-7 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Learn more <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="surface p-6 md:p-8">
              <p className="meta-line mb-4">Flow</p>
              <div className="space-y-0">
                {steps.map((step) => (
                  <div key={step.num}>
                    <div className="group flex items-center gap-5 border-t border-[var(--line)] py-4 first:border-t-0 cursor-default">
                      <div className="relative flex-shrink-0">
                        <div className="flex h-11 w-11 items-center justify-center border border-[rgba(139,106,45,0.22)] bg-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/60 group-hover:bg-white/60">
                          <span className="nav-mono text-[0.62rem] tracking-[0.14em] text-primary">{step.num}</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="font-heading text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                          {step.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>

                      <ArrowRight size={14} className="text-border transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                    </div>
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
