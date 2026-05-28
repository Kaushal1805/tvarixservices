import { motion } from 'motion/react';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Dedicated Support' },
  { value: '10x', label: 'Growth Acceleration' }
];

export default function About() {
  return (
    <section className="w-full py-24 px-6 border-t border-white/5 relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Who We Are <br className="hidden md:block" />
              <span className="text-gradient">Tvarix Services</span>
            </h2>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Tvarix Services is a next-generation digital solutions company focused on building modern websites, AI-powered systems, mobile applications, and automation tools that help businesses grow faster and smarter.
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed mb-12">
              We bridge the gap between cutting-edge technological research and practical business application. From concept to deployment, our team ensures your infrastructure is robust, secure, and visually stunning.
            </p>

            <div className="grid grid-cols-2 gap-6 p-6 glass-panel border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-3xl glass-panel border-white/10 overflow-hidden flex items-center justify-center p-8"
          >
            {/* Artistic abstract background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-purple-900/40 opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <div className="relative z-10 w-full max-w-sm">
              <div className="flex flex-col gap-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                    className={`w-full p-4 rounded-xl glass-panel border-white/20 shadow-lg flex items-center gap-4 ${
                      i === 1 ? 'ml-8' : ''
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex-shrink-0" />
                    <div className="flex flex-col gap-2 w-full">
                      <div className="h-2 w-24 bg-slate-700 rounded-full" />
                      <div className="h-2 w-full bg-slate-800 rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Overlay Glass Badge */}
              <div className="absolute -bottom-10 -right-10 md:-right-20 p-6 glass-panel rounded-2xl border border-blue-500/30 bg-black/60 shadow-[0_20px_50px_rgba(8,-112,184,0.3)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-400 font-bold">
                    AI
                  </div>
                  <div>
                    <p className="text-white font-medium">Innovation First</p>
                    <p className="text-sm text-slate-400">Future-proof architecture</p>
                  </div>
                </div>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
