import { motion } from 'motion/react';
import { Zap, ShieldCheck, Gem, LineChart, Code2, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    title: 'AI-First Development',
    description: 'We embed intelligence at the core of your software architecture.',
    icon: Code2
  },
  {
    title: 'Fast Delivery',
    description: 'Rapid prototyping and agile iterations to get you to market faster.',
    icon: Zap
  },
  {
    title: 'Premium UI/UX',
    description: 'Meticulously crafted interfaces that feel native, intuitive, and modern.',
    icon: Gem
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems designed to handle millions of requests without breaking a sweat.',
    icon: LineChart
  },
  {
    title: 'Automation Expertise',
    description: 'Eradicate manual workflows overhead with robust, fault-tolerant scripting.',
    icon: ShieldCheck
  },
  {
    title: 'Dedicated Support',
    description: '24/7 technical monitoring and engineering support SLA for peace of mind.',
    icon: HeadphonesIcon
  }
];

export default function Features() {
  return (
    <section className="w-full py-24 px-6 relative" id="features">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Why Choose <span className="text-gradient">Tvarix</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We don’t just write code. We architect scalable, premium digital experiences that give you a durable competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left group"
              >
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-white/10 group-hover:border-blue-500/50">
                  <Icon size={24} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
