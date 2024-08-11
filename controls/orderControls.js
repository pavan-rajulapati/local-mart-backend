const User = require('../models/user');
const Address = require('../models/userAddress');
const Product = require('../models/product');
const Order = require('../models/order');

const handleOrders = async (req, res) => {
  try {
    const { status, productId, totalAmount, utrId, sellerId } = req.body;

    if (!status || !productId || !totalAmount || !sellerId) {
      console.log('Missing required fields:', { status, productId, totalAmount, sellerId });
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const userId = req.userId; 
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: No user ID found' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product Not Found' });
    }

    const address = await Address.findOne({ userId: user._id });
    if (!address) {
      return res.status(404).json({ message: 'Address Not Found' });
    }

    let order = await Order.findOne({ userId: user._id, productId: product._id });
    if (order) {
      order.quantity += 1;
      order.totalAmount += totalAmount;
    } else {
      order = new Order({
        userId: user._id,
        productId: product._id,
        addressId: address._id,
        status,
        utrId,
        totalAmount,
        quantity: 1,
        sellerId
      });
    }

    product.quantity -= 1;  
    if (product.quantity < 0) {
      return res.status(400).json({ message: 'Insufficient product quantity' });
    }

    await product.save();   
    await order.save();    

    return res.status(200).json({ message: 'Order placed successfully', order });
  } catch (error) {
    console.error('Error handling order:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

module.exports = handleOrders;
