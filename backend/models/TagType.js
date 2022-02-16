const {Schema, model} = require("mongoose");

const TagType = new Schema(
    {
        title: {type: String, unique: true, required: true},
        slug: {type: String, slug: "title", unique: true, trim: true, lowercase: true, required: true},
    },
    {timestamps: {createdAt: "createdDate", updatedAt: "updatedDate"}}
);

module.exports = model("TagType", TagType);
