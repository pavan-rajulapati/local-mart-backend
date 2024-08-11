const Wishlist = require('../models/wishlist');

const handleWishlist = async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.userId;  

        if (!userId || !productId) {
            return res.status(400).json({ message: 'Missing data' });
        }

        const item = await Wishlist.findOne({ userId, productId });
        if (item) {
            return res.status(302).json({ message: 'Item already in wishlist' });
        }

        const newItem = new Wishlist({
            userId,
            productId
        });

        await newItem.save();

        return res.status(200).json({ message: 'Item added to the wishlist' });
    } catch (error) {
        console.error('Internal error:', error);
        return res.status(500).json({ message: 'Internal Error' });
    }
};

module.exports = handleWishlist;
