const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://localhost:27017/ecomurece`)
  .then(function () {
    console.log("Connected to MongoDB");
  })
  .catch(function () {
    console.log("Error");
  });

module.exports = mongoose.connection;
