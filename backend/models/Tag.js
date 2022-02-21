const {Schema, model, Types} = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');


const Tag = new Schema(
    {
        title: {type: String, required: true,},
        tagTypeId: {type: Types.ObjectId, ref: "Tag", required: true},
        slug: {type: String, required: true, lowercase: true, trim: true},
    },
    {timestamps: {createdAt: "createdDate", updatedAt: "updatedDate"}}
);

Tag.plugin(mongoosePaginate)

module.exports = model("Tag", Tag);
