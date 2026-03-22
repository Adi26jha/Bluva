import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  size: string;
  image: string;
  description: string;
}

const ProductCard = ({ id, name, size, image, description }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card p-6 w-[320px] shrink-0 border-slate-200 group relative overflow-hidden h-[450px] flex flex-col"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Product Image Placeholder */}
      <div className="relative h-64 mb-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-brand-blue/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
        <img
          src={image}
          alt={name}
          className="relative z-10 h-full w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="mt-auto space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-editorial font-bold text-slate-900">{name}</h3>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">
            {size}
          </span>
        </div>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
          {description}
        </p>
        <Link 
          to={`/products#${id}`}
          className="inline-block pt-4 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan hover:text-slate-900 transition-colors"
        >
          Learn More +
        </Link>
      </div>

      {/* Glass shimmer sweep */}
      <div className="absolute inset-0 pointer-events-none water-shimmer opacity-0 group-hover:opacity-30" />
    </motion.div>
  );
};

export default ProductCard;
