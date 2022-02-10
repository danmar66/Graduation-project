const express = require("express");
const OrderController = require("../controllers/OrderController");
const authMiddleware = require("../middlewares/authMiddleware");

const orderRouter = new express.Router();

orderRouter.post("/order", authMiddleware, OrderController.create);
orderRouter.put("/order", authMiddleware,OrderController.update);
orderRouter.delete("/order/:id", authMiddleware, OrderController.delete);
orderRouter.get("/order/:id", OrderController.getOne);
orderRouter.get("/order", OrderController.getAll);

module.exports = orderRouter;
