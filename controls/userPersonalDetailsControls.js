const UserPersonalDetails = require('../models/userPersonalDetails');
const User = require('../models/user');

const handleUserDetails = async (req, res) => {
    try {

        const { firstName, lastName, mobileNumber, dateOfBirth, gender } = req.body;

        if (!req.userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        let user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
        }

        const parsedDateOfBirth = new Date(dateOfBirth);
        if (isNaN(parsedDateOfBirth)) {
            return res.status(400).json({ message: 'Invalid date format' });
        }

        let userDetails = new UserPersonalDetails({
            userId : user._id,
            firstName,
            lastName,
            mobileNumber,
            dateOfBirth: parsedDateOfBirth,
            gender,
            user: req.userId
        });

        let savedUserDetails = await userDetails.save();

        user.userPersonalDetails.push(savedUserDetails._id);
        await user.save();

        return res.status(200).json({ message: 'Success', data: savedUserDetails });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Error', error: error.message });
    }
};

module.exports = handleUserDetails;
