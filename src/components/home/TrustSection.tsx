import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Eye, Lock, Scale } from "lucide-react";

const TrustSection = () => {
  const { ref, visible } = useScrollReveal();

  const pillars = [
    {
      icon: Eye,
      title: "Full traceability",
      description: "Every session, input, and output is logged with immutable audit trails.",
    },
    {
      icon: Lock,
      title: "Policy enforcement",
      description: "Organizational rules are encoded as validation schemas, not guidelines.",
    },
    {
      icon: Scale,
      title: "Compliance-ready",
      description: "Designed for environments where regulatory oversight of AI is not optional.",
    },
  ];

  return (
    <section ref={ref} className="py-20 border-t border-border">
      <div className="container max-w-3xl">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Trust &amp; Governance</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-10">
            Built for auditability
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group relative p-6 rounded-lg border border-border bg-card text-center transition-all duration-700 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
