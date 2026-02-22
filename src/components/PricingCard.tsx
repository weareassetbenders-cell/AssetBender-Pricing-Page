import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  period?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  badge?: string;
}

export default function PricingCard({
  title,
  price,
  originalPrice,
  period,
  features,
  buttonText,
  isPopular = false,
  badge,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`relative flex flex-col w-full glass rounded-[2.5rem] p-8 transition-all duration-500 ${
        isPopular ? 'ring-2 ring-brand-primary shadow-[0_0_40px_rgba(16,185,129,0.1)]' : ''
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-brand-bg text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
          {badge}
        </div>
      )}

      <div className="mb-8">
        <h3 className={`text-sm font-black uppercase tracking-[0.2em] mb-4 ${isPopular ? 'text-brand-primary' : 'text-brand-muted'}`}>
          {title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-display font-bold tracking-tighter">{price}</span>
          {period && <span className="text-brand-muted text-sm font-medium">{period}</span>}
        </div>
        {originalPrice && (
          <div className="mt-1">
            <span className="text-2xl font-display font-bold line-through text-brand-primary/40 tracking-tighter">
              {originalPrice}
            </span>
          </div>
        )}
      </div>

      <div className="flex-grow mb-10">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-brand-muted group">
              <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${isPopular ? 'bg-brand-primary/20 text-brand-primary' : 'bg-white/10 text-white'}`}>
                <Check className="w-2.5 h-2.5" strokeWidth={4} />
              </div>
              <span className={`transition-colors group-hover:text-white ${feature.includes('Save up to') ? 'text-brand-primary font-bold' : ''}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
          isPopular
            ? 'bg-brand-primary text-brand-bg hover:bg-brand-secondary hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        {buttonText}
      </button>
    </motion.div>
  );
}
