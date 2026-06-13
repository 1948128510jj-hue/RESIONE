// RESIONE product data — visually verified from English product catalog (2026.3.13)
// All specs per ASTM standards at 25°C, 50-60% humidity, measured by RESIONE lab

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
  // ====== PAGE 5: HT-Enduse + SP64 ======
  {
    slug: 'ht-enduse', name: 'HT-Enduse', tagline: 'Durable Heat-Resistant Resin — withstands up to 140°C',
    category: 'High Temperature', order: 1, isFeatured: true,
    description: 'HT-Enduse is a high-temperature resistant resin that can withstand temperatures up to 140°C for extended periods. It features extremely high rigidity and supports ultra-fine support printing. Printed parts offer high dimensional accuracy, surface quality, and very low water absorption (0.02%). Outstanding wear and scratch resistance makes it ideal for high-temperature molds, gears, and components in thermal environments.',
    images: [], features: ['Long-term high-temperature resistance (140°C)', 'Ultra-rigid, wear & scratch resistant', 'High surface quality & dimensional accuracy', 'Ultra-low water absorption', 'Deformation & shrinkage resistant', 'High shape precision', 'Supports ultra-fine support printing'],
    applications: ['High-temperature molds', 'Gears & mechanical components', 'Industrial thermal environment parts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Professional SLA'],
    specs: { color: 'Gray', viscosity: '1785 mPa·s', liquidDensity: '1.188 g/cm³', solidDensity: '1.235 g/cm³', hardness: '97 Shore D', tensileStrength: '52.81 MPa', tensileModulus: '2270 MPa', elongationAtBreak: '2.80%', flexuralStrength: '97.88 MPa', flexuralModulus: '3548 MPa', izodImpact: '15.17 J/m', waterAbsorption: '0.02%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'sp64', name: 'SP64', tagline: 'Standard Pro Resin — low shrinkage, premium matte finish',
    category: 'Standard', order: 2, isFeatured: true,
    description: 'SP64 is a stable and reliable standard Pro resin. Printed parts feature low shrinkage deformation, high detail precision, and a matte, premium texture. Available in Light Peach, Black, Blue-gray, and Medium Gray. The go-to choice for miniatures, scale models, prototypes, and industrial parts.',
    images: [], features: ['Low shrinkage deformation', 'High detail precision', 'Matte, premium texture', 'Stable & reliable printing', 'Low water absorption (0.61%)', 'Easy to use'],
    applications: ['Miniatures & scale models', 'Large-scale static models', 'Prototypes', 'Home décor', 'Industrial parts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Most consumer SLA'],
    specs: { color: 'Light Peach / Black / Blue-gray / Medium Gray', viscosity: '495 mPa·s', liquidDensity: '1.105 g/cm³', solidDensity: '1.24 g/cm³', hardness: '95 Shore D', tensileStrength: '49.91 MPa', tensileModulus: '1667 MPa', elongationAtBreak: '5.99%', flexuralStrength: '82.9 MPa', flexuralModulus: '2718 MPa', izodImpact: '14.18 J/m', waterAbsorption: '0.61%' },
    bottleSize: '500ml, 1kg, 5kg, 25kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 6: WW123 + M70 ======
  {
    slug: 'ww123', name: 'WW123', tagline: 'Water-Washable Resin — the everyday resin, clean with water',
    category: 'Water Washable', order: 3, isFeatured: true,
    description: 'WW123 is a water washable resin that is almost not picky about users, printers, data, or environments. Directly cleaned with water, almost odorless. Near-water fluidity (12 mPa·s) adapts to large printing sizes and high-speed modes. Multiple vibrant colors. The "EVERYDAY RESIN" — beginner-friendly with high precision, non-cracking, and moisture resistance.',
    images: [], features: ['Washable with water — no IPA needed', 'Near-water fluidity (12 mPa·s)', 'Almost odorless', 'High precision & non-cracking', 'Moisture resistant', 'Multiple color options', 'Beginner-friendly', 'High-speed printing compatible'],
    applications: ['Everyday printing', 'Miniatures & figurines', 'Educational models', 'Large-size prints', 'Colored transparent parts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'High-speed printers'],
    specs: { color: 'Seawater Blue / Crystal Clear / Crystal Purple / Aqua Green / Flaming Orange / Cool Grey', viscosity: '12 mPa·s', liquidDensity: '1.092 g/cm³', solidDensity: '1.20 g/cm³', hardness: '85 Shore D', tensileStrength: '35 MPa', tensileModulus: '1470 MPa', elongationAtBreak: '9.00%', flexuralStrength: '64.65 MPa', flexuralModulus: '2007 MPa', izodImpact: '15-23.4 J/m', waterAbsorption: '5.71%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'm70', name: 'M70', tagline: 'High Precision Resin — salmon color, wear-resistant with matte clay-like surface',
    category: 'Standard', order: 4, isFeatured: true,
    description: 'M70 is a high-precision rigid resin in salmon color. Contains unique inorganic fillers for low shrinkage, wear resistance, and a matte, delicate surface. A favorite with action figure, BJD, and garage kit (GK) printers. Ideal for miniatures, precision parts, and liquid silicone mold casting.',
    images: [], features: ['Sharp details & high accuracy', 'Low deformation & shrinkage', 'Wear & scratch resistant', 'Matte surface, clay-like texture', 'Heat resistant', 'Contains unique inorganic fillers', 'Smooth surface finish'],
    applications: ['Action figures & high-detail GK', 'Miniatures', 'Precision prototypes', 'Master molds for silicone casting', 'BJD dolls'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Salmon', viscosity: '816 mPa·s', liquidDensity: '1.145 g/cm³', solidDensity: '1.233 g/cm³', hardness: '90 Shore D', tensileStrength: '32.25 MPa', tensileModulus: '1420 MPa', elongationAtBreak: '5%', flexuralStrength: '56.7 MPa', flexuralModulus: '2170 MPa', izodImpact: '15.5 J/m', waterAbsorption: '0.53%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 7: TH-BJD + Tough74 V2 ======
  {
    slug: 'th-bjd', name: 'TH-BJD', tagline: 'Non-Yellowing Wear-Resistant Tough BJD Resin — 4 colors',
    category: 'Tough / ABS-Like', order: 5, isFeatured: true,
    description: 'TH-BJD is a non-yellowing, wear-resistant tough material in four colors: Ultra White, Bronze, Cream White, and Cream Pink. The preferred BJD material. Suitable for action figure prototypes, joints without thin-wall structures, industrial prototypes, and parts requiring toughness and wear resistance.',
    images: [], features: ['Non-yellowing formula', 'Scratch & wear resistant', 'Smooth surface finish', '4 BJD-optimized colors', 'Good toughness for articulated parts', 'Easy to clean, resistant to thinners', 'Stiff-tough, accurate shape', 'Long-term crack resistance'],
    applications: ['BJD dolls', 'Articulated figures', 'Anime figures', 'Action figure prototypes', 'Functional parts', 'Enclosures & props', 'Home décor'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Ultra White / Bronze / Cream White / Cream Pink', viscosity: '651-675 mPa·s', liquidDensity: '1.129-1.132 g/cm³', solidDensity: '1.211-1.216 g/cm³', hardness: '80 Shore D', tensileStrength: '43.67-45.85 MPa', tensileModulus: '1422-1467 MPa', elongationAtBreak: '17-18%', flexuralStrength: '76.25-79.71 MPa', flexuralModulus: '2217-2312 MPa', izodImpact: '16-20 J/m', waterAbsorption: '1.05-1.16%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'tough74-v2', name: 'Tough74 V2', tagline: 'Wear-Resistant Tough Resin — improved precision, rigidity & toughness',
    category: 'Tough / ABS-Like', order: 6, isFeatured: false,
    description: 'Tough74 V2 offers improved precision, rigidity, and toughness over Tough74. With 34% elongation at break, it is ideal for movable action figure prototypes, joints, industrial prototypes, enclosures, and parts requiring short-term toughness and wear resistance.',
    images: [], features: ['Improved precision & rigidity over Tough74', '34% elongation — high ductility', 'Wear & scratch resistant', 'High precision', 'Smooth & delicate surface', 'No precipitation', 'ABS-like properties'],
    applications: ['Movable action figure prototypes', 'Joints & articulated parts', 'Industrial prototypes', 'Enclosures & housings', 'Functional parts for short-term use', 'Props'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Gray', viscosity: '630 mPa·s', liquidDensity: '1.123 g/cm³', solidDensity: '1.197 g/cm³', hardness: '80 Shore D', tensileStrength: '37.38 MPa', tensileModulus: '1256 MPa', elongationAtBreak: '34%', flexuralStrength: '59.16 MPa', flexuralModulus: '1862 MPa', izodImpact: '20-34 J/m', waterAbsorption: '0.96%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 8: Tough74 + G217 ======
  {
    slug: 'tough74', name: 'Tough74', tagline: 'Wear-Resistant Tough Resin — original formula, rigid & tough',
    category: 'Tough / ABS-Like', order: 7, isFeatured: false,
    description: 'Tough74 is a tough and wear-resistant 3D printing resin, ideal for prototyping articulated figures, joints without thin walls or slender posts, industrial prototypes, enclosures, and parts requiring short-term toughness and wear resistance. Smooth surface with high precision in black.',
    images: [], features: ['Wear-resistant', 'Scratch-resistant', 'Rigid & Tough (ABS-Like)', 'Smooth & delicate surface', 'High precision (black)', 'Easy to clean'],
    applications: ['Action figures', 'Prototypes', 'Functional parts for short-term use', 'Enclosures & props'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Black', viscosity: '864 mPa·s', liquidDensity: '1.116 g/cm³', solidDensity: '1.189 g/cm³', hardness: '91 Shore D', tensileStrength: '62.3 MPa', tensileModulus: '1880 MPa', elongationAtBreak: '17.88%', flexuralStrength: '80.4 MPa', flexuralModulus: '2250 MPa', izodImpact: '33-35 J/m', waterAbsorption: '1.07%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'g217', name: 'G217', tagline: 'Clear Tough Resin — non-yellowing, high transparency, frosted glass finish',
    category: 'Tough / ABS-Like', order: 8, isFeatured: false,
    description: 'G217 is a tough, non-yellowing, highly transparent resin with a slightly bluish tint. Print is semi-transparent like frosted glass; when sanded, becomes completely clear. Excellent toughness and stiffness — allows drilling, screw insertion, and high-stress modifications. One of few transparent resins with excellent detail and accuracy. Not suitable for underwater applications.',
    images: [], features: ['High transparency (frosted glass → clear when sanded)', 'Non-yellowing', 'Reduced overexposure', 'High rigidity & toughness', 'Low odor', 'Excellent detail & accuracy'],
    applications: ['Transparent special-effect parts', 'Transparent prototypes', 'Enclosures', 'Educational & scientific models', 'Artwork & home décor', 'High-strength impact-resistant parts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Clear (slightly bluish)', viscosity: '556 mPa·s', liquidDensity: '1.119 g/cm³', solidDensity: '1.198 g/cm³', hardness: '80 Shore D', tensileStrength: '33 MPa', tensileModulus: '1218 MPa', elongationAtBreak: '20.00%', flexuralStrength: '49 MPa', flexuralModulus: '1523 MPa', izodImpact: '17-33 J/m', waterAbsorption: '0.96%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 9: M58 + M68 ======
  {
    slug: 'm58', name: 'M58', tagline: 'Gray Tough Resin — rigid, tough, wear-resistant, smooth surface',
    category: 'Tough / ABS-Like', order: 9, isFeatured: false,
    description: 'M58 is a gray material known for its rigidity and toughness. Mechanical properties comparable to tough thermoplastics — allows drilling, screw insertion, and high-stress modifications. High molding precision, wear resistance, and a smooth surface that preserves fine details. Well-suited for miniatures, action figures, and functional parts. Not suitable for underwater applications.',
    images: [], features: ['Rigid and tough', 'High precision, smooth surface', 'Wear & scratch resistant', 'Low odor', 'Sharp details'],
    applications: ['Action figures & tabletop miniatures', 'Large-scale models', 'Mecha & mechanical models', 'Vehicle models', 'Master molds for silicone casting', 'Enclosures', 'Tooling fixtures', 'Props', 'Snap-fit components'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Gray', viscosity: '389 mPa·s', liquidDensity: '1.12 g/cm³', solidDensity: '1.20 g/cm³', hardness: '88 Shore D', tensileStrength: '52.3 MPa', tensileModulus: '1820 MPa', elongationAtBreak: '22.55%', flexuralStrength: '71.36 MPa', flexuralModulus: '2129 MPa', izodImpact: '22-42 J/m', waterAbsorption: '1.25%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'm68', name: 'M68', tagline: 'White Tough Resin — non-yellowing pure white, rigid & tough',
    category: 'Tough / ABS-Like', order: 10, isFeatured: false,
    description: 'M68 is known for its rigidity and toughness in pure white. Non-yellowing, with mechanical properties comparable to tough thermoplastics — allows drilling and screw insertion. Deeply loved by artists, toy producers, architects, and 3D printing services for its beautiful pure white appearance. Not suitable for underwater applications.',
    images: [], features: ['Rigid and tough', 'High-strength', 'Pure white, yellowing-resistant', 'Low odor'],
    applications: ['Enclosures', 'Figurines', 'Architectural models', 'Lighting fixtures', 'Artworks & home decor', 'Movie props', 'Prototypes', 'High-strength impact-resistant parts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Pure White', viscosity: '301 mPa·s', liquidDensity: '1.125 g/cm³', solidDensity: '1.192 g/cm³', hardness: '87 Shore D', tensileStrength: '54.3 MPa', tensileModulus: '1862 MPa', elongationAtBreak: '19.16%', flexuralStrength: '75.8 MPa', flexuralModulus: '2250 MPa', izodImpact: '22-42 J/m', waterAbsorption: '1.24%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 10: K + K+ ======
  {
    slug: 'k', name: 'K', tagline: 'Black Tough Resin — not prone to overexposure, accurate size & sharp details',
    category: 'Tough / ABS-Like', order: 11, isFeatured: false,
    description: 'K resin is known for excellent toughness and rigidity. Not prone to overexposure under strong light sources, ensuring accurate size and sharp details. Mechanical properties comparable to tough thermoplastics. Not suitable for underwater applications.',
    images: [], features: ['Excellent toughness & rigidity', 'Not prone to overexposure', 'Sharp fine details', 'High dimensional accuracy', 'Wear & scratch resistant'],
    applications: ['Functional parts', 'Prototypes', 'Miniatures', 'Enclosures', 'Tooling fixtures'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Black', viscosity: '335 mPa·s', liquidDensity: '1.122 g/cm³', solidDensity: '1.197 g/cm³', hardness: '83 Shore D', tensileStrength: '45 MPa', tensileModulus: '1512 MPa', elongationAtBreak: '18.60%', flexuralStrength: '67.2 MPa', flexuralModulus: '2080 MPa', izodImpact: '24-34 J/m', waterAbsorption: '1.02%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'k-plus', name: 'K+', tagline: 'Pure Black Tough Resin — injection-molded look, low water absorption, waterproof',
    category: 'Tough / ABS-Like', order: 12, isFeatured: false,
    description: 'K+ is a pure black, tough and rigid, wear-resistant material. Printed parts exhibit the look and feel of injection-molded components with excellent mechanical performance. Exceptional dimensional and detail accuracy. Low water absorption (0.30%) allows short-term use in outdoor, high-humidity, or underwater applications.',
    images: [], features: ['Hard and tough', 'Sharp details', 'High accuracy', 'Pure black appearance', 'Low water absorption (0.30%)', 'Wear & scratch resistant', 'Short-term waterproof OK'],
    applications: ['Functional verification components', 'Product enclosures', 'Precision parts', 'Tooling fixtures', 'Miniature accessories', 'End-use parts', 'Short-term waterproof parts', 'Snap-fit & assemblies'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Pure Black', viscosity: '316 mPa·s', liquidDensity: '1.105 g/cm³', solidDensity: '1.182 g/cm³', hardness: '85 Shore D', tensileStrength: '41 MPa', tensileModulus: '1444 MPa', elongationAtBreak: '25.70%', flexuralStrength: '63.41 MPa', flexuralModulus: '2020 MPa', izodImpact: '31-35 J/m', waterAbsorption: '0.30%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 11: TH-HR + CL-TH ======
  {
    slug: 'th-hr', name: 'TH-HR', tagline: 'High-Resolution Tough Resin — low shrinkage, clay-like matte finish',
    category: 'Tough / ABS-Like', order: 13, isFeatured: false,
    description: 'TH-HR is a high-resolution, low-shrinkage, high-precision tough material in White Clay and Red Clay. Suitable for ultra-fine GK, head sculpts, mecha models, miniatures, car models, master molds for liquid silicone, and precision prototypes requiring strength. Combines rigidity with toughness, matte finish, easy to clean.',
    images: [], features: ['High resolution & precision', 'Combines rigidity & toughness', 'Fine, smooth surface', 'Matte finish', 'Stable composition', 'Low shrinkage & deformation', 'Easy to clean', 'Precision fit'],
    applications: ['Ultra-fine GK', 'Head sculpts', 'Mecha models', 'Miniatures', 'Car models', 'Master molds for silicone', 'Precision prototypes', 'Functional parts for short-term use'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Red Clay / White Clay', viscosity: '768-821 mPa·s', liquidDensity: '1.138-1.139 g/cm³', solidDensity: '1.204-1.21 g/cm³', hardness: '87 Shore D', tensileStrength: '38.28-39.01 MPa', tensileModulus: '1087-1172 MPa', elongationAtBreak: '19-21%', flexuralStrength: '67.77-69.27 MPa', flexuralModulus: '1983-2026 MPa', izodImpact: '20-32 J/m', waterAbsorption: '1.19-1.22%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'cl-th', name: 'CL-TH', tagline: 'Colored Tough Resin — rich colors, ABS-like, high saturation',
    category: 'Tough / ABS-Like', order: 14, isFeatured: false,
    description: 'CL-TH is a color-rich ABS-like resin with extremely high saturation and excellent opacity. Vivid, striking prints with outstanding rigidity and toughness, excellent wear and scratch resistance, and superior anti-shrinkage and anti-deformation properties. Ideal for static and articulated figures, accessories, brick-style toys, miniature models, and functional prototypes.',
    images: [], features: ['Rich, customizable colors', 'Strong coverage & high saturation', 'Excellent toughness & rigidity', 'Good wear & scratch resistance', 'Firm joints', 'Low shrinkage & deformation'],
    applications: ['Designer toys', 'Mecha models & mod kits', 'Building block toys', 'Articulated action figures', 'Car models', 'Large-scale statues', 'Miniatures', 'Cosplay props', 'Accessories & charms', 'Functional prototypes'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Multiple rich colors', viscosity: '847 mPa·s', liquidDensity: '1.127 g/cm³', solidDensity: '1.205 g/cm³', hardness: '82-85 Shore D', tensileStrength: '32-44 MPa', elasticModulus: '1070-1670 MPa', elongationAtBreak: '19.7-28%', flexuralStrength: '55-65 MPa', flexuralModulus: '1940-2060 MPa', izodImpact: '17-18.8 J/m', waterAbsorption: '0.29%', hdt: '61.9-63.2°C' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 12: WW-ABS + Anti-impact ======
  {
    slug: 'ww-abs', name: 'WW-ABS', tagline: 'Water-Washable ABS-Like Resin — tough, easy water cleanup',
    category: 'Water Washable', order: 15, isFeatured: false,
    description: 'Water-washable ABS-like resin combining the convenience of water cleanup with ABS-like mechanical performance. Tough and durable with easy post-processing.',
    images: [], features: ['Water washable', 'ABS-like toughness', 'Easy post-processing', 'Durable prints'],
    applications: ['Functional prototypes', 'Everyday prints', 'Educational models'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Gray', viscosity: '—', liquidDensity: '—', solidDensity: '—', hardness: '—', tensileStrength: '28.8 MPa', elasticModulus: '699.6 MPa', elongationAtBreak: '16%', flexuralStrength: '35.8 MPa', flexuralModulus: '1220 MPa', izodImpact: '17.6 J/m', waterAbsorption: '—' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'anti-impact', name: 'Anti-Impact', tagline: 'Durable Nylon-Like Resin — exceptional impact resistance',
    category: 'Tough / ABS-Like', order: 16, isFeatured: false,
    description: 'Anti-Impact resin delivers exceptional durability with nylon-like performance. Engineered for parts that must withstand drops, impacts, and rough handling. Outstanding inter-layer adhesion and long-term crack resistance.',
    images: [], features: ['Exceptional impact resistance', 'Nylon-like durability', 'Long-term crack resistance', 'Excellent inter-layer adhesion'],
    applications: ['Drop-resistant enclosures', 'Protective equipment', 'High-wear mechanical parts', 'Drone & RC components'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'White-Grey / Black', viscosity: '928 / 609 mPa·s', liquidDensity: '1.075 / 1.07 g/cm³', solidDensity: '1.137 / 1.105 g/cm³', hardness: '79 / 73 Shore D', tensileStrength: '27 / 26.8 MPa', tensileModulus: '756 / 910 MPa', elongationAtBreak: '93.00% / 94.70%', flexuralStrength: '34 / 27 MPa', flexuralModulus: '1098 / 760 MPa', izodImpact: '46-98 / 67-75 J/m', waterAbsorption: '0.45% / 0.42%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 13: TH72 + TH-MINI ======
  {
    slug: 'th72', name: 'TH72', tagline: 'Long-Lasting Non-Brittle Resin — stays tough over time',
    category: 'Tough / ABS-Like', order: 17, isFeatured: false,
    description: 'TH72 is a long-lasting non-brittle resin designed to maintain its toughness over time. Available in White, Matte Gray, and Medium Grey.',
    images: [], features: ['Long-lasting non-brittle', 'Retains toughness over time', 'Multiple color options'],
    applications: ['Functional parts', 'Prototypes requiring longevity', 'Display models'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'White / Matte Gray / Medium Grey', viscosity: '516 mPa·s', liquidDensity: '1.112 g/cm³', solidDensity: '1.198 g/cm³', hardness: '75 Shore D', tensileStrength: '26.23 MPa', tensileModulus: '541 MPa', elongationAtBreak: '29.35%', flexuralStrength: '16.9 MPa', flexuralModulus: '556 MPa', izodImpact: '22-29 J/m', waterAbsorption: '0.69%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'th-mini', name: 'TH-MINI', tagline: 'Durable Miniature Resin — for tiny, detailed prints',
    category: 'Tough / ABS-Like', order: 18, isFeatured: false,
    description: 'TH-MINI is a durable resin specifically formulated for miniature printing. Fine detail reproduction with enough toughness to handle small, delicate parts without breaking.',
    images: [], features: ['Durable for miniature scale', 'Fine detail reproduction', 'Tough enough for handling'],
    applications: ['Miniatures', 'Tabletop gaming figures', 'Small precision parts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Gray', viscosity: '450 mPa·s', liquidDensity: '1.099 g/cm³', solidDensity: '1.167 g/cm³', hardness: '75-80 Shore D', tensileStrength: '15 MPa', tensileModulus: '380 MPa', elongationAtBreak: '45.60%', flexuralStrength: '18.3 MPa', flexuralModulus: '480 MPa', izodImpact: '60-66 J/m', waterAbsorption: '0.40%' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 14: TH-WW + F69 ======
  {
    slug: 'th-ww', name: 'TH-WW', tagline: 'Tough Water-Washable Resin — tough meets easy water cleanup',
    category: 'Water Washable', order: 19, isFeatured: false,
    description: 'TH-WW combines toughness with water washability. No IPA needed — just rinse with water. Available in Gray and Flaming Orange.',
    images: [], features: ['Water washable — no IPA needed', 'Tough mechanical properties', 'Easy post-processing', 'Gray and Flaming Orange options'],
    applications: ['Functional prototypes', 'Everyday tough prints', 'Educational use'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Gray / Flaming Orange', viscosity: '800 mPa·s', liquidDensity: '1.131 g/cm³', solidDensity: '1.215 g/cm³', hardness: '70 Shore D', tensileStrength: '17.38 MPa', tensileModulus: '446 MPa', elongationAtBreak: '24.18%', flexuralStrength: '19.4 MPa', flexuralModulus: '670 MPa', izodImpact: '28.9 J/m', waterAbsorption: '16.70%' },
    bottleSize: '500ml, 1kg, 5kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'f69', name: 'F69', tagline: 'Black Flexible Resin — soft, elastic, rubber-like',
    category: 'Flexible', order: 20, isFeatured: false,
    description: 'F69 is a black flexible resin producing rubber-like prints. Soft and elastic with good tear resistance, ideal for applications requiring flexibility and a soft touch.',
    images: [], features: ['Rubber-like flexibility', 'Soft touch', 'Black color', 'Good tear resistance'],
    applications: ['Soft-touch grips', 'Gaskets & seals', 'Wearable devices', 'Flexible components'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Black', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 15: F39 + F39T ======
  {
    slug: 'f39', name: 'F39', tagline: 'White Flexible Resin — soft, elastic, rubber-like',
    category: 'Flexible', order: 21, isFeatured: false,
    description: 'F39 is a white flexible resin producing rubber-like prints. Ideal for applications requiring flexibility combined with a clean white appearance.',
    images: [], features: ['Rubber-like flexibility', 'White color', 'Soft touch', 'Good elasticity'],
    applications: ['Soft-touch grips', 'Wearable devices', 'Flexible prototypes', 'Medical training models'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'White', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'f39t', name: 'F39T', tagline: 'Transparent Flexible Resin — clear elastic material',
    category: 'Flexible', order: 22, isFeatured: false,
    description: 'F39T is a transparent flexible resin offering optical clarity combined with rubber-like elasticity. Ideal for applications requiring both flexibility and transparency.',
    images: [], features: ['Transparent', 'Flexible & elastic', 'Optical clarity', 'Rubber-like feel'],
    applications: ['Transparent flexible parts', 'Optical prototypes', 'Wearable devices', 'Special effect parts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Transparent', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 16: FX60 + ESD Flex ======
  {
    slug: 'fx60', name: 'FX60', tagline: 'Flexible Resin — general purpose elastic material',
    category: 'Flexible', order: 23, isFeatured: false,
    description: 'FX60 is a general-purpose flexible resin providing reliable rubber-like properties for a wide range of applications.',
    images: [], features: ['Rubber-like', 'General purpose', 'Reliable flexibility', 'Easy to print'],
    applications: ['Soft-touch parts', 'Gaskets', 'Wearable prototypes', 'Flexible connectors'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: '—', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'esd-flex', name: 'ESD Flex', tagline: 'Anti-Static Flexible Resin — ESD-safe elastic material',
    category: 'Flexible', order: 24, isFeatured: false,
    description: 'ESD Flex is an anti-static flexible resin for applications requiring electrostatic discharge protection. Combines rubber-like flexibility with ESD-safe properties.',
    images: [], features: ['Anti-static / ESD-safe', 'Flexible & elastic', 'Rubber-like feel', 'Static dissipative'],
    applications: ['Electronics handling trays', 'ESD-safe fixtures', 'Clean room equipment', 'Static-sensitive component holders'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: '—', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 17: EB80/EB60 + EHP80/EHP60 ======
  {
    slug: 'eb80-eb60', name: 'EB80/EB60', tagline: 'High-Performance Elastic Resin — premium elasticity & rebound',
    category: 'Flexible', order: 25, isFeatured: false,
    description: 'EB80 and EB60 are high-performance elastic resins offering premium elasticity and rebound properties. Designed for applications requiring repeated deformation and recovery.',
    images: [], features: ['High-performance elasticity', 'Excellent rebound', 'Repeated deformation recovery', 'Premium quality'],
    applications: ['Cushioning components', 'Seals & gaskets', 'Wearable medical devices', 'Impact absorption'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: '—', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'ehp80-ehp60', name: 'EHP80/EHP60', tagline: 'High-Performance Elastic Resin — superior rebound',
    category: 'Flexible', order: 26, isFeatured: false,
    description: 'EHP80 and EHP60 are high-performance elastic resins with superior rebound characteristics. Engineered for the most demanding elastic applications.',
    images: [], features: ['Superior rebound', 'High-performance elasticity', 'Durable under repeated stress'],
    applications: ['High-performance seals', 'Precision cushioning', 'Industrial elastic components'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: '—', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 18: EL80/EL60 + F80 ======
  {
    slug: 'el80-el60', name: 'EL80/EL60', tagline: 'High-Performance Elastic Resin — reliable elasticity',
    category: 'Flexible', order: 27, isFeatured: false,
    description: 'EL80 and EL60 are high-performance elastic resins providing reliable elasticity for a broad range of applications. Consistent mechanical performance across varied conditions.',
    images: [], features: ['Reliable elasticity', 'Consistent performance', 'Broad application range'],
    applications: ['General elastic components', 'Soft-touch consumer products', 'Protective cases'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: '—', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'f80', name: 'F80', tagline: 'Elastic/Gingival-Like Resin — mimics gum tissue, Black & Pink',
    category: 'Dental', order: 28, isFeatured: false,
    description: 'F80 is an elastic, gingival-like resin designed to mimic gum tissue properties. Ideal for dental models requiring realistic soft tissue simulation. Available in Black and Pink.',
    images: [], features: ['Gingival-like elasticity', 'Realistic soft tissue simulation', 'Black & Pink options'],
    applications: ['Dental models with soft tissue', 'Gingiva simulation', 'Surgical planning models', 'Dental education'],
    compatibleWith: ['All 405nm LCD', '385nm DLP'],
    specs: { color: 'Black / Pink', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 19: GM01 + D01 ======
  {
    slug: 'gm01', name: 'GM01', tagline: 'Gingiva Mask Resin — soft tissue simulation for dental',
    category: 'Dental', order: 29, isFeatured: false,
    description: 'GM01 is a gingiva mask resin specifically formulated for dental applications requiring realistic gum tissue simulation. Soft, flexible, and color-matched to natural gingiva.',
    images: [], features: ['Realistic gingiva simulation', 'Soft & flexible', 'Natural gum color', 'Dental-specific formulation'],
    applications: ['Gingiva masks', 'Dental implant models', 'Periodontal models', 'Dental education'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Dental printers'],
    specs: { color: 'Gingiva Pink', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'd01', name: 'D01', tagline: 'Dental Model Resin — high accuracy for dental applications',
    category: 'Dental', order: 30, isFeatured: false,
    description: 'D01 is a high-accuracy dental model resin designed for precise dental models. Produces smooth, accurate models suitable for crowns, bridges, aligners, and diagnostic applications.',
    images: [], features: ['High accuracy', 'Smooth surface', 'Dental-optimized', 'Reliable consistency'],
    applications: ['Dental models', 'Crown & bridge models', 'Aligner models', 'Diagnostic casts', 'Surgical guides'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Dental printers'],
    specs: { color: 'Beige', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  // ====== PAGE 20: D01S + C01 ======
  {
    slug: 'd01s', name: 'D01S', tagline: 'Dental Model Resin — enhanced version, improved accuracy',
    category: 'Dental', order: 31, isFeatured: false,
    description: 'D01S is an enhanced version of D01 dental model resin, offering improved accuracy and surface quality for the most demanding dental applications.',
    images: [], features: ['Enhanced accuracy', 'Improved surface quality', 'Dental-optimized', 'Premium consistency'],
    applications: ['High-precision dental models', 'Implant models', 'Orthodontic applications', 'Premium diagnostic casts'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Dental printers'],
    specs: { color: 'Beige', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
  {
    slug: 'c01', name: 'C01', tagline: 'Dental Castable Resin — clean burnout for dental casting',
    category: 'Dental', order: 32, isFeatured: false,
    description: 'C01 is a dental castable resin formulated for clean burnout with minimal ash residue. Ideal for dental crowns, bridges, and frameworks using the lost-wax casting method.',
    images: [], features: ['Clean burnout', 'Minimal ash residue', 'Dental casting optimized', 'Smooth surface finish'],
    applications: ['Dental crowns', 'Bridges', 'Frameworks', 'Metal casting patterns'],
    compatibleWith: ['All 405nm LCD', '385nm DLP', 'Dental printers'],
    specs: { color: 'Wax-like', viscosity: '—', hardness: '—', tensileStrength: '—' },
    bottleSize: '500ml, 1kg', minOrder: '10 kg', leadTime: '3-7 days',
  },
];
