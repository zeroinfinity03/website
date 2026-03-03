"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, BookOpen, Code2, ArrowRight } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/zeroinfinity03", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/surya-singh-412564233", icon: Linkedin, label: "LinkedIn" },
  { href: "https://medium.com/@zeroinfinity03", icon: BookOpen, label: "Medium" },
  { href: "https://leetcode.com/u/surya0303", icon: Code2, label: "LeetCode" },
];

const stack = ["Python", "PyTorch", "LangChain", "RAG", "FastAPI", "AWS", "Kafka", "MLflow"];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-[#a3a3a3] mb-6 font-mono">
            Open to Relocate · Available for new opportunities
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-none">
            SuryaVikram<br />Singh
          </h1>

          <h2 className="text-xl md:text-2xl text-[#a3a3a3] mb-6 font-light">
            AI/ML Engineer · Generative AI & Production ML Systems
          </h2>

          <p className="text-[#737373] text-base leading-relaxed mb-8 max-w-xl">
            4+ years building high-impact AI/ML solutions in financial services at PayPal and Capital One.
            Expert in real-time fraud detection, LLM applications, and MLOps pipelines — delivering
            $30M+ in risk mitigation and handling millions of daily events.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs text-[#a3a3a3] border border-[#222] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-md hover:bg-[#e5e5e5] transition-colors"
            >
              View My Work <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2a2a2a] text-sm text-[#a3a3a3] hover:text-white hover:border-[#444] rounded-md transition-all"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[#555] hover:text-white transition-colors"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
