import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShieldCheck, 
  Droplet, 
  Filter, 
  Zap,
  CheckCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { icon: Filter, title: "Purification", desc: "Multi-stage carbon & sand filtration." },
  { icon: ShieldCheck, title: "Osmosis", desc: "Advanced RO membrane technology." },
  { icon: Zap, title: "Ionization", desc: "Mineral balancing for perfect pH." },
  { icon: Droplet, title: "Ozonation", desc: "Biological stability assurance." },
  { icon: CheckCircle, title: "Sealing", desc: "Touch-free hygienic packaging." },
];

const ManufacturingTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;
    
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        if (horizontalRef.current && containerRef.current) {
          const getScrollWidth = () => horizontalRef.current!.scrollWidth;
          const getViewportWidth = () => window.innerWidth;

          gsap.fromTo(horizontalRef.current, 
            { x: 0 },
            {
              x: () => -(getScrollWidth() - getViewportWidth()),
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: () => `+=${getScrollWidth() - getViewportWidth()}`,
                invalidateOnRefresh: true,
                anticipatePin: 1,
              }
            }
          );

          ScrollTrigger.refresh();
        }
      }, containerRef);
    }, 200);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-navy-base relative overflow-hidden border-t border-white/5">
      <div className="absolute top-24 left-10 md:left-24 z-10 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-editorial opacity-20 uppercase tracking-[0.2em] leading-tight text-white/60">
          5-Step<br />
          <span className="text-brand-blue">Excellence</span>
        </h2>
      </div>

      <div ref={horizontalRef} className="flex h-full flex-nowrap gap-12 px-24 md:px-48 items-center">
        {milestones.map((item, idx) => (
          <div 
            key={idx} 
            className="w-[75vw] md:w-[45vw] lg:w-[35vw] h-[60vh] shrink-0 glass-card p-10 md:p-14 border-white/5 relative group flex flex-col justify-center"
          >
            <span className="absolute top-8 right-10 text-5xl font-editorial font-bold text-brand-blue/10">0{idx + 1}</span>
            <div className="w-16 h-16 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-8 border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-all duration-500">
              <item.icon className="text-brand-blue" size={32} />
            </div>
            <h3 className="text-3xl font-editorial mb-4 group-hover:text-brand-blue transition-colors">{item.title}</h3>
            <p className="text-white/40 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

        {/* Closing card */}
        <div className="w-[75vw] md:w-[45vw] lg:w-[35vw] h-[60vh] shrink-0 glass-card p-14 border-brand-blue/30 bg-brand-blue/5 flex flex-col justify-center items-center text-center">
          <h3 className="text-4xl font-editorial italic mb-6">Purity Redefined.</h3>
          <p className="text-accent-cyan/60 uppercase tracking-widest text-xs mb-8">Every bottle tells a story</p>
          <div className="w-px h-20 bg-gradient-to-b from-brand-blue to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ManufacturingTimeline;
