import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold text-lg">
            VSB<span className="text-blue-400">.</span>
          </p>
          <p className="text-sm mt-1">Principal Architect · Dallas, TX → Chennai, India</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Vigneshwar2411"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/vsb2411"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:vigneshwar2411@gmail.com"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Vigneshwar S Balakrishnan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
