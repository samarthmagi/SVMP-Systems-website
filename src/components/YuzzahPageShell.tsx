import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type YuzzahPageShellProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const YuzzahPageShell = ({ eyebrow, title, subtitle, children }: YuzzahPageShellProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="svmp-infra svmp-page">
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
            <Link to="/cs" onClick={closeMenu}>Products</Link>
            <Link to="/research" onClick={closeMenu}>Research</Link>
            <Link to="/contact" onClick={closeMenu}>Company</Link>
          </div>
          <Link to="/contact" className="svmp-talk-link">Talk to us</Link>
        </div>
      </nav>

      <main>
        <section className="svmp-page-hero">
          <div className="svmp-container">
            <p className="svmp-eyebrow svmp-eyebrow-live">{eyebrow}</p>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </section>

        <section className="svmp-container svmp-page-content">{children}</section>
      </main>

      <footer className="svmp-footer">
        <div className="svmp-container svmp-footer-grid">
          <div>
            <h2>SVMP SYSTEMS</h2>
            <p>Governed LLM infrastructure. Bangalore.</p>
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

export default YuzzahPageShell;
