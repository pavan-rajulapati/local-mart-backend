const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');

dotEnv.config();
const key = process.env.SECRET_KEY;

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ message: 'Token Required' });
        }

        let decode = await jwt.verify(token, key);
        req.userId = decode.userId;

        next(); 
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Invalid or expired token', error: error.message });
    }
};

module.exports = verifyToken;
