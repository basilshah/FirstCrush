/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f8f4",
          100: "#def1e7",
          200: "#bce3cf",
          300: "#92cfb2",
          400: "#67b891",
          500: "#49a178",
          600: "#368561",
          700: "#2b6a4e",
          800: "#23553f",
          900: "#1d4634",
        },
        beige: "#faf6f1",
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      boxShadow: {
        soft: "0 6px 24px rgba(16, 24, 40, 0.06)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      fontFamily: {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
