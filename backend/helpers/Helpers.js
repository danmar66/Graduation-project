const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class Helpers {
  generateAccessToken = (id, username) => {
    const payload = {
      id,
    };
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
  };
  passwordCheck = (reqPass, dbPass) => {
    return bcrypt.compareSync(reqPass, dbPass);
  };
  passwordHash = (password) => {
    const passHash = bcrypt.hashSync(password, 8);
    return passHash;
  };
  slugCreate = (before, after) => {
    return `${before}=${after}`;
  };
}

module.exports = new Helpers();
