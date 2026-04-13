import { useScrollReveal } from "@/hooks/useScrollReveal";

const principles = [
  ["State", "Sessions should be explicit, inspectable, and recoverable."],
  ["Structure", "Inputs and outputs should carry schemas, not just intent."],
  ["Governance", "Policy should be enforced in software, not remembered as process."],
  ["Traceability", "Every important exchange should leave an audit path."],
];

const SolutionSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="section-rule px-0 py-16 md:py-20">
      <div className="container max-w-[1160px]">
        <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Approach
        </p>
        <h2 className={`display-title max-w-4xl text-5xl text-foreground md:text-6xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Build the control plane, then make it usable.
        </h2>

        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {principles.map(([title, copy], index) => (
            <div
              key={title}
              className={`border-t border-[var(--line)] py-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <p className="font-heading text-3xl font-semibold text-foreground">{title}</p>
              <p className="mt-1 text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
