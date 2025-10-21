import { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import ProductGrid from "./components/ProductGrid";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CartButton from "./components/CartButton";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import { CartProvider, useCartContext } from "./context/CartContext";
import { mockProducts } from "./data/mockProducts";
import toast, { Toaster } from "react-hot-toast";

function AppContent() {
  const { addItem, totalCount } = useCartContext();
  const [open, setOpen] = useState(false);
  const products = useMemo(() => mockProducts, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-14">
        <Hero />
        <About />
        <Benefits />
        <ProductGrid
          products={products}
          onAdd={(p) => {
            addItem(p);
            toast.success("Added to cart");
          }}
        />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
      <CartButton count={totalCount} onClick={() => setOpen(true)} />
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
      <Toaster position="bottom-center" />
    </CartProvider>
  );
}
