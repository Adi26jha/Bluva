import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-card-dark p-8 border-white/5 group hover:border-brand-blue/30 transition-all duration-500"
    >
      <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-colors">
        <Icon className="w-8 h-8 text-brand-blue transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="text-2xl font-editorial font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
        {title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
