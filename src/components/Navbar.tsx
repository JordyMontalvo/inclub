"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

export default function Navbar() {
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
    { name: "Proyectos", href: "#proyectos" },
    { name: "Comunidad", href: "#comunidad" },
    { name: "Membresías", href: "#membresias" },
    { name: "El Negocio", href: "#negocio" },
    { name: "Contacto", href: "#contacto" },
  ];

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className={`text-2xl font-bold tracking-tighter ${isScrolled ? "text-emerald-900" : "text-white"}`}>
              Ribera del Río <span className="text-amber-500">| inResorts</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? "text-slate-700" : "text-slate-100"}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-800 text-white font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/20"
            >
              Contactar Asesor
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? "text-emerald-900" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-emerald-700 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 rounded-md bg-emerald-800 text-white font-medium hover:bg-emerald-700"
              >
                Contactar Asesor
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
