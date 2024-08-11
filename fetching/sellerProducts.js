const Products = require('../models/product');

const getSellerProducts = async (req, res) => {
    try {
        let sellerId = req.params.sellerId;

        let items = await Products.find({sellerId});

        if (!items || items.length === 0) {
            return res.status(401).json({ message: 'No products found for this seller' });
        }

        return res.status(200).json(items);
    } catch (error) {
        return res.status(500).json({ message: 'Internal Error', error: error.message });
    }
};

module.exports = getSellerProducts;
