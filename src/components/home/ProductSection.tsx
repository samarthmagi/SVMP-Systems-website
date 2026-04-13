import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const workstreams = [
  {
    label: "Research",
    title: "Validation architectures for AI workflows",
    copy: "Exploring how schema-enforced checkpoints, session state, and audit trails change the reliability profile of LLM systems.",
  },
  {
    label: "Product",
    title: "SVMP-CS",
    copy: "A control-session layer that validates, structures, and governs interactions between users and LLM endpoints.",
    link: "/cs",
  },
  {
    label: "Infrastructure",
    title: "Control surfaces for model-dependent software",
    copy: "Tooling and patterns for teams that need traceability, policy enforcement, and operational clarity around AI workflows.",
  },
];

const ProductSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="section-rule px-0 py-16 md:py-20">
      <div className="container max-w-4xl">
        <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Lab Work
        </p>
        <h2 className={`display-title text-5xl text-foreground md:text-6xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Research questions become product surfaces.
        </h2>

        <div className="mt-12 space-y-0">
          {workstreams.map((item, index) => (
            <section
              key={item.label}
              className={`border-t border-[var(--line)] py-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              <p className="meta-line mb-3">{item.label}</p>
              <h3 className="font-heading text-4xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 max-w-3xl text-muted-foreground">{item.copy}</p>
              {item.link && (
                <Link to={item.link} className="text-link mt-5">
                  Open SVMP-CS <span aria-hidden="true">-&gt;</span>
                </Link>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
