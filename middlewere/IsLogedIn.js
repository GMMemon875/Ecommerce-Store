// const jwt = require("jsonwebtoken");
// const userModel = require("../modal/userModel");

// module.exports.LogedIn = async function (req, res, next) {
//   if (!req.cookie.token) {
//     req.flash("error"), res.send("You Need To Be Login Frist");
//     return res.redirect("/");
//   }
//   try {
//     let decoded = jwt.verify(req.cookie.token, process.env.JWT_KEY);
//     let userdata = await userModel
//       .findOne({ email: decoded.email })
//       .select("-password");
//     req.user = userdata;
//     next();
//   } catch (err) {
//     req.flash("error", "something want wrong");
//   }
// };




const jwt = require("jsonwebtoken");
const userModel = require("../modal/userModel");

module.exports.LogedIn = async function (req, res, next) {
  // Correct req.cookies instead of req.cookie
  if (!req.cookies.token) {
    req.flash("error", "You Need To Be Logged In First");
    return res.redirect("/");
  }
  try {
    // Correct req.cookies instead of req.cookie
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);

    // Fetch user from DB using the email from decoded token
    let userdata = await userModel
      .findOne({ email: decoded.email })
      .select("-password");

    // Attach user data to req object
    req.user = userdata;

    // Proceed to the next middleware
    next();
  } catch (err) {
    req.flash("error", "Something went wrong");
    return res.redirect("/"); // Return a response in case of error
  }
};
