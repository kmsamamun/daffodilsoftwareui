import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CreditCard, Video, Bot, ShoppingBag, ShieldCheck, ArrowUpRight, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

const products = [
  {
    id: 1,
    title: "Integrated University Management System (IUMS)",
    description: "A comprehensive ERP solution designed for higher education institutions to automate academic and administrative processes from admission to alumni management.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-brand-500 dark:text-brand-400",
    bg: "bg-brand-500/10",
    border: "group-hover:border-brand-500/50"
  },
  {
    id: 2,
    title: "Unified Payment & Access (1 Card)",
    description: "A centralized smart card ecosystem managing secure payments, access control, and identity verification for campuses and corporate environments.",
    icon: <CreditCard className="w-6 h-6" />,
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: 3,
    title: "Virtual Event Platform (Virtual Gate)",
    description: "An immersive virtual venue for hosting global conferences, exhibitions, and networking events with real-time interaction capabilities.",
    icon: <Video className="w-6 h-6" />,
    color: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50"
  },
  {
    id: 4,
    title: "Central AI & Chatbot Engine",
    description: "An advanced AI infrastructure delivering custom conversational agents, predictive analytics, and automated workflow integration for enterprise.",
    icon: <Bot className="w-6 h-6" />,
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50"
  },
  {
    id: 5,
    title: "Daffodil Ecommerce",
    description: "A scalable, single-vendor ecommerce solution engineered for high-growth retail businesses with robust inventory and order management.",
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50"
  },
  {
    id: 6,
    title: "Blockchain Verification System",
    description: "Tamper-proof digital credential issuance and verification system secured by blockchain technology for academic and professional certificates.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "text-cyan-500 dark:text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/50"
  }
];

const ProductShowcase: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="products" className="py-32 relative z-10 overflow-hidden bg-gray-50/50 dark:bg-transparent">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-100/40 dark:bg-brand-900/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-mono text-sm mb-4">
              <Cpu size={16} />
              <span>PROPRIETARY SOLUTIONS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Future-Ready <span className="text-gray-500">Products</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Scalable platforms engineered to drive digital transformation across education, commerce, and enterprise sectors.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 px-6 py-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
            View All Products
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "group relative bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/5 p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-none",
                product.border
              )}
            >
              {/* Hover Gradient Background */}
              <div 
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                  "bg-gradient-to-br from-brand-50/50 to-transparent dark:from-white/[0.02] dark:to-transparent"
                )} 
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={cn("p-3 rounded-xl inline-flex", product.bg, product.color)}>
                    {product.icon}
                  </div>
                  <ArrowUpRight className={cn("w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300", product.color)} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-100 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity text-gray-700 dark:text-gray-300">
                   <div className={cn("w-1.5 h-1.5 rounded-full", product.color.replace('text-', 'bg-'))} />
                   <span>V2.0 STABLE</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <button className="w-full flex items-center justify-center gap-2 text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 px-6 py-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            View All Products
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;