import { useState, useEffect, useRef } from "react";
import { Leaf, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMobileMenu();
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-white/60 shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 text-gray-800">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="font-semibold text-lg">First Crush</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
          <a href="#about" className="hover:text-green-700 transition-colors">
            About
          </a>
          <a
            href="#products"
            className="hover:text-green-700 transition-colors"
          >
            Products
          </a>
          <a
            href="#testimonials"
            className="hover:text-green-700 transition-colors"
          >
            Reviews
          </a>
          <a href="#faq" className="hover:text-green-700 transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-green-700 transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
        >
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
