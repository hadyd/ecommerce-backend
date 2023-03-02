import express from 'express';
import {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/ProductController.js';
import { verifyToken } from '../middleware/VerifyToken.js';

const router = express.Router();

router.get('/products', verifyToken, getProducts);
router.get('/products/:id', verifyToken, getProductById);
router.post('/products', verifyToken, saveProduct);
router.patch('/products/:id', verifyToken, updateProduct);
router.delete('/products/:id', verifyToken, deleteProduct);

export default router;
