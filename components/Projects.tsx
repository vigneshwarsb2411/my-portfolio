"use client";

import { motion } from "framer-motion";
import { Layers, Shield, Globe, Rocket, Cloud, ExternalLink } from "lucide-react";

const architectureHighlights = [
  {
    icon: <Cloud size={22} className="text-blue-600" />,
    title: "Zero-Downtime OnPrem → Cloud Migration",
    company: "Mr. Cooper · Technical Architect",
    description:
      "Architected and personally executed the full migration of on-premises database servers and 40 interdependent scalable, distributed microservices to the cloud with zero downtime. Required meticulous planning, phased execution strategy, rollback safeguards, and cross-team coordination across infrastructure and application teams.",
    role: "Sole architect and execution lead — designed the migration strategy, sequenced service cutovers, and ensured data integrity throughout the transition.",
    impact: "40 microservices · Zero downtime · Full cloud adoption",
    tech: ["Azure", "Kubernetes", "Docker", "Microservices", "Cloud Migration", "CI/CD"],
  },
  {
    icon: <Shield size={22} className="text-blue-600" />,
    title: "OAuth-Secured APIM Gateway — Apigee",
    company: "Mr. Cooper · Technical Architect",
    description:
      "Designed and implemented a large-scale OAuth 2.0-based API Management gateway using Apigee, securing and governing API access across the entire loan servicing ecosystem covering 5+ million loans.",
    role: "Lead architect for the Apigee integration and OAuth security model — defined gateway policies, rate limits, and authentication flows.",
    impact: "5M+ loans governed · Enterprise-wide API security",
    tech: ["Apigee", "OAuth 2.0", "API Management", "Security", "Azure", "Node.js"],
  },
  {
    icon: <Rocket size={22} className="text-blue-600" />,
    title: "Rocket Mortgage Integration",
    company: "Mr. Cooper · Technical Architect",
    description:
      "Led the successful technical integration between Mr. Cooper and Rocket Mortgage, aligning complex loan data models, APIs, and servicing workflows across two of the largest players in the US mortgage industry.",
    role: "Architected the integration layer — data mapping, API contracts, and orchestration workflows to ensure seamless loan transfer and servicing continuity.",
    impact: "Cross-platform integration at mortgage industry scale",
    tech: ["Microservices", "REST APIs", "Azure", "Node.js", "Data Integration"],
  },
  {
    icon: <Globe size={22} className="text-blue-600" />,
    title: "White-Label Servicing Websites",
    company: "Mr. Cooper · Technical Architect",
    description:
      "Architected white-label mortgage servicing products on a shared multi-tenant platform, enabling branded digital experiences for partner servicers at scale.",
    role: "Led the architecture of the white-label platform — multi-tenancy design, theme system, feature flagging, and CI/CD pipeline setup.",
    impact: "Multiple brand launches · Single multi-tenant platform",
    tech: ["React.js", "Next.js", "Node.js", "Azure", "Multi-tenancy", "Tailwind CSS"],
  },
];

const engineeringProjects = [
  {
    icon: <Layers size={18} className="text-indigo-500" />,
    title: "Forbearance Application",
    company: "Mr. Cooper",
    description:
      "Pandemic-era loan relief platform enabling customers to pause mortgage payments and enter modification workflows. Reached 100K+ homeowners during COVID-19.",
    role: "Led complex UI module development and distributed service integration.",
    tech: ["React.js", "Node.js", "Redux", "Redis", "Docker", "GCP", "Microservices"],
    impact: "100K+ customers served",
  },
  {
    icon: <Layers size={18} className="text-indigo-500" />,
    title: "Digital Home Advisor & One-Time Links",
    company: "Mr. Cooper",
    description:
      "Customer self-service platform with live chat, digital advisory, and secure one-time access links to drive digital adoption.",
    role: "Designed and built the Messaging System, Live Chat, MFA flows, and one-time link infrastructure.",
    tech: ["React.js", "Node.js", "Context API", "MongoDB", "Azure Kubernetes", "MFA"],
    impact: "Drove digital-first customer adoption",
  },
  {
    icon: <Layers size={18} className="text-violet-500" />,
    title: "Integrations Operations Portal",
    company: "Verizon Data Services",
    description:
      "Real-time network monitoring platform — a single pane of glass for network engineers across Verizon's infrastructure.",
    role: "Built the interactive dashboard and REST services with live monitoring via Socket.IO.",
    tech: ["React.js", "Node.js", "Socket.IO", "RabbitMQ", "Material UI"],
    impact: "Real-time visibility for network operations",
  },
  {
    icon: <Layers size={18} className="text-slate-400" />,
    title: "Lloyds Banking Group — Frontend Library",
    company: "Wipro Digital",
    description:
      "Reusable React component library for one of the UK's largest banks, and co-developed Quizart — an internal BFSI learning app.",
    role: "Engineered reusable React components and responsive layouts, full-stack on Quizart.",
    tech: ["React.js", "Node.js", "Socket.IO", "Material UI", "Bootstrap"],
    impact: "Library adopted across Lloyds digital products",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Projects &amp; Impact
          </h2>
        </motion.div>

        {/* Architecture Highlights */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Architecture Highlights
            </span>
            <span className="text-xs bg-blue-600 text-white font-semibold px-2 py-0.5 rounded-full">
              Technical Architect · Mr. Cooper
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {architectureHighlights.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-blue-100 dark:border-blue-900/50 p-7 flex flex-col hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-700 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                    {project.icon}
                  </div>
                  <ExternalLink size={15} className="text-slate-200 dark:text-slate-600" />
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">
                  {project.company}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {project.description}
                </p>

                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-3 mb-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                    Architect&apos;s Role
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{project.role}</p>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {project.impact}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering Projects */}
        <div>
          <div className="flex items-center gap-3 mb-6 mt-12">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Engineering Projects
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {engineeringProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 flex flex-col hover:border-slate-200 dark:hover:border-slate-600 hover:shadow-sm transition-all"
              >
                <div className="mb-3">{project.icon}</div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm mb-0.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-3">{project.company}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 flex-1">
                  {project.description}
                </p>
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">{project.impact}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-400 px-2 py-0.5 rounded-full">
                      +{project.tech.length - 4}
                    </span>
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
