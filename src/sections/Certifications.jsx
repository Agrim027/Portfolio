import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { certifications, achievements } from '../data';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 border-t border-white/5">
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Achievements */}
          <div>
            <SectionHeading subtitle="Competitive programming and technical milestones.">
              Achievements
            </SectionHeading>
            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <div key={idx} className="card-minimal p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-400 font-light text-sm md:text-right">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <SectionHeading subtitle="Professional certifications and specialized training.">
              Certifications
            </SectionHeading>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="card-minimal p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{cert.title}</h4>
                    <p className="text-sm font-light text-slate-500">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
