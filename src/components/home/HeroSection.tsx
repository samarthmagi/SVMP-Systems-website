import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const signals = [
  ["Capture", "Structure raw inputs before they reach the model."],
  ["Govern", "Carry policy and session state through every exchange."],
  ["Validate", "Check outputs before they become operational truth."],
];

const tags = ["Session buffer", "Validation gate", "Audit trail", "Schema enforcement"];

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="paper-hero px-0 py-20 md:py-24 lg:py-28">
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.15fr),minmax(320px,0.85fr)] lg:items-start">
        <div className={`max-w-5xl transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="meta-line mb-5">SVMP Systems</p>
          <h1 className="display-title text-6xl text-foreground md:text-7xl lg:text-8xl">
            Control-layer software for <em>LLM workflows</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            Structure inputs. Govern sessions. Validate outputs. The missing infrastructure between your organization and the models it depends on.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--line)] pt-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="nav-mono border border-[rgba(139,106,45,0.18)] bg-white/30 px-3 py-2 text-[0.61rem] tracking-[0.14em] text-[var(--accent-ink)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(139,106,45,0.38)] hover:bg-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/cs" className="paper-button paper-button-primary">
              Explore SVMP-CS <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link to="/research" className="paper-button paper-button-secondary">
              Read our research
            </Link>
          </div>
        </div>

        <aside className={`surface p-6 md:p-7 transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="meta-line mb-5">Operating Pattern</p>
          <div className="grid gap-4">
            {signals.map(([title, copy]) => (
              <div key={title} className="border-t border-[var(--line)] pt-4 first:border-t-0 first:pt-0">
                <strong className="block font-heading text-3xl font-semibold leading-none text-foreground">{title}</strong>
                <span className="mt-2 block text-muted-foreground">{copy}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;
