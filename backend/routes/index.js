const Router = require("express");
const adminRouter = require("./AdminRouter");
const orderRouter = require("./OrderRouter");
const productRouter = require("./ProductRouter");
const tagRouter = require("./TagRouter");
const tagTypeRouter = require("./TagTypeRouter");
const paymentRouter = require("./PaymentRouter")

const adminPanel = new Router();

adminPanel.use("/", adminRouter);
adminPanel.use("/", orderRouter);
adminPanel.use("/", productRouter);
adminPanel.use("/", tagRouter);
adminPanel.use("/", tagTypeRouter);
adminPanel.use("/", paymentRouter)

const clientSide = new Router()


module.exports = adminPanel
