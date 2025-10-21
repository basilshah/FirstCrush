import type { Product } from "../types/product";

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Carrot Powder",
    description:
      "Pure, sun-dried carrot powder rich in beta-carotene and vitamins.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=800&auto=format&fit=crop",
    category: "Vegetable Powders",
    weight: "100g",
    benefits: [
      "Rich in Vitamin A",
      "Boosts immunity",
      "Good for eyesight",
      "Natural antioxidant",
    ],
    ingredients: "100% Pure Carrot",
    shelfLife: "12 months",
    origin: "Organic farms, India",
    isPopular: true,
  },
  {
    id: "p2",
    name: "Ragi (Finger Millet) Powder",
    description: "Nutritious ragi powder, perfect for babies and adults alike.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
    category: "Grain Powders",
    weight: "500g",
    benefits: [
      "High in calcium",
      "Rich in iron",
      "Gluten-free",
      "Good for bone health",
    ],
    ingredients: "100% Pure Ragi",
    shelfLife: "6 months",
    origin: "Traditional farms, Karnataka",
    isPopular: true,
  },
  {
    id: "p3",
    name: "ABC Powder Mix",
    description: "Apple, Beetroot, Carrot blend - a powerhouse of nutrients.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=800&auto=format&fit=crop",
    category: "Mixed Powders",
    weight: "200g",
    benefits: [
      "Complete nutrition",
      "Boosts energy",
      "Detoxifies body",
      "Rich in vitamins",
    ],
    ingredients: "Apple, Beetroot, Carrot (1:1:1 ratio)",
    shelfLife: "8 months",
    origin: "Organic farms, India",
    isNew: true,
  },
  {
    id: "p4",
    name: "Beetroot Powder",
    description: "Pure beetroot powder for natural color and nutrition.",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
    category: "Vegetable Powders",
    weight: "100g",
    benefits: [
      "Natural colorant",
      "Rich in iron",
      "Supports heart health",
      "Boosts stamina",
    ],
    ingredients: "100% Pure Beetroot",
    shelfLife: "10 months",
    origin: "Organic farms, India",
  },
  {
    id: "p5",
    name: "Moringa Powder",
    description: "Superfood moringa powder with 90+ nutrients.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=800&auto=format&fit=crop",
    category: "Superfood Powders",
    weight: "100g",
    benefits: [
      "90+ nutrients",
      "High in protein",
      "Boosts immunity",
      "Natural energy",
    ],
    ingredients: "100% Pure Moringa Leaves",
    shelfLife: "12 months",
    origin: "Organic farms, Tamil Nadu",
    isPopular: true,
  },
  {
    id: "p6",
    name: "Turmeric Powder",
    description: "Pure, organic turmeric powder with curcumin benefits.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1609501676725-7186f71d0a0a?q=80&w=800&auto=format&fit=crop",
    category: "Spice Powders",
    weight: "100g",
    benefits: [
      "Anti-inflammatory",
      "Boosts immunity",
      "Natural antiseptic",
      "Supports digestion",
    ],
    ingredients: "100% Pure Turmeric",
    shelfLife: "18 months",
    origin: "Traditional farms, Kerala",
  },
  {
    id: "p7",
    name: "Spinach Powder",
    description: "Nutrient-dense spinach powder for daily nutrition.",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=800&auto=format&fit=crop",
    category: "Vegetable Powders",
    weight: "100g",
    benefits: [
      "High in iron",
      "Rich in folate",
      "Supports bone health",
      "Natural detox",
    ],
    ingredients: "100% Pure Spinach",
    shelfLife: "8 months",
    origin: "Organic farms, India",
  },
  {
    id: "p8",
    name: "Amla Powder",
    description: "Vitamin C rich amla powder for immunity and health.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1609501676725-7186f71d0a0a?q=80&w=800&auto=format&fit=crop",
    category: "Fruit Powders",
    weight: "100g",
    benefits: [
      "High in Vitamin C",
      "Boosts immunity",
      "Natural antioxidant",
      "Supports hair health",
    ],
    ingredients: "100% Pure Amla",
    shelfLife: "12 months",
    origin: "Traditional farms, India",
  },
];

// Placeholder: Replace with SheetDB fetch when ready
// Example structure using SheetDB (https://sheetdb.io/)
// export async function fetchProducts(): Promise<Product[]> {
// 	const endpoint = import.meta.env.VITE_SHEETDB_URL; // e.g., https://sheetdb.io/api/v1/XXXXX
// 	const res = await fetch(endpoint);
// 	if (!res.ok) throw new Error('Failed to fetch products');
// 	// Map your sheet fields to Product
// 	const data = await res.json();
// 	return data.map((row: any) => ({
// 		id: String(row.id ?? crypto.randomUUID()),
// 		name: String(row.name),
// 		description: String(row.description ?? ''),
// 		price: Number(row.price ?? 0),
// 		image: String(row.image ?? ''),
// 	}));
// }
