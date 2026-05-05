import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="layout-container">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-white cursor-pointer select-none">
            Agrim<span className="text-blue-500">Gupta</span>
          </div>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                spy={true}
                offset={-80}
                className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors cursor-pointer relative group"
                activeClass="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full nav-glass md:hidden border-t border-white/10"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  spy={true}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors cursor-pointer block py-2"
                  activeClass="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
