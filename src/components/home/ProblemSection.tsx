import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle, Shuffle } from "lucide-react";

const ProblemSection = () => {
  const { ref, visible } = useScrollReveal();

  const problems = [
    {
      icon: Shuffle,
      title: "Unstructured inputs",
      description:
        "Most LLM integrations accept raw, unvalidated prompts. There is no schema, no guardrail, and no structured expectation of what goes in—or what comes out.",
    },
    {
      icon: AlertTriangle,
      title: "No session governance",
      description:
        "Conversations with models are stateless and unaudited. Organizations have no control over session continuity, escalation, or compliance traceability.",
    },
  ];

  return (
    <section ref={ref} className="py-20 border-t border-border relative overflow-hidden">
      {/* Decorative diagonal lines */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.04] pointer-events-none" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-destructive"
            style={{
              width: "1px",
              height: "200px",
              transform: `rotate(-45deg) translateX(${i * 20}px)`,
              top: "-40px",
              right: `${i * 20}px`,
            }}
          />
        ))}
      </div>

      <div className="container max-w-3xl">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-10">
            Fragmented input. No validation.
            <br />
            Ungoverned output.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`group relative p-6 rounded-lg border border-border bg-card transition-all duration-700 hover:border-destructive/30 hover:shadow-lg hover:shadow-destructive/5 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className="w-9 h-9 rounded-md bg-destructive/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-destructive/15">
                <p.icon className="h-4 w-4 text-destructive" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
