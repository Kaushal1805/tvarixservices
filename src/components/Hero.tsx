import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center px-6" id="hero">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-blue-500/30"
        >
          <Sparkles size={16} className="text-blue-400" />
          <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Next-Gen Digital Agency
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6"
        >
          Building Future-Ready <br className="hidden md:block" />
          Digital Solutions <span className="text-gradient hover:opacity-80 transition-opacity">with AI</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          We help businesses scale with modern websites, AI-powered systems, 
          mobile apps, and automation tools engineered for extreme performance and elegance.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium text-base hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group">
            Book a Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel font-medium text-base hover:bg-white/10 transition-colors">
            View Services
          </a>
        </motion.div>
      </div>

      {/* Abstract floating UI representation */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-6xl mx-auto mt-20 relative z-10"
      >
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl glass-panel relative overflow-hidden flex items-center justify-center border-white/20 bg-black/40 shadow-[0_0_80px_-20px_rgba(79,70,229,0.3)]">
          {/* Subtle grid background inside */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="relative flex flex-col items-center z-10">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-50 absolute mix-blend-screen animate-pulse" />
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="px-6 py-4 glass-panel border-white/20 flex items-center gap-4 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Sparkles size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">System Status</p>
                <p className="font-medium text-white">AI Engine Running</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -right-16 top-10 px-6 py-4 glass-panel border-white/20 hidden md:flex items-center gap-4 shadow-xl scale-90"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
              <p className="text-sm font-medium">Auto-Scaling Active</p>
            </motion.div>

            <motion.div 
              animate={{ y: [15, -5, 15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -left-16 bottom-10 px-6 py-4 glass-panel border-white/20 hidden md:flex items-center gap-4 shadow-xl scale-90"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-400 font-bold text-xs">API</span>
              </div>
              <p className="text-sm font-medium">99.99% Uptime</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
