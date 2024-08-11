const userData = require('../models/userPersonalDetails');

const getUserData = async (req, res) => {
    const { userId } = req;

    try {
        const user = await userData.findOne({ userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
            console.log('user not found')
        }

        return res.status(200).json([user]);
    } catch (error) {
        console.error('Error fetching user data:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = getUserData;
