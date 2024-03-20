const jwtDecode = require('jwt-decode');
const { User } = require("../models");
const logger = require('./loggers');

async function verifyToken(req, res, next) {
    const header = req.headers.authorization;

    if (!header) {
        logger.info(`No Token Provided`);
        return res.status(403).send({ message: 'No token provided.' });
    }

    const token = header.split(' ')[1];
    try {
    const decoded = jwtDecode(token);
    // Check if the token is expired
    if (Date.now() >= decoded.exp * 1000) {
        logger.info(`Token Expired`);
        return res.status(401).send({ message: 'Token expired.' });
    }
    const user = await User.findById(decoded._id).select('first_name last_name _id role').exec();
    if (!user) {
        logger.error(`Unauthorized - User not found`);
        return res.status(401).send({ message: 'Unauthorized.' });
    }

    // Check if user's role is admin
    if (user.role === 'admin') {
        // If user is admin, grant full privileges
        req.userId = decoded._id;
        req.user = user;
        next();
    } else if (user.role === 'customer') {
        // If user is customer, restrict access to specific routes
        // You can customize this part based on your route structure
        // For example, allow access to client routes only
        if (req.path.startsWith('/client')) {
            req.userId = decoded._id;
            req.user = user;
            next();
        } else {
            logger.info(`Unauthorized - Insufficient Privileges`);
            return res.status(403).send({ message: 'Insufficient privileges.' });
        }
    } else {
        // If user has an unrecognized role, deny access
        logger.info(`Unauthorized - Unknown Role`);
        return res.status(403).send({ message: 'Unknown role.' });
    }
    } catch (err) {
        logger.error(`Unauthorized - ${err}`);
        return res.status(401).send({ message: 'Unauthorized.' });
    }
}

module.exports = verifyToken;
