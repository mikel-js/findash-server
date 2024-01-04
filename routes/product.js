import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(404).json({ message: error.message });
  }
});

export default router;