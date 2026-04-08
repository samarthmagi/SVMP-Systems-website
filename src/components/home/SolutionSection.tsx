import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const solutions = [
  {
    id: "buffer",
    tag: "Statefulness",
    title: "Session Buffer",
    description:
      "A stateful intermediary that captures, structures, and sequences all interactions within a controlled session. Every exchange is logged, governed, and reversible.",
    details: [
      "Stateful session management",
      "Immutable interaction logging",
      "Reversible exchange sequences",
    ],
  },
  {
    id: "gate",
    tag: "Enforcement",
    title: "Validation Gate",
    description:
      "A schema-enforced checkpoint that inspects inputs before they reach the model and validates outputs before they reach the user. Nothing passes without meeting your organization's quality standard.",
    details: [
      "Schema-enforced inspection",
      "Pre-model input validation",
      "Post-model output checks",
    ],
  },
];

const SolutionSection = () => {
  const { ref, visible } = useScrollReveal();
  const [active, setActive] = useState("buffer");

  return (
    <section ref={ref} className="py-28 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container max-w-5xl">
        <div className="max-w-2xl mb-16">
          <p
            className={`text-xs font-medium uppercase tracking-[0.3em] text-primary mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            The Solution
          </p>
          <h2
            className={`text-4xl md:text-5xl font-heading font-semibold text-foreground tracking-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Session buffer.
            <br />
            Validation gate.
          </h2>
        </div>

        {/* Interactive tabs */}
        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Tab headers */}
          <div className="flex gap-1 mb-8 p-1 bg-muted rounded-lg w-fit">
            {solutions.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-300 ${
                  active === s.id
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {solutions.map((s) => (
            <div
              key={s.id}
              className={`transition-all duration-500 ${
                active === s.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute pointer-events-none"
              }`}
              style={{ display: active === s.id ? "block" : "none" }}
            >
              <div className="grid lg:grid-cols-[1.3fr,1fr] gap-10 items-start">
                <div className="bg-card rounded-xl border border-border p-8 md:p-10">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/8 px-3 py-1 rounded-full mb-5">
                    {s.tag}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </div>

                <div className="space-y-3">
                  {s.details.map((d, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50 transition-all duration-300 hover:border-primary/30 hover:bg-card"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-primary">{i + 1}</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
