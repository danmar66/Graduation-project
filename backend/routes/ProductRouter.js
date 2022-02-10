const express = require("express");
const ProductController = require("../controllers/ProductController");
const authMiddleware = require("../middlewares/authMiddleware");
const {check} = require('express-validator')


const productRouter = new express.Router();

productRouter.post("/product/create", [
    check('title', 'Title must be filled').notEmpty(),
    check('description', 'Description must be filled').notEmpty(),
    check('slug', 'Slug must be filled').notEmpty(),
    check('price', 'Specify the price').notEmpty(), // @todo check is +number
], authMiddleware, ProductController.create);
productRouter.put("/product/edit/:id", [], authMiddleware, ProductController.update);
productRouter.delete("/product/delete/:id", authMiddleware, ProductController.delete);
productRouter.get("/product", ProductController.getAll);
productRouter.get("/product/:id", ProductController.getOne);
productRouter.get("/product/slug/:slug", ProductController.getOneBySlug);


module.exports = productRouter;
