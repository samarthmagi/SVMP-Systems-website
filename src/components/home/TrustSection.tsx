import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

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
      <section className="section-rule overflow-hidden bg-white/20 py-12">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
            <div key={i} className="mx-12 flex items-center gap-6">
              <span className="font-heading text-4xl font-semibold text-foreground">{s.value}</span>
              <span className="nav-mono text-[0.66rem] tracking-[0.14em] text-muted-foreground">{s.label}</span>
              <span className="text-muted-foreground">&middot;</span>
            </div>
          ))}
        </div>
      </section>

      <section ref={ref} className="section-rule px-0 py-16 md:py-20 relative">
        <div className="container max-w-5xl">
          <div className="max-w-2xl mb-16">
            <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Trust &amp; Governance
            </p>
            <h2 className={`display-title text-5xl text-foreground md:text-6xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Built for auditability
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <article
                key={p.title}
                className={`surface p-7 md:p-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center border border-primary/20 bg-white/30">
                  <span className="nav-mono text-[0.62rem] tracking-[0.12em] text-primary">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref2} className="section-rule px-0 py-16 md:py-20">
        <div className={`container max-w-5xl transition-all duration-700 ${visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="surface grid gap-8 p-8 md:grid-cols-[1fr,auto] md:items-center md:p-10">
            <div>
              <p className="meta-line mb-4">Next Step</p>
              <h2 className="display-title text-5xl text-foreground md:text-6xl">
                Ready to govern <em>your AI workflows?</em>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                Start with SVMP-CS. Structure, validate, and control every session.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
              <Link to="/cs" className="paper-button paper-button-primary">
                Get started <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link to="/contact" className="paper-button paper-button-secondary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustSection;
