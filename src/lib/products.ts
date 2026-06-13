// 产品类型定义
export interface ProductSpecifications {
  color: string;
  viscosity: string;          // 粘度 (cP @25°C)
  density: string;            // 密度 (g/cm³)
  tensileStrength: string;    // 拉伸强度 (MPa)
  elongationAtBreak: string;  // 断裂伸长率 (%)
  flexuralStrength: string;   // 弯曲强度 (MPa)
  flexuralModulus: string;    // 弯曲模量 (MPa)
  hardness: string;           // 硬度 (Shore D)
  hdt: string;                // 热变形温度 (°C)
  wavelength: string;         // 固化波长
  shrinkage: string;          // 体积收缩率 (%)
  bottleSize: string[];       // 瓶装规格
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: 'standard' | 'tough' | 'flexible' | 'high-temp' |
    'dental' | 'casting' | 'water-washable' | 'specialty' | 'anti-impact' | 'transparent';
  description: string;
  images: string[];
  specifications: ProductSpecifications;
  features: string[];
  applications: string[];
  compatibleWith: string[];
  sdsFile?: string;
  tdsFile?: string;
  minOrder: string;
  leadTime: string;
  isFeatured: boolean;
  order: number;
}

export interface ProductCategory {
  key: string;
  name: string;
  description: string;
  icon: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { key: 'standard', name: 'Standard', description: 'High-precision standard resins for general-purpose printing', icon: '🔧' },
  { key: 'tough', name: 'Tough / ABS-Like', description: 'Engineering-grade tough resins with excellent impact resistance', icon: '🛡️' },
  { key: 'flexible', name: 'Flexible / Elastic', description: 'Rubber-like flexible and elastic resins for soft-touch applications', icon: '🔗' },
  { key: 'high-temp', name: 'High Temperature', description: 'Heat-resistant resins for demanding thermal environments', icon: '🔥' },
  { key: 'dental', name: 'Dental', description: 'Dental model, gingiva, and castable resins for dental professionals', icon: '🦷' },
  { key: 'water-washable', name: 'Water Washable', description: 'Easy-to-clean resins — rinse with water, no IPA required', icon: '💧' },
];
