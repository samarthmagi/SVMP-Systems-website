import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProblemSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="section-rule px-0 py-16 md:py-20">
      <div className="container max-w-[1160px]">
        <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Premise
        </p>
        <h2 className={`display-title max-w-4xl text-5xl text-foreground md:text-6xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          The model is not the whole system.
        </h2>
        <div className={`mt-8 max-w-4xl space-y-5 text-lg text-muted-foreground transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p>
            Most LLM integrations still treat the prompt and response as the entire operational boundary. That leaves the difficult parts underdeveloped: input structure, session continuity, policy checks, and output validation.
          </p>
          <p>
            SVMP Systems works on the layer around the model, where probabilistic behavior has to meet deterministic expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
