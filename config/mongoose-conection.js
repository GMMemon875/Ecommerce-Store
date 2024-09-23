const mongoose = require("mongoose");
const config = require("config");

const debr = require("debug")("development:mongoose");
mongoose
  .connect(`${config.get("MONGODB_URI")}/Store`)
  .then(function () {
    debr("Connected to MongoDB");
  })
  .catch(function () {
    debr("Error");
  });

module.exports = mongoose.connection;

// ecomurece
