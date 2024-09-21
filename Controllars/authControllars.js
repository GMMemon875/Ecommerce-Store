const userModel = require("../modal/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    const { fullname, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    let userCreated = await userModel.create({
      fullname,
      email,
      password: hash,
    });

    let token = generateToken(userCreated);
    res.cookie("token", token);
    res.send("User created successfully");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};
