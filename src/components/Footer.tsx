"use client";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1a1a1a] px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-[#444]">© 2025 Surya Vikram Singh</p>
        <p className="text-xs text-[#333]">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
