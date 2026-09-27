const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Setup basic SQLite DB for Guestbook and Contact
const db = new Database('portfolio.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS guestbook (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    website TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    reason TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path TEXT NOT NULL,
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

app.use(cors());
app.use(helmet());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// API Routes
app.get('/api/guestbook', (req, res) => {
  const entries = db.prepare('SELECT id, name, message, website, created_at FROM guestbook ORDER BY created_at DESC LIMIT 50').all();
  res.json(entries);
});

app.post('/api/guestbook', (req, res) => {
  const { name, message, website } = req.body;
  if (!name || !message) return res.status(400).json({ error: 'Name and message are required' });
  
  const stmt = db.prepare('INSERT INTO guestbook (name, message, website) VALUES (?, ?, ?)');
  const result = stmt.run(name, message, website || null);
  res.status(201).json({ id: result.lastInsertRowid, name, message, website });
});

app.post('/api/contact', (req, res) => {
  const { name, email, reason, message } = req.body;
  if (!name || !email || !reason || !message) return res.status(400).json({ error: 'All fields are required' });
  
  const stmt = db.prepare('INSERT INTO messages (name, email, reason, message) VALUES (?, ?, ?, ?)');
  stmt.run(name, email, reason, message);
  res.status(201).json({ success: true });
});

app.post('/api/analytics', (req, res) => {
  const { path } = req.body;
  const userAgent = req.headers['user-agent'] || 'Unknown';
  if (!path) return res.status(400).json({ error: 'Path is required' });
  
  const stmt = db.prepare('INSERT INTO analytics (path, user_agent) VALUES (?, ?)');
  stmt.run(path, userAgent);
  res.status(201).json({ success: true });
});

app.get('/api/analytics/stats', (req, res) => {
  const totalViews = db.prepare('SELECT COUNT(*) as count FROM analytics').get();
  const topPaths = db.prepare('SELECT path, COUNT(*) as count FROM analytics GROUP BY path ORDER BY count DESC LIMIT 5').all();
  res.json({ totalViews: totalViews.count, topPaths });
});

// Serve frontend in production
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
