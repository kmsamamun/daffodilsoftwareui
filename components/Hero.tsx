import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroCanvas />
      
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-300/20 dark:bg-brand-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-green-300/20 dark:bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-brand-700 dark:text-brand-300 text-[10px] sm:text-base md:text-lg font-medium mb-8 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm whitespace-nowrap max-w-full overflow-hidden">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="truncate">Leading Software Development Company in Bangladesh</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-[1.1] md:leading-[1.05] text-gray-900 dark:text-white break-words"
        >
          Scalable Custom Software & <br className="hidden md:block" />
          <span className="gradient-text">Digital Transformation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light px-2"
        >
          Daffodil Software Limited (DSL) is a premier technology partner under the renowned Daffodil Group, delivering robust enterprise solutions, intelligent ERP ecosystems, and AI-driven automation. We empower global businesses to transform complexity into measurable growth through world-class engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-500 transition-colors flex items-center justify-center gap-2 group transform hover:-translate-y-1 duration-200 shadow-lg shadow-brand-600/20">
            Explore Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white rounded-full font-bold text-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm hover:border-black/20 dark:hover:border-white/30">
            <PlayCircle className="w-5 h-5" />
            View Case Studies
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-black/10 dark:border-white/10 pt-10"
        >
          <div>
            <h4 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-1">20+</h4>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Years Experience</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-1">500+</h4>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Projects Delivered</p>
          </div>
           <div>
            <h4 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-1">100+</h4>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Global Clients</p>
          </div>
           <div>
            <h4 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-1">200+</h4>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Engineers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;