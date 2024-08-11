const UserAddress = require('../models/userAddress');
const User = require('../models/user');

const handleUserAddress = async (req, res) => {
    try {
        const { address, bankAccountDetails } = req.body;

        if (!req.userId) {
            return res.status(404).json({ message: 'User ID Required' });
        }

        let user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
        }

        if (!user.userAddressId) {
            user.userAddressId = [];
        }

        let userAddress = new UserAddress({
            userId: user._id,
            address,
            bankAccountDetails
        });

        let savedAddress = await userAddress.save();
        user.userAddressId.push(savedAddress._id);
        await user.save();

        return res.status(200).json({ message: 'Success', data: savedAddress });
    } catch (error) {
        console.error('Error saving user address:', error);
        return res.status(500).json({ message: 'Internal Error', error: error.message });
    }
};

module.exports = handleUserAddress;
