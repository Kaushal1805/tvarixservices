import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import salesDashboardImage from '../../assets/sales-performance-dashboard.png';
import vrindaDashboardImage from '../../assets/vrinda-store-annual-report.png';

export type PortfolioProject = {
  id: number | string;
  title: string;
  category: string;
  description: string;
  image?: string;
  imageGradient?: string;
  url?: string;
};

const STORAGE_KEY = 'tvarix-portfolio-projects';

const defaultProjects: PortfolioProject[] = [
  {
    id: 1,
    title: 'Sales Performance Dashboard',
    category: 'Business Intelligence',
    image: salesDashboardImage,
    description: 'A sales analytics dashboard tracking revenue, orders, profit, regional performance, product sales, and yearly trends.'
  },
  {
    id: 2,
    title: 'Vrinda Store Annual Report',
    category: 'Retail Analytics',
    image: vrindaDashboardImage,
    description: 'A retail reporting dashboard covering monthly orders, sales, customer segments, channels, status, and top performing states.'
  },
  {
    id: 3,
    title: 'Automata Sync',
    category: 'Automation System',
    imageGradient: 'from-teal-900 to-slate-950',
    description: 'Enterprise workflow automation engine handling millions of events daily.'
  },
  {
    id: 4,
    title: 'Verve Commerce',
    category: 'Business Website',
    imageGradient: 'from-fuchsia-900/50 to-cyan-900/50',
    description: 'High-conversion headless e-commerce frontend architecture.'
  }
];

function getSavedProjects() {
  try {
    const savedProjects = window.localStorage.getItem(STORAGE_KEY);
    return savedProjects ? (JSON.parse(savedProjects) as PortfolioProject[]) : [];
  } catch {
    return [];
  }
}

export default function Portfolio() {
  const [projects, setProjects] = useState<PortfolioProject[]>(defaultProjects);

  useEffect(() => {
    const updateProjects = () => {
      setProjects([...defaultProjects, ...getSavedProjects()]);
    };

    updateProjects();
    window.addEventListener('portfolio-projects-updated', updateProjects);
    window.addEventListener('storage', updateProjects);

    return () => {
      window.removeEventListener('portfolio-projects-updated', updateProjects);
      window.removeEventListener('storage', updateProjects);
    };
  }, []);

  return (
    <section className="w-full py-24 px-6 border-t border-white/5 relative" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Explore our recent projects highlighting our expertise across web, mobile, AI, and scaleable backend systems.
            </p>
          </div>
          <a href="#contact" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white inset-0 hover:text-black transition-colors font-medium text-sm self-start md:self-auto flex items-center gap-2">
            Start a Project
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer block"
              onClick={() => {
                if (project.url) {
                  window.open(project.url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className={`w-full aspect-[4/3] rounded-3xl mb-6 overflow-hidden relative shadow-2xl glass-panel p-2 transition-transform duration-500 group-hover:scale-[1.02]`}>
                <div className={`w-full h-full rounded-2xl ${project.image ? 'bg-slate-950 p-3' : `bg-gradient-to-br ${project.imageGradient} p-8`} flex flex-col justify-between relative overflow-hidden`}>
                  
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={`${project.title} dashboard preview`}
                        className="absolute inset-0 h-full w-full object-cover object-left-top opacity-95 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  )}
                  
                  <div className="flex justify-between items-start relative z-10">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium border border-white/10 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
                      <ExternalLink size={18} className="text-white" />
                    </div>
                  </div>
                  
                  {!project.image && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] border border-white/10 rounded-xl bg-black/40 backdrop-blur-sm p-4 rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-black/80">
                      <div className="flex gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                      <div className="w-1/2 h-2 bg-white/20 rounded-full mb-3" />
                      <div className="w-3/4 h-2 bg-white/10 rounded-full mb-6" />
                      <div className="w-full h-1/2 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                         <span className="text-white/20 text-xs font-mono">{project.title.toLowerCase().replace(' ', '_')}</span>
                      </div>
                  </div>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
