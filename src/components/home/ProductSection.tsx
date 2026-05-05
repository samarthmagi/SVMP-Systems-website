import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", label: "Connect", desc: "WhatsApp conversations enter the governed support flow." },
  { num: "02", label: "Ground", desc: "The answer is formed from approved knowledge and brand rules." },
  { num: "03", label: "Check", desc: "Confidence and policy gates decide whether to answer or escalate." },
  { num: "04", label: "Review", desc: "Teams inspect sessions, gaps, metrics, and outcomes in one portal." },
];

const ProductSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="ink-section px-0 py-18 md:py-24 relative overflow-hidden">
      <div className="container max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <div>
            <p
              className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              First product
            </p>
            <h2
              className={`display-title text-5xl text-[#f7f1e6] md:text-7xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              SVMP-CS
            </h2>
            <p
              className={`mt-5 text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              A governed AI customer support system for WhatsApp-first businesses. It helps teams reduce repetitive support work while keeping approved knowledge, escalation, and oversight close to the workflow.
            </p>
            <Link
              to="/cs"
              className={`text-link group mt-7 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Learn more <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="border border-[rgba(215,201,173,0.18)] bg-white/[0.04] p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-[rgba(215,201,173,0.18)] pb-4">
                <p className="meta-line">Support flow</p>
                <span className="nav-mono text-[0.62rem] tracking-[0.14em] text-[#f7f1e6]/58">Governed by design</span>
              </div>
              <div className="space-y-0">
                {steps.map((step) => (
                  <div key={step.num}>
                    <div className="group flex items-center gap-5 border-t border-[rgba(215,201,173,0.16)] py-5 first:border-t-0 cursor-default">
                      <div className="relative flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center border border-[rgba(215,201,173,0.2)] bg-white/[0.04] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/60 group-hover:bg-white/[0.08]">
                          <span className="nav-mono text-[0.62rem] tracking-[0.14em] text-primary">{step.num}</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="font-heading text-3xl font-semibold text-[#f7f1e6] transition-colors group-hover:text-primary">
                          {step.label}
                        </p>
                        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                      </div>

                      <ArrowRight size={14} className="text-border transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
