export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  // Label Makers
  {
    slug: "labelmanager-executive-640cb",
    name: "LabelManager™ Executive 640CB",
    category: "Label Makers",
    categorySlug: "label-makers",
    description: "The LabelManager™ Executive 640CB is a professional-grade handheld label maker designed for high-volume office environments. Featuring a large backlit display, PC/Mac connectivity, and a wide range of font and formatting options, it delivers precise, professional labels every time. Ideal for asset tracking, file management, and organizational labeling.",
    image: "/products/labelmanager_640.PNG"
  },
  {
    slug: "labelmanager-420p",
    name: "LabelManager™ 420P",
    category: "Label Makers",
    categorySlug: "label-makers",
    description: "The LabelManager™ 420P is a portable, high-performance label maker with a large graphical display. It connects to your PC or Mac for added flexibility, supports a wide variety of D1 label tapes, and offers professional-quality printing for offices, warehouses, and retail environments.",
    image: "/products/labelmanager_420.PNG"
  },
  {
    slug: "labelmanager-160",
    name: "LabelManager™ 160",
    category: "Label Makers",
    categorySlug: "label-makers",
    description: "The LabelManager™ 160 is a compact and easy-to-use label maker perfect for home and small office use. It features one-touch smart keys for quick formatting, prints in multiple font sizes and styles, and works with DYMO D1 label tapes for clear, durable labels.",
    image: "/products/labelmanager_160.PNG"
  },
  {
    slug: "labelmanager-280",
    name: "LabelManager™ 280",
    category: "Label Makers",
    categorySlug: "label-makers",
    description: "The LabelManager™ 280 offers rechargeable convenience with a large graphical display, making it perfect for on-the-go labeling. With PC/Mac connectivity and built-in memory for storing frequently used labels, it's ideal for busy professionals who need reliable labeling at their fingertips.",
    image: "/products/labelmanager_280.PNG"
  },
  // PC & Mac Label Printers
  {
    slug: "labelwriter-550",
    name: "LabelWriter™ 550",
    category: "PC & Mac Label Printers",
    categorySlug: "pc-mac-printers",
    description: "The LabelWriter™ 550 is a direct thermal label printer that eliminates the need for expensive ink or toner cartridges. It prints up to 62 labels per minute and connects via USB. Ideal for address labels, shipping labels, file folder labels, and barcodes in office and small business environments.",
    image: "/products/labelWritter_550(1).PNG"
  },
  {
    slug: "labelwriter-550-turbo",
    name: "LabelWriter™ 550 Turbo",
    category: "PC & Mac Label Printers",
    categorySlug: "pc-mac-printers",
    description: "The LabelWriter™ 550 Turbo delivers high-speed direct thermal printing with both USB and LAN connectivity, enabling network-wide label printing. Print up to 71 labels per minute with no ink or toner required. Perfect for busy offices, shipping departments, and multi-user environments that demand fast, reliable label output.",
    image: "/products/labelWritter_550.PNG"
  },
  // Embossers
  {
    slug: "omega-embosser",
    name: "Omega Embosser",
    category: "Embossers",
    categorySlug: "embossers",
    description: "The DYMO Omega Embosser is a classic, easy-to-use embossing label maker that creates raised-letter labels on colored self-adhesive tape. It requires no batteries or power source, making it perfect for quick, portable labeling tasks around the home, office, or workshop.",
    image: "/products/Omega Em.PNG"
  },
  {
    slug: "rhino-m1011",
    name: "Rhino™ M1011",
    category: "Embossers",
    categorySlug: "embossers",
    description: "The Rhino™ M1011 is a rugged, industrial-grade embosser designed for harsh environments. It creates durable, embossed labels on aluminum or stainless steel tape that withstand extreme temperatures, chemicals, and UV exposure — perfect for industrial, electrical, and plumbing applications.",
    image: "/products/Rhino M1011.PNG"
  },
  // Industrial Labelers
  {
    slug: "rhino-6000-plus",
    name: "Rhino™ 6000+",
    category: "Industrial Labelers",
    categorySlug: "industrial-labelers",
    description: "The Rhino™ 6000+ is a professional-grade industrial label maker designed for electricians, data-com professionals, and facility managers. It features a large color display, PC connectivity, and supports a wide variety of industrial label materials including heat-shrink tubes, vinyl, and nylon. Built for the toughest job sites.",
    image: "/products/Rhino 6000+.PNG"
  },
  // Home & Mobile Label Makers
  {
    slug: "letratag-100h",
    name: "LetraTag® 100H",
    category: "Home & Mobile Label Makers",
    categorySlug: "home-mobile",
    description: "The LetraTag® 100H is a compact, lightweight handheld label maker designed for home organization. It features an easy-to-use keyboard, a 13-character LCD display, and prints on a variety of colorful LetraTag label tapes including paper, plastic, and metallic options.",
    image: "/products/LetraTag_100H.PNG"
  },
  {
    slug: "letratag-200b",
    name: "LetraTag® 200B",
    category: "Home & Mobile Label Makers",
    categorySlug: "home-mobile",
    description: "The LetraTag® 200B is a Bluetooth-enabled label maker that lets you design and print labels directly from your smartphone. With a sleek, modern design and the free LetraTag Connect app, it offers endless customization options for organizing your home, office, and personal belongings.",
    image: "/products/LetraTag_200B.PNG"
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (categorySlug: string): Product[] =>
  products.filter((p) => p.categorySlug === categorySlug);

export const categories = [
  { name: "Label Makers", slug: "label-makers" },
  { name: "PC & Mac Label Printers", slug: "pc-mac-printers" },
  { name: "Embossers", slug: "embossers" },
  { name: "Industrial Labelers", slug: "industrial-labelers" },
  { name: "Home & Mobile Label Makers", slug: "home-mobile" },
];
