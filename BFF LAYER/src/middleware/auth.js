const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
        console.log("Token received:", token);
        const payload = jwt.verify(token, jwtSecret); // ✅ use your actual secret here
        console.log("Token is valid, payload:", payload);
        req.user = payload;
        next();
    } catch (error) {
        console.error('JWT verification failed:', error);
        return res.status(403).json({ message: 'Forbidden' });
    }
};

module.exports = authenticateJWT;
