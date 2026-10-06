import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { db } from './prisma/db.js';

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    name: 'Web3 Asset Dashboard API',
    version: '1.0.0',
  });
});

app.get('/api/health', async (_req, res) => {
  try {
    await db.orm.public.User.limit(1).first();

    res.json({
      status: 'ok',
      database: 'connected',
      service: 'web3-asset-api',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Database health check failed:', error);

    res.status(503).json({
      status: 'error',
      database: 'disconnected',
      service: 'web3-asset-api',
      timestamp: new Date().toISOString(),
    });
  }
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});

