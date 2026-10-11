// ---------------------------------------------------------------
//  Products. Add, remove or edit entries here.
//
//  category: "face" | "body" | "plants" | "gifts"
//  art:      illustration used until you add a photo —
//            "jar" | "tube" | "pump" | "spray" | "soap" | "tin" | "box" | "plant"
//  image:    optional path to a real photo, e.g. "images/aloe-gel.jpg"
//            (when set, the photo is shown instead of the illustration)
// ---------------------------------------------------------------
window.PRODUCTS = [
  {
    id: "pure-aloe-gel",
    name: "Pure Aloe Vera Gel",
    category: "body",
    price: 9,
    size: "150 ml",
    art: "jar",
    colors: { body: "#d7e6c8", lid: "#5f6f45" },
    desc: "Fresh inner-leaf gel from our own plants. Cooling, calming and light enough for face and body.",
    featured: true
  },
  {
    id: "aloe-shea-body-butter",
    name: "Aloe & Shea Body Butter",
    category: "body",
    price: 14,
    size: "200 ml",
    art: "jar",
    colors: { body: "#f1e6cf", lid: "#b08a4a" },
    desc: "A rich, whipped butter of aloe, shea and coconut oil for dry skin, elbows and hands.",
    featured: true
  },
  {
    id: "aloe-tea-tree-face-wash",
    name: "Aloe & Tea Tree Face Wash",
    category: "face",
    price: 8,
    size: "100 ml",
    art: "tube",
    colors: { body: "#e9efe1", lid: "#4f6a3c" },
    desc: "A gentle foaming wash that clears the day away without leaving skin tight.",
    featured: true
  },
  {
    id: "aloe-soothing-face-cream",
    name: "Soothing Aloe Face Cream",
    category: "face",
    price: 16,
    size: "50 ml",
    art: "pump",
    colors: { body: "#f5f1e8", lid: "#5f6f45" },
    desc: "A daily moisturiser with aloe, almond oil and vitamin E. Suits sensitive skin.",
    featured: true
  },
  {
    id: "aloe-oat-soap",
    name: "Aloe & Oat Handmade Soap",
    category: "body",
    price: 5,
    size: "100 g bar",
    art: "soap",
    colors: { body: "#e6dcc3", lid: "#8a9a6a" },
    desc: "Cold-process soap made with fresh aloe and ground oats for a soft, creamy lather.",
    featured: true
  },
  {
    id: "aloe-honey-lip-balm",
    name: "Aloe & Honey Lip Balm",
    category: "face",
    price: 4,
    size: "15 ml tin",
    art: "tin",
    colors: { body: "#e7c98a", lid: "#c8a25a" },
    desc: "Beeswax, honey and aloe in a little tin to keep lips soft through every season.",
    featured: false
  },
  {
    id: "aloe-after-sun-spray",
    name: "After-Sun Aloe Mist",
    category: "body",
    price: 11,
    size: "150 ml",
    art: "spray",
    colors: { body: "#cfe0d6", lid: "#3f5a46" },
    desc: "A cooling spray of aloe and cucumber water for skin that has had too much sun.",
    featured: false
  },
  {
    id: "potted-aloe-plant",
    name: "Potted Aloe Vera Plant",
    category: "plants",
    price: 12,
    size: "Young plant, 12 cm pot",
    art: "plant",
    colors: { body: "#c97b54", lid: "#6f9a5c" },
    desc: "A healthy young plant from our own pups, ready to grow on your windowsill.",
    featured: true
  },
  {
    id: "aloe-gift-set",
    name: "Aloe Self-Care Gift Set",
    category: "gifts",
    price: 29,
    size: "Gel, body butter, soap & lip balm",
    art: "box",
    colors: { body: "#e9e2d2", lid: "#5f6f45" },
    desc: "Our favourite four products in a gift box. A good present for anyone who loves natural skincare.",
    featured: false
  }
];
