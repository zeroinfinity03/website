"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Generative AI & NLP",
    skills: ["FinBERT", "HuggingFace Transformers", "LangChain", "LangGraph", "RAG", "Prompt Engineering"],
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: ["Python", "PyTorch", "Scikit-learn", "XGBoost", "Time Series Modeling", "Prophet", "Anomaly Detection", "Bayesian Modeling", "SHAP", "LIME"],
  },
  {
    title: "Data Engineering & Streaming",
    skills: ["SQL", "Apache Spark", "Kafka", "Airflow", "ETL Pipelines", "Feature Engineering"],
  },
  {
    title: "MLOps & Production Systems",
    skills: ["Docker", "Kubernetes", "MLflow", "CI/CD (GitHub Actions)", "FastAPI", "REST APIs", "Microservices", "Model Monitoring", "Drift Detection"],
  },
  {
    title: "Cloud & Databases",
    skills: ["AWS SageMaker", "AWS Lambda", "EC2", "S3", "CloudWatch", "PostgreSQL", "MongoDB", "ChromaDB", "FAISS", "Neo4j"],
  },
  {
    title: "Visualization & Analytics",
    skills: ["Plotly", "Tableau", "Power BI"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs text-[#555] uppercase tracking-widest mb-4 font-mono">Tools</p>
          <h2 className="text-3xl font-bold text-white">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.08 }}
            >
              <h3 className="text-sm font-medium text-[#a3a3a3] mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs text-[#737373] border border-[#1f1f1f] rounded-md hover:border-[#333] hover:text-[#a3a3a3] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
