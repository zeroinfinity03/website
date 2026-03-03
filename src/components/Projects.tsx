"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Gen AI Risk Intelligence System",
    tags: ["GPT-4", "LLaMA", "LangChain", "ChromaDB", "FAISS", "FastAPI", "Docker", "AWS"],
    description: "Modular GenAI assistant for semantic search and document analysis across 500+ financial and policy documents, enabling audit-ready risk summaries and context-aware AI responses. Deployed as a scalable FastAPI microservice with WebSocket streaming and MLflow experiment tracking.",
    link: "https://github.com/zeroinfinity03",
  },
  {
    title: "Relay — Voice to Text",
    tags: ["Swift", "Whisper", "Apple NPU", "macOS"],
    description: "Free Wispr Flow alternative for macOS. 100% offline speech-to-text using Apple Silicon NPUs (M1–M4) for zero-latency local transcription. Works across any app.",
    link: "https://www.linkedin.com/posts/surya-singh-412564233_version-whisper-note-activity-7398773708829605891-stvQ",
  },
  {
    title: "KnowFlow",
    tags: ["FastAPI", "Llama 3.2", "ChromaDB", "RAG"],
    description: "Multimodal AI chatbot with quantized Llama 3.2 (4-bit) for 100% local deployment. RAG pipeline supporting text, image, and voice interactions.",
    link: "https://github.com/zeroinfinity03/knowflow-beta1.0.git",
  },
  {
    title: "Algospeak Content Moderation",
    tags: ["FastAPI", "Qwen2.5", "QLoRA", "Next.js"],
    description: "Two-stage content moderation with JSON algospeak normalizer and QLoRA-tuned Qwen2.5-3B classifier. Covers 114+ algospeak variants.",
    link: "https://github.com/zeroinfinity03/Algospeak-Aware-Content-Moderation",
  },
  {
    title: "SQLite3 MCP Server",
    tags: ["FastMCP", "Gemini 2.0", "SQLite3"],
    description: "Model Context Protocol server exposing 8 database tools for LLMs. Natural language database interactions with Gemini 2.0 Flash.",
    link: "https://github.com/zeroinfinity03/sqlite3-mcpserver",
  },
  {
    title: "Credit Card Fraud Detection",
    tags: ["XGBoost", "CatBoost", "SMOTE"],
    description: "High-precision fraud detection achieving 100% ROC-AUC on 284k+ transactions using ensemble methods.",
    link: "https://github.com/zeroinfinity03/credit-card-fault_detection",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs text-[#555] uppercase tracking-widest mb-4 font-mono">Work</p>
          <h2 className="text-3xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="group border border-[#1a1a1a] rounded-lg p-6 hover:border-[#2a2a2a] transition-colors bg-[#0f0f0f]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.07 }}
            >
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] text-[#555] border border-[#1f1f1f] rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors text-sm">
                {project.title}
              </h3>
              <p className="text-[#737373] text-xs leading-relaxed mb-5">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#555] hover:text-white transition-colors"
              >
                {project.link.includes("github") ? <Github size={13} /> : <ExternalLink size={13} />}
                View Project
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
