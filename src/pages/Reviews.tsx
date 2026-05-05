import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

import video1 from '../assets/C3098 (1).mp4';
import video2 from '../assets/C3122 (online-video-cutter.com).mp4';
import video3 from '../assets/C3151 (1).mp4';

const ReviewVideoCard = ({ videoSrc, name, delay }: { videoSrc: string, name: string, delay: number }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="relative group w-full aspect-[9/16] rounded-3xl overflow-hidden glass-card-dark border border-white/10 shadow-2xl"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />

      {/* Soft Dark Gradient for Badge Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Mute Toggle Button */}
      <button 
        onClick={toggleMute}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/20 text-white hover:bg-black/40 transition-colors z-20 cursor-pointer"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {/* Verified Review Badge */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none flex items-center gap-2 transform transition-transform duration-500 group-hover:-translate-y-1">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse shadow-[0_0_8px_rgba(0,180,216,0.8)]" />
        <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em] drop-shadow-md">{name}</p>
      </div>
    </motion.div>
  );
};

const Reviews = () => {
  return (
    <div className="w-full bg-navy-base pt-24 min-h-screen">
      <section className="py-20 container mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-[0.5em] text-[10px] uppercase mb-4 block">The Taste Test</span>
          <h1 className="text-5xl md:text-7xl font-editorial italic text-slate-900">What People Are Saying</h1>
          <div className="w-16 h-[2px] bg-brand-blue mx-auto rounded-full mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ReviewVideoCard 
            videoSrc={video1} 
            name="Verified Review" 
            delay={0.1} 
          />
          <ReviewVideoCard 
            videoSrc={video2} 
            name="Verified Review" 
            delay={0.3} 
          />
          <ReviewVideoCard 
            videoSrc={video3} 
            name="Verified Review" 
            delay={0.5} 
          />
        </div>
      </section>
    </div>
  );
};

export default Reviews;
