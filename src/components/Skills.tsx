"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    color: "from-indigo-500 to-purple-500",
    skills: ["LangChain", "LangGraph", "OpenAI API", "RAG", "ChromaDB", "FAISS", "Qdrant", "HuggingFace", "Llama 3.2", "Qwen2.5", "QLoRA"],
  },
  {
    title: "Data Science",
    icon: "📊",
    color: "from-emerald-500 to-teal-500",
    skills: ["Scikit-learn", "XGBoost", "TensorFlow", "Keras", "Pandas", "Polars", "Prophet", "Neo4j"],
  },
  {
    title: "Languages",
    icon: "💻",
    color: "from-amber-500 to-orange-500",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "HTML", "CSS/Tailwind"],
  },
  {
    title: "Web & Cloud",
    icon: "🚀",
    color: "from-pink-500 to-rose-500",
    skills: ["FastAPI", "React", "Next.js", "Streamlit", "AWS Bedrock", "Docker", "Kubernetes", "PostgreSQL", "Git", "CI/CD"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className="glass-card p-8 rounded-2xl gradient-border group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 + j * 0.03 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}