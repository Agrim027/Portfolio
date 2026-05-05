import React from 'react';
import { motion } from 'framer-motion';

const TopographicBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950 selection:bg-blue-500/10">
      {/* Topographic Lines SVG */}
      <motion.svg
        initial={{ y: 20, opacity: 0.8 }}
        animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut"
        }}
        className="absolute inset-0 w-[150vw] h-[150vh] min-w-[1920px] min-h-[1080px] -left-[25vw] -top-[25vh] opacity-40 mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
      >
        <defs>
          <linearGradient id="topo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.15)" />
          </linearGradient>
        </defs>
        <g stroke="url(#topo-gradient)" fill="none" strokeWidth="1.5">
          {/* Base Topo paths - minimalist */}
          <path d="M 0,100 Q 200,150 400,100 T 800,100" />
          <path d="M 0,150 Q 200,200 400,150 T 800,150" />
          <path d="M 0,200 Q 300,280 400,200 T 800,200" />
          <path d="M 0,250 Q 300,350 500,250 T 800,250" />
          <path d="M 0,300 Q 400,450 600,300 T 800,300" />
          <path d="M 0,350 Q 450,500 700,350 T 800,350" />
          <path d="M 0,400 Q 500,550 800,400" />
          
          <path d="M -100,50 Q 150,120 300,50 T 900,50" />
          <path d="M -100,250 Q 150,320 400,250 T 900,250" />
          
          {/* Topographic organic rings */}
          <path d="M 300,300 C 350,250 450,250 500,300 C 550,350 450,450 400,400 C 350,350 250,350 300,300 Z" />
          <path d="M 280,280 C 360,200 480,200 540,280 C 600,360 480,480 400,420 C 320,360 200,360 280,280 Z" />
          <path d="M 260,260 C 380,150 520,150 600,260 C 680,370 520,520 400,440 C 280,360 140,370 260,260 Z" />
          
          <path d="M 600,100 C 650,50 750,50 800,100 C 850,150 750,250 700,200 C 650,150 550,150 600,100 Z" />
          <path d="M 580,80 C 660,0 780,0 840,80 C 900,160 780,280 700,220 C 620,160 500,160 580,80 Z" />
          
          <path d="M 100,500 C 150,450 250,450 300,500 C 350,550 250,650 200,600 C 150,550 50,550 100,500 Z" />
        </g>
      </motion.svg>

      {/* Fade masks so content stays readable in center and top/bottom edges fade out */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#020617_100%)] pointer-events-none" />
    </div>
  );
};

export default TopographicBackground;
