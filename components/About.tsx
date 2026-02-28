"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: <Layers size={20} className="text-blue-600" />,
    title: "Architecture First",
    description:
      "Designing scalable, event-driven microservices architectures for fintech platforms serving millions of customers.",
  },
  {
    icon: <Code2 size={20} className="text-blue-600" />,
    title: "Full Stack Depth",
    description:
      "End-to-end ownership from React UIs and Node.js APIs to cloud infrastructure on Azure and Google Cloud.",
  },
  {
    icon: <Zap size={20} className="text-blue-600" />,
    title: "Performance at Scale",
    description:
      "Optimizing high-traffic applications with Redis caching, Kubernetes orchestration, and distributed systems.",
  },
  {
    icon: <Users size={20} className="text-blue-600" />,
    title: "Technical Leadership",
    description:
      "Leading cross-functional engineering teams, driving design reviews, and mentoring developers across the stack.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Turning complexity into
            <br />
            <span className="text-blue-600">elegant systems</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-slate-600 leading-relaxed"
          >
            <p>
              I&apos;m <strong className="text-slate-800">Vigneshwar Balakrishnan</strong>, a
              Full Stack Technical Architect with over <strong className="text-slate-800">12 years</strong> of
              experience building and scaling enterprise-grade web applications.
            </p>
            <p>
              Currently serving as <strong className="text-slate-800">Principal Information Systems Engineer</strong> at{" "}
              <strong className="text-slate-800">Mr. Cooper</strong> — America&apos;s #1 non-banking home
              loan servicer — in Dallas, Texas, where I architect and lead
              high-impact digital transformation initiatives.
            </p>
            <p>
              My expertise spans the full delivery lifecycle: from whiteboarding
              distributed system designs to shipping production-ready features
              with React, Node.js, and cloud-native tooling. I&apos;ve led critical
              fintech products — including pandemic forbearance solutions and
              customer self-service platforms — that directly serve hundreds of
              thousands of homeowners across the US.
            </p>
            <p>
              I&apos;m passionate about clean code, event-driven architecture, and
              empowering teams to build with confidence.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/vsb2411"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/Vigneshwar2411"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                GitHub →
              </a>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-blue-100 hover:bg-blue-50/40 transition-colors"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-1.5 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
