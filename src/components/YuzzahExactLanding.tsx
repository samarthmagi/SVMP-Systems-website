import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ProofLine = () => (
  <div className="yuzzah-marquee flex items-center gap-8 text-white/20 font-yuzzah-serif text-3xl md:text-5xl uppercase tracking-wider">
    {Array.from({ length: 2 }).map((_, index) => (
      <div key={index} className="flex items-center gap-8">
        <span>First Support Channel</span>
        <span className="text-yuzzah-gold">•</span>
        <span>Approved Knowledge-Led Answers</span>
        <span className="text-yuzzah-gold">•</span>
        <span>Human Escalation When Needed</span>
        <span className="text-yuzzah-gold">•</span>
      </div>
    ))}
  </div>
);

const YuzzahExactLanding = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const previousTitle = document.title;
    document.title = "SVMP Systems | Reliable AI. Controlled Outcomes.";

    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    const revealElements = root.querySelectorAll(".reveal-element");
    revealElements.forEach((element) => observer.observe(element));

    const glowCards = root.querySelectorAll<HTMLElement>(".glow-card");
    const handleMouseMove = (card: HTMLElement, event: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    };
    const cleanupCards: Array<() => void> = [];

    glowCards.forEach((card) => {
      const move = (event: MouseEvent) => handleMouseMove(card, event);
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

    const score = root.querySelector<HTMLElement>("#confidence-score");
    const interval = window.setInterval(() => {
      if (!score) return;
      const current = Number.parseFloat(score.innerText);
      const next = Math.min(Math.max(current + (Math.random() - 0.5) * 0.5, 97), 99.9);
      score.innerText = `${next.toFixed(1)}%`;
    }, 3000);

    return () => {
      observer.disconnect();
      cleanupCards.forEach((cleanup) => cleanup());
      window.clearInterval(interval);
      document.title = previousTitle;
    };
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

      <section className="relative isolate flex min-h-screen items-center overflow-hidden pb-20 pt-32 lg:pt-36">
        <div className="bg-grid-pattern pointer-events-none absolute inset-0 z-[-1]" />
        <div className="pointer-events-none absolute top-1/4 -right-1/4 h-[820px] w-[820px] rounded-full bg-yuzzah-gold opacity-[0.028] blur-[135px]" />
        <div className="pointer-events-none absolute left-1/2 top-[18%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.018] blur-[130px]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-20">
          <div className="z-10 lg:col-span-6">
            <div className="reveal-element mb-9 flex items-center gap-3">
              <span className="h-px w-8 bg-yuzzah-gold" />
              <span className="font-yuzzah-mono text-xs uppercase tracking-widest text-yuzzah-gold">
                Governed AI for real operations
              </span>
            </div>
            <h1 className="reveal-element delay-100 mb-8 font-yuzzah text-[4.05rem] font-medium leading-[1.06] tracking-[-0.055em] text-white md:text-7xl lg:text-[5.65rem] xl:text-[6.2rem]">
              Reliable <br />
              AI. <br />
              <span className="group relative inline-block font-yuzzah-serif italic tracking-[-0.04em] text-yuzzah-gold">
                Controlled
                <span className="absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 bg-yuzzah-gold transition-transform duration-500 group-hover:scale-x-100" />
              </span>
              <br />
              <span className="font-yuzzah-serif italic tracking-[-0.04em] text-white/80">outcomes.</span>
            </h1>
            <p className="reveal-element delay-200 mb-10 max-w-[31rem] text-lg font-medium leading-[1.45] tracking-[-0.02em] text-white/58 md:text-xl">
              SVMP Systems builds governed AI products for teams that need automation to stay structured, observable,
              and accountable in real workflows.
            </p>
            <div className="reveal-element delay-300 flex flex-wrap gap-4">
              <Link
                to="/cs"
                className="group flex min-h-[58px] items-center gap-2 rounded-[0.35rem] border border-white/10 bg-yuzzah-dark-800 px-9 text-sm font-semibold tracking-[-0.01em] text-white shadow-[0_16px_50px_rgba(0,0,0,0.35)] transition-colors hover:bg-yuzzah-dark-900"
              >
                EXPLORE OUR SYSTEMS
                <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="flex min-h-[58px] items-center rounded-[0.35rem] border border-white/17 bg-transparent px-9 text-sm font-semibold tracking-[-0.01em] text-white transition-colors hover:border-white/28 hover:bg-white/[0.055]"
              >
                REQUEST DEMO
              </Link>
            </div>
          </div>

          <div className="reveal-element delay-200 relative h-[580px] w-full lg:col-span-6 lg:ml-8 xl:ml-10">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 animate-yuzzah-spin-slow rounded-full border border-white/5" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 animate-yuzzah-spin-reverse rounded-full border border-white/5" />
            <div className="system-node absolute inset-x-0 top-1/2 z-10 mx-auto flex h-[580px] max-w-[590px] -translate-y-1/2 transform flex-col overflow-hidden rounded-2xl bg-yuzzah-dark p-1 shadow-2xl transition-transform duration-700 hover:scale-[1.018]">
              <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-[#202020]/80 px-4">
                <div className="h-3 w-3 rounded-full border border-red-500/50 bg-red-500/20" />
                <div className="h-3 w-3 rounded-full border border-yellow-500/50 bg-yellow-500/20" />
                <div className="h-3 w-3 animate-pulse rounded-full border border-green-500 bg-green-500/50" />
                <div className="ml-4 font-yuzzah-mono text-[10px] font-bold tracking-widest text-white/34">
                  SVMP SYSTEMS // CONTROL PLANE
                </div>
              </div>
              <div className="hero-terminal-body relative flex flex-1 flex-col justify-center p-7">
                <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-20">
                  <div className="animate-yuzzah-scanline absolute h-1 w-full bg-yuzzah-gold/50 shadow-[0_0_10px_rgba(164,139,93,0.8)]" />
                </div>
                <div className="relative z-10 space-y-4 font-yuzzah-mono text-sm font-bold">
                  <div className="flex items-start gap-3 opacity-50">
                    <span className="mt-1 text-xs text-white/30">01</span>
                    <div className="text-white/70">&gt; Mapping operational workflow...</div>
                  </div>
                  <div className="flex items-start gap-3 opacity-70">
                    <span className="mt-1 text-xs text-white/30">02</span>
                    <div className="text-white/70">
                      &gt; Applying structure and governance... <span className="animate-pulse text-yuzzah-gold">✓</span>
                    </div>
                  </div>
                  <div className="relative mt-8 overflow-hidden rounded border border-yuzzah-gold/35 bg-yuzzah-gold/[0.055] p-4">
                    <div className="absolute left-0 top-0 h-full w-1 bg-yuzzah-gold" />
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.22em] text-yuzzah-gold">Control Readiness</span>
                      <span className="text-xs font-bold text-green-400" id="confidence-score">98.4%</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[98%] rounded-full bg-yuzzah-gold shadow-[0_0_10px_rgba(164,139,93,0.5)]" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-4">
                    <span className="mt-1 text-xs text-white/30">03</span>
                    <div className="text-white/90">
                      <span className="text-green-400">Status:</span> Workflow governed. Ready for production.
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 flex gap-2">
                  <div className="h-2 w-2 rounded bg-white/20" />
                  <div className="h-2 w-2 rounded bg-white/20" />
                  <div className="h-2 w-2 rounded bg-yuzzah-gold shadow-[0_0_8px_rgba(164,139,93,0.8)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark relative overflow-hidden bg-yuzzah-dark py-32 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(164,139,93,0.08),transparent_42%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal-element mb-20 grid items-end gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-yuzzah-mono text-xs uppercase tracking-widest text-white/50">System Architecture</h2>
              <h3 className="font-yuzzah-serif text-5xl leading-tight md:text-6xl">
                The system around
                <br />
                <span className="italic text-yuzzah-gold">the model.</span>
              </h3>
            </div>
            <p className="max-w-lg pb-4 text-lg text-white/70">
              SVMP Systems builds the control infrastructure that turns AI from isolated model calls into structured,
              governed, observable workflows.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
            <div className="glow-card reveal-element p-6 md:p-8">
              <div className="glow-content">
                <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                  <span className="font-yuzzah-mono text-xs uppercase tracking-[0.24em] text-yuzzah-gold">Control stack</span>
                  <span className="rounded border border-white/10 px-3 py-1.5 font-yuzzah-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/42">
                    SVMP Systems
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-yuzzah-dark-800/80 p-6">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  <div className="architecture-scan pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-transparent via-yuzzah-gold/10 to-transparent" />
                  <div className="relative z-10 grid gap-4">
                    {[
                      ["01", "Structure", "Define what enters the system before it reaches a model."],
                      ["02", "Govern", "Apply rules, sequencing, permissions, and state at the workflow level."],
                      ["03", "Validate", "Check outputs against context, thresholds, and operating constraints."],
                      ["04", "Observe", "Log decisions, failures, escalations, and system behavior for review."],
                    ].map(([number, title, copy]) => (
                      <div key={title} className="architecture-layer group grid gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-4 md:grid-cols-[80px_1fr]">
                        <span className="font-yuzzah-mono text-xs text-white/34">{number}</span>
                        <div>
                          <h4 className="font-yuzzah-serif text-2xl text-white transition-colors group-hover:text-yuzzah-gold">{title}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-white/50">{copy}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                ["Model calls are not systems", "A prompt can produce an answer. A system needs controls around behavior, memory, validation, and recovery."],
                ["Human judgment stays visible", "SVMP Systems keeps escalation, oversight, and review paths explicit instead of hiding them behind automation."],
                ["Reliability is designed", "The work is not to make AI look magical. The work is to make it governable enough for real operations."],
              ].map(([title, copy], index) => (
                <article key={title} className="glow-card reveal-element p-7 md:p-8">
                  <div className="glow-content">
                    <div className="mb-7 flex items-center justify-between">
                      <span className="font-yuzzah-mono text-xs text-white/34">0{index + 1}</span>
                      <span className="h-2 w-2 rounded-full bg-yuzzah-gold" />
                    </div>
                    <h3 className="mb-3 font-yuzzah-serif text-3xl text-white">{title}</h3>
                    <p className="leading-relaxed text-white/55">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dark relative overflow-hidden border-t border-white/5 bg-yuzzah-dark py-32">
        <div className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none whitespace-nowrap font-yuzzah-serif text-[20vw] italic text-white/[0.02]">
          Observe
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h2 className="reveal-element mb-24 max-w-4xl font-yuzzah-serif text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
            Automation should feel <br />
            controlled, observable, <br />
            and <span className="italic text-yuzzah-gold">useful.</span>
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
            <div className="reveal-element relative border-l border-white/10 pl-8">
              <div className="absolute -left-[5px] top-0 h-[9px] w-[9px] rounded-full border-2 border-white/20 bg-yuzzah-dark" />
              <span className="mb-6 block font-yuzzah-mono text-xs text-white/40">PROBLEM</span>
              <h3 className="mb-4 font-yuzzah-serif text-2xl">Teams need automation without losing control.</h3>
              <p className="leading-relaxed text-white/60">
                AI can accelerate work, but production teams still need structure, traceability, validation, and clear
                failure handling. Prompts alone are not enough.
              </p>
            </div>
            <div className="reveal-element delay-100 relative border-l border-yuzzah-gold pl-8">
              <div className="absolute -left-[5px] top-0 h-[9px] w-[9px] rounded-full bg-yuzzah-gold" />
              <span className="mb-6 block font-yuzzah-mono text-xs text-yuzzah-gold">SOLUTION</span>
              <h3 className="mb-4 font-yuzzah-serif text-2xl">SVMP Systems builds around the model.</h3>
              <p className="leading-relaxed text-white/60">
                We focus on the system layer around AI: structured inputs, governed sessions, validation gates,
                auditability, and human escalation when certainty is not enough.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark relative overflow-hidden border-t border-white/5 bg-yuzzah-dark py-32 text-white">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.15] mix-blend-luminosity">
          <img
            src="https://images.unsplash.com/photo-1680992044138-ce4864c2b962?w=1600&h=1080&q=80&auto=format&fit=crop"
            alt="Abstract server room with glowing lights representing data flow"
            className="h-full w-full object-cover blur-sm"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-yuzzah-dark via-yuzzah-dark/90 to-yuzzah-dark" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h2 className="reveal-element mb-6 font-yuzzah-mono text-xs uppercase tracking-widest text-yuzzah-gold">Why Teams Switch</h2>
          <h3 className="reveal-element delay-100 mb-20 max-w-2xl font-yuzzah-serif text-4xl md:text-6xl">
            From loose model calls to <br />
            <span className="italic text-yuzzah-gold">governed systems.</span>
          </h3>
          <div className="relative grid items-center gap-8 md:grid-cols-2 lg:gap-16">
            <div className="reveal-element group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-12">
              <div className="absolute top-0 right-0 p-4 opacity-20 transition-opacity group-hover:opacity-50">
                <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h4 className="mb-8 font-yuzzah-mono text-xs uppercase tracking-widest text-white/40">Without SVMP Systems</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded border border-red-500/20 bg-white/5 p-4 text-sm text-white/70">
                  <span>Unstructured model calls</span><span className="font-yuzzah-mono text-xs text-red-400">ERR</span>
                </div>
                <div className="flex items-center justify-between rounded border border-white/5 bg-white/5 p-4 text-sm text-white/50 blur-[1px] transition-all hover:blur-none">
                  <span>Hidden decision paths</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </div>
                <div className="flex items-center justify-between rounded border border-yellow-500/20 bg-white/5 p-4 text-sm text-white/70">
                  <span>Weak failure handling</span><span className="font-yuzzah-mono text-xs text-yellow-400">WARN</span>
                </div>
              </div>
            </div>

            <div className="reveal-element pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 justify-center md:flex">
              <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-yuzzah-gold text-yuzzah-dark shadow-[0_0_20px_rgba(164,139,93,0.4)]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            <div className="reveal-element delay-200 group relative overflow-hidden rounded-2xl border border-yuzzah-gold/20 bg-yuzzah-dark-surface p-8 shadow-[0_0_40px_rgba(164,139,93,0.05)] lg:p-12">
              <div className="absolute top-0 right-0 p-4 opacity-50">
                <svg className="h-8 w-8 text-yuzzah-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(164,139,93,0.05),transparent_55%)] opacity-0 transition-opacity group-hover:opacity-100" />
              <h4 className="relative z-10 mb-8 font-yuzzah-mono text-xs uppercase tracking-widest text-yuzzah-gold">With SVMP Systems</h4>
              <div className="relative z-10 space-y-4">
                {[
                  ["Structured inputs", "READY", "bg-green-400"],
                  ["Governance rules", "ACTIVE", "bg-yuzzah-gold"],
                  ["Audit trail", "LOGGED", "bg-blue-400"],
                ].map(([label, status, dot]) => (
                  <div key={label} className="flex cursor-default items-center justify-between rounded border border-white/10 bg-yuzzah-dark p-4 text-sm text-white transition-colors hover:border-yuzzah-gold/50">
                    <span className="flex items-center gap-3"><span className={`h-1.5 w-1.5 rounded-full ${dot}`} /> {label}</span>
                    <span className="font-yuzzah-mono text-xs text-white/40">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="dark flex overflow-hidden whitespace-nowrap border-b border-white/5 bg-yuzzah-dark py-12">
        <ProofLine />
      </div>

      <footer className="dark border-t border-white/5 bg-yuzzah-dark pb-12 pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-24">
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-yuzzah-gold" />
                <span className="text-xl font-medium tracking-wide">SVMP Systems</span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/60">
                Governed AI systems for reliable workflows.
              </p>
            </div>
            <div>
              <h5 className="mb-6 font-yuzzah-mono text-xs uppercase tracking-widest text-white/40">Product</h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/cs" className="transition-colors hover:text-yuzzah-gold">SVMP-CS</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="mb-6 font-yuzzah-mono text-xs uppercase tracking-widest text-white/40">Company</h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/research" className="transition-colors hover:text-yuzzah-gold">Research</Link></li>
                <li><Link to="/contact" className="transition-colors hover:text-yuzzah-gold">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 font-yuzzah-mono text-xs uppercase tracking-widest text-white/40 md:flex-row">
            <p>© 2024 SVMP Systems.</p>
            <p className="mt-4 md:mt-0">Governed AI for reliable workflows</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YuzzahExactLanding;
