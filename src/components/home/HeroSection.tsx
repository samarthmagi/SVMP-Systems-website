import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const signals = [
  ["Approved knowledge", "Answers stay grounded in sources your team controls."],
  ["Confidence checks", "Unclear cases escalate before the system guesses."],
  ["Private oversight", "Sessions, rules, metrics, and integrations stay reviewable."],
];

const tags = ["WhatsApp-first", "Governed support", "Approved knowledge", "Human fallback"];

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="paper-hero hero-shell">
      <div className="container grid gap-0 lg:grid-cols-[72px_minmax(0,1fr)]">
        <div className="hero-rail hidden border-r border-[var(--line)] py-12 text-center lg:block">
          <span className="nav-mono text-[0.62rem] tracking-[0.2em] text-primary">Governed AI for real operations</span>
        </div>

        <div className="grid gap-8 py-12 md:py-14 lg:grid-cols-[minmax(0,0.98fr),minmax(380px,1.02fr)] lg:items-stretch lg:py-16">
          <div className={`flex flex-col justify-between transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div>
            <p className="meta-line mb-5">SVMP Systems</p>
            <h1 className="display-title max-w-3xl text-6xl text-foreground md:text-8xl lg:text-[6.2rem] xl:text-[7rem]">
              Reliable AI.
              <br />
              Controlled
              <br />
              <em>outcomes.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              SVMP Systems builds practical AI products for teams that need faster workflows without losing control, visibility, or human judgment.
            </p>
            </div>

            <div>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--line)] pt-5">
                {tags.map((tag) => (
                  <span key={tag} className="quiet-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/cs" className="paper-button paper-button-primary">
                  Explore SVMP-CS <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="paper-button paper-button-secondary">
                  Request demo
                </Link>
              </div>
            </div>
          </div>

          <aside className={`ink-section relative overflow-hidden p-5 md:p-7 transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="mb-8 flex items-center justify-between border-b border-[rgba(215,201,173,0.18)] pb-5">
              <p className="meta-line">SVMP-CS Snapshot</p>
              <span className="nav-mono text-[0.62rem] tracking-[0.14em] text-[#f7f1e6]/58">Live system pattern</span>
            </div>
            <div className="grid gap-4">
              {signals.map(([title, copy]) => (
                <div key={title} className="ink-card group flex gap-4 p-5 transition-all duration-300">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-primary transition-transform group-hover:scale-105" />
                  <div>
                    <strong className="block font-heading text-3xl font-semibold leading-tight">{title}</strong>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{copy}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-[rgba(215,201,173,0.18)] pt-6">
              <div className="grid grid-cols-3 gap-3 text-center">
                {["Input", "Govern", "Escalate"].map((item) => (
                  <div key={item} className="border border-[rgba(215,201,173,0.18)] bg-white/[0.04] px-2 py-4">
                    <span className="nav-mono text-[0.6rem] tracking-[0.12em] text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
