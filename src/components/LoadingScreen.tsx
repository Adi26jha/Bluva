import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets } from 'lucide-react';

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
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-navy-base flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative text-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative mb-8"
            >
              <Droplets className="w-24 h-24 text-brand-blue/20" />
              <motion.div
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-full overflow-hidden text-brand-blue"
              >
                <Droplets className="w-24 h-24" />
              </motion.div>
            </motion.div>

            {/* Logo Text */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "1em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-4xl md:text-5xl font-editorial font-bold text-white uppercase"
            >
              BLUVA
            </motion.h1>
            
            {/* Subtle Progress Bar */}
            <div className="w-48 h-1 bg-white/5 mx-auto mt-8 rounded-full overflow-hidden">
               <motion.div
                 initial={{ x: "-100%" }}
                 animate={{ x: "0%" }}
                 transition={{ duration: 2, ease: "linear" }}
                 className="w-full h-full bg-brand-blue"
               />
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 z-[-1] opacity-20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 blur-[120px] rounded-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
