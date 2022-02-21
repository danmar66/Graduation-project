const {validationResult} = require("express-validator");
const Product = require("../models/Product");
const Tag = require("../models/Tag")
const helpers = require('../helpers/Helpers')
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

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

        // #swagger.tags = ['product']
    }

    async update(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }

            // @todo переделать сохранение файла, добавить папки привязанные к datenow

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

        // #swagger.tags = ['product']
    }

    async getAll(req, res) {
        try {
            console.log('Start', `\n\n`)
            const url = decodeURIComponent(req.url)
            console.log('decoded uri ', url)

            // console.log('req url ', req.url.slice(req.url.lastIndexOf('/')+1) === '')
            let filter
            url.includes('=') === true
                ?
                filter = helpers.handleFilterQuery(url)
                :
                filter = {}

            console.log('OBJECT VALUES FILTER = ', Object.values(filter))
            console.log(Object.values(filter) === [undefined] ? 'values undefined' : 'values exist')
            const options = {
                limit: filter.limit || 20,
                page: filter.page || 1,
                collation: {
                    locale: 'en',
                },
            };
            console.log('filter = ', filter)
            if (filter.sort) {
                Object.assign(options, {sort: filter['sort'][0]})
            }
            const reserved = [...Object.keys(options), 'sort']
            const filterKeys = Object.keys(filter)
            console.log('filter keys = ', filterKeys)
            console.log('reserved = ', reserved)
            const filterObject = filterKeys.reduce((acc, el) =>
                    !reserved.includes(el)
                        ?
                        acc = {...acc, [el]: filter[el]}
                        :
                        acc
                , {})
            console.log('filter object = ', filterObject)
            const filterValues = Object.values(filterObject).flat(Infinity)
            console.log('filter values = ', filterValues)
            if (Object.keys(filterObject).length) {
                const filterIDs = await Tag.find({slug: {$in: filterValues}})
                console.log('filter IDs = ', filterIDs)
                filterObject['tags'] = {$all: filterIDs.map(item => item._id)}
            }
            console.log('changed filterObject = ', filterObject)
            const products = await Product.paginate({...filterObject}, options);
            console.log('End', `\n\n`)
            return res.json(products.docs);
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }

        // #swagger.tags = ['product']
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

        // #swagger.tags = ['product']
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

        // #swagger.tags = ['product']
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

        // #swagger.tags = ['product']
    }
}

module.exports = new ProductController();
