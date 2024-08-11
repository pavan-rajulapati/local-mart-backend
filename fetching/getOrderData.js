const Order = require('../models/order');

const getOrderData = async (req, res) => {
    const userId = req.userId;
    try {
        const orderData = await Order.find({ userId })
            .populate({
                path: 'items.productId',
                model: 'Product'
            });

        return res.status(200).json(orderData);
    } catch (error) {
        console.error('Error fetching order data:', error);
        return res.status(500).json({ message: 'Internal Error', error: error.message });
    }
};

module.exports = getOrderData;
