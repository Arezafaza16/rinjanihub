import React, { useState, useEffect } from "react";
import { Mountain, Menu, X, Phone } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about-us" },
    { name: "Packages", href: "#packages" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Location", href: "#location" },
    { name: "FAQ", href: "#faq" }
  ];

  // Button hover animations
  const handleBtnEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.2,
      ease: "power1.out"
    });
  };

  const handleBtnLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.2,
      ease: "power1.out"
    });
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#FDFCF8]/90 backdrop-blur-md py-3 shadow-sm border-b border-[#1B2D24]/10 text-[#1B2D24]"
          : "bg-gradient-to-b from-[#1B2D24]/60 to-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Premium Brand Logo */}
        <a
          href="#top"
          id="navbar-brand-logo"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className={`p-2 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isScrolled ? "bg-[#1B2D24] text-[#FDFCF8]" : "bg-sunrise-500 text-white"
          }`}>
            <Mountain className="w-4 h-4" />
          </div>
          <div>
            <span className={`text-[15px] md:text-md uppercase tracking-[0.25em] font-display font-bold transition-colors ${isScrolled ? 'text-[#1B2D24]' : 'text-white'}`}>
              Rinjani{" "}
              <span className={`transition-colors duration-300 ${isScrolled ? 'text-[#f27d26]' : 'text-white'}`}>
                Hub
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Link Menu */}
        <div id="desktop-nav-menu" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] uppercase tracking-widest font-mono font-bold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-sunrise-500 hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled ? "text-[#1B2D24]/80 hover:text-sunrise-500" : "text-stone-100 hover:text-sunrise-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Conversion CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/6281353144856"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleBtnEnter}
            onMouseLeave={handleBtnLeave}
            id="nav-whatsapp-cta"
            className="flex items-center gap-2 px-6 py-2.5 bg-sunrise-500 text-white text-[10px] uppercase tracking-widest font-mono font-bold rounded-sm transition-all duration-300 shadow-lg shadow-sunrise-500/10 hover:shadow-sunrise-500/25"
          >
            <Phone className="w-3 h-3" /> Contact Us
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          id="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          className={`lg:hidden p-1.5 rounded-lg transition-all ${
            isScrolled ? "text-[#1B2D24] hover:bg-[#1B2D24]/5" : "text-white hover:bg-white/10"
          }`}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay and Links */}
      <div
        id="mobile-drawer-menu"
        className={`lg:hidden fixed inset-x-0 top-full shadow-2xl backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-[#FDFCF8]/95 border-b border-[#1B2D24]/10" : "bg-[#1B2D24]/95 border-b border-[#1B2D24]/20"
        } ${
          isMobileMenuOpen ? "max-h-[100vh] py-8 px-6 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 align-left">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-[10px] uppercase tracking-[0.22em] font-mono font-bold py-2 border-b border-[#1B2D24]/10 hover:pl-2 transition-all duration-300 ${
                isScrolled ? "text-[#1B2D24]/85 hover:text-sunrise-500" : "text-white/85 hover:text-sunrise-400"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/6281353144856"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3.5 bg-sunrise-500 hover:bg-sunrise-600 text-white rounded-sm text-center text-[10px] uppercase tracking-widest font-mono font-bold flex items-center justify-center gap-2 mt-4 shadow-lg shadow-sunrise-500/20"
          >
            <Phone className="w-3.5 h-3.5" /> Contact WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
