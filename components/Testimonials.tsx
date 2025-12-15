
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    role: "Registrar",
    company: "Eastern University",
    quote: "Implementing the IUMS from Daffodil Software was a game-changer for our campus. The automation of student records and grading systems saved us thousands of man-hours.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    quote: "DSL's team demonstrated exceptional technical prowess in developing our custom blockchain solution. Their attention to security and scalability was impressive.",
    rating: 5
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Founder",
    company: "RetailGo",
    quote: "The ecommerce platform they built for us is robust and beautifully designed. We've seen a 150% increase in mobile conversions since launch.",
    rating: 4
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Product Manager",
    company: "Innovate Health",
    quote: "The AI automation tools provided by DSL have revolutionized our patient triage process. Highly recommended for their innovation and continuous support.",
    rating: 5
  },
  {
    id: 5,
    name: "David Rakitic",
    role: "Director",
    company: "EduTech Global",
    quote: "Their unified payment system integrated seamlessly with our existing infrastructure. A top-tier development partner that delivers on time.",
    rating: 5
  }
];

const reviewPlatforms = [
  {
    name: "Clutch",
    rating: 4.9,
    reviews: "50+ Reviews",
    color: "text-[#D4342C]" // Clutch Red
  },
  {
    name: "Trustpilot",
    rating: 4.8,
    reviews: "120+ Reviews",
    color: "text-[#00b67a]" // Trustpilot Green
  },
  {
    name: "GoodFirms",
    rating: 5.0,
    reviews: "45+ Reviews",
    color: "text-[#207de9]" // GoodFirms Blue
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
      
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsToShow);

  const handleNext = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate stride and position based on container width
  const gap = itemsToShow === 1 ? 0 : 24; // 0px gap for mobile, 24px (gap-6) for desktop
  
  // Stride is how much we move for each index increment. 
  // On mobile (itemsToShow=1), we move one full container width.
  // On desktop (itemsToShow=2), item width is (container - gap) / 2. Stride is Item + Gap.
  const itemWidth = itemsToShow === 1 
    ? containerWidth 
    : (containerWidth - gap) / 2;
    
  const stride = itemWidth + gap;
  const xPosition = -(currentIndex * stride);

  return (
    <section id="testimonials" className="py-24 relative z-10 bg-gray-50 dark:bg-dark-bg overflow-hidden transition-colors duration-300">
      <div className="absolute right-0 top-20 w-[300px] h-[300px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 relative">
          <div className="text-center md:text-left w-full md:w-auto">
             <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              What Our <span className="text-brand-500 dark:text-brand-400">Clients Say</span>
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-4 md:mt-0">
             <button 
                onClick={handlePrev}
                className="p-3 rounded-full border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/30 transition-all active:scale-95 group"
                aria-label="Previous testimonial"
             >
                <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
             </button>
             <button 
                onClick={handleNext}
                className="p-3 rounded-full border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/30 transition-all active:scale-95 group"
                aria-label="Next testimonial"
             >
                <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
             </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div ref={containerRef} className="overflow-hidden px-1 py-4 -mx-1 -my-4">
          <motion.div 
            className={cn("flex", itemsToShow === 1 ? "gap-0" : "gap-6")}
            initial={false}
            animate={{ x: xPosition }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((t) => (
               <div 
                 key={t.id}
                 style={{ width: itemsToShow === 1 ? '100%' : itemWidth }}
                 className={cn(
                    "shrink-0 transition-all duration-300",
                    itemsToShow === 1 ? "px-2" : "" // Add visual padding on mobile since gap is 0
                 )}
               >
                  <div className="glass-card p-8 rounded-2xl border border-gray-100 dark:border-white/5 relative group hover:border-brand-500/30 transition-all duration-300 h-full flex flex-col">
                    <Quote className="absolute top-8 right-8 text-gray-200 dark:text-white/5 w-10 h-10 group-hover:text-brand-500/10 transition-colors" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < t.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300 dark:text-gray-600"} 
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed italic relative z-10 flex-grow">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-semibold text-sm">{t.name}</h4>
                        <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                      </div>
                    </div>
                  </div>
               </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
           {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    idx === currentIndex 
                      ? "w-8 bg-brand-500" 
                      : "w-2 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/40"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
           ))}
        </div>

        {/* External Reviews */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-white/5">
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 text-xs font-semibold uppercase tracking-widest shadow-sm">
              Find our ratings at:
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {reviewPlatforms.map((platform) => (
              <a 
                key={platform.name}
                href="#"
                className="group flex items-center gap-5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-1 hover:border-brand-500/20 dark:hover:border-brand-500/20"
              >
                <div className="flex flex-col">
                  <span className={cn("font-bold text-lg leading-none mb-1 group-hover:scale-105 transition-transform origin-left", platform.color)}>
                    {platform.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {platform.reviews}
                  </span>
                </div>
                
                <div className="w-px h-8 bg-gray-200 dark:bg-white/10" />

                <div className="flex flex-col items-end">
                  <div className="flex text-yellow-500 mb-1">
                    {[...Array(5)].map((_, i) => (
                       <Star 
                         key={i} 
                         size={14} 
                         className={cn(
                           i < Math.floor(platform.rating) ? "fill-current" : "text-gray-300 dark:text-gray-600",
                           "transition-all duration-300 group-hover:scale-110"
                         )} 
                         style={{ transitionDelay: `${i * 50}ms` }}
                       />
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {platform.rating}
                    </span>
                    <span className="text-xs text-gray-400">/ 5.0</span>
                  </div>
                </div>
                
                <ExternalLink size={14} className="text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
