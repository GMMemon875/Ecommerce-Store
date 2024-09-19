const express = require("express");
const router = express.Router();
const userModel = require("../modal/userModel");

router.get("/", function (req, res) {
  res.send("Hello World imtiaz this is user route");
});

router.post("/register", async function (req, res) {
  try {
    const { fullname, email, password } = req.body;
    let userCreated = await userModel.create({
      fullname,
      email,
      password,
    });
    res.send(userCreated);
  } catch {
    console.log(err.massage);
  }
});

module.exports = router;
