import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-green-50 via-white to-[#faf6f1] md:min-h-0">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-green-200/30 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-6 md:py-24">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700 shadow">
          <Leaf />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-semibold leading-tight text-gray-900 md:text-6xl"
        >
          First Crush
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Homemade, natural crushed powders — no artificial colors or flavors,
          no preservatives.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={() => {
              const el = document.getElementById("first-product");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                // fallback to products section
                const sec = document.getElementById("products");
                sec?.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="rounded-2xl bg-green-600 px-6 py-3 text-white shadow transition hover:-translate-y-0.5 hover:bg-green-700"
          >
            Shop Now
          </button>
          <a
            href="#contact"
            className="rounded-2xl border border-gray-300 px-6 py-3 text-gray-700 transition hover:bg-gray-50"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
