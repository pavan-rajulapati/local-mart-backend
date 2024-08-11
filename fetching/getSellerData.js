const Seller = require('../models/seller');

const getSeller = async (req, res) => {
  try {
    const  sellerId  = req.userId;
    if (!sellerId) {
      return res.status(400).json({ message: 'Seller ID is required' });
    }

    const seller = await Seller.findOne({userId : sellerId});
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    return res.status(200).json(seller);
  } catch (error) {
    console.error('Error fetching seller:', error);
    return res.status(500).json({ message: 'Internal Error', error: error.message });
  }
};

module.exports = getSeller;
