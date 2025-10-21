import { motion } from "framer-motion";
import { Leaf, Award, Users, Heart } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "100% Natural",
      description: "No artificial colors, flavors, or preservatives",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Sourced from organic farms across India",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Family Business",
      description: "Three generations of traditional knowledge",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health First",
      description: "Every product is made with your wellness in mind",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              About First Crush
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your trusted source for pure, natural crushed powders
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-left"
          >
            <div className="prose prose-lg mx-auto max-w-none text-gray-600">
              <p className="text-lg leading-relaxed">
                For over three decades, First Crush has been dedicated to
                bringing you the purest, most nutritious crushed powders
                straight from nature. What started as a small family business in
                rural India has grown into a trusted brand that values quality,
                authenticity, and your health above all else.
              </p>
              <p className="mt-6 text-lg leading-relaxed">
                Our journey began when our founder, inspired by traditional
                Indian wisdom, started sun-drying vegetables and fruits to
                preserve their nutrients. Today, we continue this legacy using
                time-tested methods combined with modern quality standards to
                ensure every powder maintains its natural goodness.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl bg-green-600 px-8 py-12 text-white"
          >
            <h3 className="text-2xl font-semibold">Our Promise to You</h3>
            <p className="mt-4 text-lg opacity-90">
              Every product is carefully crafted, tested for purity, and packed
              with love. We believe that good health starts with natural,
              unprocessed ingredients, and that's exactly what we deliver to
              your doorstep.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
