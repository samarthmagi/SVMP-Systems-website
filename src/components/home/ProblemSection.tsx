import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  {
    num: "01",
    title: "Unstructured inputs",
    text: "Most LLM integrations accept raw, unvalidated prompts. There is no schema, no guardrail, and no structured expectation of what goes in or what comes out.",
  },
  {
    num: "02",
    title: "No session governance",
    text: "Conversations with models are stateless and unaudited. Organizations have no control over session continuity, escalation, or compliance traceability.",
  },
];

const ProblemSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="section-rule relative px-0 py-16 md:py-20">
      <div className="container max-w-5xl">
        <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          The Problem
        </p>
        <h2 className={`display-title mb-12 max-w-4xl text-5xl text-foreground md:text-6xl lg:text-7xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Fragmented input.
          <br />
          No validation.
          <br />
          <em>Ungoverned output.</em>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {problems.map((item, i) => (
            <article
              key={item.num}
              className={`surface p-6 md:p-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <span className="meta-line mb-4 block">{item.num}</span>
              <h3 className="mb-4 font-heading text-3xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
