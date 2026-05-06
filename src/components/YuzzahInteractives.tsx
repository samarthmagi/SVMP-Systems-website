const supportNodes = ["Intake", "Knowledge", "Rules", "Escalate"];
const researchNodes = ["Input", "Schema", "State", "Validation", "Audit"];
const intakeSignals = [
  { label: "Workflow fit", value: "Ready" },
  { label: "Knowledge source", value: "Mapped" },
  { label: "Escalation path", value: "Defined" },
];

export const SupportFlowVisual = () => (
  <div className="support-flow-visual relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-yuzzah-dark-800/80 p-6">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(164,139,93,0.12),transparent_42%)]" />
    <div className="relative z-10 mb-8 flex items-center justify-between">
      <span className="font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.22em] text-yuzzah-gold">SVMP-CS flow</span>
      <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.18em] text-green-300">
        Governed
      </span>
    </div>
    <div className="relative z-10 grid gap-4 md:grid-cols-4">
      {supportNodes.map((node, index) => (
        <div key={node} className="support-node group relative rounded-xl border border-white/10 bg-white/[0.035] p-4">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-yuzzah-mono text-[0.65rem] text-white/34">0{index + 1}</span>
            <span className="support-dot h-2 w-2 rounded-full bg-yuzzah-gold" />
          </div>
          <h3 className="font-yuzzah-serif text-2xl text-white transition-colors group-hover:text-yuzzah-gold">{node}</h3>
          <p className="mt-3 text-xs leading-relaxed text-white/46">
            {index === 0 && "A WhatsApp request enters a controlled support path."}
            {index === 1 && "Sources and brand rules constrain the answer."}
            {index === 2 && "Confidence and policy checks run before response."}
            {index === 3 && "Low-certainty cases move to human review."}
          </p>
        </div>
      ))}
    </div>
    <div className="support-flow-line pointer-events-none absolute left-12 right-12 top-[52%] hidden h-px bg-white/10 md:block">
      <span className="support-flow-pulse absolute top-1/2 h-1.5 w-16 -translate-y-1/2 rounded-full bg-yuzzah-gold shadow-[0_0_24px_rgba(164,139,93,0.65)]" />
    </div>
  </div>
);

export const ResearchOrbitVisual = () => (
  <div className="research-orbit relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-yuzzah-dark-800/75 p-8">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(164,139,93,0.12),transparent_45%)]" />
    <div className="relative z-10 flex items-center justify-between">
      <span className="font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.22em] text-yuzzah-gold">Research map</span>
      <span className="font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/34">Live questions</span>
    </div>
    <div className="absolute left-1/2 top-[55%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
    <div className="absolute left-1/2 top-[55%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
    <div className="research-core absolute left-1/2 top-[55%] z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-yuzzah-gold/30 bg-yuzzah-gold/[0.08] text-center font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.16em] text-yuzzah-gold">
      System<br />control
    </div>
    {researchNodes.map((node, index) => (
      <div key={node} className={`research-node research-node-${index}`}>
        <span>{node}</span>
      </div>
    ))}
  </div>
);

export const IntakeSignalVisual = () => (
  <div className="intake-signal relative overflow-hidden rounded-2xl border border-white/10 bg-yuzzah-dark-800/80 p-6">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(164,139,93,0.13),transparent_40%)]" />
    <div className="relative z-10 mb-6 flex items-center justify-between">
      <span className="font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.22em] text-yuzzah-gold">Demo intake</span>
      <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
    </div>
    <div className="relative z-10 space-y-3">
      {intakeSignals.map((signal, index) => (
        <div key={signal.label} className="intake-row flex items-center justify-between rounded border border-white/10 bg-white/[0.035] p-4" style={{ animationDelay: `${index * 180}ms` }}>
          <span className="text-sm text-white/58">{signal.label}</span>
          <span className="font-yuzzah-mono text-[0.65rem] uppercase tracking-[0.18em] text-yuzzah-gold">{signal.value}</span>
        </div>
      ))}
    </div>
    <div className="relative z-10 mt-6 rounded border border-yuzzah-gold/20 bg-yuzzah-gold/[0.045] p-4">
      <div className="mb-2 flex items-center justify-between font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.18em]">
        <span className="text-yuzzah-gold">Fit signal</span>
        <span className="text-green-300">Strong</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-white/10">
        <div className="intake-meter h-full rounded-full bg-yuzzah-gold" />
      </div>
    </div>
  </div>
);
