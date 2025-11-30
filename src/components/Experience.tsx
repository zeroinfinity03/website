"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer, AI/ML",
    date: "Jul 2025 - Present",
    company: "Saayam For All",
    location: "San Jose, CA",
    points: [
      "Developed an AI summarization agent using OpenAI API with temperature 0.2 for consistent volunteer-form processing",
      "Integrated LangGraph's agent state and memory for context-aware workflows, reducing manual triage time by 60%",
    ],
  },
  {
    title: "Data Analyst",
    date: "Oct 2024 - May 2025",
    company: "California State University, Fullerton",
    location: "Fullerton, CA",
    points: [
      "Built an AI Data Analyst using LangChain's Pandas DataFrame Agent for natural language querying",
      "Extended agent with Python REPL for real-time Plotly visualizations, reducing reporting effort by 70%",
    ],
  },
  {
    title: "Associate Data Scientist",
    date: "Aug 2020 - Jul 2022",
    company: "iNeuron",
    location: "Bengaluru, India",
    points: [
      "Developed a course recommendation engine using TF-IDF and cosine similarity metrics",
      "Enhanced semantic similarity detection through text normalization, improving recommendation accuracy by 25%",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-0 md:pl-20 mb-12 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[22px] top-8 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hidden md:flex items-center justify-center pulse-glow">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              <div className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 gradient-border group">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{exp.title}</h3>
                    <p className="text-indigo-400 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-mono">
                    {exp.date}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-gray-400 text-sm pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-indigo-400 before:font-bold leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}