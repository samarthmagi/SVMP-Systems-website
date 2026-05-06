import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const productSteps = [
  {
    number: "01",
    title: "Connect",
    copy: "WhatsApp conversations enter the governed support flow securely.",
  },
  {
    number: "02",
    title: "Ground",
    copy: "The answer is formed strictly from approved knowledge and brand rules.",
  },
  {
    number: "03",
    title: "Check",
    copy: "Confidence and policy gates decide whether to answer or escalate instantly.",
  },
  {
    number: "04",
    title: "Review",
    copy: "Teams inspect sessions, gaps, metrics, and outcomes in one unified portal.",
  },
];

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

      <section id="product" className="dark relative overflow-hidden bg-yuzzah-dark py-32 text-white">
        <div className="bg-grid-pattern absolute inset-0 z-0 opacity-50" />
        <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-[500px] w-full max-w-4xl -translate-x-1/2 rounded-full bg-yuzzah-gold/5 blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="reveal-element mb-20 flex flex-col items-end justify-between md:flex-row">
            <div>
              <h2 className="mb-4 font-yuzzah-mono text-xs uppercase tracking-widest text-yuzzah-gold">First Product</h2>
              <h3 className="font-yuzzah-serif text-5xl md:text-7xl">SVMP-CS</h3>
            </div>
            <div className="mt-6 max-w-md md:mt-0">
              <p className="text-lg text-white/60">
                A governed AI customer support system for WhatsApp-first businesses. It helps teams reduce repetitive
                support work while keeping approved knowledge, escalation, and oversight close to the workflow.
              </p>
            </div>
          </div>

          <div className="relative mt-24">
            <div className="absolute top-[40px] left-0 z-0 hidden h-px w-full bg-white/10 lg:block">
              <div className="h-full w-full bg-gradient-to-r from-yuzzah-gold/0 via-yuzzah-gold to-yuzzah-gold/0 opacity-70" />
            </div>
            <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {productSteps.map((step, index) => (
                <div key={step.number} className={`glow-card reveal-element ${index ? `delay-${index}00` : ""} group cursor-default p-8`}>
                  <div className="glow-content flex h-full flex-col">
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded border border-white/10 bg-yuzzah-dark-surface font-yuzzah-mono text-sm text-white/50 transition-colors group-hover:border-yuzzah-gold/50 group-hover:text-yuzzah-gold">
                      {step.number}
                    </div>
                    <h4 className="mb-3 font-yuzzah-serif text-2xl text-white transition-colors group-hover:text-yuzzah-gold">
                      {step.title}
                    </h4>
                    <p className="mt-auto text-sm leading-relaxed text-white/50">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dark relative bg-yuzzah-dark py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal-element mb-20 grid items-end gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-yuzzah-mono text-xs uppercase tracking-widest text-white/50">Product Map</h2>
              <h3 className="font-yuzzah-serif text-5xl leading-tight md:text-6xl">
                One system,
                <br />
                <span className="italic text-yuzzah-gold">not another bot.</span>
              </h3>
            </div>
            <p className="max-w-md pb-4 text-lg text-white/70">
              The SVMP-CS workflow is designed around control points: what comes in, what knowledge is allowed, when
              confidence is sufficient, and how teams review what happened.
            </p>
          </div>

          <div className="grid auto-rows-[minmax(250px,auto)] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="glow-card reveal-element group row-span-2 flex flex-col p-8 md:col-span-2 lg:col-span-2">
              <div className="glow-content flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-yuzzah-mono text-xs text-white/40">01</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-yuzzah-dark-surface/50">
                    <svg className="h-4 w-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-4 font-yuzzah-serif text-3xl transition-colors group-hover:text-yuzzah-gold">
                    WhatsApp intake
                  </h4>
                  <p className="max-w-sm text-white/60">
                    Customer questions enter a controlled support workflow instead of a loose chat interface.
                  </p>
                </div>
                <div className="mt-8 border-t border-white/5 pt-6">
                  <div className="flex max-w-[80%] flex-col gap-3 opacity-70 transition-opacity group-hover:opacity-100">
                    <div className="self-start rounded-2xl rounded-tl-none border border-white/5 bg-white/5 p-3 text-xs">
                      I have an issue with my recent order #4920.
                    </div>
                    <div className="relative self-end overflow-hidden rounded-2xl rounded-tr-none border border-yuzzah-gold/20 bg-yuzzah-gold/10 p-3 text-xs text-white/80 shadow-sm">
                      <div className="absolute left-0 top-0 h-full w-1 bg-yuzzah-gold" />
                      Hello! Let me check the status of order #4920 for you according to our policy...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glow-card reveal-element delay-100 group p-8">
              <div className="glow-content flex h-full flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-yuzzah-mono text-xs text-white/40">02</span>
                  <svg className="h-5 w-5 text-white/40 transition-colors group-hover:text-yuzzah-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="mb-3 font-yuzzah-serif text-xl">Approved knowledge</h4>
                <p className="text-sm leading-relaxed text-white/60">
                  Responses are grounded in sources the business owns, updates, and reviews.
                </p>
              </div>
            </div>

            <div className="glow-card reveal-element delay-200 group p-8">
              <div className="glow-content flex h-full flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-yuzzah-mono text-xs text-white/40">03</span>
                  <svg className="h-5 w-5 text-white/40 transition-colors group-hover:text-yuzzah-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="mb-3 font-yuzzah-serif text-xl">Governance logic</h4>
                <p className="text-sm leading-relaxed text-white/60">
                  Confidence and policy checks decide when the system can answer and when to escalate.
                </p>
              </div>
            </div>

            <div className="glow-card reveal-element delay-300 group relative flex flex-col overflow-hidden p-8 md:col-span-2">
              <div className="glow-content z-10 flex h-full flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-yuzzah-mono text-xs text-white/40">04</span>
                  <span className="rounded bg-white/5 px-2 py-1 font-yuzzah-mono text-[10px] tracking-widest text-white/60">DASHBOARD</span>
                </div>
                <h4 className="mb-3 font-yuzzah-serif text-2xl">Private portal</h4>
                <p className="relative z-10 max-w-sm text-sm text-white/60">
                  Teams review sessions, metrics, integrations, rules, and settings from one operating surface.
                </p>
                <div className="absolute -right-10 -bottom-10 flex h-48 w-64 rotate-[-5deg] transform flex-col rounded-xl border border-white/10 bg-white p-4 opacity-50 shadow-xl transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:opacity-100">
                  <div className="mb-4 flex gap-2 border-b border-white/5 pb-2">
                    <div className="h-2 w-16 rounded bg-black/10" />
                    <div className="h-2 w-8 rounded bg-black/10" />
                  </div>
                  <div className="flex flex-1 items-end gap-2 px-2">
                    <div className="h-1/3 w-1/4 rounded-t bg-yuzzah-gold/20" />
                    <div className="h-2/3 w-1/4 rounded-t bg-yuzzah-gold/40" />
                    <div className="h-full w-1/4 rounded-t bg-yuzzah-gold/60" />
                    <div className="h-4/5 w-1/4 rounded-t bg-yuzzah-gold/80" />
                  </div>
                </div>
              </div>
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
              <h3 className="mb-4 font-yuzzah-serif text-2xl">Support teams need speed without loose answers.</h3>
              <p className="leading-relaxed text-white/60">
                Customers expect fast replies, but businesses still need approved knowledge, brand consistency, and a
                clear handoff when the system is not confident. Hallucinations are not an option.
              </p>
            </div>
            <div className="reveal-element delay-100 relative border-l border-yuzzah-gold pl-8">
              <div className="absolute -left-[5px] top-0 h-[9px] w-[9px] rounded-full bg-yuzzah-gold" />
              <span className="mb-6 block font-yuzzah-mono text-xs text-yuzzah-gold">SOLUTION</span>
              <h3 className="mb-4 font-yuzzah-serif text-2xl">Generic chatbots make the wrong tradeoff.</h3>
              <p className="leading-relaxed text-white/60">
                They can automate the easy cases, but often hide the decision path. SVMP-CS keeps the workflow
                reviewable through sessions, governance logs, metrics, and settings.
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
            From loose automation to <br />
            <span className="italic text-yuzzah-gold">governed support.</span>
          </h3>
          <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
            <div className="reveal-element group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-12">
              <div className="absolute top-0 right-0 p-4 opacity-20 transition-opacity group-hover:opacity-50">
                <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h4 className="mb-8 font-yuzzah-mono text-xs uppercase tracking-widest text-white/40">Without SVMP-CS</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded border border-red-500/20 bg-white/5 p-4 text-sm text-white/70">
                  <span>Unapproved answers</span><span className="font-yuzzah-mono text-xs text-red-400">ERR</span>
                </div>
                <div className="flex items-center justify-between rounded border border-white/5 bg-white/5 p-4 text-sm text-white/50 blur-[1px] transition-all hover:blur-none">
                  <span>Hidden decision paths</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </div>
                <div className="flex items-center justify-between rounded border border-yellow-500/20 bg-white/5 p-4 text-sm text-white/70">
                  <span>Low-confidence guesses</span><span className="font-yuzzah-mono text-xs text-yellow-400">WARN</span>
                </div>
              </div>
            </div>

            <div className="reveal-element absolute left-1/2 z-20 hidden -translate-x-1/2 justify-center md:flex">
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
              <h4 className="relative z-10 mb-8 font-yuzzah-mono text-xs uppercase tracking-widest text-yuzzah-gold">With SVMP-CS</h4>
              <div className="relative z-10 space-y-4">
                {[
                  ["Approved knowledge", "100%", "bg-green-400"],
                  ["Escalation rules", "ACTIVE", "bg-yuzzah-gold"],
                  ["Reviewable sessions", "LOGGED", "bg-blue-400"],
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
                <li><Link to="/products" className="transition-colors hover:text-yuzzah-gold">Products</Link></li>
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
