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
const IsLogedIn = require("../middlewere/IsLogedIn");
const productModel = require("../modal/productModel");

// GET request for the homepage
router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index.ejs", { error });
});

// POST request for the /post route with IsLogedIn middleware
router.get("/shop", IsLogedIn, async function (req, res) {
  let products = await productModel.find();
  res.render("shop.ejs", { products });
});

router.get("/logout", IsLogedIn, async function (req, res) {});

router.get("/onwerlogin", IsLogedIn , async function (req, res) {
  let success = req.flash("success");
  let error = req.flash("error");
  res.render("onwer-login.ejs", { error, success });
});
module.exports = router;
