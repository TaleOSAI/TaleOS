import express from 'express';
import { getLore } from '../services/loreService.js';

const router = express.Router();

router.get('/lore', (req, res) => {
  const prompt = req.query.prompt || 'fantasy kingdom';
  const result = getLore(prompt);
  res.json({ result });
});

export default router;
