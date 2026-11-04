
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes/contactRoutes.js';
import { apiLimiter } from './middleware/rateLimiter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Permitted origins for CORS
const isAllowedOrigin = (origin) => {
  // Allow requests with no origin
  if (!origin) return true;

  // Allow local development
  if (/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
    return true;
  }

  // Allow Vercel production and preview deployments
  if (origin.endsWith('.vercel.app')) {
    return true;
  }

  // Allow explicitly configured CLIENT_URL
  if (process.env.CLIENT_URL && origin === process.env.CLIENT_URL) {
    return true;
  }

  return false;
};

app.use(cors({
  origin: (origin, callback) => {
    if (isAllowedOrigin(origin)) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// General API rate limit
app.use('/api', apiLimiter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api', contactRoutes);

// Catch-all 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API route not found',
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err.message);

  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
});

// Export Express app for Vercel
export default app;

// Start server only during local development
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`🚀 Ajay Vakadi Portfolio Backend running on port ${PORT}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  });
}
