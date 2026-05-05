import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/5">
      <div className="layout-container">
        <SectionHeading subtitle="Driven by curiosity and a passion for crafting high-performance digital solutions.">
          About Me
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
            <p>
              {personalData.summary}
            </p>
            <p>
              I specialize in Java ecosystems, particularly Spring Boot and Microservices, while maintaining deep proficiency in frontend frameworks like React. My goal is to build secure, high-performance applications that deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card-minimal p-6">
              <h4 className="text-white font-semibold mb-2">Full Stack Dev</h4>
              <p className="text-sm text-slate-500">End-to-end expertise in modern web technologies.</p>
            </div>
            <div className="card-minimal p-6">
              <h4 className="text-white font-semibold mb-2">Agile Focused</h4>
              <p className="text-sm text-slate-500">Proficient in Agile practices and rapid delivery.</p>
            </div>
            <div className="card-minimal p-6">
              <h4 className="text-white font-semibold mb-2">Problem Solver</h4>
              <p className="text-sm text-slate-500">Strong foundation in DSA and core CS concepts.</p>
            </div>
            <div className="card-minimal p-6">
              <h4 className="text-white font-semibold mb-2">Tech Lead</h4>
              <p className="text-sm text-slate-500">Proven experience in leading teams and fostering growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
