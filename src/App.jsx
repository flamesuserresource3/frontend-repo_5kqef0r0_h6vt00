import React, { Suspense } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';

const Projects = React.lazy(() => import('./components/Projects'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));

function useToggle(initial = false) {
  const [open, setOpen] = React.useState(initial);
  const toggle = React.useCallback(() => setOpen((v) => !v), []);
  const close = React.useCallback(() => setOpen(false), []);
  return { open, toggle, close };
}

function smoothScrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.getElementById('site-header');
  const headerH = header ? header.getBoundingClientRect().height : 0;
  const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function App() {
  const mobile = useToggle(false);

  const NavLink = ({ href, label }) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const id = href.replace('#', '');
        smoothScrollToId(id);
        mobile.close();
      }}
      className="px-4 py-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10"
    >
      {label}
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Navigation */}
      <header id="site-header" className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl px-4 py-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToId('home');
              }}
              className="font-extrabold tracking-tight"
            >
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">flames</span>
              <span className="text-white">.portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-1 text-sm">
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#about" label="About" />
              <NavLink href="#contact" label="Contact" />
            </nav>

            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
              onClick={mobile.toggle}
            >
              {mobile.open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobile.open && (
          <div className="md:hidden mx-auto max-w-7xl px-4 mt-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-2 flex flex-col">
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#about" label="About" />
              <NavLink href="#contact" label="Contact" />
            </div>
          </div>
        )}
      </header>

      {/* Sections */}
      <main className="relative">
        <Hero />
        <Suspense
          fallback={
            <div className="py-24 text-center text-slate-400">Loading sections…</div>
          }
        >
          <Projects />
          <About />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Crafted by Flames • Built with React, Tailwind, and a playful 3D hero.
        </div>
      </footer>
    </div>
  );
}
