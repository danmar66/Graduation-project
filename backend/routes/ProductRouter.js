const express = require("express");
const ProductController = require("../controllers/ProductController");

const productRouter = new express.Router();

productRouter.post("/product/create", ProductController.create);
productRouter.put("/product/edit/:id", ProductController.update);
productRouter.delete("/product/delete/:id", ProductController.delete);
productRouter.get("/product", ProductController.getAll);
productRouter.get("/product/:id", ProductController.getOne);
productRouter.get("/product/slug/:slug", ProductController.getOneBySlug);


module.exports = productRouter;
