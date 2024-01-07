import express from 'express';
import Transaction from '../models/Transaction.js';

const router = express.Router();

router.get('/Transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find().limit(50).sort({
      createdOn: -1,
    });
    res.status(200).json(transactions);
  } catch (e) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
