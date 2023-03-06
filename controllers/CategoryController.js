import Category from '../models/CategoryModel.js';

export const getCategory = async (req, res) => {
  try {
    const response = await Category.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
