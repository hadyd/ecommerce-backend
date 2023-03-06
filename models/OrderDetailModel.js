import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

// const OrderDetail = db.define(
//   'order_details',
//   {
//     order_quantity: DataTypes.INTEGER,
//     total_price: DataTypes.INTEGER,
//     product_id: DataTypes.INTEGER,
//     order_id: DataTypes.INTEGER,
//   },
//   {
//     freezeTableName: true,
//   }
// );

const OrderDetail = db.define('OrderDetail', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    order_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    total_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

export default OrderDetail;

(async () => {
  await db.sync();
})();
