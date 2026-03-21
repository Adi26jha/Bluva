import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Droplet, Filter, Zap, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { icon: Filter, title: "Purification", desc: "Multi-stage carbon & sand filtration for clarity." },
  { icon: ShieldCheck, title: "Osmosis", desc: "Advanced RO membrane technology removes toxins." },
  { icon: Zap, title: "Ionization", desc: "Mineral balancing for the perfect alkaline pH." },
  { icon: Droplet, title: "Ozonation", desc: "Ensuring long-term biological stability." },
  { icon: CheckCircle, title: "Sealing", desc: "Touch-free hygienic medical-grade packaging." },
];

const ManufacturingTimeline = () => {
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
        }
      });

      // Individual card "rise" effect
      gsap.utils.toArray('.timeline-card').forEach((card: any) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          scale: 0.95,
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left 90%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => { ctx.revert(); clearTimeout(timer); };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#0A1628] overflow-hidden z-20 border-t border-white/5">

      {/* Editorial Title Background */}
      <div className="absolute top-24 left-10 md:left-24 z-30 pointer-events-none">
        <h2 className="text-6xl md:text-9xl font-editorial text-white opacity-[0.03] uppercase tracking-tighter leading-none select-none">
          Process<br />
          <span className="text-brand-blue italic">Excellence</span>
        </h2>
      </div>

      <div ref={horizontalRef} className="flex h-full flex-nowrap gap-16 px-[15vw] items-center will-change-transform">
        {milestones.map((item, idx) => (
          <div
            key={idx}
            className="timeline-card w-[80vw] md:w-[45vw] h-[60vh] shrink-0 glass-card-dark p-12 md:p-14 border-white/10 relative group flex flex-col justify-center overflow-hidden hover:border-brand-blue/30 transition-all duration-700"
          >
            {/* Ghost Number Overlay */}
            <span className="absolute -top-10 -right-10 text-[12rem] font-editorial font-bold text-white/[0.02] group-hover:text-brand-blue/[0.05] transition-colors duration-1000 select-none">
              0{idx + 1}
            </span>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center mb-8 group-hover:bg-brand-blue/20 transition-all duration-500">
                <item.icon className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-4xl font-editorial text-white mb-4 group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-white/40 text-lg font-body leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>

            {/* Accent Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-blue group-hover:w-full transition-all duration-1000" />
          </div>
        ))}

        {/* Closing card */}
        <div className="timeline-card w-[70vw] md:w-[35vw] h-[60vh] shrink-0 flex flex-col justify-center items-center text-center">
          <h3 className="text-5xl font-editorial italic text-white mb-6">Purity <br /><span className="text-brand-blue">Redefined.</span></h3>
          <div className="w-px h-24 bg-gradient-to-b from-brand-blue to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ManufacturingTimeline;