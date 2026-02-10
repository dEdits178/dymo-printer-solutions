import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Tag, Monitor, Stamp, Factory, Smartphone, ArrowRight } from "lucide-react";
import { products, categories, getProductsByCategory } from "@/data/products";

const iconMap: Record<string, React.ElementType> = {
  "label-makers": Tag,
  "pc-mac-printers": Monitor,
  "embossers": Stamp,
  "industrial-labelers": Factory,
  "home-mobile": Smartphone,
};

const Products = () => {
  const { category } = useParams<{ category?: string }>();

  // If a category is selected, show products in that category
  if (category) {
    const catProducts = getProductsByCategory(category);
    const catInfo = categories.find((c) => c.slug === category);
    const Icon = iconMap[category] || Tag;

    return (
      <Layout>
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-8 hover:gap-3 transition-all">
              ← All Categories
            </Link>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">{catInfo?.name || category}</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {catProducts.map((product) => (
                <Link
                  key={product.slug}
                  to={`/product/${product.slug}`}
                  className="glass-strong rounded-2xl p-6 group hover:border-primary/30 transition-all"
                >
                  <div className="w-full h-32 bg-background rounded-xl flex items-center justify-center mb-4">
                    <Tag className="w-10 h-10 text-muted-foreground/20" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{product.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Show all categories
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
              const Icon = iconMap[cat.slug] || Tag;
              const count = getProductsByCategory(cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  className="glass-strong rounded-2xl p-8 group hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{cat.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{count} product{count !== 1 ? "s" : ""}</p>
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
