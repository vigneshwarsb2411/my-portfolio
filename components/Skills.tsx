"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "GraphQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Gatsby.js", "Redux", "Context API", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Seneca.js", "REST APIs", "GraphQL APIs"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "Redis", "RabbitMQ"],
  },
  {
    category: "Messaging",
    skills: ["Kafka", "RabbitMQ", "Socket.IO"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Azure", "Azure Kubernetes Service", "Google Cloud Platform", "Docker", "Jenkins", "VSTS"],
  },
  {
    category: "API & Security",
    skills: ["Apigee", "OAuth 2.0", "API Management", "MFA", "JWT", "Open Market"],
  },
  {
    category: "Architecture",
    skills: ["Microservices", "Event-Driven Architecture", "Design Patterns", "Clean Code", "Distributed Systems", "Cloud Migration"],
  },
  {
    category: "Practices",
    skills: ["Agile / Scrum", "Performance Optimization", "Team Leadership", "Technical Mentoring", "Code Review"],
  },
  {
    category: "Certifications",
    skills: ["MERN Stack Developer — NIIT Stackroute"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Toolkit
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
            >
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-lg font-medium"
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
