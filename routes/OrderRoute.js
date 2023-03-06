import express from 'express';
import { getCart, order } from '../controllers/OrderController.js';

const router = express.Router();

router.post('/order', order);
router.get('/order', getCart);

export default router;
