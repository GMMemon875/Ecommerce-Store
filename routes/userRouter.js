const express = require("express");
const router = express.Router();
const IslogedIn = require("../middlewere/IsLogedIn");

const {
  registerUser,
  LoginUser,
  Logout,
} = require("../Controllars/authControllars");

// router.get("/", function (req, res) {
//   res.send("Hello World imtiaz this is user route");
// });

router.post("/register", registerUser);

router.post("/Login", LoginUser);

router.get("/logout", Logout);

module.exports = router;
