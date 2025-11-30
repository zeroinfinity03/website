"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm flex items-center gap-2">
            © 2025 Surya Singh. Built with <Heart size={14} className="text-pink-500" /> and lots of ☕
          </p>
          <p className="text-gray-600 text-xs">
            Powered by Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}