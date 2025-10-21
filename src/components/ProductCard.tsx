// import { motion } from "framer-motion";
import { ShoppingBag, Star, Leaf } from "lucide-react";
import type { Product } from "../types/product";

interface Props {
  product: Product;
  onAdd: (p: Product) => void;
}

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <div
      // whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md touch-manipulation"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        {product.isPopular && (
          <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
            Popular
          </span>
        )}
        {product.isNew && (
          <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
            New
          </span>
        )}
      </div>

      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwTDEyMCA4MEwxNDAgMTAwTDEyMCAxMjBMMTAwIDEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+";
          }}
        />
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-current text-yellow-400" />
            <span className="text-xs text-gray-500">4.8</span>
          </div>
        </div>

        <p
          className="text-sm text-gray-600"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical" as const,
            overflow: "hidden",
          }}
        >
          {product.description}
        </p>

        <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Leaf className="h-3 w-3" />
            {product.weight}
          </span>
          <span>•</span>
          <span>{product.category}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold text-gray-900">
              ₹{product.price}
            </span>
            <div className="text-xs text-gray-500">
              {product.benefits.slice(0, 2).join(" • ")}
            </div>
          </div>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-white shadow-sm transition active:scale-[0.98] hover:-translate-y-0.5 hover:bg-green-700 touch-manipulation select-none"
            type="button"
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
