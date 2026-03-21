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

const products = [
  { id: '250ml', name: 'Packaged Water', size: '250ml', description: 'Perfect for events and quick hydration.', image: 'https://placehold.co/400x800/0A1628/00B4D8?text=250ml' },
  { id: '500ml', name: 'Packaged Water', size: '500ml', description: 'The ideal companion for your daily move.', image: 'https://placehold.co/400x800/0A1628/00B4D8?text=500ml' },
  { id: '1000ml', name: 'Packaged Water', size: '1000ml', description: 'Stay hydrated all day with our liter bottle.', image: 'https://placehold.co/400x800/0A1628/00B4D8?text=1000ml' },
  { id: 'jeera', name: 'Jeera Water', size: '200ml', description: 'Refreshing traditional digestif with a twist.', image: 'https://placehold.co/400x800/0A1628/00B4D8?text=Jeera' },
];

const features = [
  { icon: Droplet, title: 'Affirmation Water', description: 'Water crafted with positive intent that supports holistic well-being.' },
  { icon: Users, title: 'Young Brand', description: 'Founded by young entrepreneurs driven by purpose and innovation.' },
  { icon: ShieldCheck, title: '5-Step Filtration', description: 'Precision filtration ensuring purity, safety, and consistent quality.' },
  { icon: Zap, title: 'Conscious Living', description: 'Promoting a lifestyle that goes beyond just hydration.' },
  { icon: Leaf, title: 'Eco-Friendly', description: 'Responsible initiatives including plantation drives and clean-city efforts.' },
  { icon: Award, title: 'Hygienic Packaging', description: 'State-of-the-art packaging with a focus on hygiene and sustainability.' },
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
              className="space-y-6 text-white/70 text-lg leading-relaxed"
            >
              <p>
                Founded by three young entrepreneurs, BLUVA is more than just water. It's a commitment to safe hydration, conscious living, and the essence of purity.
              </p>
              <Link to="/about" className="inline-block text-brand-blue font-bold tracking-widest uppercase text-sm border-b border-brand-blue/30 pb-2 hover:text-white hover:border-white transition-all">
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
            <p className="text-white/50">Redefining hydration through purity, innovation, and conscious intent.</p>
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
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl italic font-editorial mb-8">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ rotateY: 5, rotateX: 5 }}
                className="glass-card p-10 text-center space-y-4 border-white/5"
              >
                <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-6 flex items-center justify-center border border-white/20">
                  <span className="text-2xl font-bold text-white/30">Founder {i}</span>
                </div>
                <h3 className="text-2xl font-editorial">Co-Founder</h3>
                <p className="text-white/40 text-sm">Visionary entrepreneur dedicated to purity and hydration.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-navy-base py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <Phone className="text-brand-blue" size={24} />
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-white/40">Call Us</p>
                <p className="text-sm">+91 9773838578</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Mail className="text-brand-blue" size={24} />
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-white/40">Email Us</p>
                <p className="text-sm">bluvapackagedwater@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <MapPin className="text-brand-blue" size={24} />
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-white/40">Visit Us</p>
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
