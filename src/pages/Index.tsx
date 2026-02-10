import Layout from "@/components/Layout";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import ProductCategories from "@/components/home/ProductCategories";
import SpotlightProduct from "@/components/home/SpotlightProduct";
import TrustSection from "@/components/home/TrustSection";
import ConnectCTA from "@/components/home/ConnectCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSlideshow />
      <ProductCategories />
      <SpotlightProduct />
      <TrustSection />
      <ConnectCTA />
    </Layout>
  );
};

export default Index;
