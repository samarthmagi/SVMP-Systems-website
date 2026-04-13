import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const entries = [
  {
    category: "Blog",
    title: "Systems design for probabilistic outputs",
    href: "/blog",
    date: "April 2026",
    description: "Why deterministic expectations and probabilistic systems require a different kind of middleware.",
  },
  {
    category: "Research",
    title: "Validation architectures for LLM pipelines",
    href: "/research",
    date: "April 2026",
    description: "A technical framework for schema-enforced checkpoints in multi-model workflows.",
  },
  {
    category: "Research",
    title: "Session governance in enterprise AI",
    href: "/research",
    date: "April 2026",
    description: "How stateful session management supports compliance, auditability, and operational control.",
  },
];

const WritingSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="section-rule px-0 py-16 md:py-20">
      <div className="container max-w-[1160px]">
        <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Writing &amp; Research
        </p>
        <h2 className={`display-title max-w-4xl text-5xl text-foreground md:text-6xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Notes from the lab.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {entries.map((entry, index) => (
            <Link
              key={entry.title}
              to={entry.href}
              className={`link-card group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="mb-5 flex flex-wrap gap-3">
                <p className="meta-line">{entry.category}</p>
                <p className="nav-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground">{entry.date}</p>
              </div>
              <h3 className="font-heading text-3xl font-semibold text-foreground transition-colors group-hover:text-primary">{entry.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{entry.description}</p>
              <p className="text-link mt-5">Coming soon</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
