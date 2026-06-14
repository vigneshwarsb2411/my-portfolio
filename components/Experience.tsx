"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    company: "Rocket Companies (Formerly Mr. Cooper)",
    role: "Technical Architect — Principal Information Systems Engineer",
    period: "Jul 2018 – Present",
    location: "Dallas, Texas, USA → Relocating to Chennai, India",
    type: "work",
    progression: "Progressed through 5 levels: Software Engineer I → Software Engineer II → Senior Software Engineer → Lead Engineer → Principal Architect",
    highlights: [
      "Architected zero-downtime cloud migration using the Strangler Fig pattern — phased 40 interdependent microservices and on-prem DB servers to Azure/GCP, designing rollback safeguards, ADRs, and cross-team execution playbooks",
      "Designed enterprise-scale OAuth 2.0 API Management gateway via Azure APIM and Apigee — reduced API latency by 80%, governed API security across 5M+ loans, and established org-wide authentication standards adopted across all platforms",
      "Architected event-driven HELOC and Mortgage Payment solutions — implemented Outbox Pattern for guaranteed at-least-once delivery and designed Kafka-based event streaming pipelines for real-time payment processing at scale",
      "Led Rocket Mortgage platform integration — defined API contracts, data mapping, and orchestration workflows using Saga pattern to coordinate distributed transactions between two of the largest US mortgage platforms",
      "Architected multi-brand white-label mortgage servicing platform on a shared multi-tenant architecture; delivered Forbearance, Payments, Digital Home Advisor, and One-Time Links as Technical Lead using CQRS and Circuit Breaker patterns",
      "Defined reference architectures, led architecture review governance, and authored ADRs adopted across 5+ product teams — establishing engineering standards for microservices, event-driven systems, and cloud-native design",
    ],
    tech: ["React", "Node.js", "Spring Boot", "Apigee", "OAuth 2.0", "Azure", "Kubernetes", "Docker", "Kafka", "Microservices", "GCP", "Redis", "Distributed Systems", "Multi-Tenancy", "Outbox Pattern", "Saga Pattern", "CQRS", "Strangler Fig"],
  },
  {
    company: "Verizon Data Services India",
    role: "Analyst — Full Stack Engineer",
    period: "May 2017 – Jun 2018",
    location: "Chennai, India",
    type: "work",
    highlights: [
      "Designated Full Stack Engineer for the Integrations Operations Portal — a real-time network monitoring system providing a single pane of glass for network engineers.",
      "Developed interactive UI and REST services with real-time event scheduling using Socket.IO and RabbitMQ.",
    ],
    tech: ["React", "Node.js", "Socket.IO", "RabbitMQ", "Express.js"],
  },
  {
    company: "Wipro Digital",
    role: "Project Engineer — Full Stack Developer",
    period: "Sep 2014 – Apr 2017",
    location: "Bangalore, India",
    type: "work",
    highlights: [
      "Engineered a reusable frontend component library for Lloyds Banking Group, one of the UK's largest banks.",
      "Full-stack developer on Quizart, an internal BFSI LOB application, delivering responsive layouts and Node.js services.",
    ],
    tech: ["React", "Node.js", "Socket.IO", "Material UI", "Bootstrap"],
  },
  {
    company: "Sri Krishna College of Technology",
    role: "Bachelor of Engineering — Electronics & Communications",
    period: "Sep 2010 – Jun 2014",
    location: "Coimbatore, India",
    type: "education",
    highlights: [
      "Graduated with specialization in Electronics & Communications Engineering.",
    ],
    tech: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Experience &amp; Education
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div
                  className={`absolute left-0 md:left-2 top-1 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    item.type === "work"
                      ? "bg-blue-600 border-blue-600"
                      : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600"
                  }`}
                >
                  {item.type === "work" ? (
                    <Briefcase size={14} className="text-white" />
                  ) : (
                    <GraduationCap size={14} className="text-slate-500 dark:text-slate-400" />
                  )}
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 hover:border-blue-100 dark:hover:border-blue-800 hover:shadow-sm transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {item.role}
                    </h3>
                    <span className="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-blue-600 mb-0.5">
                    {item.company}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">{item.location}</p>

                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(item as any).progression && (
                    <p className="text-xs font-medium italic text-slate-400 dark:text-slate-500 mb-4">
                      {(item as any).progression}
                    </p>
                  )}

                  <ul className="space-y-2 mb-4">
                    {item.highlights.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
