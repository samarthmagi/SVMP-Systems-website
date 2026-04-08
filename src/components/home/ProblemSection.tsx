import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProblemSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-foreground text-background overflow-hidden noise-overlay">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-background" />
        </svg>
      </div>

      <div className="container max-w-4xl relative z-10">
        <p
          className={`text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/50 mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          The Problem
        </p>
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] mb-16 tracking-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Fragmented input.
          <br />
          No validation.
          <br />
          <span className="text-primary-foreground/40">Ungoverned output.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              num: "01",
              title: "Unstructured inputs",
              text: "Most LLM integrations accept raw, unvalidated prompts. There is no schema, no guardrail, and no structured expectation of what goes in—or what comes out.",
            },
            {
              num: "02",
              title: "No session governance",
              text: "Conversations with models are stateless and unaudited. Organizations have no control over session continuity, escalation, or compliance traceability.",
            },
          ].map((item, i) => (
            <div
              key={item.num}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <span className="text-xs font-mono text-primary-foreground/30 mb-4 block">{item.num}</span>
              <h3 className="font-heading text-2xl mb-4">{item.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
