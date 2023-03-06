import express from 'express';
import FileUpload from 'express-fileupload';
import cors from 'cors';
import ProductRoute from './routes/ProductRoute.js';
import UsersRoute from './routes/UserRoute.js';
import CategoryRoute from './routes/CategoryRoute.js';
import OrderRoute from './routes/OrderRoute.js';
import db from './config/Database.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(express.static('public'));
app.use(ProductRoute);
app.use(UsersRoute);
app.use(CategoryRoute);
app.use(OrderRoute);
try {
  await db.authenticate();
  console.log('Database Connected...');
} catch (error) {
  console.error(error);
}

app.listen(5000, () => console.log('Server Up and Running...'));
