import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data';
import { Github, ExternalLink } from '../components/Icons';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 border-t border-white/5">
      <div className="layout-container">
        <SectionHeading subtitle="Selected works that demonstrate my technical capabilities and problem-solving skills.">
          Featured Projects
        </SectionHeading>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`card-minimal flex flex-col ${project.featured ? 'lg:flex-row' : 'md:flex-row'}`}>
              
              {/* Project Image Placeholder */}
              <div className={`bg-[#020617] border-b border-white/5 md:border-b-0 md:border-r ${project.featured ? 'lg:w-2/5' : 'md:w-1/3'} relative overflow-hidden group/image`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 group-hover/image:opacity-100 transition-opacity duration-700"></div>
                <div className="h-full min-h-[250px] w-full flex items-center justify-center relative z-10">
                  <span className="text-blue-500/20 font-light select-none text-xl tracking-widest uppercase group-hover/image:text-blue-400/30 transition-colors duration-500">Project</span>
                </div>
              </div>

              {/* Project Info */}
              <div className={`p-8 lg:p-12 flex flex-col justify-center ${project.featured ? 'lg:w-3/5' : 'md:w-2/3'}`}>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 block">{project.type}</span>
                <h3 className="text-3xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light mb-8 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, tIdx) => (
                    <span key={tIdx} className="tag-minimal">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <Github size={18} /> Source Code
                  </a>
                  <a href={project.live} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
