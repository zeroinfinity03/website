"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "vik03surya@gmail.com", href: "mailto:vik03surya@gmail.com", color: "from-pink-500 to-rose-500" },
  { icon: Github, label: "GitHub", value: "@zeroinfinity03", href: "https://github.com/zeroinfinity03", color: "from-gray-500 to-gray-700" },
  { icon: Linkedin, label: "LinkedIn", value: "Surya Singh", href: "https://www.linkedin.com/in/surya-singh-412564233", color: "from-blue-500 to-cyan-500" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/30 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just chatting about AI and technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {contactLinks.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group glass-card p-6 rounded-2xl flex flex-col items-center gap-3 hover:scale-105 transition-all duration-300 gradient-border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <contact.icon className="text-white" size={22} />
              </div>
              <span className="text-gray-500 text-xs uppercase tracking-wider">{contact.label}</span>
              <span className="font-medium text-sm text-center group-hover:text-indigo-300 transition-colors">{contact.value}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="mailto:vik03surya@gmail.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all"
          >
            <Send size={20} />
            Send Me a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}