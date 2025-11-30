"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    icon: "🎓",
    title: "Machine Learning Specialization",
    issuer: "Stanford University",
    link: "https://coursera.org/verify/specialization/437QUM0RYAZB",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: "📐",
    title: "Mathematics for ML & Data Science",
    issuer: "DeepLearning.AI",
    link: "https://coursera.org/verify/specialization/6EDLBA40SFZ1",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "📊",
    title: "Data Science Professional",
    issuer: "IBM",
    link: "https://coursera.org/verify/professional-cert/UE1MUECTEX07",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: "📈",
    title: "Advanced Data Analytics",
    issuer: "Google",
    link: "https://coursera.org/verify/professional-cert/H4RSHKEWG8XT",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 gradient-border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                {cert.icon}
              </div>
              <h3 className="font-bold text-sm mb-2 group-hover:text-indigo-300 transition-colors">{cert.title}</h3>
              <p className="text-gray-500 text-xs mb-3">{cert.issuer}</p>
              <span className="inline-flex items-center gap-1 text-indigo-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Verify <ExternalLink size={12} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}