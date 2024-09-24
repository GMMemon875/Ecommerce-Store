const express = require("express");
const router = express.Router();

const {
  registerUser,
  LoginUser,
  LogOutUser,
} = require("../Controllars/authControllars");

// router.get("/", function (req, res) {
//   res.send("Hello World imtiaz this is user route");
// });

router.post("/register", registerUser);

router.post("/Login", LoginUser);

router.post("/Logout", LogOutUser);

module.exports = router;
