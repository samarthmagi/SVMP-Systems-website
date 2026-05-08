import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const architecturePrinciples = [
  {
    number: "01",
    title: "DETERMINISTIC PLANNING",
    body: "The LLM defines intent. A compiled execution plan runs it. No improvised steps.",
  },
  {
    number: "02",
    title: "GOVERNED MEMORY",
    body: "Agents write to private notes first. Promotion to shared memory requires a validation pipeline.",
  },
  {
    number: "03",
    title: "HUMAN-IN-THE-LOOP",
    body: "High-stakes decisions route to human review before execution. Full audit trail on every step.",
  },
  {
    number: "04",
    title: "AUDIT LOG FIRST",
    body: "Every reasoning step, every decision, every escalation: traceable and exportable.",
  },
];

const validationSignals = [
  "Plan registry",
  "Policy check",
  "Memory review",
  "Human queue",
  "Audit export",
  "Failure notes",
];

const researchCards = [
  {
    name: "PlanCompiler",
    status: "Benchmarking",
    tone: "amber",
    body: "Deterministic planning architecture. LLM acts as planner over a fixed node registry. Plans validate before execution.",
  },
  {
    name: "Governed Memory Layer",
    status: "In development",
    tone: "amber",
    body: "Memory writes move through private notes, validation, promotion, and audit before becoming shared context.",
  },
  {
    name: "Diagnostic Engine",
    status: "Research",
    tone: "muted",
    body: "Failure analysis for governed LLM systems: missing context, weak confidence, unsafe actions, and route quality.",
  },
];

const whatNot = [
  {
    label: "NOT A CHATBOT",
    body: "We do not sell a chat widget. We build execution infrastructure.",
  },
  {
    label: "NOT A WRAPPER",
    body: "We do not wrap GPT in a UI. We build system primitives around model behavior.",
  },
  {
    label: "NOT PILOT-WARE",
    body: "We do not demo well and disappear. We run with ops teams from day one.",
  },
];

const founders = [
  {
    name: "Samarth",
    role: "PRODUCT / GTM / CUSTOMER",
    bio: "Leads product direction and customer conversations. The work is turning support problems into small, testable system boundaries.",
  },
  {
    name: "Pranav",
    role: "SYSTEMS / ARCHITECTURE",
    bio: "Builds the execution layer, memory rules, and validation paths behind the product. The bias is toward boring systems that can be inspected.",
  },
];

const StackDiagram = () => (
  <div className="svmp-hero-diagram" aria-label="SVMP governed execution loop diagram">
    <div className="svmp-diagram-top">system sketch 01 / governed execution loop</div>
    <svg viewBox="0 0 560 360" role="img" aria-label="Request to planner to memory to audit loop">
      <defs>
        <marker id="svmp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(192,224,222,0.16)" />
        </marker>
      </defs>
      <g className="svmp-svg-lines">
        <line x1="124" y1="92" x2="214" y2="92" markerEnd="url(#svmp-arrow)" />
        <line x1="334" y1="92" x2="430" y2="92" markerEnd="url(#svmp-arrow)" />
        <line x1="274" y1="122" x2="274" y2="174" markerEnd="url(#svmp-arrow)" />
        <line x1="274" y1="226" x2="274" y2="272" markerEnd="url(#svmp-arrow)" />
      </g>
      <g className="svmp-svg-node">
        <rect x="38" y="66" width="86" height="52" rx="2" />
        <text x="81" y="97" textAnchor="middle">Request</text>
        <rect x="214" y="58" width="120" height="68" rx="2" />
        <text x="274" y="86" textAnchor="middle">Plan</text>
        <text x="274" y="104" textAnchor="middle">Compiler</text>
        <rect x="430" y="66" width="86" height="52" rx="2" />
        <text x="473" y="97" textAnchor="middle">Memory</text>
        <rect x="186" y="176" width="176" height="50" rx="2" />
        <text x="274" y="206" textAnchor="middle">Policy + Review</text>
        <rect x="172" y="274" width="204" height="52" rx="2" />
        <text x="274" y="296" textAnchor="middle">Output +</text>
        <text x="274" y="314" textAnchor="middle">Audit Log</text>
      </g>
    </svg>
    <div className="svmp-diagram-status">
      <span className="svmp-live-dot" />
      <span>prototype notes / shipping through SVMP-CS</span>
    </div>
  </div>
);

const ArchitectureSvg = () => (
  <svg className="svmp-architecture-svg" viewBox="0 0 560 380" role="img" aria-label="SVMP technical architecture diagram">
    <defs>
      <marker id="arch-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(192,224,222,0.16)" />
      </marker>
    </defs>
    <g className="svmp-arch-labels">
      <text x="34" y="42">INPUT LAYER</text>
      <text x="224" y="42">PROCESSING</text>
      <text x="426" y="42">OUTPUT</text>
    </g>
    {[
      ["WhatsApp API", 34, 84],
      ["KB / Policy", 34, 154],
      ["Escalation DB", 34, 224],
      ["PlanCompiler", 222, 84],
      ["GML", 222, 154],
      ["Review Router", 222, 224],
      ["Response", 424, 84],
      ["Audit Log", 424, 154],
      ["Human Queue", 424, 224],
    ].map(([label, x, y]) => (
      <g className="svmp-arch-box" key={String(label)}>
        <rect x={Number(x)} y={Number(y)} width="118" height="42" rx="2" />
        <text x={Number(x) + 59} y={Number(y) + 27} textAnchor="middle">{label}</text>
      </g>
    ))}
    <g className="svmp-svg-lines">
      <line x1="152" y1="105" x2="214" y2="105" markerEnd="url(#arch-arrow)" />
      <line x1="340" y1="105" x2="416" y2="105" markerEnd="url(#arch-arrow)" />
      <line x1="152" y1="175" x2="214" y2="175" markerEnd="url(#arch-arrow)" />
      <line x1="340" y1="175" x2="416" y2="175" markerEnd="url(#arch-arrow)" />
      <line x1="152" y1="245" x2="214" y2="245" markerEnd="url(#arch-arrow)" />
      <line x1="340" y1="245" x2="416" y2="245" markerEnd="url(#arch-arrow)" />
    </g>
  </svg>
);

const ProductMock = () => (
  <div className="svmp-product-mock" aria-label="SVMP-CS WhatsApp support workflow mock">
    <div className="svmp-chat-line customer">Customer: "where is my order"</div>
    <div className="svmp-chat-line muted">[Checking order status...]</div>
    <div className="svmp-chat-bubble">
      OK: Order #4821 shipped.
      <br />
      Expected: Nov 12
      <br />
      Track: [link]
    </div>
    <div className="svmp-audit-badge">[AUDIT] source checked / policy passed</div>
  </div>
);

const YuzzahExactLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "SVMP Systems | Governed LLM Systems";
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.title = previousTitle;
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="svmp-infra">
      <nav className={`svmp-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="svmp-container svmp-nav-inner">
          <Link to="/" className="svmp-logo" onClick={closeMenu}>
            <span>SVMP</span>
            <span>SYSTEMS</span>
          </Link>
          <button className="svmp-menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen}>
            Menu
          </button>
          <div className={`svmp-nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#architecture" onClick={closeMenu}>Research</a>
            <a href="#team" onClick={closeMenu}>Company</a>
          </div>
          <Link to="/contact" className="svmp-talk-link">Talk to us</Link>
        </div>
      </nav>

      <main>
        <section className="svmp-hero">
          <div className="svmp-container svmp-hero-grid">
            <div className="svmp-hero-copy">
              <p className="svmp-eyebrow svmp-eyebrow-live">BANGALORE / GOVERNED LLM SYSTEMS</p>
              <h1>LLM products need more than prompts.</h1>
              <p className="svmp-hero-subhead">
                A two-person systems lab building the pieces around language models: compiled plans, governed memory,
                human review, and audit trails that survive real operations.
              </p>
              <div className="svmp-actions">
                <Link to="/cs" className="svmp-btn-primary">Study SVMP-CS</Link>
                <a href="#architecture" className="svmp-btn-ghost">Read architecture notes</a>
              </div>
              <p className="svmp-system-line">SVMP-CS / PLANCOMPILER / GOVERNED MEMORY LAYER</p>
            </div>
            <StackDiagram />
          </div>
        </section>

        <section id="products" className="svmp-section">
          <div className="svmp-container">
            <div className="svmp-section-heading">
              <p className="svmp-eyebrow">PRODUCTS</p>
              <h2>One product in market. Three primitives behind it.</h2>
            </div>

            <article className="svmp-product-card">
              <div className="svmp-product-copy">
                <p className="svmp-eyebrow">SHIPPING / B2B / WHATSAPP-FIRST</p>
                <h3>SVMP-CS</h3>
                <p>
                  A governed support workflow for D2C brands on WhatsApp. It answers from approved knowledge,
                  escalates unclear cases, and leaves a reviewable trail for the team.
                </p>
                <div className="svmp-product-stats">
                  <span>approved knowledge <em>required</em></span>
                  <span>human handoff <em>built in</em></span>
                  <span>audit trail <em>kept</em></span>
                </div>
                <Link to="/cs" className="svmp-btn-ghost">See how it works</Link>
              </div>
              <ProductMock />
            </article>

            <div className="svmp-research-grid">
              {researchCards.map((card) => (
                <article key={card.name} className="svmp-research-card">
                  <p className="svmp-card-label">RESEARCH / IN DEVELOPMENT</p>
                  <h3>{card.name}</h3>
                  <p>{card.body}</p>
                  <div className={`svmp-status ${card.tone}`}>
                    <span />
                    {card.status}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="architecture" className="svmp-section svmp-architecture-section">
          <div className="svmp-container">
            <div className="svmp-section-heading">
              <p className="svmp-eyebrow">TECHNICAL ARCHITECTURE</p>
              <h2>The work is mostly boundaries.</h2>
            </div>
            <div className="svmp-architecture-grid">
              <div className="svmp-principles">
                {architecturePrinciples.map((item) => (
                  <article key={item.number} className="svmp-principle">
                    <span>{item.number}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="svmp-architecture-panel">
                <ArchitectureSvg />
              </div>
            </div>
          </div>
        </section>

        <section className="svmp-section svmp-not-section">
          <div className="svmp-container">
            <div className="svmp-rule" />
            <div className="svmp-not-grid">
              {whatNot.map((item) => (
                <article key={item.label}>
                  <h3>{item.label}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="svmp-proof">
          <div className="svmp-container">
            <p className="svmp-proof-line">EARLY-STAGE / BANGALORE / PILOT COHORT OPEN / INDIA D2C BRANDS</p>
            <div className="svmp-signal-row">
              {validationSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="svmp-section">
          <div className="svmp-container">
            <div className="svmp-team-grid">
              <div>
                <p className="svmp-eyebrow">THE TEAM</p>
                <h2>Two people. One focus.</h2>
                <p>
                  Samarth leads product and customer conversations. Pranav builds the architecture and systems.
                  We are based in Bangalore and work directly with teams before turning a workflow into software.
                </p>
              </div>
              <div className="svmp-founder-grid">
                {founders.map((founder) => (
                  <article key={founder.name} className="svmp-founder-card">
                    <h3>{founder.name}</h3>
                    <p className="svmp-card-label">{founder.role}</p>
                    <p>{founder.bio}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="svmp-cta-section">
          <div className="svmp-container svmp-cta-grid">
            <div>
              <h2>Talk to us before you decide.</h2>
              <p>
                We do a 30-minute call with every pilot brand. No sales deck. We ask about your support operations,
                you ask about the system. We both figure out if the workflow is worth building around.
              </p>
              <Link to="/contact" className="svmp-btn-primary">Book a call</Link>
              <p className="svmp-system-line">PILOT CONVERSATIONS OPEN FOR INDIA D2C BRANDS</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="svmp-footer">
        <div className="svmp-container svmp-footer-grid">
          <div>
            <h2>SVMP SYSTEMS</h2>
            <p>Governed LLM systems. Bangalore.</p>
            <small>© 2026</small>
          </div>
          <div>
            <p>Products: SVMP-CS · PlanCompiler · GML</p>
            <p>Contact: hello@svmpsystems.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YuzzahExactLanding;
