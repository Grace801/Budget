const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Token manquant ou mal formaté' });
        }

        const token = authHeader.split(' ')[1];

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET || 'RANDOM_SECRET_KEY');
        req.auth = { userId: decodedToken.userId };

        next();
    } catch (error) {
        res.status(401).json({ error: 'Token invalide' });
    }
};
