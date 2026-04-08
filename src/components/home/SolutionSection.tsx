import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Layers, ShieldCheck } from "lucide-react";

const SolutionSection = () => {
  const { ref, visible } = useScrollReveal();

  const solutions = [
    {
      icon: Layers,
      title: "Session Buffer",
      description:
        "A stateful intermediary that captures, structures, and sequences all interactions within a controlled session. Every exchange is logged, governed, and reversible.",
      tag: "Statefulness",
    },
    {
      icon: ShieldCheck,
      title: "Validation Gate",
      description:
        "A schema-enforced checkpoint that inspects inputs before they reach the model and validates outputs before they reach the user. Nothing passes without meeting your organization's quality standard.",
      tag: "Enforcement",
    },
  ];

  return (
    <section ref={ref} className="py-20 border-t border-border relative">
      <div className="container max-w-3xl">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">The Solution</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-10">
            Session buffer. Validation gate.
          </h2>
        </div>

        <div className="space-y-6">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className={`group relative p-8 rounded-lg bg-card border border-border transition-all duration-700 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-heading text-xl text-foreground">{s.title}</h3>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-0.5 rounded-full">
                      {s.tag}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-primary/20 rounded-tr-md" />
              </div>
            </div>
          ))}
        </div>

        {/* Connecting line between cards */}
        <div className="flex justify-center my-0">
          <div className={`w-px h-6 transition-all duration-1000 ${visible ? "bg-primary/20" : "bg-transparent"}`} style={{ transitionDelay: "600ms" }} />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
