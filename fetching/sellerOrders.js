const Orders = require('../models/order');
const mongoose = require('mongoose');

const sellerOrders = async (req, res) => {
    const sellerId = req.params.id;

    if (!sellerId) {
        return res.status(401).json({ message: 'Invalid Seller' });
    }

    try {
        const items = await Orders.find({ "items.sellerId": new mongoose.Types.ObjectId(sellerId) })
            .populate({
                path: 'items.productId',
                model: 'Product'
            });

        if (!items || items.length === 0) {
            return res.status(204).json({ message: 'Empty Data' });
        }

        return res.status(200).json(items);
    } catch (error) {
        return res.status(500).json({ message: 'Internal Error', error: error.message });
    }
};

module.exports = sellerOrders;
