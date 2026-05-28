import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/10 bg-black relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        
        <div>
          <a href="#" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold font-display leading-none">T</span>
            </div>
            <span className="font-display font-bold text-xl tracking-wide text-white">
              Tvarix Services
            </span>
          </a>
          <p className="text-slate-400 text-sm max-w-xs">
            Building Future-Ready Digital Solutions with AI for enterprises and scales-ups globally.
          </p>
          <a href="mailto:kaushalgangwar91056@gmail.com" className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <Mail size={16} />
            kaushalgangwar91056@gmail.com
          </a>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold mb-2">Services</h5>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Web Development</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">AI Solutions</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Mobile Apps</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">SaaS Platforms</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">API Integrations</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold mb-2">Company</h5>
            <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</a>
            <a href="#portfolio" className="text-sm text-slate-400 hover:text-white transition-colors">Portfolio</a>
            <a href="#partner" className="text-sm text-slate-400 hover:text-white transition-colors">ATS Craft</a>
            <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Tvarix Services. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-slate-400">
          <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
