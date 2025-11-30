"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "10+", label: "Projects Built", icon: "🚀" },
  { number: "4", label: "Certifications", icon: "🏆" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div 
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a <span className="text-indigo-400 font-semibold">GenAI Developer</span> with a Master&apos;s in Information Systems (Data Science) from 
              California State University, Fullerton. I specialize in building intelligent applications 
              using Large Language Models, RAG pipelines, and agentic workflows.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My journey spans from developing AI summarization agents and natural language 
              data analysts to building multimodal chatbots and content moderation systems. 
              I&apos;m passionate about making AI accessible and practical.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new AI research papers, contributing 
              to open-source projects, or writing technical articles on Medium.
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-2 grid gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 gradient-border"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              >
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <span className="block text-4xl font-bold gradient-text">{stat.number}</span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}