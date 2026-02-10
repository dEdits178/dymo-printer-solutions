import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tag, Monitor, Stamp, Factory, Smartphone, ArrowRight } from "lucide-react";
import { products, getProductsByCategory } from "@/data/products";

const categories = [
  {
    name: "Label Makers",
    icon: Tag,
    description: "Professional handheld labeling for office and home",
    to: "/products/label-makers",
    categorySlug: "label-makers",
  },
  {
    name: "PC & Mac Label Printers",
    icon: Monitor,
    description: "Desktop-connected precision printing solutions",
    to: "/products/pc-mac-printers",
    categorySlug: "pc-mac-printers",
  },
  {
    name: "Embossers",
    icon: Stamp,
    description: "Classic embossing tools for durable labels",
    to: "/products/embossers",
    categorySlug: "embossers",
  },
  {
    name: "Industrial Labelers",
    icon: Factory,
    description: "Heavy-duty labeling for warehouses and industry",
    to: "/products/industrial-labelers",
    categorySlug: "industrial-labelers",
  },
  {
    name: "Home & Mobile Label Makers",
    icon: Smartphone,
    description: "Portable Bluetooth-enabled labeling on the go",
    to: "/products/home-mobile",
    categorySlug: "home-mobile",
  },
];

const ProductCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const active = categories[activeIndex];
  const Icon = active.icon;
  const categoryProducts = getProductsByCategory(active.categorySlug);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">
            Our Range
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Product Categories
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Category tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible w-full lg:w-64 shrink-0">
            {categories.map((cat, i) => {
              const CatIcon = cat.icon;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium whitespace-nowrap transition-all ${
                    i === activeIndex
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "glass text-foreground hover:bg-card"
                  }`}
                >
                  <CatIcon className="w-4 h-4 shrink-0" />
                  <span className="hidden lg:inline">{cat.name}</span>
                  <span className="lg:hidden">{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active category box */}
          <div className="flex-1 w-full">
            <div className="glass-strong rounded-2xl p-8 md:p-10 animate-scale-in" key={activeIndex}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{active.name}</h3>
                  <p className="text-muted-foreground text-sm">{active.description}</p>
                </div>
              </div>

              <div className={`grid grid-cols-1 ${categoryProducts.length >= 3 ? 'sm:grid-cols-2 lg:grid-cols-4' : categoryProducts.length === 2 ? 'sm:grid-cols-2' : ''} gap-4 mb-8`}>
                {categoryProducts.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/product/${product.slug}`}
                    className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-full h-24 bg-background rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <Tag className="w-8 h-8 text-muted-foreground/30 hidden" />
                    </div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{product.name}</p>
                  </Link>
                ))}
              </div>

              <Link
                to={active.to}
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Discover More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
