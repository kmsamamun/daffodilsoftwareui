import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Code, Smartphone, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = ["All", "Web Dev", "Mobile App", "Enterprise", "AI"];

const projects = [
  {
    id: 1,
    title: "Smart University ERP",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description: "A complete digital ecosystem for managing academic and administrative operations for a leading university with 20,000+ students.",
    tags: ["React", "Python", "PostgreSQL"]
  },
  {
    id: 2,
    title: "FinTech Digital Wallet",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description: "Secure mobile payment solution integrating NFC technology and blockchain for transparent transaction history.",
    tags: ["Flutter", "Node.js", "Blockchain"]
  },
  {
    id: 3,
    title: "AI Customer Support Bot",
    category: "AI",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1706&q=80",
    description: "Intelligent conversational agent deployed for a telecom giant, reducing human support ticket volume by 40%.",
    tags: ["NLP", "TensorFlow", "WebSocket"]
  },
  {
    id: 4,
    title: "Global E-Commerce Hub",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1364&q=80",
    description: "High-performance multi-vendor marketplace with real-time inventory tracking and AI-driven product recommendations.",
    tags: ["Next.js", "GraphQL", "AWS"]
  }
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 relative z-10 bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Selected <span className="gradient-text">Works</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Showcasing our expertise in transforming complex challenges into elegant digital solutions.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeCategory === cat
                    ? "bg-brand-600 border-brand-500 text-white shadow-md dark:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[16/9] cursor-pointer shadow-lg"
              >
                {/* Background Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowRight className="text-white" />
                    </div>
                  </div>
                  
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-brand-300 text-xs font-bold tracking-wider uppercase border border-brand-500/30 bg-brand-500/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 max-w-md line-clamp-2 group-hover:line-clamp-none transition-all">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs text-gray-300 font-mono bg-black/50 px-2 py-1 rounded border border-white/10">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
           <button className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold hover:text-brand-500 dark:hover:text-brand-300 transition-colors group">
             View Full Portfolio 
             <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;