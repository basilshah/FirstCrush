import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  Mail,
  Smartphone,
} from "lucide-react";
import { useMemo } from "react";
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

  const emailLink = useMemo(() => {
    const email =
      (import.meta.env.VITE_EMAIL as string) || "hello@firstcrush.com";
    const subject = "Order Inquiry - First Crush";
    const body = `Hello! I'd like to place this order:\n\n${items
      .map(
        (i) =>
          `- ${i.product.name} x ${i.quantity} = ₹${
            i.product.price * i.quantity
          }`
      )
      .join(
        "\n"
      )}\n\nTotal: ₹${totalPrice}\n\nPlease let me know about availability and delivery options.`;

    return `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
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

                <div className="space-y-2">
                  <p className="text-sm text-gray-600 text-center">
                    Choose your preferred way to place order:
                  </p>

                  <div className="flex flex-col gap-2">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-4 text-center font-medium text-white shadow-sm ring-1 ring-inset ring-black/5 transition hover:-translate-y-0.5 hover:bg-green-700 active:scale-95"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {isMobile ? "WhatsApp" : "WhatsApp (Mobile)"}
                    </a>

                    <a
                      href={emailLink}
                      className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-4 text-center font-medium text-white shadow-sm ring-1 ring-inset ring-black/5 transition hover:-translate-y-0.5 hover:bg-blue-700 active:scale-95"
                    >
                      <Mail className="h-4 w-4" />
                      Email Order
                    </a>
                  </div>

                  {!isMobile && (
                    <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Smartphone className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div className="text-xs text-yellow-800">
                          <p className="font-medium">Mobile users:</p>
                          <p>
                            For WhatsApp checkout, open this link on your phone
                            or use email option above.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
