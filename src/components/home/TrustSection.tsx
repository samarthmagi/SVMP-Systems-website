import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TrustSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="section-rule px-0 py-16 md:py-20">
      <div className="container max-w-[1160px]">
        <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Direction
        </p>
        <h2 className={`display-title max-w-4xl text-5xl text-foreground md:text-6xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Systems that can be audited, governed, and improved.
        </h2>
        <p className={`mt-6 max-w-4xl text-lg text-muted-foreground transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          The work starts with SVMP-CS, but the larger aim is a set of control-layer primitives for AI-native software: session state, validation gates, policy enforcement, and reliable operational traces.
        </p>
        <div className={`mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link to="/products" className="paper-button paper-button-primary">
            Products <span aria-hidden="true">-&gt;</span>
          </Link>
          <Link to="/contact" className="paper-button paper-button-secondary">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
