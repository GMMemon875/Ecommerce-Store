const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  image: Buffer,
  name: String,
  price: Number,
  discount: Number,
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
});

module.exports = mongoose.model("product", ProductSchema);
