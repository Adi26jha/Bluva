import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import PersistentBackground from './PersistentBackground';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen w-full bg-[#0A1628] flex flex-col">
      {/* 1. Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PersistentBackground />
      </div>

      {/* 2. Logic & UI */}
      <ScrollToTop />
      <Header />

      {/* 3. Page Content */}
      <div className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.43, 0.13, 0.23, 0.96] // Custom cubic-bezier for a "fluid" feel
            }}
            className="relative w-full framer-motion-wrapper"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>

      {/* 4. Footer - Moved outside AnimatePresence to stay in document flow */}
      <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;