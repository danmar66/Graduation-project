const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET_KEY;

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }

    try {
        if (typeof req.headers.authorization !== "string") {
            return res.status(401).json({message: "User not authorized"});
        }
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({message: "User not authorized"});
        }
        req.user = jwt.verify(token, secret);
        next();
    } catch (e) {
        console.log(e);
        return res.status(401).json({message: "User not authorized"});
    }
};
