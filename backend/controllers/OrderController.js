const Order = require("../models/Order");
const Product = require("../models/Product");
const Tag = require("../models/Tag");
const {validationResult} = require("express-validator");

class OrderController {
    async create(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }

            let {productItems, deliveryAddress, customerName, customerPhone, customerEmail} = req.body
            let totalPrice = 0;
            for (let i = 0; i < productItems.length; i++) {
                const product = await Product.findById(productItems[i].item)
                totalPrice = totalPrice + (product.price * productItems[i].quantity)
            }
            const order = await Order.create({
                productItems,
                deliveryAddress,
                customerName,
                customerPhone,
                customerEmail,
                totalPrice
            })
            res.json(order)
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: 'Unknown error'});
        }

        // #swagger.tags = ['order']
    }

    async getAll(req, res) {
        try {
            const options = {
                limit: 20,
                page: 1,
                collation: {
                    locale: 'en',
                },
            }
            const orders = await Order.paginate({}, options);
            res.json(orders)
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: 'Unknown error'});
        }

        // #swagger.tags = ['order']
    }

    async getOne(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.errors.map(({param, msg}) => ({[param]: msg}))
                return res.status(400).json({message: "Validation error", errorMessage});
            }

            const {id} = req.params;
            const order = await Order.findById(id);
            if (!order) {
                res.status(400).json({message: "ID not found"});
            } else {
                return res.json(order);
            }
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: 'Unknown error'});
        }

        // #swagger.tags = ['order']
    }

    async update(req, res) {
        try {

        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: 'Unknown error'});
        }

        // #swagger.tags = ['order']
    }

    async delete(req, res) {
        try {

        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: 'Unknown error'});
        }

        // #swagger.tags = ['order']
    }
}

module.exports = new OrderController();
