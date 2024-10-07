const userModel = require("../modal/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    const { fullname, email, password } = req.body;

    let findEmil = await userModel.findOne({ email: email });
    if (findEmil) {
      req.flash("Emailerror", "email Already exsist");
      return res.redirect("/");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      let userCreated = await userModel.create({
        fullname,
        email,
        password: hash,
      });

      let token = generateToken(userCreated);
      res.cookie("token", token);
      res.redirect("/shop");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
};

module.exports.LoginUser = async function (req, res) {
  let { email, password } = req.body;
  let FindEmail = await userModel.findOne({ email: email });
  if (!FindEmail) {
    req.flash("error", "Email Or Password Incoreect");
    return res.redirect("/");
  }
  bcrypt.compare(password, FindEmail.password, function (err, result) {
    if (result === true) {
      let token = generateToken(FindEmail);
      res.cookie("token", token);
      res.redirect("/shop");
    } else {
      req.flash("error", "Email Or Password Incoreect");
      res.redirect("/");
    }
  });
};

module.exports.Logout = function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
};
