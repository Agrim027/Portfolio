import React from 'react';

const skillsList = [
  "Java", "JavaScript", "React", "Spring Boot", "CSS", "SQL", 
  "PostgreSQL", "REST APIs", "Git", "GitHub", "VS Code", 
  "IntelliJ IDEA", "Maven", "Docker"
];

// Duplicate the list so we have enough items for a seamless infinite scroll loop
const marqueeItems = [...skillsList, ...skillsList, ...skillsList];

const Marquee = ({ direction = 'left' }) => {
  return (
    <div className="relative flex overflow-hidden py-10 bg-transparent">
      {/* Gradient fades on left and right edges */}
      <div className="absolute inset-0 pointer-events-none z-10 
        bg-gradient-to-r from-[#020617] via-transparent to-[#020617] 
        w-full h-full"></div>
      
      {/* Marquee Wrapper */}
      <div 
        className={`flex w-max animate-scroll ${direction === 'right' ? 'flex-row-reverse' : ''}`}
      >
        {marqueeItems.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-4"
          >
            {/* Pill shaped tag */}
            <span className="px-6 py-3 rounded-full text-sm font-medium text-slate-300 border border-blue-500/20 bg-[#0f172a]/50 backdrop-blur-sm cursor-default transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
