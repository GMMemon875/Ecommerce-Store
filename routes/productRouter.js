const express = require("express");
const router = express.Router();
const uploads = require("../config/multer-confiq");
const productModel = require("../modal/productModel");

router.post("/create", uploads.single("image"), async function (req, res) {
  try {
    let { name, price, discount, bgcolor, textcolor, panelcolor } = req.body;
    let CreateProduct = await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      textcolor,
      panelcolor,
    });

    req.flash("success", "Product Create Succesfully"); // flash message is not working
    res.redirect("/onwer/admin");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
