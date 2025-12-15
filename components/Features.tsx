import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, Brain, Layers, Search } from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-6 h-6 text-brand-500 dark:text-brand-400" />,
    title: "Custom Website Development",
    description: "High-performance, responsive websites tailored to your brand identity and business goals using modern web technologies."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    title: "Mobile Application Development",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless, engaging user experiences."
  },
  {
    icon: <Monitor className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    title: "Custom Software Development",
    description: "Bespoke software solutions architected to streamline your specific business processes and operational workflows."
  },
  {
    icon: <Layers className="w-6 h-6 text-orange-500 dark:text-orange-400" />,
    title: "Odoo Implementation",
    description: "Comprehensive Odoo ERP implementation and customization to unify your business operations into a single platform."
  },
  {
    icon: <Brain className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
    title: "AI Implementation & Automation",
    description: "Leveraging artificial intelligence to automate repetitive tasks and provide predictive insights for smarter decision making."
  },
  {
    icon: <Search className="w-6 h-6 text-green-500 dark:text-green-400" />,
    title: "Search Engine Optimization",
    description: "Data-driven SEO strategies to improve your online visibility, drive organic traffic, and rank higher on search engines."
  }
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10 bg-white/50 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white"
          >
            Comprehensive <span className="gradient-text">Digital Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From concept to deployment, we provide end-to-end software development services to help your business grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-2xl group hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="bg-gray-100 dark:bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;