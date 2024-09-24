// const express = require("express");
// const router = express.Router();
// const IsLogedIn = require("../middlewere/IsLogedIn");

// router.get("/", function (req, res) {
//   res.render("index.ejs");

//   router.post("/post", IsLogedIn, function (req, res) {
//     res.send("shop page");
//   });
// });

const express = require("express");
const router = express.Router();
// const IsLogedIn = require("../middlewere/IsLogedIn");

// GET request for the homepage
router.get("/", function (req, res) {
  res.render("admin.ejs");
});

// // POST request for the /post route with IsLogedIn middleware
// router.get("/post", function (req, res) {
//   res.send("shop");
// });

module.exports = router;
