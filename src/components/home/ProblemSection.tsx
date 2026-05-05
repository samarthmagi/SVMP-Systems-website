import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  {
    num: "01",
    title: "Support teams need speed without loose answers.",
    text: "Customers expect fast replies, but businesses still need approved knowledge, brand consistency, and a clear handoff when the system is not confident.",
  },
  {
    num: "02",
    title: "Generic chatbots make the wrong tradeoff.",
    text: "They can automate the easy cases, but often hide the decision path. SVMP-CS keeps the workflow reviewable through sessions, governance logs, metrics, and settings.",
  },
];

const ProblemSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="section-rule relative px-0 py-16 md:py-20">
      <div className="container max-w-5xl">
        <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Why it matters
        </p>
        <h2 className={`display-title mb-12 max-w-4xl text-5xl text-foreground md:text-6xl lg:text-7xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Automation should feel
          <br />
          controlled, observable,
          <br />
          and <em>useful.</em>
        </h2>

        <div className="grid gap-0 border border-[var(--line)] md:grid-cols-2">
          {problems.map((item, i) => (
            <article
              key={item.num}
              className={`min-h-[320px] bg-[rgba(255,253,248,0.5)] p-7 transition-all duration-700 hover:bg-[rgba(255,253,248,0.78)] md:p-10 ${i === 1 ? "border-t border-[var(--line)] md:border-l md:border-t-0" : ""} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <span className="meta-line mb-4 block">{item.num}</span>
              <h3 className="mb-5 font-heading text-4xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
