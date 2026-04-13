import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  const authLink = user
    ? { label: "Dashboard", href: "/dashboard" }
    : { label: "Login", href: "/login" };

  return (
    <header className="sticky top-0 z-50 bg-[rgba(245,239,228,0.95)] backdrop-blur-md border-b border-[var(--line)]">
      <div className="container flex min-h-[76px] items-center justify-between gap-5 py-4">
        <Link to="/" className="font-body text-2xl font-semibold text-foreground transition-colors hover:text-primary">
          SVMP <span className="text-primary">Systems</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              aria-current={location.pathname === item.href ? "page" : undefined}
              className={`nav-mono border-b pb-1 text-[0.68rem] tracking-[0.16em] transition-colors hover:border-primary hover:text-primary ${
                location.pathname === item.href ? "border-primary text-primary" : "border-transparent text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={authLink.href}
            className="paper-button paper-button-primary min-h-0 px-4 py-2"
          >
            {authLink.label}
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground transition-colors hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--line)] bg-[rgba(245,239,228,0.98)] px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className="nav-mono block text-[0.68rem] tracking-[0.16em] text-muted-foreground hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={authLink.href}
            onClick={() => setMobileOpen(false)}
            className="nav-mono block text-[0.68rem] tracking-[0.16em] text-primary"
          >
            {authLink.label}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
