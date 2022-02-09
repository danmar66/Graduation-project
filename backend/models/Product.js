const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    img: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    price: { type: Number, default: 0, required: true },
    description: { type: String, required: true, default: "", unique: true },
    dateAdded: { type: Date, default: Date.now },
    ordersCounter: { type: Number, default: 0 },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag", default: "", required: true }],
    slug: { type: String, required: true, unique: true, trim: true },
  },
  { timestamps: { createdAt: "createdDate", updatedAt: "updatedDate" } }
);

module.exports = model("Product", productSchema);
