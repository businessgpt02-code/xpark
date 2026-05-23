import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Padel Courts Location', path: '/courts' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-padel-base/80 backdrop-blur-2xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-gradient-to-b from-black/80 to-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group" aria-label="XPARK Home">
            <img 
              src="/padel.png" 
              alt="XPARK Logo" 
              className="h-16 md:h-22 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-inter text-xs uppercase tracking-[0.15em] transition-all duration-500 hover:text-white ${
                    isActive ? 'text-white font-medium' : 'text-gray-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[1px] bg-padel-emerald shadow-[0_0_10px_rgba(20,184,89,0.8)]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative inline-block px-8 py-3 bg-transparent border border-padel-emerald text-white font-inter text-xs uppercase tracking-[0.2em] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-padel-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
              <span className="relative z-10 group-hover:text-padel-base font-semibold transition-colors duration-500">Book Court</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 text-white p-2 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 h-[1px] bg-white transition-transform duration-500 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-6 h-[1px] bg-white transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[1px] bg-white transition-transform duration-500 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-padel-base flex flex-col items-center justify-center md:hidden"
          >
            <div className="bg-noise"></div>
            
            <nav className="flex flex-col items-center gap-10 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-cinzel text-4xl md:text-5xl uppercase tracking-widest transition-colors duration-500 ${
                        isActive ? 'text-padel-emerald glow-text-emerald' : 'text-white/70 hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-10 py-4 bg-padel-emerald text-padel-base font-inter font-bold text-sm uppercase tracking-[0.2em]"
                >
                  Book a Court
                </Link>
              </motion.div>
            </nav>
            
            {/* Background elements for mobile menu */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-padel-forest/20 to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-white/5 rounded-full pointer-events-none opacity-50"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
