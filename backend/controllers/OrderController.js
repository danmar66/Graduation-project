const Order = require("../models/Order");
const Product = require("../models/Product");

class OrderController {
    async create(req, res) {
        try {
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
    }

    async getAll(req, res) {
        try {

        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: 'Unknown error'});
        }
    }

    async getOne(req, res) {
        try {

        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: 'Unknown error'});
        }
    }

    async update(req, res) {
        try {

        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: 'Unknown error'});
        }
    }

    async delete(req, res) {
        try {

        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: 'Unknown error'});
        }
    }
}

module.exports = new OrderController();
