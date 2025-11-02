import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

const SocialLink = ({ href, label, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
    aria-label={label}
  >
    <Icon size={18} />
    <span className="hidden sm:inline">{label}</span>
  </a>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth - do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-28 pb-24 flex flex-col items-start max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10">
          <Rocket className="text-teal-300" size={18} />
          <span className="text-sm text-teal-100/90">Tech • Interactive • Playful • Modern</span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          Handcrafted Portfolio
          <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Built with care and code</span>
        </h1>

        <p className="mt-5 max-w-2xl text-slate-200/90 text-base sm:text-lg">
          I design and develop delightful digital experiences. Explore selected projects,
          my background, and ways to reach me below.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal-400 text-slate-900 font-semibold hover:bg-teal-300 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:border-white/40 text-white font-semibold transition-colors">
            Contact Me
          </a>
          <div className="hidden sm:flex items-center gap-2 ml-2">
            <SocialLink href="https://github.com" label="GitHub" icon={Github} />
            <SocialLink href="https://linkedin.com" label="LinkedIn" icon={Linkedin} />
            <SocialLink href="mailto:hello@example.com" label="Email" icon={Mail} />
          </div>
        </div>
      </div>
    </section>
  );
}
