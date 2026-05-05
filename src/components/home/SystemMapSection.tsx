import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Gauge, MessageSquare, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const modules = [
  {
    icon: MessageSquare,
    title: "WhatsApp intake",
    copy: "Customer questions enter a controlled support workflow instead of a loose chat interface.",
  },
  {
    icon: BookOpen,
    title: "Approved knowledge",
    copy: "Responses are grounded in sources the business owns, updates, and reviews.",
  },
  {
    icon: ShieldCheck,
    title: "Governance logic",
    copy: "Confidence and policy checks decide when the system can answer and when it should escalate.",
  },
  {
    icon: Gauge,
    title: "Private portal",
    copy: "Teams review sessions, metrics, integrations, rules, and settings from one operating surface.",
  },
];

const SystemMapSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="section-rule px-0 py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr,1.1fr] md:items-end">
          <div>
            <p className={`meta-line mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Product map
            </p>
            <h2 className={`display-title text-5xl text-foreground md:text-7xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              One system,
              <br />
              not another bot.
            </h2>
          </div>
          <p className={`max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            The SVMP-CS workflow is designed around control points: what comes in, what knowledge is allowed, when confidence is sufficient, and how teams review what happened.
          </p>
        </div>

        <div className={`grid gap-0 border border-[var(--line)] md:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className={`group min-h-[300px] bg-[rgba(255,253,248,0.48)] p-7 transition-colors hover:bg-[rgba(255,253,248,0.84)] md:p-8 ${
                  index > 0 ? "border-t border-[var(--line)] md:border-l md:border-t-0" : ""
                } ${index === 2 ? "lg:border-l" : ""}`}
              >
                <div className="mb-10 flex h-12 w-12 items-center justify-center border border-[var(--line)] bg-white/35 text-primary transition-transform group-hover:-translate-y-1">
                  <Icon size={21} />
                </div>
                <span className="meta-line mb-4 block">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mb-4 font-heading text-3xl font-semibold leading-tight text-foreground">{module.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{module.copy}</p>
              </article>
            );
          })}
        </div>

        <Link to="/cs" className={`text-link mt-8 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          View SVMP-CS <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
};

export default SystemMapSection;
