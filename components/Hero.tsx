"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-slate-100 dark:bg-slate-700 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Left: text content */}
          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
              Vigneshwar S
              <br />
              <span className="text-blue-600">Balakrishnan</span>
            </h1>

            {/* Title */}
            <p className="text-lg md:text-xl font-semibold text-slate-500 dark:text-slate-400 mb-4">
              Technical Architect &middot; Principal Information Systems Engineer
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-sm mb-8">
              <MapPin size={14} />
              <span>Dallas, Texas, USA → Relocating to Chennai, India</span>
              <span className="mx-2 text-slate-200 dark:text-slate-700">|</span>
              <span>Rocket Companies</span>
            </div>

            {/* Summary */}
            <p className="max-w-xl text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
              12+ years architecting and delivering high-scale full-stack solutions
              across fintech and enterprise. I design scalable distributed microservices,
              multi-tenant platforms, white-label products, and developer experiences
              that power millions of users.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md shadow-blue-100 dark:shadow-blue-900/30"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/Vigneshwar2411"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vsb2411"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:vigneshwar2411@gmail.com"
                aria-label="Email"
                className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-sm"
            >
              {[
                { value: "12+", label: "Years Experience" },
                { value: "5M+", label: "Loans Governed" },
                { value: "40+", label: "Microservices Migrated" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-blue-200 via-blue-100 to-slate-100 dark:from-blue-900 dark:via-blue-800 dark:to-slate-700 blur-sm opacity-80" />
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-md z-10" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded-full border-4 border-white dark:border-slate-900 z-10" />

              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Vigneshwar S Balakrishnan"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
