import express from 'express';

const router = express.Router();

router.get('/kpis', async (req, res) => {
  try {
    const kpis = await KPI.find();
  } catch (e) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
