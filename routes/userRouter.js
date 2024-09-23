const express = require("express");
const router = express.Router();
 
const { registerUser, LoginUser } = require("../Controllars/authControllars");

router.get("/", function (req, res) {
  res.send("Hello World imtiaz this is user route");
});

router.post("/register", registerUser);

router.post("/Login", LoginUser);

module.exports = router;
