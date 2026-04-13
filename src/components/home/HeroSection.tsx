import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="paper-hero px-0 py-20 md:py-24 lg:py-28">
      <div className={`container max-w-5xl transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <p className="meta-line mb-5">SVMP Systems</p>
        <h1 className="display-title text-6xl text-foreground md:text-7xl lg:text-8xl">
          A research and product lab for <em>controlled AI systems</em>.
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-muted-foreground">
          We study and build the infrastructure around LLM workflows: structured input, session governance, validation, auditability, and the operational edges where model behavior has to become reliable software.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link to="/products" className="paper-button paper-button-primary">
            Products <span aria-hidden="true">-&gt;</span>
          </Link>
          <Link to="/research" className="paper-button paper-button-secondary">
            Research
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
