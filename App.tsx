import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TerminalDemo from './components/TerminalDemo';
import Footer from './components/Footer';
import TextReveal from './components/TextReveal';
import ProductShowcase from './components/ProductShowcase';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-bg min-h-screen text-gray-900 dark:text-white selection:bg-brand-500/30 selection:text-brand-800 dark:selection:text-brand-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        
        <section className="py-32 px-6 bg-white dark:bg-dark-bg relative z-10 transition-colors duration-300">
           <div className="max-w-5xl mx-auto">
              <TextReveal 
                 text="We engineer robust digital solutions that empower businesses to thrive in the modern era, leveraging cutting-edge technology to drive tangible results."
                 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-gray-900 dark:text-white"
              />
           </div>
        </section>

        <TerminalDemo />
        <Features />
        <ProductShowcase />
        <Portfolio />
        <Testimonials />
        <FAQ />
        
        {/* Call to Action Section */}
        <section className="py-32 relative overflow-hidden border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-transparent">
            <div className="absolute inset-0 bg-brand-50/50 dark:bg-brand-900/5 z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-200/20 dark:bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-gray-900 dark:text-white">Ready to transform your business?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    Partner with Daffodil Software Limited to build scalable, secure, and innovative software solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-500 transition-colors transform hover:-translate-y-1 duration-200 shadow-lg shadow-brand-600/20">
                        Schedule Consultation
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-full font-bold text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors hover:border-gray-400 dark:hover:border-white/40">
                        View Case Studies
                    </button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;