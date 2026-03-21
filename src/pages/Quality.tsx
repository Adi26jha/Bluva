import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, ShieldCheck, Filter, Droplet, CheckCircle, ArrowRight, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  { number: "01", title: "Sand & Carbon Filtration", desc: "Initial removal of large particles, odors, and chlorine through high-grade carbon beds.", icon: Filter },
  { number: "02", title: "Reverse Osmosis", desc: "Proprietary membrane technology that eliminates dissolved solids and heavy metals.", icon: ShieldCheck },
  { number: "03", title: "Mineral Infusion", desc: "Balanced addition of essential minerals to enhance taste and support well-being.", icon: Zap },
  { number: "04", title: "Ozonation", desc: "Natural oxidative process to ensure 100% biological safety and shelf stability.", icon: Droplet },
  { number: "05", title: "UV Sterilization", desc: "Final bacterial protection using high-intensity ultraviolet irradiation.", icon: CheckCircle }
];

const Quality = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;

    const initGSAP = () => {
      ctx = gsap.context(() => {
        if (!containerRef.current || !horizontalRef.current) return;

        const pinSection = containerRef.current;
        const scrollContent = horizontalRef.current;

        // Ensure measurements are fresh
        ScrollTrigger.refresh();

        // 2. The Main Horizontal Scroll Tween
        const scrollTween = gsap.to(scrollContent, {
          x: () => -(scrollContent.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: pinSection,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollContent.scrollWidth}`,
            invalidateOnRefresh: true,
            refreshPriority: 1,
            anticipatePin: 1
          }
        });

        // 3. Reveal animations for individual step cards
        gsap.utils.toArray('.process-bubble').forEach((bubble: any) => {
          gsap.fromTo(bubble,
            { opacity: 0, scale: 0.9, y: 30, filter: "blur(10px)" },
            {
              opacity: 1, scale: 1, y: 0, filter: "blur(0px)",
              duration: 1,
              scrollTrigger: {
                trigger: bubble,
                containerAnimation: scrollTween,
                start: "left 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });

        // Final refresh after setup
        ScrollTrigger.refresh();
      }, containerRef);
    };

    // Wait for EVERYTHING (images, fonts, videos) to load before calculating
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', handleLoad);

    const timer = setTimeout(() => {
      initGSAP();
      // Force a re-calculation after the initial render
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div className="w-full bg-navy-base overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-brand-blue font-bold tracking-[0.5em] text-xs uppercase mb-8 block opacity-60">The Standard of Purity</span>
          <h1 className="text-7xl md:text-[9rem] font-editorial font-bold mb-8 leading-[0.8] tracking-tighter">
            Pure <span className="text-brand-blue italic">Alchemy.</span>
          </h1>
          <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed font-body">
            Every drop of BLUVA is refined through a five-stage ritual of absolute purification.
          </p>
        </motion.div>
      </section>

      {/* Horizontal Journey Section */}
      <section id="quality-horizontal-container" ref={containerRef} className="relative h-screen w-full flex items-center overflow-hidden border-y border-white/5 bg-navy-base z-[5]">

        {/* Background Parallax Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full animate-pulse" />
        </div>

        {/* The Track that moves horizontally */}
        <div id="quality-horizontal-track" ref={horizontalRef} className="flex flex-nowrap items-center gap-20 px-[15vw] will-change-transform">
          {processSteps.map((step, idx) => (
            <div key={idx} className="process-bubble w-[85vw] md:w-[550px] shrink-0">
              <div className="glass-card-dark p-12 md:p-16 rounded-[3rem] border-white/10 group hover:border-brand-blue/30 transition-all duration-700">
                <div className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-10">Stage {step.number}</div>

                <div className="flex items-center gap-8 mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-colors">
                    <step.icon className="text-brand-blue" size={36} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-editorial text-white">{step.title}</h3>
                </div>

                <p className="text-white/40 text-xl leading-relaxed mb-12 font-body">
                  {step.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-brand-blue/60 uppercase">Certified Process</span>
                  <ArrowRight className="text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
              </div>
            </div>
          ))}

          {/* Conclusion slide */}
          <div className="process-bubble w-[80vw] md:w-[600px] shrink-0 pr-20">
            <h3 className="text-7xl md:text-[8rem] font-editorial italic text-white/90 leading-[0.8] mb-10">
              Life, <br />
              <span className="text-brand-blue">Perfected.</span>
            </h3>
            <button className="btn-outline">View Standards</button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-60 bg-navy-base border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-5xl md:text-6xl font-editorial italic mb-8 leading-tight">Certified <br/>Excellence.</h2>
              <p className="text-white/40 leading-relaxed mb-10 text-lg">
                Our plant undergoes rigorous hourly testing to maintain international benchmarks of quality and safety.
              </p>
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue font-bold tracking-[0.2em] text-xs uppercase">
                <ShieldCheck size={20} />
                ISI IS 14543:2004
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { title: "FSSAI Licensed", desc: "Approved for food grade packaging and hygienic handling processes.", icon: ShieldCheck },
                { title: "Lab Verified", desc: "In-house lab testing for alkalinity, TDS levels, and mineral consistency.", icon: Zap },
                { title: "Ozone Treated", desc: "Advanced biological stabilization for long-term purity and safety.", icon: Droplet },
                { title: "Eco-Safe", desc: "Commitment to 100% recyclable materials and sustainable bottling.", icon: Filter }
              ].map((cert, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 border border-white/5 hover:border-brand-blue/20 transition-all duration-500 rounded-[2.5rem] bg-white/[0.02] group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors">
                    <cert.icon className="text-brand-blue" size={24} />
                  </div>
                  <h4 className="text-2xl font-editorial mb-4 text-white/80">{cert.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="py-60 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group cursor-pointer overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,180,216,0.1)] aspect-video bg-navy-base"
          >
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-30 transition-transform duration-1000 group-hover:scale-110"
              alt="Plant Tour"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-brand-blue flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-400">
                <Play className="text-navy-base ml-1" fill="currentColor" size={40} />
              </div>
            </div>
            <div className="absolute bottom-16 left-16 text-left">
              <span className="text-brand-blue text-xs font-bold tracking-[0.5em] uppercase mb-4 block">Coming Soon</span>
              <h3 className="text-5xl md:text-6xl font-editorial italic text-white/90">Virtual Plant Tour</h3>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Quality;