const express = require("express");
const PaymentController = require("../controllers/PaymentController")

const paymentRouter = new express.Router();

paymentRouter.post('/create-checkout-session', PaymentController.createSession)

module.exports = paymentRouter;