const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const Order = require("../models/Order");
const Product = require("../models/Product");

class PaymentController {
    async createSession(req, res) {
        try {
            let preparedData = []
            const order = await Order.findById(req.body.id)
            const orderItems = order['productItems']
            for (let i = 0; i < orderItems.length; i++) {
                const product = await Product.find({_id: orderItems[i]['item']})
                const productPrepare = product.map(item => {
                    return {
                        id: item._id,
                        title: item.title,
                        price: item.price,
                        qty: orderItems[i]['quantity']
                    }
                })
                preparedData.push(productPrepare)
            }

            let line_items_data = preparedData.map(item => {
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item[0].title,
                        },
                        unit_amount: item[0].price * 100,
                    },
                    quantity: item[0].qty
                }
            })

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items: line_items_data,
                success_url: `${process.env.SITE_URL}/catalog`,
                cancel_url: `${process.env.SITE_URL}`
            })
            res.json({url: session.url})
            // res.redirect(303, session.url)
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }

        // #swagger.tags = ['payment']
    }
}

module.exports = new PaymentController()