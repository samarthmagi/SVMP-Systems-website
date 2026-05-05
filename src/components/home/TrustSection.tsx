import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const stats = [
  { value: "WhatsApp", label: "First support channel" },
  { value: "Approved", label: "Knowledge-led answers" },
  { value: "Human", label: "Escalation when needed" },
];

const pillars = [
  {
    title: "Traceability",
    description: "Teams can review sessions, outcomes, and operational decisions through the private portal.",
  },
  {
    title: "Control",
    description: "Approved knowledge and governance rules shape what the system can answer.",
  },
  {
    title: "Reliability",
    description: "Low-confidence or unclear cases move toward a human instead of becoming a guess.",
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

      <section ref={ref} className="section-rule px-0 py-16 md:py-24 relative">
        <div className="container max-w-5xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-end">
            <div>
            <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Trust
            </p>
            <h2 className={`display-title text-5xl text-foreground md:text-6xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Calm systems.
              <br />
              Clear decisions.
            </h2>
            </div>
            <p className={`max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              SVMP Systems should feel less like a prompt wrapper and more like operating software: restrained, inspectable, and built for teams that need to trust the workflow.
            </p>
          </div>

          <div className="grid gap-0 border border-[var(--line)] md:grid-cols-3">
            {pillars.map((p, i) => (
              <article
                key={p.title}
                className={`min-h-[260px] bg-[rgba(255,253,248,0.5)] p-7 transition-all duration-700 hover:bg-[rgba(255,253,248,0.82)] md:border-l md:p-8 md:first:border-l-0 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
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

      <section ref={ref2} className="ink-section px-0 py-16 md:py-24">
        <div className={`container max-w-5xl transition-all duration-700 ${visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="grid gap-8 border border-[rgba(215,201,173,0.18)] bg-white/[0.04] p-8 md:grid-cols-[1fr,auto] md:items-center md:p-12">
            <div>
              <p className="meta-line mb-4">Next Step</p>
              <h2 className="display-title text-5xl text-[#f7f1e6] md:text-7xl">
                Ready to see <em>SVMP-CS?</em>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                Start with a focused conversation around WhatsApp support, approved knowledge, and human escalation.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
              <Link to="/cs" className="paper-button paper-button-primary">
                Explore SVMP-CS <span aria-hidden="true">-&gt;</span>
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
