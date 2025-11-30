"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#030014]/90 backdrop-blur-xl border-b border-white/5" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
          SS
        </Link>
        
        <ul className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="mailto:vik03surya@gmail.com" 
          className="hidden md:block px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Hire Me
        </a>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex flex-col gap-1.5 p-2" 
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-[#030014]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="block py-3 text-gray-400 hover:text-white hover:pl-2 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="mailto:vik03surya@gmail.com" 
            className="block py-3 text-indigo-400 font-medium"
          >
            Hire Me →
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}