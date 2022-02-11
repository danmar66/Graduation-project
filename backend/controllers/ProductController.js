const Product = require("../models/Product");
const {validationResult} = require("express-validator");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
const helpers = require('../helpers/Helpers')


class ProductController {
    async create(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }

            const {title, price, description, tags, slug} = req.body; // @todo добавить форматированние цены (не отрицательное число)
            const slugFormatted = slug.toLowerCase().replaceAll(" ", "-");
            const {img} = req.files;
            const tagsArr = JSON.parse(tags);
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, "..", "static", fileName));

            const product = await Product.create({
                img: fileName,
                title,
                price,
                description,
                tags: tagsArr,
                slug: slugFormatted,
            });
            return res.json({message: `Product added`, product});

            // @todo добавить удаление файла при неуспешно создании продукта
            // @todo проверка на существование тэгов
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }

    async update(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }

            const {id: _id} = req.params;
            let {title, price, description, tags, slug} = req.body;
            slug !== undefined ? (slug = slug.toLowerCase().replaceAll(" ", "-")) : null;
            if (req.files) {
                const product = await Product.findOne({_id});
                const {img} = req.files;
                let fileName = uuid.v4() + ".jpg";
                img.mv(path.resolve(__dirname, "..", "static", fileName));
                const imgPath = path.resolve(__dirname, "..", "static", product.img);
                console.log(imgPath);
                try {
                    fs.unlinkSync(imgPath);
                } catch (error) {
                    console.log(error);
                }
                const updatedProduct = await Product.findOneAndUpdate(
                    {_id},
                    {img: fileName, title, price, description, tags, slug},
                    {new: true}
                );
                return res.json({message: `Product updated`, updatedProduct});
            }
            if (tags) {
                return (tags = JSON.parse(tags));
            }
            const updatedProduct = await Product.findOneAndUpdate(
                {_id},
                {title, price, description, tags, slug},
                {new: true}
            );
            return res.json({message: `Product updated`, updatedProduct});
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }

    async getAll(req, res) {
        try {
            const filter = helpers.handleFilterQuery(req.params.filter)
            const options = {
                page: filter.page || 1,
                limit: filter.limit || 2,
                collation: {
                    locale: 'en',
                },
            };
            const products = await Product.paginate(filter, options);
            return res.json(products.docs);
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }

    async getOne(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }

            const {id} = req.params;
            const product = await Product.findById(id);
            if (product === null) {
                res.status(400).json({message: "ID not found"});
            } else {
                res.json({product});
            }
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }

    async getOneBySlug(req, res) {
        try {
            const {slug} = req.params;
            const product = await Product.findOne({slug: slug});
            res.json(product);
            // @todo реализовать функцию получения одного продукта
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }

    async delete(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }

            const {id: _id} = req.params;
            const product = await Product.findOne({_id});
            const imgPath = path.resolve(__dirname, "..", "static", product.img);
            try {
                fs.unlinkSync(imgPath);
            } catch (error) {
                console.log(error);
            }
            const deleted = await Product.findOneAndDelete({_id});
            return res.json({message: `Product deleted`, deleted});
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }
}

module.exports = new ProductController();
