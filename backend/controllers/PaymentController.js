const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const Order = require("../models/Order");
const Product = require("../models/Product");


class PaymentController {
    async createSession(req, res) {
        try {

            // const storeItems = new Map([
            //     [1, {priceInCents: 10000, name: 'Learn Stripe'}],
            //     [2, {priceInCents: 20000, name: 'Learn Checkout'}]
            // ])
            const order = await Order.findById(req.body.id)
            // console.log('order ', order)
            const orderItems = order['productItems']
            console.log('order items ', orderItems)
            // const product = await Product.findById("61fd4e80241e49671eb3aa12")
            // console.log('product ', product)
            const products = await Product.find({_id: orderItems.map(product => product.item)})
            // console.log('products ', products)
            const productPrepare = products.map(item => {
                return {
                    title: item.title,
                    price: item.price,
                }
            })
            console.log("products Prepared data = ", productPrepare)


            // const session = await stripe.checkout.sessions.create({
            //     payment_method_types: ['card'],
            //     mode: 'payment',
            //     line_items: req.body.items.map(item => {
            //         const storeItem = storeItems.get(item.id)
            //         return {
            //             price_data: {
            //                 currency: 'usd',
            //                 product_data: {
            //                     name: storeItem.name
            //                 },
            //                 unit_amount: storeItem.priceInCents,
            //             },
            //             quantity: item.quantity
            //         }
            //     }),
            //     success_url: `${process.env.SITE_URL}/catalog`,
            //     cancel_url: `${process.env.SITE_URL}`
            // })

            // res.json({url: session.url})
            res.json({message: 'OK'})

            // res.redirect(303, session.url)
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }
}

module.exports = new PaymentController()