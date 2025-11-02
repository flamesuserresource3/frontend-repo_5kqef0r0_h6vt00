import React from 'react';
import { User, Award, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-slate-950 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-indigo-400/20 flex items-center justify-center">
            <User className="text-indigo-300" size={20} />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-slate-300 mt-1">A quick snapshot of who I am and how I work.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-semibold">Craft-first Engineer</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I care deeply about pairing thoughtful design with solid engineering. My focus is
              building fast, accessible, and delightful interfaces powered by reliable backend services.
            </p>
            <ul className="mt-4 space-y-2 text-slate-300/90 text-sm">
              <li className="flex items-center gap-2">
                <Cpu size={16} className="text-indigo-300" /> Frontend: React, Tailwind, Framer Motion
              </li>
              <li className="flex items-center gap-2">
                <Cpu size={16} className="text-indigo-300" /> Backend: FastAPI, Node, MongoDB
              </li>
              <li className="flex items-center gap-2">
                <Cpu size={16} className="text-indigo-300" /> Tools: Git, Vite, Playwright
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          >
            <h3 className="text-xl font-semibold">Highlights</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-center gap-2 text-indigo-200">
                  <Award size={18} />
                  <span className="font-medium">Performance</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Apps ship with <span className="text-white">Core Web Vitals</span> in mind.
                </p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-center gap-2 text-indigo-200">
                  <Award size={18} />
                  <span className="font-medium">DX</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">Clean APIs and maintainable architecture.</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-center gap-2 text-indigo-200">
                  <Award size={18} />
                  <span className="font-medium">Accessibility</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">Inclusive design by default.</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-center gap-2 text-indigo-200">
                  <Award size={18} />
                  <span className="font-medium">Animation</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">Tasteful motion that supports clarity.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
