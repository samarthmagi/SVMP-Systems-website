import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="py-28 md:py-40">
    <div className="container max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6 animate-fade-in">
        SVMP Systems
      </p>
      <h1 className="text-4xl md:text-6xl font-heading font-semibold text-foreground leading-[1.1] mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        Control-layer software<br />for LLM workflows
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        Structure inputs. Govern sessions. Validate outputs. The missing infrastructure between your organization and the models it depends on.
      </p>
      <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Link
          to="/cs"
          className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-secondary transition-colors"
        >
          Explore SVMP-CS
        </Link>
        <Link
          to="/research"
          className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md border border-border text-foreground hover:bg-accent transition-colors"
        >
          Read our research
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
