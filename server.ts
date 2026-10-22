import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.resolve(__dirname, 'data/portfolio-db.json');

async function startServer() {
  const app = express();
  const port = parseInt(process.env.PORT || '3000', 10);
  const isProd = process.env.NODE_ENV === 'production';

  // Increase payload limit to support photo upload (Base64 data URLs)
  app.use(express.json({ limit: '25mb' }));
  app.use(express.urlencoded({ extended: true, limit: '25mb' }));

  // Helper to read DB
  const readDb = () => {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        return JSON.parse(raw);
      }
    } catch (e) {
      console.error('Error reading DB:', e);
    }
    return null;
  };

  // Helper to write DB
  const writeDb = (data: any) => {
    const dir = path.dirname(DB_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  };

  // API Routes
  app.get('/api/portfolio', (req, res) => {
    const db = readDb();
    if (db) {
      return res.json({ success: true, data: db });
    }
    return res.status(404).json({ success: false, message: 'Database not initialized' });
  });

  app.post('/api/portfolio', (req, res) => {
    try {
      const incoming = req.body;
      if (!incoming || !incoming.profile || !incoming.projects) {
        return res.status(400).json({ success: false, message: 'Invalid payload structure' });
      }
      incoming.updatedAt = new Date().toISOString();
      writeDb(incoming);
      return res.json({ success: true, data: incoming });
    } catch (err: any) {
      console.error('Error saving portfolio:', err);
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // Photo upload endpoint
  app.post('/api/upload', (req, res) => {
    try {
      const { imageBase64, filename } = req.body;
      if (!imageBase64) {
        return res.status(400).json({ success: false, message: 'No image data provided' });
      }
      // If it's already a base64 data URL, we can safely return it or persist to uploads
      return res.json({ success: true, url: imageBase64, filename: filename || 'upload.jpg' });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // Dev server with Vite middleware or static prod files
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Portfolio Server running at http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Server startup failed:', err);
  process.exit(1);
});
