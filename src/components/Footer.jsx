import React from 'react';
import { personalData } from '../data';
import { Github, Linkedin, Mail } from './Icons';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020617] py-12">
      <div className="layout-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left text-slate-500 text-sm">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href={personalData.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalData.email}`} className="text-slate-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
