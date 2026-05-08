import { Link } from "react-router-dom";

type YuzzahPageShellProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const YuzzahPageShell = ({ eyebrow, title, subtitle, children }: YuzzahPageShellProps) => (
  <div className="yuzzah-dark min-h-screen overflow-x-hidden bg-yuzzah-dark text-[#f4f3ee] antialiased">
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-yuzzah-dark/88 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-[15px] font-semibold tracking-[-0.03em] text-white">SVMP</span>
          <span className="font-yuzzah-mono text-[10px] uppercase tracking-[0.22em] text-white/34">Systems</span>
        </Link>
        <div className="hidden items-center gap-8 font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/42 md:flex">
          <Link to="/cs" className="hover:text-yuzzah-gold">Systems</Link>
          <Link to="/research" className="hover:text-yuzzah-gold">Research</Link>
          <Link to="/contact" className="hover:text-yuzzah-gold">Contact</Link>
        </div>
        <Link to="/contact" className="justify-self-end font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.2em] text-yuzzah-gold hover:text-white">
          Talk to us
        </Link>
      </div>
    </nav>

    <main className="relative isolate min-h-screen pt-16">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 z-[-1] opacity-70" />
      <section className="mx-auto max-w-7xl border-b border-white/[0.08] px-6 pb-16 pt-24 md:pt-32">
        <p className="mb-6 font-yuzzah-mono text-xs uppercase tracking-[0.22em] text-yuzzah-gold">{eyebrow}</p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-white md:text-7xl lg:text-[5.8rem]">
          {title}
        </h1>
        {subtitle && <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/58">{subtitle}</p>}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">{children}</section>
    </main>

    <footer className="border-t border-white/[0.08] bg-[#1a1a1a] py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row">
        <div>
          <p className="m-0 text-lg font-semibold text-white">SVMP Systems</p>
          <p className="mt-2 text-sm text-white/44">Governed AI systems from Bangalore.</p>
        </div>
        <div className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/34">
          SVMP-CS / Research / Contact
        </div>
      </div>
    </footer>
  </div>
);

export default YuzzahPageShell;
