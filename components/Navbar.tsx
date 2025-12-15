import React, { useState, useEffect } from 'react';
    import { Menu, X, Sun, Moon } from 'lucide-react';
    import { cn } from '../lib/utils';
    import { motion, AnimatePresence } from 'framer-motion';
    import { useTheme } from '../lib/theme';
    
    const Navbar: React.FC = () => {
      const [scrolled, setScrolled] = useState(false);
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const { theme, toggleTheme } = useTheme();
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      // Lock body scroll when menu is open
      useEffect(() => {
        if (mobileMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, [mobileMenuOpen]);
    
      const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Products', href: '#products' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'About Us', href: '#testimonials' },
      ];
    
      return (
        <nav
          className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            scrolled && !mobileMenuOpen 
              ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-3 shadow-sm dark:shadow-none' 
              : 'bg-transparent py-5'
          )}
        >
          <div className="relative z-50 max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer group">
              {/* Conditional Logo if needed, or just use filter for black/white logo */}
              <img 
                src="https://daffodilsoft.com/static/images/logo.png" 
                alt="Daffodil Software Ltd" 
                className="h-10 md:h-12 object-contain"
              />
            </div>
    
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
    
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="text-sm font-medium text-gray-700 dark:text-white hover:text-brand-600 dark:hover:text-brand-300 transition-colors">
                Contact
              </button>
              <button className="bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-500 transition-colors transform hover:-translate-y-0.5 duration-200 shadow-lg shadow-brand-600/20">
                Get Quote
              </button>
            </div>
    
            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4">
               <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="text-gray-800 dark:text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
    
          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-white dark:bg-black md:hidden flex flex-col items-center justify-center"
              >
                {/* Background Decorations */}
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-900/10 dark:bg-brand-900/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-brand-600/10 dark:bg-brand-600/10 rounded-full blur-[80px] pointer-events-none" />
    
                <div className="flex flex-col items-center gap-8 p-6 w-full max-w-lg relative z-10">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="relative text-4xl font-display font-bold group cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-gray-800 dark:text-gray-300 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-brand-500 dark:group-hover:from-white dark:group-hover:to-brand-400">
                        {link.name}
                      </span>
                      <span 
                        className="absolute inset-0 bg-gradient-to-r from-gray-900 to-brand-500 dark:from-white dark:to-brand-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-hidden="true"
                      >
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full flex flex-col items-center gap-6 mt-4"
                  >
                    <div className="w-24 h-1 bg-gray-200 dark:bg-white/10 rounded-full" />
                    <button 
                      className="text-2xl font-medium text-gray-800 dark:text-white hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </button>
                    <button 
                      className="bg-brand-600 text-white w-full max-w-xs py-4 rounded-full text-xl font-bold hover:bg-brand-500 transition-colors shadow-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Quote
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      );
    };
    
    export default Navbar;