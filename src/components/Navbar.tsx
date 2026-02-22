import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-primary border-b border-brand-bg/10 h-20 flex items-center px-6"
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <img 
              src="https://picsum.photos/seed/potato/100/100" 
              alt="AssetBender Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display font-black text-xl tracking-tighter text-brand-bg uppercase">AssetBender</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-black uppercase tracking-widest text-brand-bg">
          <a href="#" className="hover:opacity-70 transition-opacity">Products</a>
          <div className="relative">
            <a href="#" className="hover:opacity-70 transition-opacity">Pricing</a>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-bg rounded-full" />
          </div>
          <a href="#" className="hover:opacity-70 transition-opacity">Download</a>
          <a href="#" className="hover:opacity-70 transition-opacity">How to use</a>
        </div>

        {/* User Section */}
        <div className="flex items-center gap-6 text-sm font-black uppercase tracking-widest text-brand-bg">
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">
            <span>zahid alam</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <button className="hover:opacity-70 transition-opacity">
            See Plans
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
