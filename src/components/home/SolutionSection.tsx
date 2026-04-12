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
    <section ref={ref} className="section-rule px-0 py-16 md:py-20 relative">
      <div className="container max-w-5xl">
        <div className="max-w-2xl mb-16">
          <p
            className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            The Solution
          </p>
          <h2
            className={`display-title text-5xl text-foreground md:text-6xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Session buffer.
            <br />
            <em>Validation gate.</em>
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="mb-8 flex w-fit gap-1 border border-[var(--line)] bg-white/30 p-1">
            {solutions.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`nav-mono px-5 py-2.5 text-[0.66rem] tracking-[0.14em] transition-all duration-300 ${
                  active === s.id
                    ? "bg-[var(--surface-strong)] text-foreground shadow-sm"
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
                <article className="surface p-8 md:p-10">
                  <span className="meta-line mb-5 inline-block">
                    {s.tag}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </article>

                <div className="space-y-3">
                  {s.details.map((d, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border border-[var(--line)] bg-white/30 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/60"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-primary/20 bg-white/30">
                        <span className="nav-mono text-[0.6rem] tracking-[0.12em] text-primary">{i + 1}</span>
                      </div>
                      <p className="text-sm text-foreground">{d}</p>
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
