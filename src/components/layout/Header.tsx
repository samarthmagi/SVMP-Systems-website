import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "SVMP-CS", href: "/cs" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(215,201,173,0.16)] bg-[#1f1d1a] text-[#f7f1e6] backdrop-blur-xl">
      <div className="container flex min-h-[72px] items-center justify-between gap-5 py-3">
        <Link to="/" className="group inline-flex items-center gap-3 transition-colors hover:text-[#d5b56e]">
          <span className="flex h-9 w-9 items-center justify-center border border-[rgba(215,201,173,0.25)] bg-[#f7f1e6] font-heading text-2xl font-semibold text-primary transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40">
            S
          </span>
          <span className="font-body text-lg font-semibold sm:text-xl">SVMP Systems</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              aria-current={location.pathname === item.href ? "page" : undefined}
              className={`nav-mono border-b pb-1 text-[0.66rem] tracking-[0.14em] transition-colors hover:border-primary hover:text-primary ${
                location.pathname === item.href ? "border-primary text-[#d5b56e]" : "border-transparent text-[#f7f1e6]/65"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="paper-button ml-auto min-h-0 border-[#d5b56e]/35 bg-[#f7f1e6] px-3 py-2 text-[0.56rem] text-[#1f1d1a] hover:bg-[#d5b56e] sm:px-4 md:ml-0 md:px-4 md:text-[0.62rem]">
          <span className="md:hidden">Request</span>
          <span className="hidden md:inline">Request demo</span>
        </Link>

        <button
          className="md:hidden transition-colors hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[rgba(215,201,173,0.16)] bg-[#1f1d1a] px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className="nav-mono block text-[0.68rem] tracking-[0.16em] text-[#f7f1e6]/70 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="paper-button mt-4 w-full border-[#d5b56e]/35 bg-[#f7f1e6] text-[#1f1d1a]"
          >
            Request demo
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
