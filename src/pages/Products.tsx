import { Link } from "react-router-dom";
import YuzzahPageShell from "@/components/YuzzahPageShell";

const Products = () => (
  <YuzzahPageShell
    eyebrow="Systems"
    title="One product shipping. More primitives behind it."
    subtitle="The public product surface starts with SVMP-CS. The research surface continues through planning, memory, diagnostics, and review infrastructure."
  >
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Link
        to="/cs"
        className="rounded-[1.25rem] border border-yuzzah-gold/25 bg-yuzzah-dark-800/75 p-7 transition-colors hover:border-yuzzah-gold/50 md:p-10"
      >
        <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.24em] text-yuzzah-gold">
          Shipping
        </span>
        <h2 className="mt-5 font-yuzzah-serif text-5xl tracking-[-0.045em] text-white">SVMP-CS</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/58">
          Governed customer support for WhatsApp-first businesses: approved knowledge, confidence checks,
          escalation, session review, and a private operating portal.
        </p>
        <span className="mt-8 inline-flex font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.2em] text-yuzzah-gold">
          Open system page
        </span>
      </Link>

      <section className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-7 md:p-10">
        <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/32">
          Lab
        </span>
        <h2 className="mt-5 font-yuzzah-serif text-4xl italic tracking-[-0.035em] text-white">
          Systems work stays tied to real workflows.
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-white/55">
          We are not trying to look like a giant product suite early. Every new surface has to come from a constraint
          we can name and test.
        </p>
      </section>
    </div>
  </YuzzahPageShell>
);

export default Products;
