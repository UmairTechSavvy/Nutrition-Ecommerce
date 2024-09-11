const Order = require('../models/orderModel');
const Product = require('../models/productModel');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const total = product.price * quantity;

    const order = new Order({
      productId,
      quantity,
      total,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order' });
  }
};
