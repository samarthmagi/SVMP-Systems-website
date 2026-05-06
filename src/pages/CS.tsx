import { ArrowRight } from "lucide-react";
import YuzzahPageShell from "@/components/YuzzahPageShell";
import { SupportFlowVisual } from "@/components/YuzzahInteractives";

const capabilityCards = [
  {
    label: "01",
    title: "Approved knowledge",
    copy: "Answers are formed from controlled sources the business owns, updates, and reviews.",
  },
  {
    label: "02",
    title: "Escalation logic",
    copy: "When confidence is low or the request falls outside policy, the system hands off instead of guessing.",
  },
  {
    label: "03",
    title: "Private portal",
    copy: "Teams review sessions, outcomes, governance decisions, metrics, integrations, and settings in one place.",
  },
];

const workflowSteps = ["WhatsApp intake", "Approved knowledge", "Confidence check", "Answer or escalate"];

const CS = () => (
  <YuzzahPageShell
    eyebrow="First product"
    title="SVMP-CS"
    subtitle="Governed AI customer support for WhatsApp-first businesses. Built to answer from approved knowledge, escalate unclear cases to humans, and keep support workflows visible to the team."
  >
    <section className="mb-6">
      <SupportFlowVisual />
    </section>

    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <article className="glow-card p-8 md:p-10">
        <div className="glow-content flex h-full flex-col">
          <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
            <span className="font-yuzzah-mono text-xs uppercase tracking-[0.24em] text-yuzzah-gold">Product system</span>
            <span className="rounded border border-yuzzah-gold/25 bg-yuzzah-gold/[0.06] px-3 py-1.5 font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.22em] text-yuzzah-gold">
              WhatsApp-first
            </span>
          </div>

          <h2 className="mb-5 font-yuzzah-serif text-4xl italic tracking-[-0.035em] text-white md:text-5xl">
            Support automation with governance around it.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-white/58">
            SVMP-CS is not a loose chatbot. It is operational support software for teams that need faster replies while
            preserving control, visibility, brand consistency, and human fallback.
          </p>

          <div className="mt-10 grid gap-3">
            {workflowSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center justify-between rounded border border-white/10 bg-white/[0.035] p-4 text-sm text-white/70"
              >
                <span className="flex items-center gap-3">
                  <span className="font-yuzzah-mono text-[0.65rem] text-white/30">0{index + 1}</span>
                  {step}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-yuzzah-gold" />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://svmp-cs.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex min-h-[58px] items-center gap-2 rounded-[0.35rem] border border-white/10 bg-white px-8 font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.2em] text-yuzzah-dark transition-colors hover:bg-[#f4f3ee]"
            >
              Visit SVMP-CS
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>

      <div className="grid gap-6">
        {capabilityCards.map((card) => (
          <article key={card.label} className="glow-card p-7 md:p-8">
            <div className="glow-content">
              <div className="mb-7 flex items-center justify-between">
                <span className="font-yuzzah-mono text-xs text-white/34">{card.label}</span>
                <span className="h-2 w-2 rounded-full bg-yuzzah-gold" />
              </div>
              <h3 className="mb-3 font-yuzzah-serif text-3xl text-white">{card.title}</h3>
              <p className="max-w-xl leading-relaxed text-white/55">{card.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </div>

    <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-8 md:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="mb-5 block font-yuzzah-mono text-xs uppercase tracking-[0.24em] text-yuzzah-gold">
            Operating surface
          </span>
          <h2 className="mb-4 font-yuzzah-serif text-4xl italic tracking-[-0.035em] text-white">
            Control for the work after the answer.
          </h2>
          <p className="text-white/55">
            The portal gives teams a place to inspect what happened: session history, governance outcomes, knowledge
            coverage, integrations, metrics, and workspace settings.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {["Knowledge control", "Brand voice", "Session review", "Metrics", "Integrations", "Settings"].map((item) => (
            <div
              key={item}
              className="rounded border border-white/10 bg-yuzzah-dark-800/70 px-4 py-4 font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/58"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  </YuzzahPageShell>
);

export default CS;
