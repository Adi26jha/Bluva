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
    <div className="relative min-h-screen w-full bg-navy-base flex flex-col">
      {/* 1. Background Layer - Forced to lowest Z-index */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PersistentBackground />
      </div>

      {/* 2. Global UI components */}
      <ScrollToTop />
      <Header />

      {/* 3. Page Content Wrapper */}
      <div className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            /* CRITICAL FIX: 
               Removed 'scale' and 'filter' transitions. 
               Framer Motion's scale/filter creates a new stacking context 
               that hides GSAP pinned elements. 
            */
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
            /* CRITICAL FIX: 
               Forced overflow: visible to allow GSAP's pin-spacer 
               to expand the height of the document naturally.
            */
            className="relative w-full overflow-visible framer-motion-wrapper"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>

      {/* 4. Footer - Stays at the bottom of the natural document flow */}
      <div className="relative z-20 w-full mt-auto bg-navy-base">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;