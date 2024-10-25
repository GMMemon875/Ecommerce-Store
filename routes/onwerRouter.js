const express = require("express");
const router = express.Router();
const OnwerModel = require("../modal/OnwerModel");
const IsLogedIn = require("../middlewere/IsLogedIn");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let Onwer = await OnwerModel.find();
    if (Onwer.length > 0) {
      req.flash("error", "Owner already exists");
      return res.redirect("/onwerlogin");
    }
    let { fullname, email, password } = req.body;
    let ownerCreate = await OnwerModel.create({
      fullname,
      email,
      password,
    });
    req.flash("success", "Owner created successfully");
    res.redirect("/onwerlogin");
  });
}

router.get("/admin", IsLogedIn, function (req, res) {
  let success = req.flash("success");
  res.render("createProducts.ejs", { success });
});

module.exports = router;
