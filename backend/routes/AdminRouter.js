const express = require("express");
const AdminController = require("../controllers/AdminController");
const authMiddleware = require("../middlewares/authMiddleware");

const adminRouter = new express.Router();

adminRouter.post("/admin/create", AdminController.create);
adminRouter.put("/admin/edit/:id", AdminController.update);
adminRouter.delete("/admin/delete/:id", AdminController.delete);
adminRouter.get("/admin", authMiddleware, AdminController.getAll);
adminRouter.get("/admin/user", authMiddleware, AdminController.getUser);
adminRouter.get("/admin/:id", AdminController.getOne);
adminRouter.post("/admin/login", AdminController.login);

module.exports = adminRouter;
