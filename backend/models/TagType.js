const {Schema, model} = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');


const TagType = new Schema(
    {
        title: {type: String, unique: true, required: true},
        slug: {type: String, slug: "title", unique: true, trim: true, lowercase: true, required: true},
    },
    {timestamps: {createdAt: "createdDate", updatedAt: "updatedDate"}}
);


TagType.plugin(mongoosePaginate)

module.exports = model("TagType", TagType);
