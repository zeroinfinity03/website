"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "AI/ML Engineer (Contract)",
    date: "May 2025 – Present",
    company: "PayPal",
    location: "United States",
    points: [
      "Architected a real-time fraud risk scoring system using PyTorch and Scikit-learn, processing 2.7M+ payment events daily via Kafka and Spark Streaming, enabling low-latency risk decisions for instant transaction authorization.",
      "Engineered an internal merchant support assistant using GPT-4 and LLaMA with RAG and FAISS vector DBs, resolving over 160,000 monthly support queries, cutting human workload by 40%.",
      "Implemented payment anomaly detection models on AWS SageMaker using Python and SQL, identifying high-risk patterns that prevented $32M+ in potential transaction losses annually.",
      "Orchestrated end-to-end MLOps pipelines with Docker, Kubernetes, MLflow, and CI/CD, enabling automated training, versioning, and deployment across 25+ production models.",
      "Built a semantic search platform using embeddings, LangChain, and Vector DB to power internal compliance and dispute investigation tools, accelerating investigation time by 3x across 12,000+ case lookups per month.",
      "Delivered microservice-based ML inference APIs using Python, REST, and AWS Lambda supporting 500K+ user interactions per day across checkout, wallet, and account protection workflows.",
      "Oversaw model monitoring and drift detection frameworks using MLflow, CloudWatch, and Python dashboards, tracking performance across 6 global regions.",
    ],
  },
  {
    title: "AI/ML Engineer Intern",
    date: "May 2024 – Jul 2024",
    company: "PayPal",
    location: "United States",
    points: [
      "Contributed to fraud risk research and exploratory ML model development during summer internship rotation.",
      "Gained hands-on experience with PayPal's production ML infrastructure, Kafka streaming pipelines, and SageMaker model deployment workflows.",
    ],
  },
  {
    title: "Machine Learning Scientist",
    date: "Jan 2020 – Aug 2023",
    company: "Capital One",
    location: "India",
    points: [
      "Created a pilot GenAI risk and policy assistant using GPT-based models with LangChain and FAISS to support contextual search across 20,000+ policy and case documents, reducing research time by 50%.",
      "Operationalized a real-time transaction risk pipeline using Python, SQL, and Kafka, scoring 1.2M+ card authorizations daily with sub-second latency.",
      "Constructed a customer relationship graph using Neo4j and PyTorch Geometric to analyze 1.5M accounts, devices, and merchants, enabling detection of coordinated fraud networks.",
      "Deployed an enterprise MLOps framework using MLflow, Docker, Kubernetes, and AWS SageMaker for 15+ production risk and customer analytics models.",
      "Transformed large-scale data using Spark and Airflow, processing over 3.5 TB of transactional, behavioral, and bureau data weekly into reusable feature pipelines.",
      "Established model explainability frameworks (SHAP and LIME) for risk and fraud models, facilitating regulatory compliance reviews.",
      "Developed an NLP-driven customer insight platform using BERT (PyTorch, Hugging Face) to classify complaints and detect emerging risk themes from 50–55K monthly customer interactions.",
      "Led Bayesian experimentation and A/B testing frameworks for credit line and pricing strategies, supporting 20+ controlled experiments adopted by risk and product leadership.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs text-[#555] uppercase tracking-widest mb-4 font-mono">Career</p>
          <h2 className="text-3xl font-bold text-white">Work Experience</h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-6 border-l border-[#1f1f1f] pb-12 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1f1f1f] border border-[#3a3a3a]" />

              <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                <div>
                  <h3 className="text-white font-semibold">{exp.title}</h3>
                  <p className="text-blue-400 text-sm mt-0.5">{exp.company}</p>
                  <p className="text-[#555] text-xs mt-0.5">{exp.location}</p>
                </div>
                <span className="text-xs text-[#555] font-mono mt-1">{exp.date}</span>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-[#737373] text-sm leading-relaxed flex gap-2">
                    <span className="text-[#444] mt-1.5 shrink-0">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
