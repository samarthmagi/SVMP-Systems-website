import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const withoutItems = ["Unapproved answers", "Hidden decision paths", "Low-confidence guesses"];
const withItems = ["Approved knowledge", "Escalation rules", "Reviewable sessions"];

const ComparisonBand = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="ink-section px-0 py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Why teams switch
          </p>
          <h2 className={`display-title text-5xl text-[#f7f1e6] md:text-7xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            From loose automation to governed support.
          </h2>
        </div>

        <div className={`grid gap-0 border border-[rgba(215,201,173,0.18)] md:grid-cols-[0.9fr,auto,1.1fr] transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <article className="p-7 md:p-9">
            <span className="meta-line mb-6 block">Without SVMP-CS</span>
            <div className="space-y-3">
              {withoutItems.map((item) => (
                <div key={item} className="border border-[rgba(215,201,173,0.14)] bg-white/[0.035] px-4 py-4 text-[#f7f1e6]/72">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <div className="hidden min-w-20 items-center justify-center border-x border-[rgba(215,201,173,0.18)] md:flex">
            <ArrowRight className="text-primary" size={24} />
          </div>

          <article className="border-t border-[rgba(215,201,173,0.18)] p-7 md:border-t-0 md:p-9">
            <span className="meta-line mb-6 block">With SVMP-CS</span>
            <div className="space-y-3">
              {withItems.map((item) => (
                <div key={item} className="border border-[rgba(196,154,69,0.35)] bg-white/[0.065] px-4 py-4 text-[#f7f1e6]">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ComparisonBand;
