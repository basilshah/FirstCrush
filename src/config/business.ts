// Business Configuration
// Update these values with your actual business information

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const instagramHandle = import.meta.env.VITE_INSTAGRAM_HANDLE;
const emailAddress = import.meta.env.VITE_EMAIL;

export const businessConfig = {
  // Contact Information
  whatsapp: {
    number: whatsappNumber,
    message: "Hello! I'd like to place this order:",
  },

  instagram: {
    handle: instagramHandle,
  },

  email: {
    address: emailAddress,
    subject: "Inquiry about First Crush Products",
  },

  // Business Details
  company: {
    name: "First Crush",
    tagline: "DO MORE OF WHAT YOU LOVE",
    description:
      "Homemade, natural crushed powders — no artificial colors or flavors, no preservatives.",
    fullDescription:
      "Pure, natural goodness in one simple scoop, crafted from gently freeze-dried fruits and vegetables. Say goodbye to chalky powders and unpronounceable ingredients – just vibrant health, effortlessly.",
  },

  // Shipping & Policies
  shipping: {
    freeShippingThreshold: 500, // Free shipping above ₹500
    deliveryTime: "3-7 business days",
    deliveryAreas: "Pan India",
  },

  returnPolicy: {
    days: 7, // Return within 7 days
    refundTime: "3-5 business days",
  },

  // Social Proof
  stats: {
    happyCustomers: "10,000+",
    averageRating: "4.9",
    recommendationRate: "98%",
    totalProducts: "50+",
  },

  // Features/Benefits
  features: [
    "100% Pure & Natural",
    "Long Shelf Life",
    "Easy to Use",
    "Organic & Sustainable",
    "Nutrient Dense",
    "Traditional Methods",
    "Free Delivery",
    "Money Back Guarantee",
  ],

  // Company Story
  about: {
    founded: "over three decades",
    origin: "rural India",
    mission:
      "bringing you the purest, most nutritious crushed powders straight from nature",
    values: [
      "100% Natural - No artificial colors, flavors, or preservatives",
      "Premium Quality - Sourced from organic farms across India",
      "Family Business - Three generations of traditional knowledge",
      "Health First - Every product is made with your wellness in mind",
    ],
  },

  // FAQ Content
  faq: [
    {
      question: "How are your crushed powders made?",
      answer:
        "Our powders are made using traditional sun-drying methods. Fresh vegetables, fruits, and grains are carefully selected, cleaned, and sun-dried naturally. They are then ground into fine powder using traditional stone grinding techniques to preserve maximum nutrients.",
    },
    {
      question: "Are your products organic?",
      answer:
        "Yes, all our products are sourced from certified organic farms across India. We work directly with farmers who follow sustainable farming practices without using harmful pesticides or chemicals.",
    },
    {
      question: "How long do the powders last?",
      answer:
        "Our powders have a shelf life of 6-18 months depending on the product. Store them in a cool, dry place away from direct sunlight. The exact shelf life is mentioned on each product package.",
    },
    {
      question: "How do I use these powders?",
      answer:
        "It's very simple! Mix 1-2 teaspoons of powder with water, milk, or your favorite smoothie. You can also add them to soups, curries, or baked goods. Start with small amounts and adjust according to your taste.",
    },
    {
      question: "Are these powders safe for children?",
      answer:
        "Yes, our powders are safe for children above 6 months. However, we recommend consulting with your pediatrician before introducing any new food to your baby's diet. Start with very small amounts.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Yes! We offer special discounts for bulk orders. Contact us via WhatsApp for custom pricing on orders above 5kg. We also have special rates for retailers and distributors.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer 100% money-back guarantee if you're not satisfied with our products. Contact us within 7 days of delivery for returns. We'll process your refund within 3-5 business days.",
    },
    {
      question: "How do I place an order?",
      answer:
        "You can place orders through our website by adding products to cart and checking out via WhatsApp. You can also directly message us on WhatsApp with your order requirements. We accept payments via UPI, net banking, and cash on delivery.",
    },
    {
      question: "Do you deliver pan India?",
      answer:
        "Yes, we deliver across India. We offer free shipping on orders above ₹500. Delivery usually takes 3-7 business days depending on your location. We use reliable courier partners for safe delivery.",
    },
    {
      question: "Can I customize my order?",
      answer:
        "Absolutely! We offer custom blends and special packaging options. Contact us via WhatsApp to discuss your specific requirements. We can create personalized powder mixes based on your nutritional needs.",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "I've been using First Crush powders for my 2-year-old daughter for 6 months now. The carrot powder is her favorite! It's so convenient and I know she's getting all the nutrients she needs.",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "The ABC powder mix is amazing! I add it to my morning smoothie and feel energized throughout the day. The quality is excellent and the taste is natural. Highly recommended!",
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "As a working mom, these powders are a lifesaver! I can quickly add nutrition to any meal. The moringa powder has helped boost my energy levels significantly.",
    },
    {
      name: "Dr. Suresh Reddy",
      location: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1612349317153-e413531c2a57?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "I recommend First Crush powders to my patients. The purity and quality are exceptional. These are perfect for people who want natural nutrition without any artificial additives.",
    },
    {
      name: "Meera Singh",
      location: "Pune",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "The ragi powder is perfect for my elderly mother. It's easy to digest and provides all the calcium she needs. The packaging is also very convenient and stays fresh for months.",
    },
    {
      name: "Vikram Joshi",
      location: "Chennai",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "I've tried many brands, but First Crush stands out for its authenticity. The turmeric powder is the best I've ever used. The color and aroma are exactly like fresh turmeric.",
    },
  ],
};

const whatsappUrl = `https://wa.me/${businessConfig.whatsapp.number}`;
const instagramUrl = `https://instagram.com/${businessConfig.instagram.handle}`;
const emailUrl = `mailto:${
  businessConfig.email.address
}?subject=${encodeURIComponent(businessConfig.email.subject)}`;

// Export individual sections for easier imports
export const {
  whatsapp,
  instagram,
  email,
  company,
  shipping,
  returnPolicy,
  stats,
  features,
  about,
  faq,
  testimonials,
} = businessConfig;
export { whatsappUrl, instagramUrl, emailUrl };
