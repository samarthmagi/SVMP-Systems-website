import { Link } from "react-router-dom";
import { ArrowRight, Check, MessagesSquare, ShieldAlert } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pipeline = ["Input", "Knowledge", "Policy", "Confidence", "Answer / Escalate"];

const OperatingSurface = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="section-rule px-0 py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-end">
          <div>
            <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Operating surface
            </p>
            <h2 className={`display-title text-5xl text-foreground md:text-7xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              A support workflow your team can actually inspect.
            </h2>
          </div>
          <p className={`max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            The private portal is where support operators review sessions, knowledge gaps, rules, metrics, and integrations. The product story is not hidden inside the model.
          </p>
        </div>

        <div className={`grid gap-0 border border-[var(--line)] lg:grid-cols-[1fr,1.05fr] transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="bg-[rgba(255,253,248,0.55)] p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-[var(--line)] pb-4">
              <span className="meta-line">Workflow</span>
              <span className="nav-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground">Governed path</span>
            </div>
            <div className="space-y-3">
              {pipeline.map((step, index) => (
                <div key={step} className="group flex items-center gap-4 border border-[var(--line)] bg-white/35 p-4 transition-colors hover:bg-white/65">
                  <span className="flex h-9 w-9 items-center justify-center border border-primary/20 font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-2xl text-foreground">{step}</span>
                  {index < pipeline.length - 1 && <ArrowRight className="ml-auto text-primary/70 transition-transform group-hover:translate-x-1" size={16} />}
                  {index === pipeline.length - 1 && <Check className="ml-auto text-primary" size={17} />}
                </div>
              ))}
            </div>
          </div>

          <div className="ink-section border-t border-[var(--line)] p-6 lg:border-l lg:border-t-0 md:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-[rgba(215,201,173,0.18)] pb-4">
              <span className="meta-line">Portal preview</span>
              <span className="nav-mono text-[0.62rem] tracking-[0.14em] text-[#f7f1e6]/60">Sessions</span>
            </div>
            <div className="grid gap-4">
              <div className="ink-card flex items-center gap-4 p-5">
                <MessagesSquare className="text-primary" size={22} />
                <div>
                  <p className="font-heading text-3xl">Password reset request</p>
                  <p className="text-sm text-muted-foreground">Answered from approved policy guide</p>
                </div>
                <span className="ml-auto nav-mono text-[0.6rem] tracking-[0.12em] text-primary">Answered</span>
              </div>
              <div className="ink-card flex items-center gap-4 p-5">
                <ShieldAlert className="text-primary" size={22} />
                <div>
                  <p className="font-heading text-3xl">Refund exception</p>
                  <p className="text-sm text-muted-foreground">Escalated because confidence was low</p>
                </div>
                <span className="ml-auto nav-mono text-[0.6rem] tracking-[0.12em] text-primary">Escalated</span>
              </div>
            </div>
            <Link to="/contact" className="paper-button mt-6 border-[#d5b56e]/35 bg-[#f7f1e6] text-[#1f1d1a] hover:bg-[#d5b56e]">
              Request demo <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingSurface;
