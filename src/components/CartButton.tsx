import { ShoppingBag } from "lucide-react";

interface Props {
  count: number;
  onClick: () => void;
}

export default function CartButton({ count, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-4 text-white shadow-lg ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:bg-green-700 active:scale-[0.98]"
    >
      <ShoppingBag className="h-5 w-5" />
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-2 text-sm font-semibold text-green-700 shadow-sm">
        {count}
      </span>
    </button>
  );
}
