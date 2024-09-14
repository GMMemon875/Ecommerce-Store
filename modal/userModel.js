const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/ecomurece`);

const UserSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },

  isadmin: Boolean,
  order: {
    type: Array,
    default: [],
  },

  contact: Number,
  picture: String,
});

module.exports = mongoose.Model("user", UserSchema);
