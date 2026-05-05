import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-white/5">
      <div className="layout-container">
        <SectionHeading subtitle="A comprehensive overview of my technical expertise and stack.">
          Technical Expertise
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="card-minimal p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span key={sIdx} className="tag-minimal">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
