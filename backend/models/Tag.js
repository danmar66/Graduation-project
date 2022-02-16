const {Schema, model, Types} = require("mongoose");

const Tag = new Schema(
    {
        title: {type: String, required: true,},
        tagTypeId: {type: Types.ObjectId, ref: "Tag", required: true},
        slug: {type: String, required: true, lowercase: true, trim: true},
    },
    {timestamps: {createdAt: "createdDate", updatedAt: "updatedDate"}}
);

module.exports = model("Tag", Tag);
