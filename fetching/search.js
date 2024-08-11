const Products = require('../models/product');

const handleSearch = async (req, res) => {
    try {
        let query = req.params.q;

        if (!query || query.trim().length === 0) {
            return res.status(400).json({ message: 'Query field is required' });
        }

        const items = await Products.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ]
        });

        if (!items || items.length === 0) {
            return res.status(404).json({ message: 'No items found' });
        }

        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = handleSearch;
