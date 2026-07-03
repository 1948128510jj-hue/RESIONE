// RESIONE product data — verified from Chinese & English official catalog (2026.3.13)
// All specs per ASTM standards, cross-verified via Qwen3-VL-Plus OCR

export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  images: string[];
  features: string[];
  applications: string[];
  compatibleWith: string[];
  specs: Record<string, string>;
  bottleSize: string;
  minOrder: string;
  leadTime: string;
  isFeatured: boolean;
  order: number;
}

export const ALL_PRODUCTS: ProductData[] = [
  // ============================================================
  // HIGH TEMPERATURE — 1 product
  // ============================================================
  {
    slug: 'ht-enduse', name: 'HT-Enduse', tagline: 'Durable Heat-Resistant Resin — withstands 140°C',
    category: 'High Temperature', order: 1, isFeatured: true,
    description: 'HT-Enduse is a high-temperature resistant resin that can withstand temperatures up to 140°C for extended periods. It features extremely high rigidity (97D) and supports ultra-fine support printing. Printed parts offer high dimensional accuracy, surface quality, and ultra-low water absorption (0.02%). Outstanding wear and scratch resistance make it ideal for manufacturing high-temperature molds, gears, and components operating in thermal environments. Be honest: it is brittle (impact only 15 J/m) — like ceramic.',
    images: [],
    features: ['Long-term 140°C heat resistance', 'Ultra-rigid (97 Shore D)', 'High surface quality & dimensional accuracy', 'Ultra-low water absorption (0.02%)', 'Wear & scratch resistant', 'Deformation & shrinkage resistant', 'Supports ultra-fine support printing'],
    applications: ['High-temperature molds', 'Gears & mechanical components', 'Car interior parts (summer heat)', 'Industrial thermal environment parts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Professional SLA'],
    specs: { color: 'Gray', viscosity: '1785 mPa·s', liquidDensity: '1.188 g/cm³', solidDensity: '1.235 g/cm³', hardness: '97 Shore D', tensileStrength: '52.81 MPa', tensileModulus: '2270 MPa', elongationAtBreak: '2.80%', flexuralStrength: '97.88 MPa', flexuralModulus: '3548 MPa', izodImpact: '15.17 J/m', waterAbsorption: '0.02%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },

  // ============================================================
  // STANDARD — 2 products
  // ============================================================
  {
    slug: 'sp64', name: 'SP64', tagline: 'Standard Pro Resin — matte finish, sharp details',
    category: 'Standard', order: 2, isFeatured: true,
    description: 'SP64 is a stable and reliable standard Pro resin. Printed parts feature low shrinkage deformation, high detail precision, and a matte premium texture. Fast post-processing, easy to use, low water absorption (0.61%), and heat-resistant. Available in Light Peach, Black, Blue-gray, and Medium Gray.',
    images: [],
    features: ['Low shrinkage deformation', 'Matte, premium texture', 'Sharp details', 'Easy to use', 'Stable & reliable printing', 'Fast post-processing', 'Low water absorption (0.61%)', 'Heat-resistant'],
    applications: ['Miniatures', 'Scale military models', 'Large-scale static models', 'Prototypes', 'Home décor', 'Industrial parts (no impact requirement)', 'Short-term waterproof parts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Most consumer SLA'],
    specs: { color: 'Light Peach / Black / Blue-gray / Medium Gray', viscosity: '495 mPa·s', liquidDensity: '1.105 g/cm³', solidDensity: '1.24 g/cm³', hardness: '95 Shore D', tensileStrength: '49.91 MPa', tensileModulus: '1667 MPa', elongationAtBreak: '5.99%', flexuralStrength: '82.9 MPa', flexuralModulus: '2718 MPa', izodImpact: '14.18 J/m', waterAbsorption: '0.61%' },
    bottleSize: '500ml, 1kg, 5kg, 25kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'm70', name: 'M70', tagline: 'High Precision Resin — salmon color, clay-like matte, wear-resistant',
    category: 'Specialty', order: 3, isFeatured: true,
    description: 'M70 is a high-precision rigid resin in salmon color. Contains unique inorganic fillers for low shrinkage, wear resistance, and a matte, delicate surface with clay-like texture. Can print at extremely high resolution. Deeply loved by action figure, BJD, and garage kit (GK) printing enthusiasts. Also ideal for master molds used in liquid silicone casting.',
    images: [],
    features: ['Sharp details & high accuracy', 'Low deformation & shrinkage', 'Wear & scratch resistant', 'Matte surface, clay-like texture', 'Heat resistant', 'Contains unique inorganic fillers', 'Smooth surface finish'],
    applications: ['Action figures & high-detail GK', 'BJD dolls', 'Miniatures', 'Precision prototypes', 'Master molds for liquid silicone casting'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Salmon', viscosity: '816 mPa·s', liquidDensity: '1.145 g/cm³', solidDensity: '1.233 g/cm³', hardness: '90 Shore D', tensileStrength: '32.25 MPa', tensileModulus: '1420 MPa', elongationAtBreak: '5%', flexuralStrength: '56.7 MPa', flexuralModulus: '2170 MPa', izodImpact: '15.5 J/m', waterAbsorption: '0.53%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },

  // ============================================================
  // WATER WASHABLE — 3 products
  // ============================================================
  {
    slug: 'ww123', name: 'WW123', tagline: 'Water-Washable Resin — the everyday resin, viscosity like water',
    category: 'Water Washable', order: 4, isFeatured: true,
    description: 'WW123 is a water washable resin that is almost not picky about users, 3D printers, 3D data, or working environments. It can be cleaned directly with water — no IPA needed. Near-water fluidity (12 mPa·s) adapts to large-size printing and high-speed modes. Almost odorless. High precision, non-cracking, moisture resistant. Multiple vibrant colors available. Many users call it their "everyday resin."',
    images: [],
    features: ['Washable with water — no IPA needed', 'Near-water fluidity (12 mPa·s)', 'Almost odorless', 'High precision & non-cracking', 'Moisture resistant', 'Multiple color options', 'Beginner-friendly', 'High-speed printing compatible'],
    applications: ['Everyday printing', 'Miniatures & figurines', 'Educational models', 'Large-size prints', 'Colored transparent parts', 'Transparent special-effect parts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'High-speed printers'],
    specs: { color: 'Seawater Blue / Crystal Clear / Crystal Purple / Aqua Green / Flaming Orange / Cool Grey', viscosity: '12 mPa·s', liquidDensity: '1.092 g/cm³', solidDensity: '1.20 g/cm³', hardness: '85 Shore D', tensileStrength: '35 MPa', tensileModulus: '1470 MPa', elongationAtBreak: '9.00%', flexuralStrength: '64.65 MPa', flexuralModulus: '2007 MPa', izodImpact: '15–23.4 J/m', waterAbsorption: '5.71%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'ww-abs', name: 'WW-ABS', tagline: 'Water-Washable ABS-Like Resin — non-brittle, beginner-friendly',
    category: 'Water Washable', order: 5, isFeatured: false,
    description: 'WW-ABS is a water-washable resin whose printed parts are completely non-brittle and can withstand certain impacts. Cleaning won\'t cause the strong irritation often associated with other resins. High printing success rate makes it ideal for beginners new to resin 3D printing. REACH compliant.',
    images: [],
    features: ['Easy water washable', 'Easy to print — high success rate', 'Supports high-speed printing', 'Non-brittle', 'Low odor', 'REACH compliant'],
    applications: ['Miniatures', 'Large-scale static models', 'Prototypes', 'Beginner-friendly prints'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Gray', viscosity: '— mPa·s', liquidDensity: '— g/cm³', solidDensity: '— g/cm³', hardness: '— Shore D', tensileStrength: '28.8 MPa', tensileModulus: '699.6 MPa', elongationAtBreak: '16%', flexuralStrength: '35.8 MPa', flexuralModulus: '1220 MPa', izodImpact: '17.6 J/m', waterAbsorption: '—' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'th-ww', name: 'TH-WW', tagline: 'Tough Water-Washable Resin — crack-resistant, fine detail, 2 colors',
    category: 'Water Washable', order: 6, isFeatured: false,
    description: 'TH-WW is a water-washable resin with excellent toughness. Features crack resistance, low deformation, wear resistance, and fine detail. Perfect for tabletop miniatures and static scale models that need durability. Available in Gray and Flaming Orange — all colors are yellowing-resistant with low odor.',
    images: [],
    features: ['Water washable', 'Excellent flexibility', 'No greasy whitening', 'Long-term crack resistance', 'Low deformation', 'Fine details', 'Wear resistant (non-transparent)', 'Yellowing resistant', 'Low odor'],
    applications: ['Tabletop miniatures', 'Static scale models'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Gray / Flaming Orange', viscosity: '800 mPa·s', liquidDensity: '1.131 g/cm³', solidDensity: '1.215 g/cm³', hardness: '70 Shore D', tensileStrength: '17.38 MPa', tensileModulus: '446 MPa', elongationAtBreak: '24.18%', flexuralStrength: '19.4 MPa', flexuralModulus: '670 MPa', izodImpact: '28.9 J/m', waterAbsorption: '16.70%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },

  // ============================================================
  // TOUGH / ABS-LIKE — 10 products
  // ============================================================
  {
    slug: 'th-bjd', name: 'TH-BJD', tagline: 'Non-Yellowing Wear-Resistant Tough BJD Resin — 4 colors',
    category: 'Tough / ABS-Like', order: 7, isFeatured: true,
    description: 'TH-BJD is a non-yellowing, wear-resistant tough material available in four colors: Ultra White, Bronze, Cream White, and Cream Pink. The preferred material for BJD printing. Also suitable for action figure prototypes, joints without thin-wall or slender-post structures, industrial prototypes, enclosures, and parts requiring short-term toughness and wear resistance. Surface is smooth and delicate, easy to clean.',
    images: [],
    features: ['Wear & scratch resistant', 'Tough & drop-resistant', 'Accurate shape', '4 BJD-optimized colors', 'Non-yellowing', 'Long-term crack resistance', 'Easy to clean, resistant to thinners', 'Smooth & delicate surface'],
    applications: ['BJD dolls', 'Articulated action figures', 'Anime figures', 'Action figure prototypes', 'Short-term functional parts', 'Enclosures', 'Home décor', 'Artworks', 'Props', 'Architectural models'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Ultra White / Bronze / Cream White / Cream Pink (all 80D, flexural 76–80 MPa)', viscosity: '651–675 mPa·s', liquidDensity: '1.129–1.132 g/cm³', solidDensity: '1.211–1.216 g/cm³', hardness: '80 Shore D', tensileStrength: '43.67–45.85 MPa', tensileModulus: '1422–1467 MPa', elongationAtBreak: '17–18%', flexuralStrength: '76.25–79.71 MPa', flexuralModulus: '2217–2312 MPa', izodImpact: '16–20 J/m', waterAbsorption: '1.05–1.16%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'tough74-v2', name: 'Tough74 V2', tagline: 'Wear-Resistant Tough Resin — improved precision, rigidity & toughness',
    category: 'Tough / ABS-Like', order: 8, isFeatured: false,
    description: 'Tough74 V2 offers improved precision, rigidity, and toughness over the original Tough74. With 34% elongation at break, it is ideal for movable action figure prototypes, joints without thin-wall or slender-post structures, industrial prototypes, enclosures, and parts requiring short-term toughness and wear resistance. Smooth, delicate surface, high precision, no precipitation.',
    images: [],
    features: ['Improved precision & rigidity over Tough74', '34% elongation — high ductility', 'Wear & scratch resistant', 'High precision', 'Smooth & delicate surface', 'No precipitation', 'ABS-like toughness'],
    applications: ['Movable action figure prototypes', 'Joints & articulated parts', 'Industrial prototypes', 'Enclosures & housings', 'Functional parts for short-term use', 'Props'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Gray', viscosity: '630 mPa·s', liquidDensity: '1.123 g/cm³', solidDensity: '1.197 g/cm³', hardness: '80 Shore D', tensileStrength: '37.38 MPa', tensileModulus: '1256 MPa', elongationAtBreak: '34%', flexuralStrength: '59.16 MPa', flexuralModulus: '1862 MPa', izodImpact: '20–34 J/m', waterAbsorption: '0.96%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'tough74', name: 'Tough74', tagline: 'Wear-Resistant Tough Resin — original formula, rigid & tough',
    category: 'Tough / ABS-Like', order: 9, isFeatured: false,
    description: 'Tough74 is a tough and wear-resistant 3D printing resin. It is ideal for printing action figure prototypes, joints without thin-wall or slender-post structures, as well as industrial prototypes, enclosures, and parts requiring short-term toughness and wear resistance. Smooth surface with high precision in black. Easy to clean.',
    images: [],
    features: ['Wear-resistant & scratch-resistant', 'Rigid & tough (ABS-Like)', 'Smooth & delicate surface', 'High precision (black)', 'Easy to clean'],
    applications: ['Action figures', 'Prototypes', 'Functional parts for short-term use', 'Enclosures & props'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Black', viscosity: '556 mPa·s', liquidDensity: '1.119 g/cm³', solidDensity: '1.198 g/cm³', hardness: '80 Shore D', tensileStrength: '33 MPa', tensileModulus: '1218 MPa', elongationAtBreak: '20.00%', flexuralStrength: '49 MPa', flexuralModulus: '1523 MPa', izodImpact: '17–33 J/m', waterAbsorption: '0.96%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'g217', name: 'G217', tagline: 'Clear Tough Resin — non-yellowing, drillable, fully transparent when sanded',
    category: 'Tough / ABS-Like', order: 10, isFeatured: false,
    description: 'G217 is a tough, non-yellowing, highly transparent resin with a slight bluish tint. Out of the printer, printed parts have a semi-transparent frosted-glass look. Once sanded and polished, they become completely transparent. Combines excellent toughness with high rigidity — you can drill holes, tap threads, and perform repeated machining operations. One of the few transparent resins with excellent detail and accuracy. Not suitable for underwater applications (1.07% water absorption). Low odor.',
    images: [],
    features: ['High transparency (frosted glass → fully clear when sanded)', 'Non-yellowing', 'Reduced overexposure', 'High rigidity & toughness combined', 'Low odor', 'Excellent detail & accuracy', 'Can be drilled and tapped'],
    applications: ['Transparent special-effect parts', 'Transparent prototypes', 'Enclosures', 'Educational & scientific models', 'Artwork & home décor', 'High-strength short-term impact-resistant parts', 'Clear display pieces'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Clear (slightly bluish tint)', viscosity: '864 mPa·s', liquidDensity: '1.116 g/cm³', solidDensity: '1.189 g/cm³', hardness: '91 Shore D', tensileStrength: '62.3 MPa', tensileModulus: '1880 MPa', elongationAtBreak: '17.88%', flexuralStrength: '80.4 MPa', flexuralModulus: '2250 MPa', izodImpact: '33–35 J/m', waterAbsorption: '1.07%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'm58', name: 'M58', tagline: 'Gray Tough Resin — rigid & tough, drillable & machinable',
    category: 'Tough / ABS-Like', order: 11, isFeatured: false,
    description: 'M58 is a gray material known for its rigidity and toughness. Mechanical properties comparable to tough thermoplastics — allows drilling, screw insertion, and repeated machining operations. Ideal for functional parts experiencing long-term static load, transient stress, or strain. High molding precision, wear resistance, and a smooth surface that preserves fine details. Well-suited for miniatures and action figures. Low odor. Not suitable for underwater applications.',
    images: [],
    features: ['Rigid and tough — combines both', 'Sharp details', 'Smooth surface', 'High precision', 'Wear & scratch resistant', 'Low odor'],
    applications: ['Action figures & tabletop miniatures', 'Large-scale models', 'Mecha & mechanical models', 'Vehicle models', 'Master molds for liquid silicone casting', 'Visual/functional verification components', 'Enclosures', 'Tooling fixtures', 'Props', 'Snap-fit components & assemblies'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Gray', viscosity: '389 mPa·s', liquidDensity: '1.12 g/cm³', solidDensity: '1.20 g/cm³', hardness: '88 Shore D', tensileStrength: '52.3 MPa', tensileModulus: '1820 MPa', elongationAtBreak: '22.55%', flexuralStrength: '71.36 MPa', flexuralModulus: '2129 MPa', izodImpact: '22–42 J/m', waterAbsorption: '1.25%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'm68', name: 'M68', tagline: 'White Tough Resin — non-yellowing pure white, rigid & tough',
    category: 'Tough / ABS-Like', order: 12, isFeatured: false,
    description: 'M68 is known for its high rigidity and toughness in a pure white, non-yellowing material. Mechanical properties comparable to tough thermoplastics — allows drilling, screw insertion, and repeated machining. Deeply loved by artists, toy producers, architects, and 3D printing service providers for its beautiful pure white appearance. Not suitable for underwater applications.',
    images: [],
    features: ['Rigid and tough', 'High-strength', 'Yellowing-resistant', 'Pure white appearance', 'Low odor'],
    applications: ['Enclosures', 'Figurines', 'Architectural models', 'Lighting fixtures', 'Artworks', 'Home décor', 'Movie props', 'Prototypes', 'High-strength impact-resistant parts for short-term use'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Pure White', viscosity: '301 mPa·s', liquidDensity: '1.125 g/cm³', solidDensity: '1.192 g/cm³', hardness: '87 Shore D', tensileStrength: '54.3 MPa', tensileModulus: '1862 MPa', elongationAtBreak: '19.16%', flexuralStrength: '75.8 MPa', flexuralModulus: '2250 MPa', izodImpact: '22–42 J/m', waterAbsorption: '1.24%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'k', name: 'K', tagline: 'Black Tough Resin — not prone to overexposure, accurate size & sharp details',
    category: 'Tough / ABS-Like', order: 13, isFeatured: false,
    description: 'K resin is known for excellent toughness. This black material is not prone to overexposure under strong light sources, ensuring accurate print dimensions and sharp details. Mechanical properties comparable to tough thermoplastics — allows drilling, tapping, and other high-stress modifications. Not suitable for underwater applications.',
    images: [],
    features: ['Excellent toughness', 'Not prone to overexposure', 'Sharp fine details', 'High dimensional accuracy', 'Rigid & tough combined'],
    applications: ['Functional parts under long-term static load', 'Prototypes', 'Miniatures', 'Precision parts', 'Enclosures'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Black', viscosity: '335 mPa·s', liquidDensity: '1.122 g/cm³', solidDensity: '1.197 g/cm³', hardness: '83 Shore D', tensileStrength: '45 MPa', tensileModulus: '1512 MPa', elongationAtBreak: '18.60%', flexuralStrength: '67.2 MPa', flexuralModulus: '2080 MPa', izodImpact: '24–34 J/m', waterAbsorption: '1.02%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'k-plus', name: 'K+', tagline: 'Pure Black Tough Resin — injection-molded look, 0.30% water absorption',
    category: 'Tough / ABS-Like', order: 14, isFeatured: true,
    description: 'K+ is a pure black, rigid-yet-tough, wear-resistant material. Printed parts exhibit the look and feel of injection-molded components with excellent mechanical performance. Exceptional dimensional and detail accuracy make it ideal for micro-model accessories, precision parts, and tooling fixtures. Ultra-low water absorption (0.30%) allows short-term use in outdoor, high-humidity, or even underwater environments. Also great for functional verification components and end-use parts with moderate impact requirements.',
    images: [],
    features: ['Rigid and tough combined', 'High dimensional accuracy', 'Sharp details', 'Pure black — injection-molded look', 'Ultra-low water absorption (0.30%)', 'Wear & scratch resistant', 'Short-term outdoor/underwater OK'],
    applications: ['Functional verification components', 'Product enclosures', 'Precision parts', 'Tooling fixtures', 'Miniature model accessories', 'End-use parts (moderate impact)', 'Short-term waterproof parts', 'Snap-fit components & assemblies'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Pure Black', viscosity: '316 mPa·s', liquidDensity: '1.105 g/cm³', solidDensity: '1.182 g/cm³', hardness: '85 Shore D', tensileStrength: '41 MPa', tensileModulus: '1444 MPa', elongationAtBreak: '25.70%', flexuralStrength: '63.41 MPa', flexuralModulus: '2020 MPa', izodImpact: '31–35 J/m', waterAbsorption: '0.30%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'th-hr', name: 'TH-HR', tagline: 'High-Resolution Tough Resin — ultra-fine detail, clay-like matte',
    category: 'Tough / ABS-Like', order: 15, isFeatured: false,
    description: 'TH-HR is a high-resolution, low-shrinkage, high-precision tough material. Suitable for ultra-fine GK, head sculpts, mecha models, miniatures, car models, master molds for liquid silicone casting, and precision prototypes requiring strength. Combines rigidity with toughness, matte finish, precise fit, and easy cleaning. Available in Red Clay and White Clay.',
    images: [],
    features: ['High resolution & precision', 'Combines rigidity & toughness', 'Fine smooth surface', 'Matte finish', 'Precision fit', 'Low shrinkage & deformation', 'Easy to clean', 'No precipitation'],
    applications: ['Ultra-fine GK', 'Head sculpts', 'Mecha models', 'Miniatures', 'Car models', 'Master molds for liquid silicone casting', 'Precision prototypes requiring strength', 'Functional parts for short-term use'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Red Clay / White Clay', viscosity: '768–821 mPa·s', liquidDensity: '1.138–1.139 g/cm³', solidDensity: '1.204–1.21 g/cm³', hardness: '87 Shore D', tensileStrength: '38.28–39.01 MPa', tensileModulus: '1087–1172 MPa', elongationAtBreak: '19–21%', flexuralStrength: '67.77–69.27 MPa', flexuralModulus: '1983–2026 MPa', izodImpact: '20–32 J/m', waterAbsorption: '1.19–1.22%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'cl-th', name: 'CL-TH', tagline: 'Colored Tough Resin — 9 rich colors, high saturation, ABS-like',
    category: 'Tough / ABS-Like', order: 16, isFeatured: true,
    description: 'CL-TH is a color-rich ABS-like resin with extremely high saturation and excellent opacity in 9 colors (Red, Orange, Yellow, Green, Cyan, Blue, Purple, Pink, Light Pink). Vivid, striking prints with outstanding rigidity and toughness, excellent wear and scratch resistance, and superior anti-shrinkage properties. Colors can be mixed. Ideal for designer toys, mecha models, brick-style toys, articulated figures, cosplay props, and functional prototypes.',
    images: [],
    features: ['9 rich colors (Red/Orange/Yellow/Green/Cyan/Blue/Purple/Pink/Light Pink)', 'High saturation & strong coverage', 'Colors can be mixed', 'Excellent toughness & rigidity', 'Good wear & scratch resistance', 'Firm joints for articulated parts', 'Low shrinkage & deformation'],
    applications: ['Designer toys', 'Mecha models & mod kits', 'Building block toys', 'Articulated action figures', 'Car models', 'Large-scale statues', 'Miniatures', 'Cosplay props', 'Fridge magnets & accessories', 'Home décor', 'Functional prototypes', 'Enclosures & tooling fixtures'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: '9 colors (Red/Orange/Yellow/Green/Cyan/Blue/Purple/Pink/Light Pink)', viscosity: '847 mPa·s', liquidDensity: '1.127 g/cm³', solidDensity: '1.205 g/cm³', hardness: '82–85 Shore D', tensileStrength: '32–44 MPa', tensileModulus: '1070–1670 MPa', elongationAtBreak: '19.7–28%', flexuralStrength: '55–65 MPa', flexuralModulus: '1940–2060 MPa', izodImpact: '17–18.8 J/m', waterAbsorption: '0.29%', hdt: '61.9–63.2°C' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },

  // ============================================================
  // ANTI-IMPACT / NYLON-LIKE / LONG-LASTING — 3 products
  // ============================================================
  {
    slug: 'anti-impact', name: 'Anti-Impact', tagline: 'Durable Nylon-Like Resin — 93% elongation, 46–98 J/m impact, outdoor-ready',
    category: 'Anti-Impact / Nylon-Like', order: 17, isFeatured: true,
    description: 'Anti-Impact is our flagship durable nylon-like resin. With 93–95% elongation at break and 46–98 J/m notched impact strength, it delivers exceptional impact toughness and tensile toughness. Printed parts have low water absorption (0.42–0.45%), a fine wear-resistant surface, and toughness that persists over time with good weatherability. Can be used for rapid prototyping of drones, robots, RC models, and articulated toys — and can even go into small-batch production of end-use parts. Short-term outdoor, high-humidity, and underwater use is OK. Available in White-Grey and Black.',
    images: [],
    features: ['Exceptional impact resistance (46–98 J/m)', '93–95% elongation — bends, doesn\'t shatter', 'Long-term non-brittle', 'Low water absorption (0.42–0.45%)', 'Excellent weatherability', 'Wear & scratch resistant', 'High precision (black)', 'Can serve as toughening agent for other resins'],
    applications: ['Drone components', 'Robot parts', 'RC model parts', 'Functional prototypes for automotive/mechanical/electrical', 'End-use parts (small batch production)', 'Tooling fixtures', 'Articulated action figures', 'Miniatures', 'Home décor & artworks', 'Film & TV props', 'Short-term waterproof parts', 'Outdoor-use parts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'White-Grey / Black', viscosity: '928 (WG) / 609 (BK) mPa·s', liquidDensity: '1.075 (WG) / 1.07 (BK) g/cm³', solidDensity: '1.137 (WG) / 1.105 (BK) g/cm³', hardness: '79 (WG) / 73 (BK) Shore D', tensileStrength: '27 (WG) / 26.8 (BK) MPa', tensileModulus: '756 (WG) / 910 (BK) MPa', elongationAtBreak: '93.00% (WG) / 94.70% (BK)', flexuralStrength: '34 (WG) / 27 (BK) MPa', flexuralModulus: '1098 (WG) / 760 (BK) MPa', izodImpact: '46–98 (WG) / 67–75 (BK) J/m', waterAbsorption: '0.45% (WG) / 0.42% (BK)' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'th72', name: 'TH72', tagline: 'Long-Lasting Non-Brittle Resin — stays tough, never yellows',
    category: 'Anti-Impact / Nylon-Like', order: 18, isFeatured: true,
    description: 'TH72 is a long-lasting tough resin — you can handle printed parts without constant caution, and they won\'t be easily damaged during long-distance shipping. Ideal for models with hair, capes, long swords, and other thin delicate structures, as well as static statues. Low water absorption (0.69%) and yellowing resistance give it excellent weatherability. Even in cold, dry winter conditions, it maintains toughness. Can also serve as a toughening agent — mix it into other resins to improve their flexibility. Low odor.',
    images: [],
    features: ['Long-term tough-flexibility', 'Low water absorption (0.69%)', 'Yellowing resistant', 'Excellent weatherability', 'Low odor', 'Can be used as a toughening agent for other resins'],
    applications: ['Tabletop miniatures', 'Figurine statues', 'Props', 'Prototypes', 'End-use parts with moderate strength requirements', 'Thin delicate parts (swords, hair, capes)'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'White / Matte Gray / Medium Grey', viscosity: '516 mPa·s', liquidDensity: '1.112 g/cm³', solidDensity: '1.198 g/cm³', hardness: '75 Shore D', tensileStrength: '26.23 MPa', tensileModulus: '541 MPa', elongationAtBreak: '29.35%', flexuralStrength: '16.9 MPa', flexuralModulus: '556 MPa', izodImpact: '22–29 J/m', waterAbsorption: '0.69%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'th-mini', name: 'TH-MINI', tagline: 'Durable Miniature Resin — 60–66 J/m impact, matte premium texture',
    category: 'Anti-Impact / Nylon-Like', order: 19, isFeatured: true,
    description: 'TH-MINI is a highly durable, tough-flexible resin specifically designed for tabletop miniatures intended for everyday handling. With 60–66 J/m notched impact strength and 45.6% elongation, miniatures survive drops during gameplay. Low odor, matte finish, easy post-processing. Excellent surface quality with fine details and a refined, non-plasticky appearance outperforming injection-molded or cast parts. Great weather resistance — maintains strong impact performance even in cold, dry conditions. Low water absorption (0.40%).',
    images: [],
    features: ['Extreme impact resistance (60–66 J/m) — our 2nd highest', 'Long-term tough-flexibility', 'Premium matte texture', 'Excellent surface quality', 'Fine details', 'Efficient post-processing', 'Excellent weather resistance', 'Low odor', 'Low water absorption (0.40%)', 'Can serve as toughening agent'],
    applications: ['Wargame miniatures (Warhammer etc.)', 'RPG & skirmish game miniatures', 'Home décor', 'Artworks', 'Props', 'Prototypes', 'Jigs & fixtures', 'Short-term waterproof parts', 'End-use parts with low flexural modulus requirements'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Gray', viscosity: '450 mPa·s', liquidDensity: '1.099 g/cm³', solidDensity: '1.167 g/cm³', hardness: '75–80 Shore D', tensileStrength: '15 MPa', tensileModulus: '380 MPa', elongationAtBreak: '45.60%', flexuralStrength: '18.3 MPa', flexuralModulus: '480 MPa', izodImpact: '60–66 J/m', waterAbsorption: '0.40%' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },

  // ============================================================
  // FLEXIBLE — 6 products
  // ============================================================
  {
    slug: 'f69', name: 'F69', tagline: 'Black Flexible Resin — 222% elongation, rubber-like, tear-resistant',
    category: 'Flexible / Elastic', order: 20, isFeatured: false,
    description: 'F69 is a black flexible resin with high printing success rate. Designed for excellent tear strength and flexibility. Widely used for doll clothing, tires, shoe prototypes, seals, cushions, gaskets, drive belts, flexible prototypes, educational props, and medical simulation models. Can be mixed with other resins to improve their flexibility. 71 Shore A hardness — soft like a rubber shoe sole.',
    images: [],
    features: ['Soft & rubber-like (71 Shore A)', 'Tear resistant (17.59 kN/m)', 'High elongation — 222%', 'Fine details', 'Can be used as toughening agent for other resins', 'Easy-to-use flexible resin'],
    applications: ['Doll/toy clothing (vests, capes, weapons, shoes)', 'Tires', 'Shoe prototypes', 'Seals & gaskets', 'Cushions & pads', 'Drive belts', 'Flexible prototypes', 'Educational props', 'Medical simulation models'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Black', viscosity: '1145 mPa·s', liquidDensity: '1.079 g/cm³', solidDensity: '1.15 g/cm³', hardness: '71 Shore A', tearStrength: '17.59 kN/m', tensileStrength: '6.59 MPa', tensileModulus: '31.59 MPa', elongationAtBreak: '222.21%', waterAbsorption: '1.74%' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'f39', name: 'F39', tagline: 'White Flexible Resin — same performance as F69, clean white',
    category: 'Flexible / Elastic', order: 21, isFeatured: false,
    description: 'F39 is the white version of our flexible resin series. Same mechanical performance as F69 — 71 Shore A, 222% elongation, 17.59 kN/m tear strength. Designed for excellent tear strength and flexibility. Widely used for doll clothing, tires, shoe prototypes, seals, cushions, gaskets, and medical simulation models. Can be mixed with other resins as a toughening agent.',
    images: [],
    features: ['Soft & rubber-like (71 Shore A)', 'Tear resistant (17.59 kN/m)', 'High elongation — 222%', 'Clean white color', 'Can be used as toughening agent', 'Easy-to-use flexible resin'],
    applications: ['Doll/toy clothing', 'Tires', 'Shoe prototypes', 'Seals & gaskets', 'Cushions & pads', 'Drive belts', 'Flexible prototypes', 'Educational props', 'Medical simulation models'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'White', viscosity: '1145 mPa·s', liquidDensity: '1.079 g/cm³', solidDensity: '1.15 g/cm³', hardness: '71 Shore A', tearStrength: '17.59 kN/m', tensileStrength: '6.59 MPa', tensileModulus: '31.59 MPa', elongationAtBreak: '222.21%', waterAbsorption: '1.74%' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'f39t', name: 'F39T', tagline: 'Transparent Flexible Resin — clear elastic, same F39 performance',
    category: 'Flexible / Elastic', order: 22, isFeatured: false,
    description: 'F39T is the transparent version of our flexible resin series. Same mechanical performance as F39/F69 — 71 Shore A, 222% elongation, 17.59 kN/m tear strength. Offers optical clarity combined with rubber-like elasticity. High printing success rate. Can be mixed with other resins as a toughening agent.',
    images: [],
    features: ['Transparent & flexible', 'Soft & rubber-like (71 Shore A)', 'Tear resistant (17.59 kN/m)', 'High elongation — 222%', 'Can be used as toughening agent', 'Easy-to-use flexible resin'],
    applications: ['Transparent flexible parts', 'Optical prototypes', 'Special-effect parts', 'Seals & gaskets', 'Doll clothing', 'Medical simulation models'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Transparent', viscosity: '1145 mPa·s', liquidDensity: '1.079 g/cm³', solidDensity: '1.15 g/cm³', hardness: '71 Shore A', tearStrength: '17.59 kN/m', tensileStrength: '6.59 MPa', tensileModulus: '31.59 MPa', elongationAtBreak: '222.21%', waterAbsorption: '1.74%' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'fx60', name: 'FX60', tagline: 'Flexible Resin (LITLIQ) — stays flexible in cold, 58–62A',
    category: 'Flexible / Elastic', order: 23, isFeatured: false,
    description: 'FX60 is a black flexible resin under our LITLIQ sub-brand. Good fluidity with prints that maintain flexibility and resilience even at low temperatures. Room-temperature mechanical properties are similar to rubber or TPU. More affordable entry point to flexible 3D printing. 58–62 Shore A, 142% elongation.',
    images: [],
    features: ['High flexibility', 'Good fluidity — easy to print', 'Cold-resistant — stays flexible at low temps', 'LITLIQ sub-brand — affordable'],
    applications: ['Toy tires', 'Shoe prototypes', 'Seals', 'Cushions & pads', 'Elastic prototypes'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Black (LITLIQ brand)', viscosity: '568 mPa·s', liquidDensity: '1.08 g/cm³', solidDensity: '1.16 g/cm³', hardness: '58–62 Shore A', tearStrength: '12.75 kN/m', tensileStrength: '5.2 MPa', tensileModulus: '2.3 MPa', elongationAtBreak: '142%' },
    bottleSize: '500g', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'esd-flex', name: 'ESD Flex', tagline: 'Anti-Static Flexible Resin — ESD-safe, same elasticity as F39',
    category: 'Flexible / Elastic', order: 24, isFeatured: false,
    description: 'ESD Flex is an anti-static flexible material — the ideal choice for 3D printing flexible parts requiring electrostatic discharge protection. Same mechanical performance as F39 series (71 Shore A, 222% elongation, 17.59 kN/m tear strength) with added ESD-safe properties. Suitable for flexible parts that directly contact electronic components — seals, cushions, gaskets, and pads in electronics manufacturing environments.',
    images: [],
    features: ['Anti-static / ESD-safe', 'High flexibility (71 Shore A)', 'Tear resistant', 'High elongation (222%)', 'Fine details'],
    applications: ['ESD-safe flexible parts', 'Electronic component contact pads', 'Anti-static seals & gaskets', 'Clean room equipment cushions', 'Static-sensitive component holders'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Black', viscosity: '1145 mPa·s', liquidDensity: '1.079 g/cm³', solidDensity: '1.15 g/cm³', hardness: '71 Shore A', tearStrength: '17.59 kN/m', tensileStrength: '6.59 MPa', tensileModulus: '31.59 MPa', elongationAtBreak: '222.21%', waterAbsorption: '1.74%' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },

  // ============================================================
  // END-USE ELASTOMER — 6 products (3 series × 2 hardnesses)
  // ============================================================
  {
    slug: 'eb80-eb60', name: 'EB80 / EB60', tagline: 'High-Performance Elastic Resin — 3D-printable end-use elastomer, 35–40% rebound',
    category: 'Flexible / Elastic', order: 25, isFeatured: false,
    description: 'EB series materials are two-component, 3D-printable end-use elastomer resins. EB80 (80A) and EB60 (60A). Printed parts feature high rebound, excellent tensile strength, tear resistance, minimal yellowing, and outstanding weatherability. Can be used directly for mass-produced shoes, sports protective gear, bicycle saddles, stress-relief toys, and humanoid robot lattice muscle tissue. Requires heat treatment post-processing. 8-hour print use life at 25°C.',
    images: [],
    features: ['High rebound (35–40%)', 'Excellent tensile strength', 'Tear resistant (EB80: 55, EB60: 45 kN/m)', 'Excellent weatherability', 'Wear resistant', 'Minimal yellowing', 'Short post-processing time', 'Stable storage (two-component)', 'Requires heat treatment'],
    applications: ['Mass-produced shoes', 'Sports protective gear', 'Bicycle saddles', 'Stress-relief toys', 'Humanoid robot lattice muscle tissue', 'Luggage accessories', 'Lumbar supports'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: '—', viscosity: '6000–8000 (EB80) / 4000–6000 (EB60) mPa·s', hardness: '79–82A (EB80) / 60–63A (EB60)', tensileStrength: '23.1 (EB80) / 16.4 (EB60) MPa', elongationAtBreak: '150–200%', tearStrength: '55 (EB80) / 45 (EB60) kN/m', rebound: '35–40%', printLife: '8h at 25°C' },
    bottleSize: '1kg (two-component kit)', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'ehp80-ehp60', name: 'EHP80 / EHP60', tagline: 'High-Performance Elastic Resin — 38–43% rebound, 15-day pot life',
    category: 'Flexible / Elastic', order: 26, isFeatured: false,
    description: 'EHP series materials are 3D-printable end-use elastomer resins requiring autoclave/high-pressure steam post-processing. EHP80 (80A) and EHP60 (60A). Excellent rebound (38–43%), high tensile strength, wear-resistant, minimal yellowing. Widely compatible with standard LCD/DLP printers. Good thermal stability during printing reduces material waste. 15-day print use life at 25°C — much longer than EB series. For mass-produced shoes, sports gear, bicycle saddles, and humanoid robot lattice muscles.',
    images: [],
    features: ['Excellent rebound (38–43%)', 'High tensile strength', 'Wear resistant', 'Minimal yellowing', 'Compatible with standard LCD/DLP printers', 'Low material waste — good thermal stability', '15-day print life at 25°C', 'Requires autoclave/high-pressure steam treatment', 'Single or two-component'],
    applications: ['Mass-produced shoes', 'Sports protective gear', 'Bicycle saddles', 'Stress-relief toys', 'Humanoid robot lattice muscle tissue', 'Luggage accessories', 'Lumbar supports'],
    compatibleWith: ['Standard LCD/DLP printers', 'All 405nm LCD', '385nm DLP'],
    specs: { color: '—', viscosity: '6000–8000 (EHP80) / 4000–6000 (EHP60) mPa·s', hardness: '79–82A (EHP80) / 60–63A (EHP60)', tensileStrength: '20.3 (EHP80) / 14.6 (EHP60) MPa', elongationAtBreak: '150–200%', tearStrength: '38 kN/m', rebound: '38–43% (EHP80) / 35–40% (EHP60)', printLife: '15 days at 25°C' },
    bottleSize: '1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'el80-el60', name: 'EL80 / EL60', tagline: 'High-Performance Elastic Resin — high-UV-intensity LCD/DLP compatible',
    category: 'Flexible / Elastic', order: 27, isFeatured: false,
    description: 'EL series materials are 3D-printable end-use elastomer resins compatible with high-UV-intensity LCD or DLP printers. EL80 (80A) and EL60 (60A). High rebound, high tensile strength, high precision, weather resistance, wear resistance. Widely compatible with standard LCD/DLP printers. Good thermal stability during printing reduces material waste. 15-day print use life at 25°C. Requires heat treatment. For mass-produced shoes, sports gear, bicycle saddles, and humanoid robot lattice muscles.',
    images: [],
    features: ['High rebound (30–35%)', 'High tensile strength', 'High precision', 'Weather resistant', 'Wear resistant', 'Good thermal stability during printing', 'Low material waste', 'Compatible with high-UV-intensity LCD/DLP', '15-day print life at 25°C', 'Requires heat treatment', 'Single or two-component'],
    applications: ['Mass-produced shoes', 'Sports protective gear', 'Bicycle saddles', 'Stress-relief toys', 'Humanoid robot lattice muscle tissue', 'Luggage accessories', 'Lumbar supports'],
    compatibleWith: ['High-UV-intensity LCD/DLP printers', 'Standard LCD/DLP printers', 'All 405nm LCD', '385nm DLP'],
    specs: { color: '—', viscosity: '6500–8500 (EL80) / 4400–6500 (EL60) mPa·s', hardness: '80–83A (EL80) / 60–63A (EL60)', tensileStrength: '18.3 (EL80) / 14.3 (EL60) MPa', elongationAtBreak: '150–200%', tearStrength: '38 kN/m', rebound: '30–35%', printLife: '15 days at 25°C' },
    bottleSize: '1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },

  // ============================================================
  // DENTAL — 4 products
  // ============================================================
  {
    slug: 'd01', name: 'D01', tagline: 'Dental Model Resin — yellow-ochre, high accuracy, short-term heat resistant',
    category: 'Dental', order: 28, isFeatured: true,
    description: 'D01 is a yellow-ochre high-accuracy dental model resin. Prints high-precision, smooth-surface, wear-resistant models. Can briefly withstand high temperatures during vacuum forming processes. Ideal for restorative, implant, diagnostic, and especially orthodontic dental models. Very easy to clean. 85–90 Shore D, 41 MPa tensile, 73.6 MPa flexural.',
    images: [],
    features: ['High accuracy', 'Short-term heat resistant (vacuum forming)', 'Wear & scratch resistant', 'Easy to clean', 'Smooth surface', 'Low odor'],
    applications: ['Restorative dental models', 'Implant models', 'Diagnostic study models', 'Orthodontic models (especially)'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Dental printers'],
    specs: { color: 'Yellow-Ochre', viscosity: '300 mPa·s', liquidDensity: '1.094 g/cm³', solidDensity: '1.196 g/cm³', hardness: '85–90 Shore D', tensileStrength: '41 MPa', tensileModulus: '1540 MPa', elongationAtBreak: '6.00%', flexuralStrength: '73.6 MPa', flexuralModulus: '2100 MPa', izodImpact: '14.9 J/m', waterAbsorption: '0.58%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'd01s', name: 'D01S', tagline: 'Dental Model Resin — shell-beige, gypsum-like matte, extreme low shrinkage',
    category: 'Dental', order: 29, isFeatured: true,
    description: 'D01S is a shell-beige dental model resin containing unique inorganic fillers for enhanced performance. Printed dental models feature a matte surface with gypsum-like texture, ensuring accurate scanning results. Features precise dimensions, scratch-resistant surface, extremely low shrinkage, and long-term stability. The ideal choice for producing high-quality indirect dental models for restorative, implant, and diagnostic applications. 92 Shore D.',
    images: [],
    features: ['Extreme low deformation', 'High accuracy', 'Wear & scratch resistant', 'Matte surface', 'Gypsum-like texture', 'Shell-beige color'],
    applications: ['High-quality indirect dental models', 'Restorative applications', 'Implant models', 'Diagnostic applications'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Dental printers'],
    specs: { color: 'Shell-Beige', viscosity: '1100 mPa·s', liquidDensity: '1.159 g/cm³', solidDensity: '1.225 g/cm³', hardness: '92 Shore D', tensileStrength: '43 MPa', tensileModulus: '1920 MPa', elongationAtBreak: '5.00%', flexuralStrength: '65.9 MPa', flexuralModulus: '2660 MPa', izodImpact: '18.4 J/m', waterAbsorption: '0.51%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'c01', name: 'C01', tagline: 'Dental Castable Resin — transparent green, clean burnout, lost-wax casting',
    category: 'Dental', order: 30, isFeatured: false,
    description: 'C01 is a transparent green dental castable resin designed for direct lost-wax casting of Ni-Cr and Co-Cr alloys. Ensures high accuracy in both shape and dimensions — ideal for crowns, bridges, and dental brackets with perfect fit every time. Excellent fluidity (100 mPa·s) accelerates print speed. High rigidity — no post-curing required, saving valuable chair time. Supports are easy to remove without leaving surface pits. Detailed casting instructions provided to avoid common "investment cracking" problems.',
    images: [],
    features: ['Easy to cast — clean burnout', 'High accuracy', 'High fluidity (100 mPa·s) — fast printing', 'Fast post-processing — no post-curing needed', 'Easy support removal — no surface pits'],
    applications: ['Dental crowns', 'Bridges', 'Dental brackets (lost-wax casting)', 'Ni-Cr and Co-Cr alloy casting'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Dental printers'],
    specs: { color: 'Transparent Green', viscosity: '100 mPa·s', hardness: '78 Shore D', tensileStrength: '19 MPa', tensileModulus: '630 MPa', elongationAtBreak: '4.00%', flexuralStrength: '35.5 MPa', flexuralModulus: '1025 MPa', izodImpact: '13.6 J/m' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'gm01', name: 'GM01', tagline: 'Gingiva Mask Resin — 50A ultra-soft, realistic gum simulation',
    category: 'Dental', order: 31, isFeatured: false,
    description: 'GM01 is a resin that highly simulates gingival soft tissue. Printed parts have a soft, elastic feel and appearance similar to real gingiva — not prone to shrinkage deformation and never gets sticky over time (excellent environmental stability). Helps more accurately simulate actual gingival conditions on dental models, enabling more effective design, testing, and adjustment of dentures, implants, and other dental restorations. 50 Shore A — extremely soft.',
    images: [],
    features: ['Ultra-soft (50 Shore A) — mimics real gingiva', 'Excellent elasticity', 'Realistic gingival appearance', 'Environmentally stable — never sticky', 'Precision fit', 'Easy to trim'],
    applications: ['Gingival soft tissue simulation', 'Denture design & testing', 'Implant planning models', 'Dental restoration verification'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Dental printers'],
    specs: { color: 'Gingiva Pink', viscosity: '3200 mPa·s', hardness: '50 Shore A', tearStrength: '3.39 kN/m', tensileStrength: '1.22 MPa', tensileModulus: '2.6 MPa', elongationAtBreak: '83.5%', waterAbsorption: '0.515%' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },

  // ============================================================
  // ELASTIC/GINGIVAL — 1 product
  // ============================================================
  {
    slug: 'f80', name: 'F80', tagline: 'Elastic/Gingival-Like Resin — soft & elastic, Pink & Black, cold-resistant',
    category: 'Dental', order: 32, isFeatured: false,
    description: 'F80 is a soft and elastic resin available in Pink and Black. The pink shade is especially suited for dental gingival models, while the black version is ideal for toy tires, shoe prototypes, seals, cushions, and various elastic prototypes. F80 maintains its soft properties even in low-temperature environments. Due to its high viscosity (2180 mPa·s), it may present printing challenges — not recommended for beginners. 64 Shore A, 155% elongation.',
    images: [],
    features: ['Soft touch (64 Shore A)', 'Elastic & flexible', 'Cold-resistant — stays soft in low temps', 'Pink: realistic gingiva simulation', 'Black: tires, seals, cushions'],
    applications: ['Dental gingival models (Pink)', 'Toy tires (Black)', 'Shoe prototypes', 'Seals & cushions', 'Elastic prototypes'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Pink / Black', viscosity: '2180 mPa·s', liquidDensity: '1.064 g/cm³', solidDensity: '1.119 g/cm³', hardness: '64 Shore A', tearStrength: '11.56 kN/m', tensileStrength: '2.66 MPa', tensileModulus: '6.19 MPa', elongationAtBreak: '155%', waterAbsorption: '2.07%' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
];
