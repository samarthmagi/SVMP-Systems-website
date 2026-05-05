import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const solutions = [
  {
    id: "buffer",
    tag: "Knowledge",
    title: "Approved Answers",
    description:
      "SVMP-CS keeps support answers tied to approved knowledge and brand expectations, so teams can move faster without letting the system invent policy.",
    details: [
      "Controlled knowledge base",
      "Brand voice guidance",
      "Session review history",
    ],
  },
  {
    id: "gate",
    tag: "Governance",
    title: "Human Escalation",
    description:
      "When the system is uncertain, out of scope, or blocked by a rule, it routes the case to a human instead of forcing an answer. Operators keep visibility into what happened and why.",
    details: [
      "Confidence thresholds",
      "Policy-based escalation",
      "Operational audit trail",
    ],
  },
];

const SolutionSection = () => {
  const { ref, visible } = useScrollReveal();
  const [active, setActive] = useState("buffer");

  return (
    <section ref={ref} className="section-rule px-0 py-16 md:py-24 relative">
      <div className="container max-w-5xl">
        <div className="max-w-2xl mb-16">
          <p
            className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
          How SVMP helps
          </p>
          <h2
            className={`display-title text-5xl text-foreground md:text-6xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Practical AI support.
            <br />
            <em>Governed from the start.</em>
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="mb-8 flex w-full flex-wrap gap-1 border border-[var(--line)] bg-white/30 p-1 md:w-fit">
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
              <div className="grid lg:grid-cols-[1.25fr,1fr] gap-0 border border-[var(--line)] items-stretch">
                <article className="bg-[rgba(255,253,248,0.72)] p-8 md:p-12">
                  <span className="meta-line mb-5 inline-block">
                    {s.tag}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </article>

                <div className="grid border-t border-[var(--line)] lg:border-l lg:border-t-0">
                  {s.details.map((d, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border-t border-[var(--line)] bg-[rgba(255,253,248,0.38)] p-6 first:border-t-0 transition-colors hover:bg-[rgba(255,253,248,0.72)]"
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
