import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "How do you handle project communication?",
    answer: "We believe in transparent and consistent communication. Clients are invited to our project management tools (like Jira or Trello) and Slack channels. We schedule weekly updates and milestone reviews to ensure everyone stays aligned."
  },
  {
    question: "What is your typical engagement model?",
    answer: "We offer flexible engagement models tailored to your needs: Dedicated Teams for long-term projects, Fixed Price for well-defined scopes, and Time & Material for evolving requirements."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer comprehensive SLA-based support packages. This includes 24/7 server monitoring, security patching, bug fixes, and performance optimization to ensure your software remains robust."
  },
  {
    question: "How do you ensure data security and IP protection?",
    answer: "We sign NDAs before initial discussions. Our development process adheres to ISO 27001 standards. We use secure infrastructure, encrypted data storage, and strict access controls to protect your intellectual property."
  },
  {
    question: "Can you help with digital transformation for legacy systems?",
    answer: "Absolutely. We specialize in modernizing legacy applications. We can re-architect your existing systems to modern cloud-native stacks, microservices, or hybrid solutions without disrupting business continuity."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative z-10 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="p-2 bg-brand-100 dark:bg-brand-500/10 rounded-lg text-brand-600 dark:text-brand-400">
                <HelpCircle size={24} />
             </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
             Get answers to common questions about our services, process, and technical capabilities.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={cn(
                "group rounded-2xl border transition-all duration-300 overflow-hidden",
                activeIndex === idx
                  ? "border-brand-500/30 bg-gray-50 dark:bg-white/5 shadow-lg dark:shadow-brand-500/5"
                  : "border-gray-200 dark:border-white/10 bg-white dark:bg-transparent hover:border-gray-300 dark:hover:border-white/20"
              )}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={cn(
                  "font-bold text-lg pr-8 transition-colors duration-300",
                  activeIndex === idx ? "text-brand-600 dark:text-brand-400" : "text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400"
                )}>
                  {faq.question}
                </span>
                <span className={cn(
                  "shrink-0 p-2 rounded-full transition-all duration-300",
                  activeIndex === idx 
                    ? "bg-brand-100 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400" 
                    : "bg-gray-100 dark:bg-white/10 text-gray-500 group-hover:bg-brand-50 dark:group-hover:bg-white/20"
                )}>
                   <Plus size={20} className={cn("transition-transform duration-300", activeIndex === idx && "rotate-45")} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-transparent">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;