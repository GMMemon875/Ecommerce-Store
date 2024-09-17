const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  discount: Number,
  bgColor: String,
  textcolor: String,
});

module.exports = mongoose.modelodel("product", ProductSchema);
