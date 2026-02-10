import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getProductBySlug } from "@/data/products";
import { Tag, ArrowLeft, Mail } from "lucide-react";

const INTEREST_EMAIL = "info@aiglobal.com";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <Layout>
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
            <Link to="/products" className="text-primary font-semibold hover:underline">
              ← Back to Products
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const mailtoLink = `mailto:${INTEREST_EMAIL}?subject=${encodeURIComponent(`Interested in ${product.name}`)}&body=${encodeURIComponent(`Hi AI Global,\n\nI am interested in the ${product.name}.\n\nPlease share more details.\n\nThank you.`)}`;

  return (
    <Layout>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <Link
            to={`/products/${product.categorySlug}`}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to {product.category}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Product Image Placeholder */}
            <div className="glass-strong rounded-2xl p-8 flex items-center justify-center aspect-square">
              <div className="text-center">
                <Tag className="w-20 h-20 text-muted-foreground/20 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">Product Image</p>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">{product.category}</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">{product.name}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{product.description}</p>
              <a
                href={mailtoLink}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20 w-fit"
              >
                <Mail className="w-4 h-4" /> I'm Interested
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
