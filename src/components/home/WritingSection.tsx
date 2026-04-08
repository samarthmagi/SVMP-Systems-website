import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FlaskConical } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WritingSection = () => {
  const { ref, visible } = useScrollReveal();

  const links = [
    { to: "/blog", label: "Blog", icon: BookOpen, desc: "Essays on systems design and AI governance" },
    { to: "/research", label: "Research", icon: FlaskConical, desc: "Technical papers and validation architectures" },
  ];

  return (
    <section ref={ref} className="py-20 border-t border-border">
      <div className="container max-w-3xl">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Writing &amp; Research</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
            Thinking in public
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            We publish our thinking on systems design, validation architectures, and the governance challenges that emerge when organizations depend on probabilistic models for deterministic outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`group relative p-6 rounded-lg border border-border bg-card transition-all duration-700 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${400 + i * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                  <link.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{link.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{link.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
