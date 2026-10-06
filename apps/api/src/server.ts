import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

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

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'web3-asset-api',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});