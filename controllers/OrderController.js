import Order from '../models/OrderModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Product from '../models/ProductModel.js';

export const order = async (req, res) => {
  const { productId, quantity, price, userId, status } = req.body;

  const min = 100;
  const max = 999;
  const uniqueCode = Math.floor(Math.random() * (max - min + 1) + min);
  const totalPrice = quantity * price;

  try {
    await Order.create({
      product_id: parseInt(productId),
      quantity: parseInt(quantity),
      price: price,
      total_price: totalPrice,
      unique_code: uniqueCode,
      user_id: userId,
      status: status,
    });
    const product = await Product.findByPk(productId);
    await product.decrement('stock', { by: quantity });
    res.json({ msg: 'Berhasil Tambahkan Keranjang' });
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async (req, res) => {
  console.log(res, 'RESSSSSSSSSAZASASASASASASAS');
  console.log(req, 'REQ');
  try {
    const { userId, status } = req.params;
    const orders = await Order.findAll({
      where: {
        user_id: userId,
        status: status,
      },
    });
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
