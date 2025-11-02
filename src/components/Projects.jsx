import React from 'react';
import { ExternalLink, Code2, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    description:
      'A real-time analytics dashboard with sleek visuals, dark mode, and responsive layout.',
    tags: ['React', 'Tailwind', 'WebSockets'],
    link: '#',
  },
  {
    title: 'AI Notes',
    description:
      'An intelligent note-taking app that auto-summarizes and tags your ideas.',
    tags: ['FastAPI', 'OpenAI', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Motion Gallery',
    description:
      'An interactive gallery with buttery animations and 3D parallax effects.',
    tags: ['Framer Motion', 'Three.js'],
    link: '#',
  },
];

const Tag = ({ label }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-white/10 text-white/90 border border-white/10">
    {label}
  </span>
);

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-teal-400/20 flex items-center justify-center">
            <Sparkles className="text-teal-300" size={20} />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Selected Projects</h2>
            <p className="text-slate-300 mt-1">A few things I loved crafting recently.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden hover:border-white/20 transition-all"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-teal-400/10 to-indigo-400/10" />

              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Code2 size={18} />
                </div>
              </div>

              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              <a
                href={p.link}
                className="mt-6 inline-flex items-center gap-2 text-teal-300 hover:text-teal-200"
              >
                View project
                <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
