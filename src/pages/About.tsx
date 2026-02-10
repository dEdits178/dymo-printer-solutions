import Layout from "@/components/Layout";
import { Shield, Clock, Users, Target } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">About AI Global</h1>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over 25 years, AI Global has been a trusted distributor of DYMO printers and labeling
              solutions. We serve businesses across industries — from small offices to large enterprises —
              providing reliable, high-quality products that streamline operations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our mission is to deliver exceptional labeling technology paired with outstanding customer
              service. We partner closely with DYMO to ensure our clients always have access to the latest
              innovations in label printing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "25+ Years", desc: "Industry experience" },
              { icon: Shield, title: "Authorized", desc: "DYMO distributor" },
              { icon: Users, title: "1000+", desc: "Satisfied clients" },
              { icon: Target, title: "Global", desc: "Distribution network" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-strong rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
