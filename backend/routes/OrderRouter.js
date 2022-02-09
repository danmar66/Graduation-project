const express = require("express");
const OrderController = require("../controllers/OrderController");

const orderRouter = new express.Router();

orderRouter.post("/order", OrderController.create);
orderRouter.get("/order", OrderController.getAll);
orderRouter.get("/order/:id", OrderController.getOne);
orderRouter.put("/order", OrderController.update);
orderRouter.delete("/order/:id", OrderController.delete);

module.exports = orderRouter;
