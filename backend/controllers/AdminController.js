const helper = require("../helpers/Helpers");
const Admin = require("../models/Admin");
const {validationResult} = require("express-validator");

class AdminController {
    async create(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }
            const {username, email, password} = req.body;
            const candidate = await Admin.findOne({$or: [{username}, {email}]});
            if (candidate) {
                return res
                    .status(400)
                    .json({message: "An administrator with the same data already exists"});
            }
            const passwordHash = helper.passwordHash(password);
            const newAdmin = await Admin.create({username, email, password: passwordHash});

            res.json({message: `Admin added`, newAdmin});
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }

        // #swagger.tags = ['admin']
    }

    async update(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }
            const {id} = req.params;
            const {username, email, password} = req.body;
            const editedAdmin = await Admin.findByIdAndUpdate(
                id,
                {username, email, password: helper.passwordHash(password)},
                {new: true}
            );

            return res.json({message: `Admin edited`, editedAdmin});
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }

        // #swagger.tags = ['admin']
    }

    async delete(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }
            const {id} = req.params;
            const deletedAdmin = await Admin.findByIdAndDelete(id);
            if (deletedAdmin === null) {
                res.status(400).json({message: "ID not found"});
            } else {
                res.json({message: `Admin deleted`, deletedAdmin});
            }
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }

        // #swagger.tags = ['admin']
    }

    async getAll(req, res) {
        try {
            const admins = await Admin.find();
            return res.json(admins);
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }

        // #swagger.tags = ['admin']
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            const admin = await Admin.findById(id);
            if (!admin) {
                res.status(400).json({message: "ID not found"});
            } else {
                return res.json(admin);
            }
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }

        // #swagger.tags = ['admin']
    }

    async getUser(req, res) {
        try {
            const admin = await Admin.findById(req.user.id);
            return res.json({Username: admin.username, Email: admin.email});
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }

        // #swagger.tags = ['admin']
    }

    async login(req, res) {
        try {
            const {username, password} = req.body;
            const admin = await Admin.findOne({username});

            if (!admin) {
                return res.status(400).json({message: `Admin ${username} not found`});
            }
            const passwordCheck = helper.passwordCheck(password, admin.password);

            if (!passwordCheck) {
                return res.status(400).json({message: `Error. Type the correct password`});
            }
            const token = helper.generateAccessToken(admin._id);

            res.json({message: "Login successful", token});
        } catch (e) {
            console.log(e.message);
            res.status(400).json({message: "Login error"});
        }

        // #swagger.tags = ['admin']
    }
}

module.exports = new AdminController();
