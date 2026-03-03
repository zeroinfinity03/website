"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-[#555] uppercase tracking-widest mb-4 font-mono">About</p>
          <h2 className="text-3xl font-bold text-white mb-8">Who I am</h2>

          <div className="space-y-5 text-[#a3a3a3] text-base leading-relaxed">
            <p>
              I&apos;m an <span className="text-white font-medium">AI/ML Engineer</span> with 4+ years of experience
              building production-grade AI/ML and Generative AI solutions in financial services. I hold a
              Master&apos;s in Information Systems (Data Science track) from California State University, Fullerton.
            </p>
            <p>
              At <span className="text-white font-medium">PayPal</span>, I architect real-time fraud detection systems
              processing 2.7M+ daily events and LLM-powered support assistants resolving 160K+ monthly queries.
              Previously at <span className="text-white font-medium">Capital One</span>, I built graph-based fraud
              detection networks, enterprise MLOps frameworks, and NLP-driven customer intelligence platforms.
            </p>
            <p>
              I specialize in the full ML lifecycle — from feature engineering and model training to
              production deployment, monitoring, and drift detection. I care deeply about making AI
              explainable, reliable, and impactful at scale.
            </p>
          </div>

          <div className="flex gap-12 mt-10 pt-8 border-t border-[#1a1a1a]">
            <div>
              <p className="text-2xl font-bold text-white">$32M+</p>
              <p className="text-sm text-[#555] mt-1">Fraud Prevented</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">2.7M+</p>
              <p className="text-sm text-[#555] mt-1">Events / Day</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">40+</p>
              <p className="text-sm text-[#555] mt-1">Production Models</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
