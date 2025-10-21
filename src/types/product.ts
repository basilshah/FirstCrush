export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // price in smallest currency unit or decimal
  image: string; // URL
  category: string;
  weight: string; // e.g., "100g", "250g", "500g"
  benefits: string[];
  ingredients: string;
  shelfLife: string;
  origin: string;
  isPopular?: boolean;
  isNew?: boolean;
}
