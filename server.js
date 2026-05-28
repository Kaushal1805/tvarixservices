import crypto from 'crypto';
import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;

const adminUsername = process.env.ADMIN_USERNAME || '';
const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH || '';

const hashValue = (value) => crypto.createHash('sha256').update(value).digest('hex');

const safeCompare = (actual, expected) => {
  if (!actual || !expected || actual.length !== expected.length) {
    return false;
  }

  return crypto.timingSafeEqual(Buffer.from(actual), Buffer.from(expected));
};

app.use(express.json());

app.post('/api/admin/login', (req, res) => {
  const usernameMatches = safeCompare(req.body?.username || '', adminUsername);
  const passwordMatches = safeCompare(hashValue(req.body?.password || ''), adminPasswordHash);

  res.json({ ok: usernameMatches && passwordMatches });
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Tvarix Services running on port ${port}`);
});
