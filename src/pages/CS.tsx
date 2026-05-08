import { ArrowRight } from "lucide-react";
import YuzzahPageShell from "@/components/YuzzahPageShell";

const workflow = [
  {
    step: "01",
    title: "Intake",
    copy: "WhatsApp conversations enter a structured workflow instead of a loose chat surface.",
  },
  {
    step: "02",
    title: "Grounding",
    copy: "The answer is formed from approved knowledge and business rules the team controls.",
  },
  {
    step: "03",
    title: "Decision",
    copy: "Confidence and policy checks decide whether the system can answer or should escalate.",
  },
  {
    step: "04",
    title: "Review",
    copy: "Sessions, outcomes, gaps, and handoffs remain visible in the private portal.",
  },
];

const portalAreas = ["Knowledge base", "Brand voice", "Governance", "Sessions", "Metrics", "Integrations", "Settings"];

const CS = () => (
  <YuzzahPageShell
    eyebrow="First product"
    title="SVMP-CS"
    subtitle="A governed customer support system for WhatsApp-first businesses. Built for teams that need faster replies without giving up control, escalation, or review."
  >
    <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <article className="rounded-[1.25rem] border border-yuzzah-gold/25 bg-yuzzah-dark-800/75 p-7 md:p-10">
        <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.24em] text-yuzzah-gold">
          Product brief
        </span>
        <h2 className="mt-5 font-yuzzah-serif text-4xl tracking-[-0.035em] text-white md:text-5xl">
          WhatsApp support that knows when to stop.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/58">
          SVMP-CS answers from approved knowledge. When confidence is low or policy says the case needs a person, it
          escalates instead of improvising. The portal keeps the whole workflow inspectable.
        </p>
        <a
          href="https://svmp-cs.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex min-h-[56px] items-center gap-2 rounded-[0.35rem] border border-white/10 bg-white px-8 font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.2em] text-yuzzah-dark transition-colors hover:bg-[#f4f3ee]"
        >
          Visit SVMP-CS
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </article>

      <article className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-7 md:p-10">
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.24em] text-yuzzah-gold">
            Live path
          </span>
          <span className="rounded-full border border-yuzzah-gold/25 px-3 py-1 font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.18em] text-yuzzah-gold">
            Answer or escalate
          </span>
        </div>

        <div className="space-y-4">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="grid gap-4 rounded-[0.85rem] border border-white/10 bg-yuzzah-dark-900/45 p-5 md:grid-cols-[64px_1fr]"
            >
              <span className="font-yuzzah-mono text-sm text-white/28">{item.step}</span>
              <div>
                <h3 className="font-yuzzah-serif text-2xl tracking-[-0.02em] text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>

    <section className="mt-8 rounded-[1.25rem] border border-white/10 bg-yuzzah-dark-800/60 p-7 md:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.24em] text-yuzzah-gold">
            Operating portal
          </span>
          <h2 className="mt-4 font-yuzzah-serif text-4xl italic tracking-[-0.035em] text-white">
            Control after the reply.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            The portal is where operators inspect sessions, update knowledge, change governance, review gaps, and keep
            support behavior aligned with the business.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {portalAreas.map((item) => (
            <div
              key={item}
              className="rounded border border-white/10 bg-white/[0.025] px-4 py-4 font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/58"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mt-8 grid gap-4 md:grid-cols-3">
      {[
        ["Approved knowledge", "Answers stay tied to sources the business controls."],
        ["Escalation logic", "Unclear or risky cases are routed to humans."],
        ["Audit trail", "Teams can inspect what happened after the session."],
      ].map(([title, copy]) => (
        <article key={title} className="rounded-[1rem] border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-yuzzah-serif text-2xl tracking-[-0.02em] text-white">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/55">{copy}</p>
        </article>
      ))}
    </section>
  </YuzzahPageShell>
);

export default CS;
