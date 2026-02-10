import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nav-gradient text-nav-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">AI</span>
              </div>
              <span className="font-display font-bold text-lg">AI Global</span>
            </div>
            <p className="text-nav-foreground/70 text-sm leading-relaxed">
              Trusted distributors of DYMO printers and corporate labeling solutions for over 25 years.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-nav-foreground/70 hover:text-nav-foreground transition-colors">Home</Link>
              <Link to="/products" className="text-sm text-nav-foreground/70 hover:text-nav-foreground transition-colors">Products</Link>
              <Link to="/about" className="text-sm text-nav-foreground/70 hover:text-nav-foreground transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm text-nav-foreground/70 hover:text-nav-foreground transition-colors">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Categories</h4>
            <div className="flex flex-col gap-2">
              <Link to="/products/label-makers" className="text-sm text-nav-foreground/70 hover:text-nav-foreground transition-colors">Label Makers</Link>
              <Link to="/products/pc-mac-printers" className="text-sm text-nav-foreground/70 hover:text-nav-foreground transition-colors">PC & Mac Printers</Link>
              <Link to="/products/embossers" className="text-sm text-nav-foreground/70 hover:text-nav-foreground transition-colors">Embossers</Link>
              <Link to="/products/industrial-labelers" className="text-sm text-nav-foreground/70 hover:text-nav-foreground transition-colors">Industrial Labelers</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-nav-foreground/70">
                <Mail className="w-4 h-4" />
                <span>info@aiglobal.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-nav-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+1 (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-nav-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>Global Distribution Center</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-nav-foreground/10 mt-10 pt-6 text-center text-sm text-nav-foreground/50">
          © {new Date().getFullYear()} AI Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
