import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Tag, Monitor, Stamp, Factory, Smartphone, ArrowRight } from "lucide-react";

const categories = [
  { name: "Label Makers", icon: Tag, to: "/products/label-makers", description: "Professional handheld labeling for office and home" },
  { name: "PC & Mac Label Printers", icon: Monitor, to: "/products/pc-mac-printers", description: "Desktop-connected precision printing solutions" },
  { name: "Embossers", icon: Stamp, to: "/products/embossers", description: "Classic embossing tools for durable labels" },
  { name: "Industrial Labelers", icon: Factory, to: "/products/industrial-labelers", description: "Heavy-duty labeling for warehouses and industry" },
  { name: "Home & Mobile Label Makers", icon: Smartphone, to: "/products/home-mobile", description: "Portable Bluetooth-enabled labeling on the go" },
];

const Products = () => {
  return (
    <Layout>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Browse</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Our Products</h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Explore our full range of DYMO label printers and corporate labeling solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  to={cat.to}
                  className="glass-strong rounded-2xl p-8 group hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{cat.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    View Products <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
