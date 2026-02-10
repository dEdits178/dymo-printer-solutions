import { Link } from "react-router-dom";
import { Zap, Printer, CheckCircle2, ArrowRight } from "lucide-react";
import spotlightImg from "@/assets/spotlight-product.jpg";

const features = [
  "Prints up to 71 labels per minute",
  "Direct thermal — no ink or toner needed",
  "Automatic label recognition technology",
  "USB & LAN connectivity",
];

const SpotlightProduct = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            Spotlight Product
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            LabelWriter™ 550 Turbo
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <img
                src={spotlightImg}
                alt="LabelWriter 550 Turbo"
                className="relative w-full max-w-sm rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Printer className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">DYMO LabelWriter Series</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              High-Speed Label Printing for Your Business
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The LabelWriter 550 Turbo is the fastest desktop label printer from DYMO, designed for
              high-volume environments. Print shipping labels, barcodes, name badges, and more with
              exceptional speed and clarity.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
            >
              View Product <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightProduct;
