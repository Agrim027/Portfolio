import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experience, education } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 border-t border-white/5">
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <div>
            <SectionHeading subtitle="My professional journey and industry experience.">
              Work Experience
            </SectionHeading>
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/5">
                  <div className="absolute top-1.5 -left-[5px] w-[9px] h-[9px] rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] border border-slate-900"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm font-medium">
                    <span className="text-slate-300">{exp.company}</span>
                    <span className="hidden sm:inline text-slate-600">•</span>
                    <span className="text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionHeading subtitle="Academic background and educational milestones.">
              Education
            </SectionHeading>
            <div className="space-y-12">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/5">
                  <div className="absolute top-1.5 -left-[5px] w-[9px] h-[9px] rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] border border-slate-900"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm font-medium">
                    <span className="text-slate-300">{edu.institution}</span>
                    <span className="hidden sm:inline text-slate-600">•</span>
                    <span className="text-slate-500">{edu.period}</span>
                  </div>
                  <span className="tag-minimal">
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
