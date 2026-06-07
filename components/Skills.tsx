"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Gatsby.js", "Redux", "Context API", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Seneca.js", "Spring Boot", "REST APIs"],
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
    skills: ["Microservices", "Scalable Microservices", "Event-Driven Architecture", "Design Patterns", "Clean Code", "Distributed Systems", "Multi-Tenant Systems", "White-Label Products", "Cloud Migration"],
  },
  {
    category: "Practices",
    skills: ["Agile / Scrum", "Performance Optimization", "Team Leadership", "Technical Mentoring", "Code Review"],
  },
  {
    category: "AI & Productivity Tools",
    skills: ["Claude Code", "GitHub Copilot"],
  },
  {
    category: "Certifications",
    skills: [
      "MERN Stack Developer — NIIT Stackroute",
      "Prompt Engineering & Programming with OpenAI — Columbia University",
      "AWS Solutions Architect (In Progress)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900">
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
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
              className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 hover:border-blue-100 dark:hover:border-blue-700 hover:bg-blue-50/30 dark:hover:bg-blue-900/20 transition-colors"
            >
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-3 py-1 rounded-lg font-medium"
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
