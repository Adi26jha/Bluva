import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LiquidEther from './LiquidEther';

const HeroSimple = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-navy-base overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={[ '#0E87CC', '#20A4F3', '#1B98E0' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Living Status Pill */}
          <div className="flex justify-center mb-10">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm cursor-default hover:bg-white/60 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-slate-700">
                100% Pure & Conscious
              </span>
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-9xl font-editorial font-bold text-slate-900 tracking-widest leading-tight">
            Pure Indulgence.<br />
            <span className="text-brand-blue italic">Liquid Luxury.</span>
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto tracking-[0.2em] uppercase">
            Let's Hydrate. <span className="text-accent-cyan">Let's BLUVA.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link to="/products" className="btn-primary">
              Explore Products
            </Link>
            <Link to="/about" className="text-slate-400 hover:text-slate-900 tracking-widest uppercase text-sm font-bold border-b border-slate-200 pb-2 transition-all">
              Our Vision →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-slate-900">Scroll</span>
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-slate-900 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSimple;
