export type UnitSystem = 'cm' | 'in';

export type FitPreference = 'slim' | 'regular' | 'oversized';

export type ClothingCategory = 'tops' | 'bottoms' | 'outerwear' | 'shoes';

export interface UserMeasurements {
  height: number;    // stored in cm
  chest: number;     // stored in cm
  waist: number;     // stored in cm
  shoulders: number; // stored in cm
  hips: number;      // stored in cm
  inseam: number;    // stored in cm
  weight?: number;   // stored in kg
  fitPreference: FitPreference;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  measurements?: UserMeasurements;
  createdAt: string;
  updatedAt: string;
}

export interface SizeChartEntry {
  size: string; // e.g. "XS", "S", "M", "L", "XL", "XXL"
  chestMin: number;
  chestMax: number;
  waistMin: number;
  waistMax: number;
  hipsMin?: number;
  hipsMax?: number;
  heightMin?: number;
  heightMax?: number;
  shouldersMin?: number;
  shouldersMax?: number;
  inseamMin?: number;
  inseamMax?: number;
}

export interface Brand {
  id: string;
  name: string;
  logoText: string;
  tagline: string;
  description: string;
  categories: ClothingCategory[];
  sizeCharts: {
    tops?: SizeChartEntry[];
    bottoms?: SizeChartEntry[];
  };
}

export interface Product {
  id: string;
  brandId: string;
  brandName: string;
  name: string;
  category: ClothingCategory;
  price: number;
  imageUrl: string;
  description: string;
  availableSizes: string[];
}

export interface SizeRecommendation {
  recommendedSize: string;
  confidence: number; // 0 to 100%
  fitDetails: {
    area: string;
    status: 'perfect' | 'tight' | 'loose';
    differenceCm: number;
  }[];
  isApproximate: boolean;
  advice: string;
  alternativeSize?: string;
  alternativeReason?: string;
}
