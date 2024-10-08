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
const userModel = require("../modal/userModel");

// GET request for the homepage
router.get("/", function (req, res) {
  let Emailerror = req.flash("Emailerror");
  let error = req.flash("error");
  res.render("index.ejs", { error, Emailerror });
});

// POST request for the /post route with IsLogedIn middleware
router.get("/shop", IsLogedIn, async function (req, res) {
  let products = await productModel.find();
  let success = req.flash("success");
  res.render("shop.ejs", { products, success });
});

router.get("/cart", IsLogedIn, async function (req, res) {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("cart");
  res.render("cart.ejs", { user });
});

router.get("/addtocart/:productid", IsLogedIn, async function (req, res) {
  let user = await userModel.findOne({ email: req.user.email });
  user.cart.push(req.params.productid);
  await user.save();
  req.flash("success", "Add to cart");
  res.redirect("/shop");
});

router.get("/logout", IsLogedIn, async function (req, res) {});

router.get("/onwerlogin", IsLogedIn, async function (req, res) {
  let success = req.flash("success");
  let error = req.flash("error");
  res.render("onwer-login.ejs", { error, success });
});
module.exports = router;
