import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "917829487141";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", number: "", email: "", requirement: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello AI Global!%0A%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.number)}%0AEmail: ${encodeURIComponent(formData.email)}%0ARequirement: ${encodeURIComponent(formData.requirement)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setFormData({ name: "", number: "", email: "", requirement: "" });
  };

  return (
    <Layout>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: "Name", key: "name" as const, type: "text", placeholder: "Your name" },
                  { label: "Phone Number", key: "number" as const, type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { label: "Email", key: "email" as const, type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Requirement</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Describe your requirement..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                >
                  <Send className="w-4 h-4" /> Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Info + WhatsApp */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-6 hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</p>
                  <p className="text-muted-foreground text-sm">+91 78294 87141</p>
                </div>
              </a>

              {[
                { icon: Mail, label: "Email", value: "info@aiglobal.com" },
                { icon: Phone, label: "Phone", value: "+91 78294 87141" },
                { icon: MapPin, label: "Address", value: "Regional Operations Center" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="glass-strong rounded-2xl p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
