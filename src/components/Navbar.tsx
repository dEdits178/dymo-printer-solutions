import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Label Makers", to: "/products/label-makers" },
      { label: "PC & Mac Label Printers", to: "/products/pc-mac-printers" },
      { label: "Embossers", to: "/products/embossers" },
      { label: "Industrial Labelers", to: "/products/industrial-labelers" },
      { label: "Home & Mobile Label Makers", to: "/products/home-mobile" },
    ],
  },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-gradient">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">AI</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-nav-foreground text-lg">AI Global</span>
            <span className="text-[10px] text-nav-foreground/70 tracking-wider uppercase">Corporate Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  to={link.to}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? "bg-primary/20 text-primary-foreground"
                      : "text-nav-foreground/80 hover:text-nav-foreground hover:bg-nav-foreground/10"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                {productsOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="glass-strong rounded-xl p-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-4 py-2.5 text-sm rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-primary/20 text-primary-foreground"
                    : "text-nav-foreground/80 hover:text-nav-foreground hover:bg-nav-foreground/10"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          {/* Mobile toggle */}
          <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-nav-foreground p-2"
        >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-nav-gradient border-t border-nav-foreground/10 px-4 pb-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-nav-foreground/80 text-sm font-medium"
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                </button>
                {productsOpen && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 text-sm text-nav-foreground/70 hover:text-nav-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-nav-foreground/80 hover:text-nav-foreground"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
