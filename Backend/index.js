import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { GoogleGenerativeAI } from '@google/generative-ai';
import authRoutes from './src/routes/auth.js';
import { logInfo, logError } from './src/utils/logger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Basic security and parsers
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Gemini init
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// Export model for use in other controllers
app.locals.geminiModel = model;

// Rate limiter for auth endpoints
const authLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { error: 'Too many requests, please try again later.' }
});

// Rate limiter for API endpoints
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { error: 'Too many requests, please try again later.' }
});

// Mount auth routes
app.use('/auth', authLimiter, authRoutes);

// Health check route
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Global error handler
app.use((err, _req, res, _next) => {
  logError(err instanceof Error ? err : new Error(String(err)), { location: 'globalErrorHandler' });
  res.status(500).json({ error: 'Internal server error' });
});

async function start() {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) throw new Error('MONGO_URI not set in environment');

    await mongoose.connect(mongoUri, { maxPoolSize: 10 });
    logInfo('Connected to MongoDB');

    app.listen(PORT, () => {
      logInfo(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    logError(err instanceof Error ? err : new Error(String(err)), { location: 'start' });
    process.exit(1);
  }
}

start();
