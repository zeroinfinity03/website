"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "vik03surya@gmail.com", href: "mailto:vik03surya@gmail.com" },
  { icon: Github, label: "GitHub", value: "@zeroinfinity03", href: "https://github.com/zeroinfinity03" },
  { icon: Linkedin, label: "LinkedIn", value: "Surya Singh", href: "https://www.linkedin.com/in/surya-singh-412564233" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-[#555] uppercase tracking-widest mb-4 font-mono">Contact</p>
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-[#737373] text-base mb-12 max-w-md">
            Open to new opportunities, interesting projects, or just a conversation about AI and technology.
          </p>

          <div className="space-y-0 border-t border-[#1a1a1a]">
            {contactLinks.map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-5 border-b border-[#1a1a1a] hover:border-[#2a2a2a] transition-colors"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.07 }}
              >
                <contact.icon size={16} className="text-[#555] group-hover:text-white transition-colors shrink-0" />
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-xs text-[#555] uppercase tracking-wider w-20">{contact.label}</span>
                  <span className="text-sm text-[#a3a3a3] group-hover:text-white transition-colors">{contact.value}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="mailto:vik03surya@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-md hover:bg-[#e5e5e5] transition-colors"
            >
              <Mail size={15} />
              Send a Message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
