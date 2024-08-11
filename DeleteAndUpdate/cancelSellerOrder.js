const Order = require('../models/order');
const mongoose = require('mongoose');

const cancelSellerOrder = async (req, res) => {
  try {
    const { productId, sellerId } = req.body;

    if (!productId || !sellerId) {
      return res.status(400).json({ message: 'Missing required fields: productId and sellerId' });
    }

    const productObjectId = new mongoose.Types.ObjectId(productId);
    const sellerObjectId = new mongoose.Types.ObjectId(sellerId);

    console.log(`Deleting item with productId: ${productObjectId} and sellerId: ${sellerObjectId}`);

    const result = await Order.updateOne(
      { 'items.productId': productObjectId, 'items.sellerId': sellerObjectId },
      { $pull: { items: { productId: productObjectId, sellerId: sellerObjectId } } }
    );

    console.log('Update result:', result);

    if (result.nModified === 0) {
      return res.status(404).json({ message: 'Order not found or product already removed' });
    }

    const order = await Order.findOne({ 'items.productId': productObjectId, 'items.sellerId': sellerObjectId });

    if (order && order.items.length === 0) {
      await Order.deleteOne({ _id: order._id });
      return res.status(200).json({ message: 'Order item canceled and order deleted successfully' });
    }

    return res.status(200).json({ message: 'Order item canceled successfully' });
  } catch (error) {
    console.error('Error canceling order item:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = cancelSellerOrder;
