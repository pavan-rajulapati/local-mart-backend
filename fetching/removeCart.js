const Cart = require('../models/cart');

const removeCart = async (req, res) => {
    try {
        const productId = req.params.productId;
        const userId = req.userId;

        if (!userId) {
            return res.status(401).json({ message: 'User not found' });
        }

        const cart = await Cart.findOneAndUpdate(
            { userId },
            { $pull: { products: { productId } } }, 
            { new: true } 
        );

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        return res.status(200).json({ message: 'Product removed from cart', cart });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Error' });
    }
};

module.exports = removeCart;
