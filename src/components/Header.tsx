import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/cropped_logo-removebg-preview.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'B2B', path: '/b2b' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 w-[92%] lg:w-[96%] max-w-7xl z-50 transition-all duration-500 ${
        isScrolled 
          ? 'top-4 bg-white/75 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,30,80,0.06)] rounded-[2rem] py-2 md:py-3' 
          : 'top-6 md:top-8 bg-transparent border border-transparent py-4'
      }`}
    >
      <div className="w-full px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="block group cursor-pointer py-1">
          <div className="h-8 md:h-10 flex items-center justify-start transition-opacity group-hover:opacity-80">
             <img 
              src={logoImg} 
              alt="Bluva" 
              className="w-auto h-full object-contain" 
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                location.pathname === link.path ? 'text-brand-blue' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeLink"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-blue"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link to="/b2b" className="btn-outline scale-90">
            Partner With Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full left-0 w-full mt-4 bg-white/90 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-3xl py-8 px-6 md:hidden flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xl font-editorial tracking-widest ${
                  location.pathname === link.path ? 'text-brand-blue' : 'text-slate-900'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/b2b"
              className="btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Partner With Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
