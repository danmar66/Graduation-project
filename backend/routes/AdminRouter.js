const express = require("express");
const AdminController = require("../controllers/AdminController");
const authMiddleware = require("../middlewares/authMiddleware");
const {check, param} = require('express-validator')
const validatingMongoIdMiddleware = require('../middlewares/validatingMongoIdMiddleware')

const adminRouter = new express.Router();

adminRouter.post("/admin/create",
    authMiddleware,
    [
        check('username', 'Username must be filled').notEmpty(),
        check('email', 'Email must be filled').isEmail().notEmpty(),
        check('password', 'Password must be 4 to 8 characters').notEmpty().isLength({min: 4, max: 8}),
    ],
    AdminController.create);

adminRouter.put("/admin/edit/:id",
    authMiddleware,
    validatingMongoIdMiddleware,
    // param('id', 'Empty ID! Please enter ID!').notEmpty(), // @todo ??? should this work???
    [
        check('username', 'Username must be filled').notEmpty(),
        check('email', 'Email must be filled').isEmail().notEmpty(),
        check('password', 'Password must be 4 to 8 characters').notEmpty().isLength({min: 4, max: 8}),
    ],
    AdminController.update);
adminRouter.delete("/admin/delete/:id",
    authMiddleware,
    validatingMongoIdMiddleware,
    AdminController.delete);

adminRouter.get("/admin",
    authMiddleware,
    AdminController.getAll);

adminRouter.get("/admin/user",
    authMiddleware,
    AdminController.getUser);

adminRouter.get("/admin/:id",
    authMiddleware,
    validatingMongoIdMiddleware,
    AdminController.getOne);

adminRouter.post("/admin/login",
    AdminController.login);

module.exports = adminRouter;
