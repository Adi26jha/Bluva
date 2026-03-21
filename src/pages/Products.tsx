import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FileText, ChevronRight } from 'lucide-react';

const products = [
  {
    id: '250ml',
    category: 'Packaged Water',
    name: 'Packaged Drinking Water',
    size: '250ml',
    description: 'Our most portable option, perfect for short commutes, quick meetings, or event catering. Compact yet delivering the same pure hydration as our larger bottles.',
    benefits: ['Eco-friendly material', 'Pocket-sized convenience', '5-step purified'],
    composition: { ph: '7.2 - 7.6', tds: '< 50 ppm', minerals: 'Added' },
    image: 'https://placehold.co/600x1200/0A1628/00B4D8?text=250ml'
  },
  {
    id: '500ml',
    category: 'Packaged Water',
    name: 'Packaged Drinking Water',
    size: '500ml',
    description: 'The industry standard for a reason. Our 500ml bottle is designed for active lifestyles, fitting perfectly in car cup holders and gym bags.',
    benefits: ['Ergonomic grip', 'Optimal daily portion', 'Ozone treated'],
    composition: { ph: '7.2 - 7.6', tds: '< 50 ppm', minerals: 'Added' },
    image: 'https://placehold.co/600x1200/0A1628/00B4D8?text=500ml'
  },
  {
    id: '1000ml',
    category: 'Packaged Water',
    name: 'Packaged Drinking Water',
    size: '1000ml',
    description: 'For those who take hydration seriously. The 1 Liter bottle ensures you have enough pure water to last through intense workouts or long office hours.',
    benefits: ['Value pack', 'Full day hydration', 'Recyclable PET'],
    composition: { ph: '7.2 - 7.6', tds: '< 50 ppm', minerals: 'Added' },
    image: 'https://placehold.co/600x1200/0A1628/00B4D8?text=1000ml'
  },
  {
    id: 'jeera',
    category: 'Jeera Water',
    name: 'Apna Jeera Drink',
    size: '200ml',
    description: 'A refreshing traditional Indian digestif with a modern twist. Infused with natural cumin extracts and a proprietary blend of spices for that perfect kick.',
    benefits: ['Aids digestion', 'Natural extracts', 'Refreshing taste'],
    composition: { energy: '42 kcal', sugar: '10g', fat: '0g' },
    image: 'https://placehold.co/600x1200/0A1628/00B4D8?text=Jeera'
  }
];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="pt-24 min-h-screen bg-navy-base">
      {/* Intro Header */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-editorial mb-6"
        >
          Our <span className="text-brand-blue italic">Product</span> Line
        </motion.h1>
        <p className="text-white/40 max-w-2xl mx-auto">
          From pure hydration to traditional refreshments, explore our range of bottled excellence.
        </p>
      </section>

      {/* Sticky Sub-nav */}
      <nav className="sticky top-20 z-40 bg-navy-base/80 backdrop-blur-xl border-y border-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-center gap-4 md:gap-12">
          {['All', 'Packaged Water', 'Jeera Water'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative pb-2 ${
                activeFilter === filter ? 'text-brand-blue' : 'text-white/30 hover:text-white'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div
                  layoutId="productFilter"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue"
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Product Sections */}
      <div className="container mx-auto px-6 space-y-32 py-32">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, idx) => (
            <motion.section
              key={product.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-brand-blue/10 blur-[120px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="relative z-10 aspect-[3/4] max-h-[600px] flex items-center justify-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,180,216,0.3)] hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                    {product.size} Available
                  </span>
                  <h2 className="text-4xl md:text-6xl font-editorial">{product.name}</h2>
                </div>

                <p className="text-white/50 text-xl leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/80 border-b border-white/5 pb-2">Key Benefits</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex gap-3 text-sm text-white/50 items-center">
                          <CheckCircle2 size={16} className="text-brand-blue" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/80 border-b border-white/5 pb-2">Composition</h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(product.composition).map(([key, val], cIdx) => (
                        <span key={cIdx} className="px-3 py-1 rounded bg-navy-base border border-white/5 text-[10px] uppercase font-medium">
                          <span className="text-white/30 mr-1">{key}:</span> {val}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex flex-wrap gap-6">
                  <button className="btn-primary flex items-center gap-2">
                    <FileText size={18} />
                    Download Brochure
                  </button>
                  <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white/40 hover:text-brand-blue transition-colors group">
                    Inquire for B2B
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>

      {/* Related Products / Upsell */}
      <section className="py-32 bg-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-editorial mb-12">Looking for More?</h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale pointer-events-none">
             {/* Other items teaser */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
