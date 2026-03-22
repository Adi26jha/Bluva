import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Quote } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000" 
            alt="Nature/Water header" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-base/50 via-navy-base to-navy-base" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-editorial font-bold text-slate-900 tracking-widest">
            Our Story
          </h1>
        </motion.div>
      </section>

      {/* Brand Story Editorial */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block p-1 px-3 rounded bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-widest">
              Est. 2024
            </div>
            <h2 className="text-5xl md:text-6xl leading-tight font-editorial">
              Born from a vision.<br />
              Refined by <span className="text-brand-blue italic">purpose.</span>
            </h2>
            <div className="relative pl-8 border-l-2 border-brand-blue/30 py-4">
              <Quote className="absolute -left-4 top-0 text-brand-blue/20" size={40} />
              <p className="text-2xl font-editorial italic text-slate-700 leading-relaxed">
                "We set out to create a brand that doesn't just hydrate bodies, but also reflects the values of trust and transparency."
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-600 text-lg leading-relaxed pt-10"
          >
            <p>
              BLUVA was founded by three young entrepreneurs who saw a gap in the market for premium packaged water that resonates with the conscious consumer. We believe hydration is a fundamental right, and safety is a standard that should never be compromised.
            </p>
            <p>
              Our mission is simple: to provide the highest quality mineral water while maintaining a footprint that respects our environment. From our 5-step filtration process to our eco-friendly initiatives, every decision is guided by our core values of Purity, Consistency, and Trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white shadow-sm relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-card p-12 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
                <Target className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-3xl font-editorial">Our Mission</h3>
              <p className="text-slate-500 leading-relaxed">
                To deliver safe, high-quality, and refreshing hydration products while fostering a culture of health and sustainability in every community we serve.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-card p-12 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20">
                <Eye className="text-accent-cyan" size={32} />
              </div>
              <h3 className="text-3xl font-editorial">Our Vision</h3>
              <p className="text-slate-500 leading-relaxed">
                To become the most trusted beverage brand in India, recognized for our commitment to purity, innovation, and conscious living.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Profiles (Full Section) */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-editorial italic mb-4">Meet the Visionaries</h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full" />
        </div>

        <div className="space-y-32">
          {[
            { name: "Pratham Sethi", role: "Co-Founder", bio: "Driven by a passion for health and wellness, Pratham leads the strategic vision and brand identity of BLUVA." },
            { name: "Siddharth Jain", role: "Co-Founder", bio: "With a background in operations, Siddharth ensures that every bottle of BLUVA meets our rigorous quality standards." },
            { name: "Varun Gupta", role: "Co-Founder", bio: "Varun focuses on distribution and growth, making sure BLUVA reaches conscious consumers across the region." }
          ].map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-brand-blue/20 blur-3xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative aspect-square rounded-2xl overflow-hidden glass-card-dark border-slate-200 flex items-center justify-center bg-white shadow-sm">
                    <span className="text-4xl font-editorial text-slate-900/10 capitalize">{founder.name.split(' ').map(n=>n[0]).join('')}</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-4xl font-editorial font-bold">{founder.name}</h3>
                <p className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm">{founder.role}</p>
                <p className="text-slate-500 text-xl leading-relaxed italic">
                  "{founder.bio}"
                </p>
                <div className="pt-4 flex gap-6">
                  <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors uppercase text-[10px] font-bold tracking-widest border-b border-slate-200 pb-1">LinkedIn Profile</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section Placeholder */}
      <section className="py-32 bg-navy-base border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-editorial font-bold uppercase tracking-widest">Our Journey</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { year: "2024", title: "The Inception", desc: "Three friends unite with a vision to redefine packaged water." },
              { year: "2024 Q3", title: "Production Begins", desc: "First 500ml batch leaves our state-of-the-art facility." },
              { year: "2025", title: "Expanding Purity", desc: "Introduction of Jeera Water and larger pack sizes." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-12 items-start group"
              >
                <div className="text-4xl font-bash font-editorial text-brand-blue font-bold w-32 shrink-0 group-hover:scale-110 transition-transform">
                  {step.year}
                </div>
                <div className="pt-2">
                  <h4 className="text-2xl font-editorial mb-2">{step.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-blue/10 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-editorial italic mb-8">Ready to Hydrate?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/products" className="btn-primary">View Products</Link>
            <Link to="/contact" className="btn-outline">Get In Touch</Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] rounded-full" />
      </section>
    </div>
  );
};

export default About;