import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { personalData } from '../data';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_50%)] pointer-events-none" />
      
      <div className="layout-container text-center max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 relative"
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-semibold uppercase tracking-[0.1em] text-blue-300">
              Available for work
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
            <span className="text-gradient drop-shadow-sm">{personalData.name}</span>
          </h1>

          {/* Subtitle / Typewriter */}
          <div className="flex flex-col items-center gap-6 mt-4">
            <div className="inline-flex items-center gap-2 text-2xl md:text-3xl text-slate-400 font-light tracking-tight h-[40px]">
              <span>I am a</span>
              <span className="inline-block text-white font-semibold relative">
                <Typewriter
                  options={{
                    strings: personalData.roles,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              </span>
            </div>
            
            <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed font-normal">
              {personalData.summary}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
            <Link to="projects" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto">
              <button className="w-full btn-primary px-8 shadow-lg shadow-blue-500/20">
                View Projects
              </button>
            </Link>
            <a href="#" className="w-full sm:w-auto">
              <button className="w-full btn-secondary px-8">
                Download Resume
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
