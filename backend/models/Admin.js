const {Schema, model} = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const AdminSchema = new Schema({
    username: {type: String, required: true, minlength: 4},
    email: {type: String, unique: true, lowercase: true},
    password: {type: String, required: true, minlength: 4},
});

AdminSchema.plugin(mongoosePaginate)

module.exports = model("Admin", AdminSchema);
