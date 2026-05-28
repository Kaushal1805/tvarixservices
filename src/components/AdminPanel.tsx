import { FormEvent, useEffect, useState } from 'react';
import { ImagePlus, Link, LockKeyhole, LogIn, LogOut, PlusCircle, Trash2 } from 'lucide-react';
import type { PortfolioProject } from './Portfolio';

const STORAGE_KEY = 'tvarix-portfolio-projects';

const emptyProject = {
  title: '',
  category: '',
  image: '',
  url: '',
  description: ''
};

export default function AdminPanel() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [form, setForm] = useState(emptyProject);
  const [isAuthenticated, setIsAuthenticated] = useState(() => window.sessionStorage.getItem('tvarix-admin-auth') === 'true');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const savedProjects = window.localStorage.getItem(STORAGE_KEY);
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const saveProjects = (nextProjects: PortfolioProject[]) => {
    setProjects(nextProjects);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProjects));
    window.dispatchEvent(new Event('portfolio-projects-updated'));
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError('');

    const formData = new FormData(event.currentTarget);
    const username = String(formData.get('admin-username') || '');
    const password = String(formData.get('admin-password') || '');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const result = (await response.json()) as { ok?: boolean };

      if (!result.ok) {
        setLoginError('Invalid admin credentials.');
        return;
      }

      window.sessionStorage.setItem('tvarix-admin-auth', 'true');
      setIsAuthenticated(true);
      event.currentTarget.reset();
    } catch {
      setLoginError('Admin login is not configured on this server.');
    }
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem('tvarix-admin-auth');
    setIsAuthenticated(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextProject: PortfolioProject = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      category: form.category.trim() || 'Project',
      image: form.image.trim(),
      url: form.url.trim(),
      description: form.description.trim()
    };

    saveProjects([nextProject, ...projects]);
    setForm(emptyProject);
  };

  const removeProject = (projectId: PortfolioProject['id']) => {
    saveProjects(projects.filter((project) => project.id !== projectId));
  };

  return (
    <section className="w-full py-24 px-6 border-t border-white/5 relative" id="admin">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Project <span className="text-gradient">Admin Panel</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Add project cards with an image URL, live URL, and description. Admin access is verified by the server before these controls are shown.
          </p>
        </div>

        {!isAuthenticated ? (
          <form className="glass-panel p-8 max-w-xl flex flex-col gap-5" onSubmit={handleLogin}>
            <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-blue-400">
              <LockKeyhole size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Admin Login</h3>
              <p className="text-slate-400">Enter the admin credentials configured in the server environment.</p>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="admin-username" className="text-sm font-medium text-slate-400">Admin ID</label>
              <input
                id="admin-username"
                name="admin-username"
                required
                autoComplete="username"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Admin ID"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="admin-password" className="text-sm font-medium text-slate-400">Password</label>
              <input
                id="admin-password"
                name="admin-password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Password"
              />
            </div>

            {loginError && <p className="text-sm text-red-300">{loginError}</p>}

            <button type="submit" className="w-full py-4 rounded-xl bg-white text-black font-bold tracking-wide hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              <LogIn size={18} />
              Unlock Admin Panel
            </button>
          </form>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8">
          <form className="glass-panel p-8 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-display font-bold text-white">Add Project</h3>
                <p className="text-sm text-slate-400 mt-1">New entries appear in Featured Work instantly.</p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="h-10 w-10 rounded-full border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center flex-shrink-0"
                aria-label="Logout admin"
              >
                <LogOut size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="project-title" className="text-sm font-medium text-slate-400">Project Name</label>
                <input
                  id="project-title"
                  required
                  value={form.title}
                  onChange={(event) => setForm({ ...form, title: event.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Client dashboard"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="project-category" className="text-sm font-medium text-slate-400">Category</label>
                <input
                  id="project-category"
                  value={form.category}
                  onChange={(event) => setForm({ ...form, category: event.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Business Intelligence"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="project-image" className="text-sm font-medium text-slate-400 flex items-center gap-2">
                <ImagePlus size={16} />
                Image URL
              </label>
              <input
                id="project-image"
                type="url"
                required
                value={form.image}
                onChange={(event) => setForm({ ...form, image: event.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="https://example.com/project-image.png"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="project-url" className="text-sm font-medium text-slate-400 flex items-center gap-2">
                <Link size={16} />
                Project URL
              </label>
              <input
                id="project-url"
                type="url"
                value={form.url}
                onChange={(event) => setForm({ ...form, url: event.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="https://client-project.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="project-description" className="text-sm font-medium text-slate-400">Description</label>
              <textarea
                id="project-description"
                required
                rows={4}
                value={form.description}
                onChange={(event) => setForm({ ...form, description: event.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Write what this project does and what result it gives."
              />
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <PlusCircle size={18} />
              Add Project
            </button>
          </form>

          <div className="glass-panel p-8">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Listed Projects</h3>
            {projects.length === 0 ? (
              <div className="min-h-64 rounded-2xl border border-dashed border-white/10 bg-black/30 flex items-center justify-center text-center p-8">
                <p className="text-slate-400">No admin-added projects yet.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="grid grid-cols-[96px_1fr_auto] gap-4 rounded-2xl border border-white/10 bg-black/30 p-3">
                    <img src={project.image} alt={project.title} className="h-20 w-24 rounded-xl object-cover bg-slate-900" />
                    <div className="min-w-0">
                      <p className="text-xs uppercase text-blue-300 font-semibold mb-1">{project.category}</p>
                      <h4 className="text-white font-bold truncate">{project.title}</h4>
                      <p className="text-sm text-slate-400 line-clamp-2">{project.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeProject(project.id)}
                      className="h-10 w-10 rounded-full border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center"
                      aria-label={`Remove ${project.title}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
