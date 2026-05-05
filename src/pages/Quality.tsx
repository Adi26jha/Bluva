import { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, ShieldCheck, Filter, Droplet, CheckCircle, ArrowRight } from 'lucide-react';

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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = horizontalRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const scrollTween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });

      gsap.utils.toArray('.process-bubble').forEach((bubble: any) => {
        gsap.fromTo(bubble,
          { opacity: 0, scale: 0.8, filter: "blur(15px)", y: 50 },
          {
            opacity: 1, scale: 1, filter: "blur(0px)", y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bubble,
              containerAnimation: scrollTween,
              start: "left 95%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => { ctx.revert(); clearTimeout(timer); };
  }, []);

  return (
    <div className="w-full bg-navy-base">
      {/* 1. Hero Section */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-brand-blue font-bold tracking-[0.5em] text-[10px] uppercase mb-8 block opacity-60">The Standard of Purity</span>
          <h1 className="text-7xl md:text-[10rem] font-editorial font-bold mb-8 leading-[0.8] tracking-tighter text-slate-900">
            Pure <span className="text-brand-blue italic">Alchemy.</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed font-body">
            Refining the essence of life through a five-stage journey of absolute molecular perfection.
          </p>
        </motion.div>
      </section>

      {/* 2. Horizontal Scroll Journey */}
      <section ref={containerRef} className="relative h-screen w-full flex items-center overflow-hidden z-20 border-y border-slate-200 bg-navy-base">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-brand-blue/5 blur-[150px] rounded-full animate-pulse" />
        </div>

        <div ref={horizontalRef} className="flex flex-nowrap items-center gap-24 px-[20vw] will-change-transform">
          {processSteps.map((step, idx) => (
            <div key={idx} className="process-bubble w-[85vw] md:w-[550px] shrink-0">
              <div className="glass-card p-12 md:p-16 rounded-[3.5rem] border border-slate-200 group hover:border-brand-blue/40 transition-all duration-700">
                <div className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-10">Stage {step.number}</div>
                <div className="flex items-center gap-8 mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 group-hover:rotate-[360deg] transition-all duration-1000">
                    <step.icon className="text-brand-blue" size={36} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-editorial text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-500 text-xl leading-relaxed mb-12 font-body">{step.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-brand-blue/60 uppercase">Certified Process</span>
                  <ArrowRight className="text-brand-blue opacity-0 group-hover:opacity-100 transition-all" size={24} />
                </div>
              </div>
            </div>
          ))}
          <div className="process-bubble w-[80vw] md:w-[600px] shrink-0 pr-32">
            <h3 className="text-7xl md:text-[10rem] font-editorial italic text-slate-900 leading-[0.8] mb-10">
              Life, <br /> <span className="text-brand-blue">Perfected.</span>
            </h3>
          </div>
        </div>
      </section>

      {/* 3. Certifications Section */}
      <section className="py-60 bg-navy-base border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-5xl md:text-6xl font-editorial italic mb-8 leading-tight text-slate-900">Certified <br />Excellence.</h2>
              <p className="text-slate-500 leading-relaxed mb-10 text-lg">
                Our plant undergoes rigorous hourly testing to maintain international benchmarks of quality and safety.
              </p>
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue font-bold tracking-[0.2em] text-xs uppercase">
                <ShieldCheck size={20} /> ISI IS 14543:2004
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
                  className="p-10 border border-slate-200 hover:border-brand-blue/20 transition-all duration-500 rounded-[2.5rem] bg-white shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors">
                    <cert.icon className="text-brand-blue" size={24} />
                  </div>
                  <h4 className="text-2xl font-editorial mb-4 text-slate-900">{cert.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Quality;