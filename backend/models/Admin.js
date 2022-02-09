const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
  username: { type: String, required: true, minlength:4 },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 4 },
});

module.exports = model("Admin", AdminSchema);
