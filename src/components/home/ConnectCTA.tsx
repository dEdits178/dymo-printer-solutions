import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight } from "lucide-react";

const ConnectCTA = () => {
  return (
    <section className="py-20 bg-nav-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-nav-foreground mb-4">
            Connect With Us
          </h2>
          <p className="text-nav-foreground/70 text-lg mb-8">
            Looking for the right labeling solution? Our team of experts is ready to help you find
            the perfect DYMO product for your business needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/30"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConnectCTA;
