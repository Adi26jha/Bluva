import { motion } from 'framer-motion';
import HeroSimple from '../components/HeroSimple';
import ManufacturingTimeline from '../components/ManufacturingTimeline';
import ProductCard from '../components/ProductCard';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';
import { 
  Droplet, 
  ShieldCheck, 
  Zap, 
  Leaf, 
  Users, 
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

import bottle250Img from '../assets/250ml_bottle.png';
import bottle500Img from '../assets/500ml_bottle.png';
import bottle1000Img from '../assets/1000ml_bottle.png';

const products = [
  { id: '250ml', name: 'Packaged Water', size: '250ml', description: 'Perfect for events and quick hydration.', image: bottle250Img },
  { id: '500ml', name: 'Packaged Water', size: '500ml', description: 'The ideal companion for your daily move.', image: bottle500Img },
  { id: '1000ml', name: 'Packaged Water', size: '1000ml', description: 'Stay hydrated all day with our liter bottle.', image: bottle1000Img },
  { id: 'jeera', name: 'Jeera Water', size: '200ml', description: 'Refreshing traditional digestif with a twist.', image: 'https://placehold.co/400x800/F8FAFC/00B4D8?text=Jeera' },
];

const features = [
  { icon: Droplet, title: 'Affirmation Water', description: 'Water crafted with positive intent that supports holistic well-being.' },
  { icon: Users, title: 'Young Brand', description: 'Founded by young entrepreneurs driven by purpose and innovation.' },
  { icon: ShieldCheck, title: '5-Step Filtration', description: 'Precision filtration ensuring purity, safety, and consistent quality.' },
  { icon: Zap, title: 'Conscious Living', description: 'Promoting a lifestyle that goes beyond just hydration.' },
  { icon: Leaf, title: 'Eco-Friendly', description: 'Responsible initiatives including plantation drives and clean-city efforts.' },
  { icon: Award, title: 'Hygienic Packaging', description: 'State-of-the-art packaging with a focus on hygiene and sustainability.' },
];
import dhruvImg from '../assets/dhruv_founder.jpeg';
import rishikaImg from '../assets/rishika_founder.PNG';
import shradhaImg from '../assets/shradha_founder.jpeg';

const founders = [
  { id: 'rishika', name: 'Rishika Goel', role: 'Co-Founder', image: rishikaImg, accent: '#00B4D8', tagline: 'Because design should be democratic.' },
  { id: 'shradha', name: 'Shradha', role: 'Co-Founder', image: shradhaImg, accent: '#0077B6', tagline: 'Because water has always been more than water.' },
  { id: 'dhruv', name: 'Dhruv', role: 'Co-Founder', image: dhruvImg, accent: '#023E8A', tagline: 'Because ordinary doesn\'t have to be forgettable.' },
];

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <HeroSimple />

      {/* Brand Story Teaser */}
      <section className="bg-navy-base pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-7xl leading-tight">
                Born from a vision.<br />
                <span className="text-brand-blue italic">Built on purity.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-slate-600 text-lg leading-relaxed"
            >
              <p>
                Founded by three young entrepreneurs, BLUVA is more than just water. It's a commitment to safe hydration, conscious living, and the essence of purity.
              </p>
              <Link to="/about" className="inline-block text-brand-blue font-bold tracking-widest uppercase text-sm border-b border-brand-blue/30 pb-2 hover:text-slate-900 hover:border-slate-900 transition-all">
                Our Full Story →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality/Manufacturing Journey */}
      <ManufacturingTimeline />

      {/* Product Showcase Strip */}
      <section className="bg-navy-base py-32 overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-editorial">Our <span className="text-brand-blue italic">Pure</span> Collection</h2>
        </div>
        
        {/* Horizontal Scroll Area */}
        <div className="flex gap-8 px-6 overflow-x-auto pb-12 scrollbar-none snap-x snap-mandatory">
          {products.map((product) => (
            <div key={product.id} className="snap-center">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>

      {/* Why BLUVA Section */}
      <section className="bg-navy-base py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl mb-6">Why <span className="text-brand-blue">BLUVA?</span></h2>
            <p className="text-slate-500">Redefining hydration through purity, innovation, and conscious intent.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
        
        {/* Decorative Wave Overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Founder Teaser */}
      <section className="bg-navy-base py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-blue">The Visionaries</p>
            <h2 className="text-5xl md:text-7xl italic font-editorial">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {founders.map((founder) => (
              <motion.div
                key={founder.id}
                whileHover={{ y: -8 }}
                className="glass-card p-10 text-center space-y-6 border-slate-200 transition-all duration-300 relative group overflow-hidden"
                style={{ borderTop: `3px solid ${founder.accent}` }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ backgroundColor: founder.accent }}
                />
                
                <div 
                  className="w-32 h-32 rounded-full mx-auto relative flex items-center justify-center bg-white shadow-sm overflow-hidden"
                  style={{ border: `1px solid ${founder.accent}33` }}
                >
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="relative z-10 w-full h-full object-cover" 
                  />
                </div>
                
                <div className="space-y-2 relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: founder.accent }}>
                    {founder.role}
                  </p>
                  <h3 className="text-3xl font-editorial font-bold text-slate-900">{founder.name}</h3>
                </div>
                
                <p className="text-slate-600 font-editorial italic text-lg leading-relaxed relative z-10">
                  "{founder.tagline}"
                </p>
                
                <div className="pt-6 relative z-10">
                  <Link 
                    to="/about" 
                    className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:tracking-[0.3em]"
                    style={{ color: founder.accent }}
                  >
                    Read Story
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-navy-base py-20 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <Phone className="text-brand-blue" size={24} />
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-slate-400">Call Us</p>
                <p className="text-sm">+91 9811727224</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Mail className="text-brand-blue" size={24} />
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-slate-400">Email Us</p>
                <p className="text-sm">bluvapackagedwater@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <MapPin className="text-brand-blue" size={24} />
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-slate-400">Visit Us</p>
                <p className="text-sm">West Punjabi Bagh, New Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
