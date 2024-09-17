const mongoose = require("mongoose");

const OnwerSchema = mongoose.Schema({
  name: {
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

module.exports = mongoose.model("onwer", OnwerSchema);
