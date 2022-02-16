const {Schema, model} = require("mongoose");

const orderSchema = new Schema({
    orderDate: {type: Date, default: Date.now},
    productItems: [
        {
            item: {type: Schema.Types.ObjectId, ref: "Product", required: true},
            quantity: {type: Number, default: 1},
        },
    ],
    deliveryAddress: {type: String, required: true},
    customerName: {type: String, required: true},
    customerPhone: {type: String, required: true},
    customerEmail: {type: String, required: true},
    totalPrice: {type: Number, required: true},
    checkPayment: {type: Boolean, default: false},
});

module.exports = model("Order", orderSchema);
