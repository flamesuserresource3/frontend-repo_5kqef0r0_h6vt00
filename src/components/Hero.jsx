import React, { useEffect, useMemo, useState } from 'react';
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
  const sceneUrl = useMemo(
    () => 'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode',
    []
  );
  const [loaded, setLoaded] = useState(false);

  // Preload the Spline scene early to reduce first interaction delay
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'fetch';
    link.crossOrigin = 'anonymous';
    link.href = sceneUrl;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [sceneUrl]);

  return (
    <section id="home" className="relative min-h-[100dvh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene={sceneUrl}
          style={{ width: '100%', height: '100%' }}
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Soft gradient overlays for depth - do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Loading veil for smoother appearance */}
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center">
          <div className="pointer-events-none h-16 w-16 rounded-full bg-gradient-to-br from-teal-400/60 to-indigo-400/60 blur-md animate-pulse" />
        </div>
      )}

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-36 pb-28 flex flex-col items-start max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10">
          <Rocket className="text-teal-300" size={18} />
          <span className="text-sm text-teal-100/90">Futuristic • Interactive • Playful • Modern</span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
          Handcrafted Portfolio
          <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Built with care and code</span>
        </h1>

        <p className="mt-6 max-w-3xl text-slate-200/90 text-base sm:text-lg md:text-xl">
          I design and develop delightful digital experiences. Explore selected projects,
          my background, and ways to reach me below.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
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

        {/* Scroll indicator */}
        <a href="#projects" className="mt-12 inline-flex items-center gap-2 text-slate-300 hover:text-white group">
          <span className="text-sm">Scroll</span>
          <span className="h-6 w-6 rounded-full border border-white/30 grid place-items-center">
            <span className="block h-2 w-2 rounded-full bg-white/80 group-hover:translate-y-1 transition-transform" />
          </span>
        </a>
      </div>
    </section>
  );
}
