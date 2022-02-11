const express = require("express");
const ProductController = require("../controllers/ProductController");
const authMiddleware = require("../middlewares/authMiddleware");
const {check} = require('express-validator')
const validatingMongoIdMiddleware = require('../middlewares/validatingMongoIdMiddleware')


const productRouter = new express.Router();

productRouter.post("/product/create",
    authMiddleware,
    [
        check('title', 'Title must be filled').notEmpty(),
        check('description', 'Description must be filled').notEmpty(),
        check('slug', 'Slug must be filled').notEmpty(),
        check('price', 'Specify the price').notEmpty(), // @todo check is +number
    ],
    ProductController.create);

productRouter.put("/product/edit/:id",
    authMiddleware,
    validatingMongoIdMiddleware,
    ProductController.update);

productRouter.delete("/product/delete/:id",
    authMiddleware,
    validatingMongoIdMiddleware,
    ProductController.delete);

productRouter.get("/product",
    ProductController.getAll);

productRouter.get("/product/:id",
    validatingMongoIdMiddleware,
    ProductController.getOne);

productRouter.get("/product/slug/:slug",
    ProductController.getOneBySlug);

module.exports = productRouter;
