const Product = require('../models/product');

const getProductsById = async (req, res) => {
    const query = req.params.category.trim();
    try {
        const items = await Product.find({ category: query });
        if (items.length < 1) {
            return res.status(200).json({ message: 'No Products Are Available' });
        }
        return res.status(200).json(items); 
    } catch (error) {
        return res.status(500).json({ message: 'Internal Error', error: error });
    }
};

module.exports = getProductsById;
