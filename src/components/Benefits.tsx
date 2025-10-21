import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Zap,
  Leaf,
  Heart,
  Star,
  Truck,
  RefreshCw,
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Pure & Natural",
      description:
        "No artificial additives, preservatives, or chemicals. Just pure, natural goodness from farm to your table.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Long Shelf Life",
      description:
        "Sun-dried and properly stored, our powders maintain their nutritional value for months without refrigeration.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Easy to Use",
      description:
        "Simply mix with water, milk, or add to your favorite recipes. No cooking or preparation needed.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Organic & Sustainable",
      description:
        "Sourced from certified organic farms that follow sustainable farming practices.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Nutrient Dense",
      description:
        "Concentrated nutrition - a small amount provides maximum health benefits.",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Traditional Methods",
      description:
        "Using time-tested sun-drying techniques passed down through generations.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Delivery",
      description:
        "Free shipping on orders above ₹500. Fast, secure delivery across India.",
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Money Back Guarantee",
      description:
        "Not satisfied? We offer 100% money-back guarantee on all our products.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Why Choose First Crush?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the benefits that make our crushed powders the perfect
            choice for your family
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-green-50 to-green-100 p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              Join 10,000+ Happy Families
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our customers trust us for their daily nutrition needs. From busy
              parents to health-conscious individuals, everyone loves the
              convenience and quality of First Crush powders.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
              <div>•</div>
              <div>10,000+ Happy Customers</div>
              <div>•</div>
              <div>50+ Products</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
