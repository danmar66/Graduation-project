const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const Order = require("../models/Order");
const Product = require("../models/Product");


class PaymentController {
    async createSession(req, res) {
        try {
            const order = await Order.findById(req.body.id)
            const orderItems = order['productItems']
            // console.log('order items ', orderItems)

            // console.log(order['productItems'])

            let result = []

            for (let i = 0; i < orderItems.length; i++) {
                // console.log(orderItems[i])
                const product = await Product.find({_id: orderItems[i]['item']})

                // const products = await Product.find({_id: orderItems.map(product => product.item)})
                // console.log('products ', products)
                const productPrepare = product.map(item => {
                    return {
                        id: item._id,
                        title: item.title,
                        price: item.price,
                        qty: orderItems[i]['quantity']
                    }
                })
                console.log("products Prepared data = ", productPrepare)
                result.push(productPrepare)


            }

            console.log('RESULTTTT ', result)

            // const products = await Product.find({_id: orderItems.map(product => product.item)})
            // console.log('products ', products)
            // const productPrepare = products.map(item => {
            //     return {
            //         id: item._id,
            //         title: item.title,
            //         price: item.price,
            //     }
            // })
            // console.log("products Prepared data = ", productPrepare)

            // console.log('LOGG = ', orderItems[0]["item"] === productPrepare[0]['id'])

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