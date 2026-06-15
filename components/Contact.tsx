"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail size={18} className="text-blue-600" />,
    label: "Email",
    value: "vigneshwar2411@gmail.com",
    href: "mailto:vigneshwar2411@gmail.com",
  },
  {
    icon: <Linkedin size={18} className="text-blue-600" />,
    label: "LinkedIn",
    value: "linkedin.com/in/vsb2411",
    href: "https://www.linkedin.com/in/vsb2411",
  },
  {
    icon: <MapPin size={18} className="text-blue-600" />,
    label: "Location",
    value: "Dallas, Texas, USA",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Let&apos;s Connect
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-lg"
        >
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            I&apos;m open to discussing architecture consulting, technical
            leadership roles, or just connecting with fellow engineers.
          </p>

          <div className="space-y-5">
            {contactLinks.map((link) => (
              <div key={link.label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide">
                    {link.label}
                  </p>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm font-semibold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">
                      {link.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
