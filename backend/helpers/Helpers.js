const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class Helpers {
    generateAccessToken = (id, username) => {
        const payload = {
            id,
        };
        return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "1h"});
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
    handleFilterQuery = (filterString) => {
        let filterParams = {};
        filterString
            .slice(filterString.lastIndexOf('/') + 1)
            .split(";")
            .map((el) => el.split("="))
            .map((el) => el.map((el) => el.split(",")))
            .map((el) => {
                return (filterParams[el[0]] = el[1]);
            });

        return filterParams
    };

}

module.exports = new Helpers();
