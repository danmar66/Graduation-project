const ObjectID = require('mongoose').isValidObjectId

module.exports = function (req, res, next) {

    try {
        const {id} = req.params
        const isValid = ObjectID(id)

        if (!isValid) {
            return res.status(400).json({message: "Invalid ID!"})
        }

        next()
    } catch (e) {
        console.log(e);
        return res.status(401).json({message: "Validating error"});
    }
};
