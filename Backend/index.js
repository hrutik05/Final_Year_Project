import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
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

// Rate limiter for auth endpoints
const authLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: { error: 'Too many requests, please try again later.' }
});

app.use('/api/auth', authLimiter, authRoutes);

// app.get('/health', (_req, res) => res.json({ status: 'ok' }));

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
