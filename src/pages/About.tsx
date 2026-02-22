import Layout from "@/components/Layout";
import { Shield, Clock, Users, Target, Eye, Rocket, Award, CheckCircle, Building, Wrench, FileText, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">About Aivora India</h1>
            <p className="text-muted-foreground mt-3 text-lg">Label Printing &amp; Enterprise Solutions</p>
            <p className="text-primary font-semibold mt-1">Authorized Regional Operator for DYMO Label Printers</p>
          </div>

          {/* Who We Are */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Aivora India is a trusted regional operator for DYMO Label Printers and Enterprise Labeling Solutions, serving businesses with reliable, accurate, and efficient identification and printing systems. We specialize in providing end-to-end labeling solutions for offices, logistics, manufacturing, retail, and industrial environments.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 17+ years of combined industry experience, we understand the importance of precision, speed, and dependability in today's business operations.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            <div className="glass-strong rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Commitment</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  Maintain 100% accuracy and deliver every solution on time and with excellence.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  Support organizations with dependable labeling and back-office technology solutions so they can focus on their core business goals.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  Build long-term client relationships based on trust, confidence, and mutual success.
                </li>
              </ul>
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  Provide high-quality DYMO products, expert guidance, and responsive support that enable our clients to operate smarter and faster.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  Deliver the right solution, at the right time, and at the right cost.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience & Expertise */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Experience &amp; Expertise</h2>
              <p className="text-muted-foreground">At Aivora India, we build our team with a focus on:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, title: "Technical Excellence" },
                { icon: Target, title: "Continuous Improvement" },
                { icon: Users, title: "Client Satisfaction" },
                { icon: Shield, title: "Zero-Compromise on Quality" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="glass-strong rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-display font-bold text-foreground">{item.title}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-muted-foreground text-center mt-6">
              Every team member is dedicated to your success. We take no shortcuts in delivering our solutions and ensure that accuracy and reliability remain at the core of everything we do.
            </p>
          </div>

          {/* What We Do */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">What We Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Globe, text: "Regional Operations for DYMO Label Printers & Accessories" },
                { icon: Building, text: "Office & Industrial Labeling Systems" },
                { icon: Users, text: "Product Consultation & Support" },
                { icon: FileText, text: "Corporate Printing Solutions" },
                { icon: Wrench, text: "After-Sales Service & Guidance" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="glass-strong rounded-2xl p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose AI Global */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Why Choose Aivora India?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                "Authorized DYMO Regional Operator",
                "17+ Years of Experience",
                "Genuine Products & Warranty Support",
                "Professional Consultation",
                "Reliable & Timely Delivery",
              ].map((item) => (
                <div key={item} className="glass-strong rounded-2xl p-5 text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-medium text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Plans */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-nav-gradient rounded-2xl p-8 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-nav-foreground mb-4">Our Vision</h2>
              <p className="text-nav-foreground/80 mb-6">
                At Aivora India, we believe in continuous growth and innovation. While our current focus is on Label Printers and Corporate Labeling Solutions, we are planning a strategic expansion into Property Management Services as part of our long-term vision.
              </p>
              <p className="text-nav-foreground/60 text-sm italic mb-8">
                Built on the same principles: Accuracy, Reliability, Professionalism, and Client Trust.
              </p>

              <h3 className="font-display text-lg font-bold text-nav-foreground mb-4">Upcoming Property Management Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Residential Plot Management", desc: "End-to-end support for managing and maintaining residential properties." },
                  { title: "Property Maintenance Services", desc: "Regular inspections, upkeep, and coordination of repairs." },
                  { title: "Property-Related Services", desc: "Documentation, compliance, and operational assistance." },
                  { title: "NRI Property Management", desc: "Dedicated services for Non-Resident Indians to manage their properties in India with complete transparency." },
                ].map((item) => (
                  <div key={item.title} className="bg-nav-foreground/10 rounded-xl p-5">
                    <h4 className="font-display font-bold text-nav-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-nav-foreground/70 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-nav-foreground/20 pt-6">
                <p className="text-nav-foreground/90 font-medium">
                  🤝 Every solution we deliver — today and in the future — will meet the highest standards of quality and professionalism. At Aivora India, your success is our priority.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
