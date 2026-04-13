import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const entries = [
  ["Blog", "Systems design for probabilistic outputs", "/blog"],
  ["Research", "Validation architectures for LLM pipelines", "/research"],
  ["Research", "Session governance in enterprise AI", "/research"],
];

const WritingSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="section-rule px-0 py-16 md:py-20">
      <div className="container max-w-4xl">
        <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Writing &amp; Research
        </p>
        <h2 className={`display-title text-5xl text-foreground md:text-6xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Notes from the lab.
        </h2>

        <div className="mt-10">
          {entries.map(([label, title, href], index) => (
            <Link
              key={title}
              to={href}
              className={`group block border-t border-[var(--line)] py-5 transition-all duration-700 hover:border-primary ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <p className="meta-line mb-2">{label}</p>
              <h3 className="font-heading text-3xl font-semibold text-foreground transition-colors group-hover:text-primary">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Coming soon</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
