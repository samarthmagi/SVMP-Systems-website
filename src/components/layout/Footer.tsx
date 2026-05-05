import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="calm-band px-0 pb-10 pt-10">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-body text-xl font-semibold text-foreground mb-3">
            SVMP <span className="text-primary">Systems</span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Governed AI systems for reliable workflows.
          </p>
        </div>
        <div>
          <p className="mono-label mb-4">Product</p>
          <div className="space-y-2">
            <Link to="/products" className="block text-sm text-foreground hover:text-primary transition-colors">Products</Link>
            <Link to="/cs" className="block text-sm text-foreground hover:text-primary transition-colors">SVMP-CS</Link>
          </div>
        </div>
        <div>
          <p className="mono-label mb-4">Company</p>
          <div className="space-y-2">
            <Link to="/research" className="block text-sm text-foreground hover:text-primary transition-colors">Research</Link>
          </div>
        </div>
        <div>
          <p className="mono-label mb-4">Connect</p>
          <div className="space-y-2">
            <Link to="/contact" className="block text-sm text-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="nav-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground">&copy; {new Date().getFullYear()} SVMP Systems.</p>
        <p className="nav-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground">Governed AI for real operations</p>
      </div>
    </div>
  </footer>
);

export default Footer;
