const express = require("express");
const OrderController = require("../controllers/OrderController");
const authMiddleware = require("../middlewares/authMiddleware");
const {check} = require('express-validator')
const validatingMongoIdMiddleware = require('../middlewares/validatingMongoIdMiddleware')

const orderRouter = new express.Router();

orderRouter.post("/order",
    [
        check('productItems', 'Items is not specified').notEmpty().isArray(),
        check('deliveryAddress', 'Address must be filled').notEmpty(),
        check('customerName', 'Name must be specified').notEmpty(),
        check('customerPhone', 'Phone must be specified').notEmpty(),
        check('customerEmail', 'Enter valid email').notEmpty().isEmail()
    ],
    OrderController.create);

orderRouter.put("/order/:id",
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
