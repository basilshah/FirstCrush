import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useMemo, useEffect } from "react";
import { useCartContext } from "../context/CartContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } =
    useCartContext();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const whatsappLink = useMemo(() => {
    const number =
      (import.meta.env.VITE_WHATSAPP_NUMBER as string) || "91XXXXXXXXXX";
    const lines = ["Hello! I'd like to place this order:"];
    for (const i of items) {
      lines.push(
        `- ${i.product.name} x ${i.quantity} = ₹${i.product.price * i.quantity}`
      );
    }
    lines.push(`Total: ₹${totalPrice}`);
    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${number}?text=${text}`;
  }, [items, totalPrice]);

  const isMobile = useMemo(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-gradient-to-b from-white to-gray-50 shadow-xl ring-1 ring-black/5 md:max-w-lg md:rounded-l-3xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white/80 px-6 py-5 backdrop-blur">
              <div>
                <h3 className="text-xl font-semibold">Your Cart</h3>
                <p className="text-xs text-gray-500">
                  {items.length} item{items.length !== 1 ? "s" : ""}
                </p>
              </div>
              <button
                aria-label="Close cart"
                onClick={onClose}
                className="rounded-full p-2 hover:bg-gray-100 active:scale-95"
              >
                <X />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    🛍️
                  </div>
                  <p className="text-gray-800 font-medium">
                    Your cart is empty
                  </p>
                  <p className="max-w-[26ch] text-sm text-gray-500">
                    Browse products and add your favorites to order via
                    WhatsApp.
                  </p>
                </div>
              ) : (
                <div className="mt-4 space-y-4">
                  {items.map((i) => {
                    const lineTotal = i.product.price * i.quantity;
                    return (
                      <div
                        key={i.product.id}
                        className="relative rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm"
                      >
                        <div className="grid grid-cols-[64px,1fr] items-center gap-4">
                          <img
                            src={i.product.image}
                            alt={i.product.name}
                            className="h-16 w-16 rounded-xl object-cover"
                          />
                          <div className="min-w-0">
                            <p className="truncate text-[15px] font-semibold leading-snug text-gray-900">
                              {i.product.name}
                            </p>
                            <p className="mt-0.5 truncate text-xs text-gray-500">
                              Qty: {i.quantity} · Each:{" "}
                              {formatINR(i.product.price)}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3.5 flex items-center justify-between border-t pt-3.5">
                          <div className="inline-flex items-center rounded-full border border-gray-300 bg-white px-1.5 shadow-sm">
                            <button
                              aria-label="Decrease"
                              onClick={() =>
                                updateQuantity(i.product.id, i.quantity - 1)
                              }
                              className="rounded-full p-2 hover:bg-gray-100 active:scale-95"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-10 text-center text-[13px] font-medium">
                              {i.quantity}
                            </span>
                            <button
                              aria-label="Increase"
                              onClick={() =>
                                updateQuantity(i.product.id, i.quantity + 1)
                              }
                              className="rounded-full p-2 hover:bg-gray-100 active:scale-95"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="text-right text-base font-semibold text-gray-900">
                            {formatINR(lineTotal)}
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(i.product.id)}
                          className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12px] font-medium text-red-600 hover:bg-red-50 active:scale-95"
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 space-y-3 border-t bg-white/90 px-6 py-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total</span>
                <span className="text-lg font-semibold text-gray-900">
                  {formatINR(totalPrice)}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <button
                    onClick={clearCart}
                    className="flex-1 rounded-xl border border-gray-300 px-4 py-4 text-gray-700 transition hover:bg-gray-50 active:scale-95"
                  >
                    Clear
                  </button>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-gray-600 text-center">
                    {isMobile
                      ? "Choose your preferred way to place order:"
                      : "Place your order via:"}
                  </p>

                  <div className="flex gap-3">
                    {isMobile && (
                      <a
                        href={whatsappLink}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-center font-medium text-white shadow-sm ring-1 ring-inset ring-black/5 transition hover:-translate-y-0.5 hover:bg-green-700 active:scale-95"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                    )}

                    <a
                      href={`https://instagram.com/${
                        (import.meta.env.VITE_INSTAGRAM_HANDLE as string) ||
                        "first_crush_india"
                      }`}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 text-center font-medium text-white shadow-sm ring-1 ring-inset ring-black/5 transition hover:-translate-y-0.5 hover:from-pink-600 hover:to-purple-700 active:scale-95"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.185-.012 3.58-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.185.013-3.58.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
