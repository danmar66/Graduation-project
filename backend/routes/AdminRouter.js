const express = require("express");
const AdminController = require("../controllers/AdminController");
const authMiddleware = require("../middlewares/authMiddleware");
const {check} = require('express-validator')

const adminRouter = new express.Router();

adminRouter.post("/admin/create", [
    check('username', 'Username must be filled').notEmpty(),
    check('email', 'Email must be filled').isEmail().notEmpty(),
    check('password', 'Password must be 4 to 8 characters').notEmpty().isLength({min: 4, max: 8}),
], authMiddleware, AdminController.create);
adminRouter.put("/admin/edit/:id", [
    check('username', 'Username must be filled').notEmpty(),
    check('email', 'Email must be filled').isEmail().notEmpty(),
    check('password', 'Password must be 4 to 8 characters').notEmpty().isLength({min: 4, max: 8}),
], authMiddleware, AdminController.update);
adminRouter.delete("/admin/delete/:id", authMiddleware, AdminController.delete);
adminRouter.get("/admin", authMiddleware, AdminController.getAll);
adminRouter.get("/admin/user", authMiddleware, AdminController.getUser);
adminRouter.get("/admin/:id", authMiddleware, AdminController.getOne);
adminRouter.post("/admin/login", AdminController.login);

module.exports = adminRouter;
