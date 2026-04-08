import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "100%", label: "Session traceability" },
  { value: "Zero", label: "Unvalidated outputs" },
  { value: "Full", label: "Regulatory compliance" },
];

const pillars = [
  {
    title: "Full traceability",
    description: "Every session, input, and output is logged with immutable audit trails.",
  },
  {
    title: "Policy enforcement",
    description: "Organizational rules are encoded as validation schemas, not guidelines.",
  },
  {
    title: "Compliance-ready",
    description: "Designed for environments where regulatory oversight of AI is not optional.",
  },
];

const TrustSection = () => {
  const { ref, visible } = useScrollReveal();
  const { ref: ref2, visible: visible2 } = useScrollReveal();

  return (
    <>
      {/* Stats marquee band */}
      <section className="py-16 border-t border-border bg-muted/50 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
            <div key={i} className="flex items-center gap-6 mx-12">
              <span className="text-3xl md:text-4xl font-heading font-semibold text-foreground">{s.value}</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">{s.label}</span>
              <span className="text-border">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trust pillars */}
      <section ref={ref} className="py-28 md:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-border" />

        <div className="container max-w-5xl">
          <div className="max-w-2xl mb-16">
            <p
              className={`text-xs font-medium uppercase tracking-[0.3em] text-primary mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Trust &amp; Governance
            </p>
            <h2
              className={`text-4xl md:text-5xl font-heading font-semibold text-foreground tracking-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Built for auditability
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`bg-card p-8 md:p-10 transition-all duration-700 hover:bg-accent/50 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center mb-6">
                  <span className="text-xs font-semibold text-primary">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section ref={ref2} className="py-28 md:py-36 bg-foreground text-background relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)] pointer-events-none" />

        <div className="container max-w-3xl text-center relative z-10">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] mb-8 tracking-tight transition-all duration-1000 ${visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Ready to govern
            <br />
            your AI workflows?
          </h2>
          <p
            className={`text-lg text-primary-foreground/50 mb-10 transition-all duration-1000 delay-200 ${visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Start with SVMP-CS. Structure, validate, and control every session.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Link
              to="/cs"
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-md bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Get started
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-md border border-primary-foreground/20 text-primary-foreground/80 hover:border-primary-foreground/40 hover:text-primary-foreground transition-all duration-500 hover:-translate-y-0.5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustSection;
