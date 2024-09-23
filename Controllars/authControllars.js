const userModel = require("../modal/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    const { fullname, email, password } = req.body;

    let findEmil = await userModel.findOne({ email: email });
    if (findEmil) return res.send("email is already exsit");
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

module.exports.LoginUser = async function (req, res) {
  let { email, password } = req.body;
  let FindEmail = await userModel.findOne({ email: email });
  if (!FindEmail) return res.send("email is Not valid");
  bcrypt.compare(password, FindEmail.password, function (err, result) {
    if (result === true) {
      let token = generateToken(FindEmail);
      res.cookie("token", token);
      res.send("Login successfully");
    } else {
      res.send("password is not valid");
    }
  });
};
