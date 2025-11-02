import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailto = `mailto:hello@example.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
    name || 'Visitor'
  )}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;

  return (
    <section id="contact" className="relative py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-teal-400/20 flex items-center justify-center">
            <Mail className="text-teal-300" size={20} />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Get in touch</h2>
            <p className="text-slate-300 mt-1">Have a project in mind? I’d love to hear about it.</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto;
          }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4"
        >
          <div>
            <label className="block text-sm text-slate-300 mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
              placeholder="you@domain.com"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
              placeholder="Tell me about your idea..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal-400 text-slate-900 font-semibold hover:bg-teal-300 transition-colors"
          >
            Send Message
            <Send size={18} />
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400 text-sm">
          Or email me directly at <a href="mailto:hello@example.com" className="text-teal-300 hover:text-teal-200">hello@example.com</a>
        </p>
      </div>
    </section>
  );
}
