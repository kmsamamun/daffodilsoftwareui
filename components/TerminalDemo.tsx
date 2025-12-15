import React, { useState, useRef, useEffect } from 'react';
import { generateStream } from '../services/geminiService';
import { Terminal, Send, Loader2, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const TerminalDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const outputRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output, history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setIsLoading(true);
    setHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setOutput('');

    try {
      // Modify prompt context slightly for DSL
      const servicesContext = "Services include: Custom Website Development, Mobile Application Development, Custom Software Development, Odoo Implementation and Customization, AI Implementation and Automation, Search Engine Optimization.";
      const productsContext = "Products include: Integrated University Management System (IUMS), Unified Payment and Access Management (1 Card), Virtual Event Management Platform (Virtual Gate), Integrated AI Engine with Custom Chatbot (Central AI), Single Vendor Ecommerce Solution (Daffodil Ecommerce), Blockchain-powered Digital Credential Verification System.";
      
      const contextPrompt = `You are the AI assistant for Daffodil Software Limited (DSL). ${servicesContext} ${productsContext} Answer concisely in a technical but helpful tone. User query: ${userMessage}`;
      const stream = await generateStream(contextPrompt);
      
      let fullText = '';
      for await (const chunk of stream) {
        fullText += chunk.text;
        setOutput(fullText);
      }
      
      setHistory(prev => [...prev, { role: 'model', text: fullText }]);
      setOutput('');
    } catch (error) {
      setOutput('Error: Could not connect to the DSL knowledge base.');
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "What services does DSL offer?",
    "Tell me about IUMS",
    "How does the Blockchain Verification work?",
  ];

  return (
    <section className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">Explore our <span className="text-brand-500 dark:text-brand-400">Capabilities</span></h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Interact with our intelligent assistant to learn more about our expertise, solutions, and how we can help your business.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-[#0a0a0a] dark:bg-black/50 backdrop-blur-xl"
      >
        {/* Terminal Header */}
        <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500/80">
            <Terminal size={12} />
            <span>bash — dsl-assistant</span>
          </div>
          <div className="w-10"></div> {/* Spacer */}
        </div>

        {/* Terminal Body */}
        <div 
          ref={outputRef}
          className="h-[400px] p-6 font-mono text-sm overflow-y-auto scroll-smooth custom-scrollbar text-gray-300"
        >
          <div className="text-gray-500 mb-6 font-light">
            DSL Assistant v1.0.0 initialized... <br/>
            Connected to Daffodil Group Knowledge Base. <br/>
            System ready. Ask me anything about our services.
          </div>

          {history.map((msg, idx) => (
            <div key={idx} className="mb-6">
              <div className={cn("flex gap-3", msg.role === 'user' ? 'text-white' : 'text-brand-400')}>
                <span className="opacity-50 select-none text-gray-500">
                  {msg.role === 'user' ? '>' : '$'} 
                </span>
                <span className="whitespace-pre-wrap leading-relaxed">{msg.text}</span>
              </div>
            </div>
          ))}

          {isLoading && output && (
             <div className="mb-6">
               <div className="flex gap-3 text-brand-400">
                 <span className="opacity-50 select-none text-gray-500">$</span>
                 <span className="whitespace-pre-wrap leading-relaxed">{output} <span className="animate-pulse inline-block w-2 h-4 bg-brand-400 align-middle ml-1"></span></span>
               </div>
             </div>
          )}
          
          {isLoading && !output && (
            <div className="flex items-center gap-2 text-brand-400 animate-pulse">
               <Loader2 className="w-4 h-4 animate-spin" />
               Processing request...
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-white/5 p-4 bg-white/[0.02]">
          <form onSubmit={handleSubmit} className="relative flex items-center">
             <span className="absolute left-3 text-brand-400 font-mono">{'>'}</span>
             <input
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Enter your inquiry here..."
               className="w-full bg-transparent text-white font-mono text-sm rounded-lg py-3 pl-8 pr-12 focus:outline-none border-none placeholder:text-gray-700"
               autoComplete="off"
             />
             <button 
               type="submit"
               disabled={isLoading || !input}
               className="absolute right-2 p-2 rounded-md text-gray-400 hover:text-white disabled:opacity-30 transition-colors"
             >
               {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
             </button>
          </form>
          
          {/* Quick Suggestions */}
          <div className="mt-4 flex flex-wrap gap-2">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => setInput(s)}
                className="text-xs bg-white/5 hover:bg-white/10 border border-white/5 text-gray-500 hover:text-white px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5"
              >
                <Play size={10} className="fill-current" />
                {s}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TerminalDemo;