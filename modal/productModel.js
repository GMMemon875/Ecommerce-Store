const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  image: Buffer,
  name: String,
  price: Number,
  discount: Number,
  bgColor: String,
  textcolor: String,
});

module.exports = mongoose.model("product", ProductSchema);
