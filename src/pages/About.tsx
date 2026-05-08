import YuzzahPageShell from "@/components/YuzzahPageShell";

const About = () => (
  <YuzzahPageShell
    eyebrow="Company"
    title="Small team. Narrow thesis."
    subtitle="We build governed AI systems for workflows where a loose answer is not good enough."
  >
    <article className="rounded-[1.25rem] border border-white/10 bg-yuzzah-dark-800/70 p-7 md:p-10">
      <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.24em] text-yuzzah-gold">
        Operating thesis
      </span>
      <div className="mt-8 grid gap-8 text-lg leading-relaxed text-white/58 lg:grid-cols-2">
        <p>
          Useful AI products need more than automation. They need controlled knowledge, fallback paths, visible
          decisions, and audit trails a human operator can inspect.
        </p>
        <p>
          SVMP Systems is building from that premise, starting with support operations and extending into the
          infrastructure needed for governed LLM execution.
        </p>
      </div>
    </article>
  </YuzzahPageShell>
);

export default About;
