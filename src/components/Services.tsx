import { motion } from 'motion/react';
import { Monitor, BrainCircuit, Smartphone, Workflow, Bot, Cloud, Network, BarChart3 } from 'lucide-react';
import apiIntegrationVisual from '../../assets/api-integration-visual.svg';
import premiumServiceVisual from '../../assets/premium-service-visual.svg';

const services = [
  {
    icon: Monitor,
    title: 'Modern Website Development',
    description: 'High-performance, elegant, and responsive websites built with bleeding-edge web technologies.',
    color: 'from-blue-400 to-blue-600',
    image: premiumServiceVisual
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Solutions',
    description: 'Integrate intelligent models to analyze data, predict trends, and enhance user experiences.',
    color: 'from-purple-400 to-indigo-600',
    image: premiumServiceVisual
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that feel fluid, fast, and remarkably intuitive.',
    color: 'from-emerald-400 to-teal-600',
    image: premiumServiceVisual
  },
  {
    icon: Workflow,
    title: 'Automation Tools',
    description: 'Custom workflows and scripts that eliminate repetitive tasks and streamline operations.',
    color: 'from-orange-400 to-red-500',
    image: premiumServiceVisual
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Agents',
    description: 'Intelligent multi-agent systems and conversational bots capable of complex reasoning and action.',
    color: 'from-pink-400 to-rose-600',
    image: premiumServiceVisual
  },
  {
    icon: Cloud,
    title: 'SaaS Platforms',
    description: 'End-to-end architecture and development for scalable software-as-a-service products.',
    color: 'from-cyan-400 to-blue-500',
    image: premiumServiceVisual
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence Dashboards',
    description: 'Interactive Excel, Power BI, and web dashboards for sales, retail, finance, and operations reporting.',
    color: 'from-amber-400 to-orange-600',
    image: premiumServiceVisual
  },
  {
    icon: Network,
    title: 'API Integrations',
    description: 'Seamless connectivity between your core systems and third-party enterprise services.',
    color: 'from-violet-400 to-purple-600',
    image: apiIntegrationVisual
  }
];

export default function Services() {
  return (
    <section className="w-full py-24 px-6 border-t border-white/5 relative" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Engineering <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Premium digital systems, automation, dashboards, and connected software built for companies that need speed, polish, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`glass-panel relative overflow-hidden group shadow-2xl shadow-black/30 ${
                  service.title === 'API Integrations' ? 'md:col-span-2 lg:col-span-3 p-6 md:p-8' : 'p-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-60" />
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-500 rounded-full`} />
                
                <div className={`relative z-10 ${service.title === 'API Integrations' ? 'grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center' : ''}`}>
                  <div className={service.title === 'API Integrations' ? '' : 'p-8 pb-6'}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-8 shadow-lg shadow-black/50`}>
                      <div className="w-full h-full bg-black/80 rounded-[14px] flex items-center justify-center">
                        <Icon size={25} className="text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed text-lg max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  {service.title === 'API Integrations' ? (
                    <div className="relative min-h-64 lg:min-h-80 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                      <img
                        src={service.image}
                        alt="Premium API integration system visual"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative h-52 mx-3 mb-3 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                      <img
                        src={service.image}
                        alt={`${service.title} service visual`}
                        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`} />
                    </div>
                  )}
                </div>  
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
