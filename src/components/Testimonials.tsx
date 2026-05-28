import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Tvarix Services transformed our legacy operations into an AI-driven powerhouse. The custom SaaS platform they built is nothing short of revolutionary.",
    author: "Elena Rodriguez",
    role: "CEO, TechNova Systems",
    avatarColor: "from-blue-500 to-cyan-500"
  },
  {
    quote: "Their attention to premium UI/UX mixed with robust backend scalable architecture gave us the edge we needed to secure our Series A funding.",
    author: "Marcus Chen",
    role: "Founder, Zenith Analytics",
    avatarColor: "from-purple-500 to-indigo-500"
  },
  {
    quote: "The automations integrated into our daily workflows have saved our team hundreds of hours a week. Incredibly professional and fast delivery.",
    author: "Sarah Jenkins",
    role: "VP Operations, OmniFlow",
    avatarColor: "from-orange-500 to-red-500"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 px-6 border-t border-white/5 relative bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Trusted by <span className="text-gradient">Visionaries</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Hear from the leaders and innovators who chose Tvarix Services to architect their digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-panel p-8 relative overflow-hidden group"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-white" />
              </div>
              
              <div className="flex flex-col h-full justify-between relative z-10">
                <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatarColor} p-[1px]`}>
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center font-bold text-white uppercase text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-display">{testimonial.author}</h4>
                    <p className="text-xs text-slate-400 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
