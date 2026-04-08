import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const articles = [
  {
    to: "/blog",
    category: "Blog",
    title: "Systems design for probabilistic outputs",
    desc: "Why deterministic expectations and probabilistic models require a new kind of middleware.",
    date: "Coming soon",
  },
  {
    to: "/research",
    category: "Research",
    title: "Validation architectures for LLM pipelines",
    desc: "A technical framework for schema-enforced checkpoints in multi-model workflows.",
    date: "Coming soon",
  },
  {
    to: "/research",
    category: "Research",
    title: "Session governance in enterprise AI",
    desc: "How stateful session management enables compliance in regulated industries.",
    date: "Coming soon",
  },
];

const WritingSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-28 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p
              className={`text-xs font-medium uppercase tracking-[0.3em] text-primary mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Writing &amp; Research
            </p>
            <h2
              className={`text-4xl md:text-5xl font-heading font-semibold text-foreground tracking-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Thinking in public
            </h2>
          </div>
          <Link
            to="/blog"
            className={`group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}
          >
            View all <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <Link
              key={i}
              to={article.to}
              className={`group flex flex-col p-6 md:p-8 rounded-xl border border-border bg-card transition-all duration-700 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/60 mb-4">
                {article.category}
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {article.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground/60">{article.date}</span>
                <ArrowRight size={14} className="text-border transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
