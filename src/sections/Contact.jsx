import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5">
      <div className="layout-container max-w-4xl">
        <SectionHeading subtitle="Let's connect and discuss potential opportunities or collaborations.">
          Get In Touch
        </SectionHeading>

        <div className="card-minimal p-8 md:p-12 mb-16">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-[#0f172a] border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-[#0f172a] border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Subject</label>
              <input type="text" placeholder="Hiring Interest" className="w-full bg-[#0f172a] border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Message</label>
              <textarea rows="5" placeholder="Tell me about your project..." className="w-full bg-[#0f172a] border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all resize-none"></textarea>
            </div>
            <button className="btn-primary w-full md:w-auto mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
