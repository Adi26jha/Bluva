import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 1.5s as requested + buffer for smoother exit

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-navy-base flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            {/* Liquid Drop Animation */}
            <div className="relative w-24 h-48 mb-12">
              {/* The "Tap" or Source */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-brand-blue/20 rounded-full" />
              
              {/* The Falling Drop */}
              <motion.div
                initial={{ y: -20, scale: 0.8, opacity: 0 }}
                animate={{ 
                  y: [0, 180], 
                  scale: [1, 1.2, 0.8],
                  opacity: [0, 1, 1, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  times: [0, 0.8, 0.9, 1],
                  ease: "circIn" 
                }}
                className="absolute left-1/2 -translate-x-1/2 w-4 h-6 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(0,180,216,0.5)]"
                style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
              />

              {/* Impact Ripple */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 4], 
                  opacity: [0, 0.5, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  times: [0, 0.8, 1],
                  ease: "easeOut" 
                }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 border-2 border-brand-blue rounded-full"
              />
            </div>

            {/* Logo Text with Liquid Disclosure */}
            <div className="relative overflow-hidden">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-5xl md:text-7xl font-editorial font-bold text-slate-900 tracking-[0.3em] uppercase"
              >
                BLUVA
              </motion.h1>
              
              {/* Liquid Wave Overlay passing through text */}
              <motion.div
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent skew-x-12"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-6 text-xs tracking-[1em] uppercase text-slate-900 font-body"
            >
              Pure Indulgence
            </motion.p>
          </div>

          {/* Background Ambient Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 z-[-1]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 blur-[150px] rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
