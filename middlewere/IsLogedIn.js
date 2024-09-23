const jwt = require("jsonwebtoken");
const userModel = require("../modal/userModel");

module.exports.LogedIn = async function (req, res, next) {
  if (!req.cookie.token) {
    req.flash("error"), res.send("You Need To Be Login Frist");
    return res.redirect("/");
  }
  try {
    let decoded = jwt.verify(req.cookie.token, process.env.JWT_KEY);
    let userdata = await userModel
      .findOne({ email: decoded.email })
      .select("-password");
    req.user = userdata;
    next();
  } catch (err) {
    req.flash("error", "something want wrong");
  }
};
