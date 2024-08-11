const Wishlist = require('../models/wishlist');

const getWishlist = async (req, res) => {
    try {
        const userId = req.userId;

        let items = await Wishlist.find({ userId }).populate('productId');
        if (items.length === 0) {
            return res.status(404).json({ message: 'There are no items in your wishlist' });
        }

        return res.status(200).json(items);
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

module.exports = getWishlist;
