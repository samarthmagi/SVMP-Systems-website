import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type YuzzahPageShellProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const YuzzahPageShell = ({ eyebrow, title, subtitle, children }: YuzzahPageShellProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const glowCards = root.querySelectorAll<HTMLElement>(".glow-card");
    const cleanupCards: Array<() => void> = [];

    glowCards.forEach((card) => {
      const move = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
      };
      const leave = () => {
        card.style.setProperty("--mouse-x", "-500px");
        card.style.setProperty("--mouse-y", "-500px");
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      cleanupCards.push(() => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    });

    return () => cleanupCards.forEach((cleanup) => cleanup());
  }, []);

  return (
  <div ref={rootRef} className="yuzzah-dark min-h-screen overflow-x-hidden bg-yuzzah-dark text-[#f4f3ee] antialiased">
    <div className="pointer-events-none fixed inset-0 z-50 bg-yuzzah-noise opacity-[0.025] mix-blend-overlay" />

    <nav className="glass-nav fixed top-0 z-40 w-full transition-all duration-300">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-6 py-[1.05rem]">
        <Link to="/" className="group flex cursor-pointer items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-yuzzah-gold" />
          <span className="text-sm font-semibold tracking-[-0.01em] text-white transition-colors group-hover:text-yuzzah-gold">
            SVMP Systems
          </span>
        </Link>
        <div className="hidden items-center gap-8 font-yuzzah-mono text-[0.67rem] tracking-[0.24em] text-white/42 md:flex">
          <Link to="/cs" className="transition-colors hover:text-white">SYSTEMS</Link>
          <Link to="/research" className="transition-colors hover:text-white">RESEARCH</Link>
          <Link to="/contact" className="transition-colors hover:text-white">CONTACT</Link>
        </div>
        <Link
          to="/contact"
          className="btn-primary rounded bg-white px-7 py-3.5 font-yuzzah-mono text-[0.66rem] tracking-[0.22em] text-yuzzah-dark transition-colors hover:bg-[#f4f3ee]"
        >
          REQUEST DEMO
        </Link>
      </div>
    </nav>

    <main className="relative isolate min-h-screen overflow-hidden pt-28">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 z-[-1]" />
      <div className="pointer-events-none absolute -right-1/4 top-12 h-[720px] w-[720px] rounded-full bg-yuzzah-gold opacity-[0.026] blur-[135px]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[880px] -translate-x-1/2 rounded-full bg-white/[0.016] blur-[130px]" />

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-16 md:pb-20 md:pt-24">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-yuzzah-gold" />
            <span className="font-yuzzah-mono text-xs uppercase tracking-widest text-yuzzah-gold">{eyebrow}</span>
          </div>
          <h1 className="font-yuzzah text-5xl font-medium leading-[1.04] tracking-[-0.055em] text-white md:text-7xl lg:text-[5.8rem]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-7 max-w-2xl text-lg font-medium leading-[1.55] tracking-[-0.02em] text-white/58 md:text-xl">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">{children}</section>
    </main>

    <footer className="border-t border-white/5 bg-yuzzah-dark pb-12 pt-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-end">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-yuzzah-gold" />
            <span className="text-xl font-medium tracking-wide text-white">SVMP Systems</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            Governed AI systems for reliable workflows.
          </p>
        </div>
        <div className="flex gap-6 font-yuzzah-mono text-[0.67rem] uppercase tracking-[0.22em] text-white/38">
          <Link to="/cs" className="transition-colors hover:text-yuzzah-gold">Systems</Link>
          <Link to="/research" className="transition-colors hover:text-yuzzah-gold">Research</Link>
          <Link to="/contact" className="transition-colors hover:text-yuzzah-gold">Contact</Link>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default YuzzahPageShell;
