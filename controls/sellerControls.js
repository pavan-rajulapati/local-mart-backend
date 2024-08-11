const Seller = require('../models/seller');
const User = require('../models/user');

const handleSellerRegistration = async (req, res) => {
  try {
    const { firstName, lastName, mobileNumber, address, bankAccountDetails } = req.body;
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: Token required' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.isSeller) {
      return res.status(409).json({ message: 'User is already registered as a seller' });
    }

    const existingSeller = await Seller.findOne({ email: user.email });
    if (existingSeller) {
      return res.status(409).json({ message: 'A seller with this email already exists' });
    }

    // Create and save the new seller
    const newSeller = new Seller({
      userId: user._id,
      firstName,
      lastName,
      mobileNumber,
      address,
      bankAccountDetails
    });

    const savedSeller = await newSeller.save();
    user.sellerId.push(savedSeller._id);
    user.isSeller = true;
    await user.save();

    res.status(200).json({ message: 'Seller registered successfully', sellerId: savedSeller._id });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

module.exports = handleSellerRegistration;
