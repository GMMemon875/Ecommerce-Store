const mongoose = require("mongoose");

const OnwerSchema = mongoose.Schema({
  fullname: {
    type: String,
  },
  email: String,
  password: String,
  Product: {
    type: Array,
    default: [],
  },
  cart: {
    type: Array,
    default: [],
  },
  picture: String,
  gstin: String,
});

module.exports = mongoose.model("onwer", OnwerSchema);

// const mongoose = require("mongoose");

// const OwnerSchema = mongoose.Schema({
//   fullname: {
//     type: String,
//     required: true, // Ensure that fullname is mandatory
//     minLength: 3,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true, // Ensure that email is mandatory
//     unique: true, // Ensure email is unique
//     trim: true, // Remove spaces before and after the email
//     match: [/.+\@.+\..+/, "Please enter a valid email"], // Email validation
//   },
//   password: {
//     type: String,
//     required: true, // Ensure that password is mandatory
//     minLength: 6, // Enforce a minimum password length
//   },
//   products: {
//     // Changed to plural for clarity
//     type: Array,
//     default: [], // Set default to an empty array
//   },
//   picture: {
//     type: String,
//     default: "", // You can add a default value if necessary
//   },
//   gstin: {
//     type: String,
//     default: "", // GSTIN might not always be available, hence default empty
//   },
// });

// module.exports = mongoose.model("Owner", OwnerSchema); // Changed to correct spelling "Owner"
