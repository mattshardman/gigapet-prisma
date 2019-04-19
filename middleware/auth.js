const { prisma } = require("../generated/prisma-client");
const jwt = require("jsonwebtoken");

const key = "Eat your veggies kids";

function generateToken(user) {
    const payload = {
        id: user.id,
        username: user.username
    };

    const options = {
        expiresIn: "1d"
    };

    return jwt.sign(payload, key, options);
}

function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, key, async (err, decoded) => {
            if (err) {
                return res.status(401).json(err);
            } else {
                req.decoded = decoded;
                req.user = await prisma.parent({ id: req.decoded.id });
                next();
            }
        });
    } else {
        return res.status(501).json({
            error: "No token provided, must be set on the Authorization Header"
        });
    }
}

module.exports = {
    authenticate,
    generateToken
};