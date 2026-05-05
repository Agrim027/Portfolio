import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, subtitle }) => {
  return (
    <div className="mb-16 md:mb-24 text-left">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 relative inline-block border-b-4 border-blue-500 pb-2 border-opacity-70"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-slate-400 font-light max-w-2xl mt-4"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
