import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Droplet, Filter, Zap, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { icon: Filter, title: "Purification", desc: "Raw water is aggressively forced through deep carbon and fine sand filters to strip away heavy particulate, volatile compounds, odor, and color, ensuring pristine physical clarity.", color: "#0077B6" },
  { icon: ShieldCheck, title: "Reverse Osmosis", desc: "The water encounters high-pressure semi-permeable RO membranes. This molecular blockade completely rejects heavy metals, microplastics, and dissolved microscopic toxins.", color: "#023E8A" },
  { icon: Zap, title: "Ionization", desc: "Because the aggressive RO process leaves the water 'empty', we meticulously re-infuse it with a proprietary blend of electrolytes, arriving at a perfectly revitalizing alkaline pH.", color: "#00B4D8" },
  { icon: Droplet, title: "Ozonation", desc: "A powerful, finishing wave of ozone gas is injected directly into the water. This ensures total biological stabilization, keeping every drop pristine and oxygen-rich for years.", color: "#90E0EF" },
  { icon: CheckCircle, title: "Medical-Grade Sealing", desc: "The water enters our touch-free, fully automated bottling facility—operating like a sterile cleanroom. It is bottled and hermetically sealed, guaranteeing uncompromised purity.", color: "#0096C7" },
];

const ManufacturingTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const liquidFillRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const track = trackRef.current;
      const fill = liquidFillRef.current;
      const bgText = bgTextRef.current;

      if (!container || !track || !fill || !bgText) return;

      const trackWidth = track.scrollWidth - window.innerWidth;

      // 1. The Main Horizontal Pan
      const scrollTween = gsap.to(track, {
        x: -trackWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          invalidateOnRefresh: true,
        }
      });

      // 2. The Liquid Pipe Fill
      gsap.to(fill, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          invalidateOnRefresh: true,
        }
      });

      // 3. Parallax Ghost Background Text
      gsap.to(bgText, {
        x: () => -(bgText.scrollWidth - window.innerWidth) * 0.4, // Move slower than track
        ease: "none",
        scrollTrigger: {
          trigger: container,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
        }
      });

      // 4. Node & Card Entrance Animations
      gsap.utils.toArray('.process-node').forEach((node: any, i) => {
        const card = node.querySelector('.process-card');
        const line = node.querySelector('.connecting-line');
        
        gsap.from([card, line], {
          opacity: 0,
          y: i % 2 === 0 ? 30 : -30,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            containerAnimation: scrollTween,
            start: "left 70%",
            toggleActions: "play none none reverse"
          }
        });
      });

    }, containerRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => { ctx.revert(); clearTimeout(timer); };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#fdfdfd] overflow-hidden z-20">
      
      {/* Editorial Ghost Text Background */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center pt-20 pointer-events-none z-0 overflow-hidden">
        <h2 ref={bgTextRef} className="text-[18vw] font-editorial font-bold text-slate-900 opacity-[0.015] whitespace-nowrap pl-[10vw]">
          ENGINEERED PURITY <span className="italic pl-16">ENGINEERED PURITY</span>
        </h2>
      </div>

      <div className="relative h-full w-full z-10 flex">
        
        {/* The Scrollable Track Wrapper */}
        <div ref={trackRef} className="flex h-full flex-nowrap items-center w-max will-change-transform">
          
          {/* Start Padding */}
          <div className="w-[15vw] shrink-0" />

          {/* THE MASTER PIPELINE (Static Background Pipe) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-10" />
          
          {/* THE ACTIVE LIQUID FILL (Animates rightward) */}
          <div 
            ref={liquidFillRef}
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-cyan-400 -translate-y-1/2 origin-left scale-x-0 z-20 shadow-[0_0_15px_rgba(2,62,138,0.5)]" 
          />

          {milestones.map((item, idx) => {
            const isTop = idx % 2 === 0;

            return (
              <div key={idx} className="process-node relative w-[85vw] md:w-[45vw] shrink-0 h-full flex flex-col justify-center px-10 md:px-20 z-30">
                
                {/* Upper Section */}
                <div className={`flex-1 flex flex-col justify-end pb-12 ${isTop ? '' : 'hidden'}`}>
                  <div className="process-card bg-white border border-slate-200 shadow-sm rounded-2xl p-8 relative hover:shadow-xl hover:border-slate-300 transition-all duration-500">
                    <span className="absolute -top-6 right-6 text-7xl font-editorial font-bold opacity-[0.03] select-none">{`0${idx + 1}`}</span>
                    <div className="flex items-center gap-5 mb-4 relative z-10">
                      <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-slate-50" style={{ borderColor: `${item.color}30` }}>
                        <item.icon size={20} style={{ color: item.color }} />
                      </div>
                      <h3 className="text-2xl font-editorial font-bold text-slate-800">{item.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
                  </div>
                  {/* Connecting Line Down to Node */}
                  <div className="connecting-line w-px h-12 bg-slate-300 mx-auto mt-4 origin-bottom" />
                </div>

                {/* The Node on the Pipe */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white bg-slate-200 z-30 flex items-center justify-center shadow-sm">
                   {/* Inner active dot that lights up when GSAP opacity animation hits */}
                   <div className="w-2 h-2 rounded-full opacity-100" style={{ backgroundColor: item.color }} />
                </div>

                {/* Lower Section */}
                <div className={`flex-1 flex flex-col justify-start pt-12 ${!isTop ? '' : 'hidden'}`}>
                  {/* Connecting Line Up to Node */}
                  <div className="connecting-line w-px h-12 bg-slate-300 mx-auto mb-4 origin-top" />
                  <div className="process-card bg-white border border-slate-200 shadow-sm rounded-2xl p-8 relative hover:shadow-xl hover:border-slate-300 transition-all duration-500">
                    <span className="absolute -bottom-4 right-6 text-7xl font-editorial font-bold opacity-[0.03] select-none">{`0${idx + 1}`}</span>
                    <div className="flex items-center gap-5 mb-4 relative z-10">
                      <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-slate-50" style={{ borderColor: `${item.color}30` }}>
                        <item.icon size={20} style={{ color: item.color }} />
                      </div>
                      <h3 className="text-2xl font-editorial font-bold text-slate-800">{item.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
                  </div>
                </div>

              </div>
            );
          })}

          {/* End Padding / Final Reveal Card */}
          <div className="w-[30vw] md:w-[40vw] shrink-0 h-full flex flex-col justify-center items-center px-10 relative z-30">
            <h3 className="text-4xl md:text-5xl font-editorial italic text-slate-800 mb-6">Absolute <span className="text-brand-blue">Purity.</span></h3>
            <div className="w-px h-24 bg-gradient-to-b from-brand-blue to-transparent opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManufacturingTimeline;