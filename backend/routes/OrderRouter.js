const express = require("express");
const OrderController = require("../controllers/OrderController");
const authMiddleware = require("../middlewares/authMiddleware");
const validatingMongoIdMiddleware = require('../middlewares/validatingMongoIdMiddleware')


const orderRouter = new express.Router();

orderRouter.post("/order",
    authMiddleware,
    OrderController.create);

orderRouter.put("/order",
    authMiddleware,
    OrderController.update);

orderRouter.delete("/order/:id",
    authMiddleware,
    validatingMongoIdMiddleware,
    OrderController.delete);

orderRouter.get("/order/:id",
    validatingMongoIdMiddleware,
    OrderController.getOne);

orderRouter.get("/order",
    OrderController.getAll);

module.exports = orderRouter;
