import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Kemitraan", href: "#kemitraan" },
    { name: "Galeri", href: "#galeri" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-[#003F7F] text-white px-4 py-2 rounded-lg">
              <span className="text-lg font-bold">BC</span>
            </div>
            <div>
              <h3 className="font-bold text-[#003F7F]">Business Centre</h3>
              <p className="text-xs text-gray-600">SMKN 8 Jakarta</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#ED1C24] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#ED1C24] hover:bg-[#C41820] text-white px-6 py-2 rounded-lg transition-colors">
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#003F7F]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-3 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#ED1C24] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[#ED1C24] hover:bg-[#C41820] text-white px-6 py-2 rounded-lg transition-colors mt-2">
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
