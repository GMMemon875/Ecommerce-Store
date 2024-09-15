const mongoose = require("mongoose");

const OnwerModel = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  Product: {
    type: Array,
    default: [],
  },
  picture: String,
  gstin: String,
});

module.exports = mongoose.Model("onwer", OnwerModel);
