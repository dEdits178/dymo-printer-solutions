import { Link } from "react-router-dom";
import { Shield, Clock, Award, ArrowRight } from "lucide-react";

const stats = [
  { icon: Clock, value: "17+", label: "Years of Experience" },
  { icon: Shield, value: "Trusted", label: "DYMO Regional Operator" },
  { icon: Award, value: "1000+", label: "Clients Served" },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted Regional Operator for DYMO
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            With over 17+ years of experience, Aivora India has been the go-to partner for businesses
            seeking reliable labeling solutions across the globe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="glass-strong rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-display text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Learn About Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
