import React from 'react';
import { MessageSquare, Youtube, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-surface pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="https://picsum.photos/seed/assetbender-footer/100/100" 
                alt="AssetBender" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">AssetBender</span>
          </div>
          <p className="text-brand-muted text-sm max-w-xs leading-relaxed">
            Empowering creators with professional-grade assets and tools. Built for the next generation of digital storytellers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-brand-muted">
            <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Plugins</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Asset Library</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Release Notes</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:text-brand-primary transition-colors">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:text-brand-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:text-brand-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:text-brand-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-brand-muted">
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Licenses</a>
        </div>
        <p>© 2026 AssetBender Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
