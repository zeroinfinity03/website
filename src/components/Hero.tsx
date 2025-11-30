"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, BookOpen, Code2 } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const socialLinks = [
  { href: "https://github.com/zeroinfinity03", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/surya-singh-412564233", icon: Linkedin, label: "LinkedIn" },
  { href: "https://medium.com/@zeroinfinity03", icon: BookOpen, label: "Medium" },
  { href: "https://leetcode.com/u/surya0303", icon: Code2, label: "LeetCode" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden animated-gradient">
      <ParticleBackground />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-indigo-400 font-mono mb-3 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            👋 Hi, I&apos;m
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold gradient-text mb-4 glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Surya Singh
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building GenAI Applications
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Python • FastAPI • AWS • LangChain • LangGraph • Vector & Knowledge-Graph RAG Pipelines
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#projects" className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#contact" className="px-8 py-4 glass-card rounded-xl font-semibold hover:scale-105 transition-all border border-white/10 hover:border-indigo-500/50">
              Get In Touch
            </a>
          </motion.div>

          <motion.div 
            className="flex gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((link, i) => (
              <motion.a 
                key={link.label} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.label}
                className="w-12 h-12 flex items-center justify-center rounded-xl glass-card text-gray-400 hover:text-white hover:bg-indigo-600/50 transition-all hover:scale-110 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <link.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative float">
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30" />
            
            <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl max-w-md w-full border border-white/10">
              <div className="bg-black/40 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-gray-500 text-sm font-mono">genai_dev.py</span>
              </div>
              <pre className="p-6 font-mono text-sm leading-loose overflow-x-auto">
                <code>
                  <span className="keyword">class</span> <span className="class-name">GenAIDev</span>:{"\n"}
                  {"    "}<span className="keyword">def</span> <span className="function">__init__</span>(self):{"\n"}
                  {"        "}self.name = <span className="string">&quot;Surya Singh&quot;</span>{"\n"}
                  {"        "}self.role = <span className="string">&quot;GenAI Developer&quot;</span>{"\n"}
                  {"        "}self.skills = [{"\n"}
                  {"            "}<span className="string">&quot;LLMs&quot;</span>, <span className="string">&quot;RAG&quot;</span>,{"\n"}
                  {"            "}<span className="string">&quot;LangChain&quot;</span>, <span className="string">&quot;ML&quot;</span>{"\n"}
                  {"        "}]{"\n"}
                  {"\n"}
                  {"    "}<span className="keyword">def</span> <span className="function">build</span>(self):{"\n"}
                  {"        "}<span className="keyword">return</span> <span className="string">&quot;🚀 Innovation&quot;</span>
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.5 } }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-indigo-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}