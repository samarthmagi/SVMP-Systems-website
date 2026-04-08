import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative py-28 md:py-44 overflow-hidden">
    {/* Decorative background grid */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06]" viewBox="0 0 600 600">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="600" stroke="hsl(var(--primary))" strokeWidth="1" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 60} x2="600" y2={i * 60} stroke="hsl(var(--primary))" strokeWidth="1" />
        ))}
      </svg>
      {/* Floating accent circles */}
      <div className="absolute top-20 right-[20%] w-3 h-3 rounded-full bg-primary/20 animate-float" />
      <div className="absolute top-40 right-[35%] w-2 h-2 rounded-full bg-secondary/25 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 right-[15%] w-4 h-4 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "2s" }} />
    </div>

    <div className="container max-w-3xl relative">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6 opacity-0 animate-fade-in">
        SVMP Systems
      </p>
      <h1 className="text-4xl md:text-6xl font-heading font-semibold text-foreground leading-[1.1] mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        Control-layer software
        <br />
        <span className="relative inline-block">
          for LLM workflows
          <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 300 12" preserveAspectRatio="none">
            <path
              d="M0 8 Q75 0 150 8 Q225 16 300 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="animate-draw-line"
              style={{ strokeDasharray: 1, strokeDashoffset: 1, animationDelay: "0.8s" }}
            />
          </svg>
        </span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        Structure inputs. Govern sessions. Validate outputs. The missing infrastructure between your organization and the models it depends on.
      </p>
      <div className="flex gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Link
          to="/cs"
          className="group inline-flex items-center px-6 py-3 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
          Explore SVMP-CS
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
        <Link
          to="/research"
          className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md border border-border text-foreground hover:bg-accent hover:border-primary/30 transition-all duration-300"
        >
          Read our research
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
