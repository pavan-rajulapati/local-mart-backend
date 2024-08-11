const Cart = require('../models/cart');
const Product = require('../models/product');

const handleGetCart = async (req, res) => {
    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(401).json({ message: 'Invalid Authentication' });
        }

        let cart = await Cart.findOne({ userId }).populate({
            path: 'products.productId',
            model: 'Product'
        });

        if (!cart || cart.products.length === 0) {
            return res.status(200).json([]);
        }

        const detailedProducts = cart.products.map(item => ({
            product: item.productId,
            quantity: item.quantity,
            _id: item._id
        }));


        return res.status(200).json(detailedProducts);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Error' });
    }
};

module.exports = handleGetCart;
