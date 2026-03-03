"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    link: "https://coursera.org/verify/specialization/437QUM0RYAZB",
  },
  {
    title: "Mathematics for ML & Data Science",
    issuer: "DeepLearning.AI",
    link: "https://coursera.org/verify/specialization/6EDLBA40SFZ1",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    link: "https://coursera.org/verify/professional-cert/UE1MUECTEX07",
  },
  {
    title: "Advanced Data Analytics",
    issuer: "Google",
    link: "https://coursera.org/verify/professional-cert/H4RSHKEWG8XT",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs text-[#555] uppercase tracking-widest mb-4 font-mono">Credentials</p>
          <h2 className="text-3xl font-bold text-white">Certifications</h2>
        </motion.div>

        <div className="space-y-0 border-t border-[#1a1a1a]">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 border-b border-[#1a1a1a] hover:border-[#2a2a2a] transition-colors"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.07 }}
            >
              <div>
                <h3 className="text-sm text-white group-hover:text-blue-400 transition-colors font-medium">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#555] mt-1">{cert.issuer}</p>
              </div>
              <ExternalLink size={14} className="text-[#333] group-hover:text-[#555] transition-colors shrink-0 ml-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
