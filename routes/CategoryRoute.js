import express from 'express';
import { getCategory } from '../controllers/CategoryController.js';

const router = express.Router();

router.get('/api/category', getCategory);

export default router;
