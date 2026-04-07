import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-heading text-lg font-semibold text-foreground mb-3">SVMP Systems</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Control-layer software for LLM workflows.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Product</p>
          <div className="space-y-2">
            <Link to="/cs" className="block text-sm text-foreground hover:text-primary transition-colors">SVMP-CS</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Company</p>
          <div className="space-y-2">
            <Link to="/about" className="block text-sm text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/blog" className="block text-sm text-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/research" className="block text-sm text-foreground hover:text-primary transition-colors">Research</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Connect</p>
          <div className="space-y-2">
            <Link to="/contact" className="block text-sm text-foreground hover:text-primary transition-colors">Contact</Link>
            <Link to="/login" className="block text-sm text-foreground hover:text-primary transition-colors">Login</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} SVMP Systems. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
