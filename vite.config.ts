import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import crypto from 'crypto';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

function adminApiPlugin(env: Record<string, string>): Plugin {
  const adminUsername = env.ADMIN_USERNAME || '';
  const adminPasswordHash = env.ADMIN_PASSWORD_HASH || '';

  const hashValue = (value: string) => crypto.createHash('sha256').update(value).digest('hex');
  const safeCompare = (actual: string, expected: string) => {
    if (!actual || !expected || actual.length !== expected.length) {
      return false;
    }

    return crypto.timingSafeEqual(Buffer.from(actual), Buffer.from(expected));
  };

  return {
    name: 'admin-api',
    configureServer(server) {
      server.middlewares.use('/api/admin/login', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ ok: false }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', () => {
          try {
            const credentials = JSON.parse(body || '{}') as { username?: string; password?: string };
            const usernameMatches = safeCompare(credentials.username || '', adminUsername);
            const passwordMatches = safeCompare(hashValue(credentials.password || ''), adminPasswordHash);

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: usernameMatches && passwordMatches }));
          } catch {
            res.statusCode = 400;
            res.end(JSON.stringify({ ok: false }));
          }
        });
      });
    }
  };
}

export default defineConfig(() => {
  const env = loadEnv('', process.cwd(), '');

  return {
    plugins: [react(), tailwindcss(), adminApiPlugin(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
