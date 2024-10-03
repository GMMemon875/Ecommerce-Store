const express = require("express");
const router = express.Router();
const ownerModel = require("../modal/OnwerModel"); 
const OnwerModel = require("../modal/OnwerModel");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let Onwer = await OnwerModel.find();
    if (Onwer.length > 0) {
      return res.status(400).send({ message: "Owner already exists" });
    }
    let { fullname, email, password } = req.body;
    let ownerCreate = await ownerModel.create({
      fullname,
      email,
      password,
    });

    // Respond with the created owner object
    res.status(201).send(ownerCreate);
  });
}

router.get("/admin", function (req, res) {
  let success = req.flash("success");
  res.render("createProducts.ejs", { success }); //flash message is not working
});

module.exports = router;
