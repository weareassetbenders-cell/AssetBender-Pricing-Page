import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import PricingCard from './components/PricingCard';
import Footer from './components/Footer';

export default function App() {
  const commonFeatures = [
    "Assetbender Product Manager App",
    "Motion Bender Plug-in",
    "Full access to all premium packs",
    "1000+ customizable assets (MOGRT, transitions, SFX)",
    "Access to all upcoming asset packs",
    "Priority updates",
    "Community membership +",
    "Priority 1-to-1 Customer Support"
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-primary selection:text-brand-bg">
      <main className="flex-grow">
        <div className="relative overflow-hidden">
          {/* Background Glows - Moved to cover both Hero and Pricing */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] bg-brand-primary/10 blur-[150px] rounded-full -z-10" />
          
          {/* Hero Section */}
          <section className="relative pt-40 pb-12 px-6">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-[0.9]"
              >
                <span className="text-gradient">today</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-brand-muted max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
              >
                Get started on our free tester and upgrade when you are ready.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center"
              >
                <ChevronDown className="w-10 h-10 text-brand-primary animate-bounce" />
              </motion.div>
            </div>
          </section>

          {/* Pricing Grid */}
          <section className="px-6 pb-32 relative">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <PricingCard
                title="Monthly"
                price="$19.99"
                originalPrice="$34.90"
                period="/mo"
                features={[
                  ...commonFeatures,
                  "Save up to $14.91"
                ]}
                buttonText="Subscribe"
              />

              <PricingCard
                title="Quarterly"
                price="$11.99"
                originalPrice="$34.90"
                period="/mo"
                features={[
                  ...commonFeatures,
                  "Billed quarterly ($35.97)",
                  "Save up to $68.73"
                ]}
                buttonText="Subscribe"
              />

              <PricingCard
                title="Early"
                price="$9.99"
                originalPrice="$34.90"
                period="/mo"
                badge="Best Value"
                isPopular={true}
                features={[
                  ...commonFeatures,
                  "Billed annually ($119.88)",
                  "Save up to $298.92"
                ]}
                buttonText="Go Yearly"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
