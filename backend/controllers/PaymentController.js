const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

class PaymentController {
    async createSession(req, res) {
        try {

            const storeItems = new Map([
                [1, {priceInCents: 10000, name: 'Learn Stripe'}],
                [2, {priceInCents: 20000, name: 'Learn Checkout'}]
            ])

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items: req.body.items.map(item => {
                    const storeItem = storeItems.get(item.id)
                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: storeItem.name
                            },
                            unit_amount: storeItem.priceInCents,
                        },
                        quantity: item.quantity
                    }
                }),
                success_url: `${process.env.SITE_URL}/catalog`,
                cancel_url: `${process.env.SITE_URL}`
            })
            res.json({url: session.url})
            // res.redirect(303, session.url)
        } catch (e) {
            console.log(e.message);
            res.status(424).json({error: "Unknown error"});
        }
    }
}

module.exports = new PaymentController()