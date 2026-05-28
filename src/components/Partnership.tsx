import { motion } from 'motion/react';
import { ExternalLink, Users } from 'lucide-react';

export default function Partnership() {
  return (
    <section className="w-full py-24 px-6 relative" id="partner">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden glass-panel border-white/10 p-1 md:p-12 mb-0"
        >
          {/* Partnership Glow Gradient Background */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-emerald-900/30 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 p-8 md:p-0">
            
            <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-700 p-[1px]">
              <div className="w-full h-full bg-black rounded-[23px] flex items-center justify-center p-6 flex-col gap-2">
                <Users size={40} className="text-emerald-400" />
                <span className="text-white font-bold font-display text-xl tracking-tight text-center leading-tight mt-2">
                  ATS<br/>Craft
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
              <div className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Strategic Partnership
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
                Partnered Engineering with <br className="hidden md:block"/> ATS Craft
              </h2>
              
              <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
                Our associated company ATS Craft focuses on delivering innovative business and technology solutions. Together, we provide product development, business intelligence dashboards, automation, and enterprise consulting for growing companies.
              </p>
              
              <a 
                href="https://www.atscraft.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium flex items-center gap-2 hover:bg-emerald-500/30 transition-colors"
              >
                Visit ATS Craft
                <ExternalLink size={16} />
              </a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
