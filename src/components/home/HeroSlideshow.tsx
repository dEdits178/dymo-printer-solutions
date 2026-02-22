import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import slide1 from "@/assets/Slide1.PNG?url";
import slide2 from "@/assets/Slide2.PNG?url";
import slide3 from "@/assets/Slide3.PNG?url";

const slides = [
  {
    image: slide3,
    title: "Regional Operator for DYMO Printers",
    subtitle: "Label Printing & Enterprise Solutions",
    cta: { label: "Explore Products", to: "/products" },
  },
  {
    image: slide2,
    title: "Enterprise-Grade Regional Operations",
    subtitle: "Reliable service for all your labeling needs",
    titleClass: "text-3xl md:text-4xl lg:text-5xl",
    imageClass: "object-cover origin-center scale-[0.98]",
    cta: { label: "Learn More", to: "/about" },
  },
  {
    image: slide1,
    title: "Precision Labeling Technology",
    subtitle: "From desktop to industrial — we've got you covered",
    cta: { label: "View Products", to: "/products" },
  },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full ${slide.imageClass ?? "object-cover"}`}
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl animate-slide-up">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">
            Aivora India
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-nav-foreground leading-tight mb-4">
            <span className={slides[current].titleClass ?? ""}>{slides[current].title}</span>
          </h1>
          <p className="text-nav-foreground/80 text-lg md:text-xl mb-8">
            {slides[current].subtitle}
          </p>
          <Link
            to={slides[current].cta.to}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/30"
          >
            {slides[current].cta.label}
          </Link>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-primary w-8" : "bg-nav-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
