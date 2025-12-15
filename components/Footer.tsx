import React from 'react';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-black pt-20 pb-10 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <img 
                src="https://daffodilsoft.com/static/images/logo.png" 
                alt="DSL Logo" 
                className="h-8 object-contain"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed mb-6">
              A Concern of Daffodil Group. Providing world-class software solutions and IT services since 1998.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-500">
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Website Development</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Custom Software</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Odoo Implementation</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">AI & Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900 dark:text-white">Company</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-500">
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h4>
            <p className="text-gray-600 dark:text-gray-500 text-sm mb-4">
              Daffodil Tower, 4/2, Sobhanbag, Mirpur Road, Dhaka-1207
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-brand-500 w-full"
              />
              <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-brand-600/20">
                Connect
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-500 text-sm">© 2024 Daffodil Software Limited. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-gray-600 dark:text-gray-500">
            <a href="#" className="hover:text-brand-600 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;