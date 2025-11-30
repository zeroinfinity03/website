"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    icon: "🎙️",
    title: "Relay - Voice to Text",
    tags: ["Swift", "Whisper", "Apple NPU", "macOS"],
    description: "Free Wispr Flow alternative for macOS. 100% offline speech-to-text using Apple Silicon NPUs (M1-M4) for zero-latency local transcription. Works across any app.",
    link: "https://www.linkedin.com/posts/surya-singh-412564233_version-whisper-note-activity-7398773708829605891-stvQ",
    featured: true,
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: "🤖",
    title: "KnowFlow",
    tags: ["FastAPI", "Llama 3.2", "ChromaDB", "RAG"],
    description: "Multimodal AI chatbot with quantized Llama 3.2 (4-bit) for 100% local deployment. RAG pipeline supporting text, image, and voice interactions.",
    link: "https://github.com/zeroinfinity03/knowflow-beta1.0.git",
    featured: true,
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: "🛡️",
    title: "Algospeak Content Moderation",
    tags: ["FastAPI", "Qwen2.5", "QLoRA", "Next.js"],
    description: "Two-stage content moderation with JSON algospeak normalizer and QLoRA-tuned Qwen2.5-3B classifier. Covers 114+ algospeak variants.",
    link: "https://github.com/zeroinfinity03/Algospeak-Aware-Content-Moderation",
    featured: true,
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: "🔌",
    title: "SQLite3 MCP Server",
    tags: ["FastMCP", "Gemini 2.0", "SQLite3"],
    description: "Model Context Protocol server exposing 8 database tools for LLMs. Natural language database interactions with Gemini 2.0 Flash.",
    link: "https://github.com/zeroinfinity03/sqlite3-mcpserver",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: "🏥",
    title: "Breast Cancer Classification",
    tags: ["TensorFlow", "Keras", "Deep Learning"],
    description: "Deep learning binary classifier achieving 93.86% diagnostic accuracy on the Wisconsin dataset.",
    link: "https://github.com/zeroinfinity03/Breastcancer",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: "💳",
    title: "Credit Card Fraud Detection",
    tags: ["XGBoost", "CatBoost", "SMOTE"],
    description: "High-precision fraud detection achieving 100% ROC-AUC on 284k+ transactions using ensemble methods.",
    link: "https://github.com/zeroinfinity03/credit-card-fault_detection",
    color: "from-violet-500 to-purple-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className={`group relative glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] ${project.featured ? "md:col-span-1 ring-1 ring-white/10" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              {/* Gradient top border on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {/* Icon section */}
              <div className="relative h-36 flex items-center justify-center overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-xs font-medium border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white text-sm font-medium opacity-80 hover:opacity-100 transition-all hover:gap-3`}
                >
                  {project.link.includes("github") ? <Github size={16} /> : <ExternalLink size={16} />}
                  View Project
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}